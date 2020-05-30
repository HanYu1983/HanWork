(ns app.t8.main
  (:require [clojure.core.async :as a]
            [reagent.core :as r])
  (:require [app.t8.qlearning :as q]
            [app.t8.board :as b]))

(defn train [qmodel n]
  (loop [ctx {:brain qmodel
              :board b/board
              :activePlayer :o
              :win 0
              :draw 0
              :lose 0
              :self {:state nil :action nil}}
         n n]
    (if (zero? n)
      (do
        (println (select-keys ctx [:win :draw :lose]))
        (:brain ctx))
      (let [{:keys [brain board activePlayer win draw lose self]} ctx
            possibleActions (b/possibleActions board)
            isSelf (= activePlayer :o)]
        (if (zero? (count possibleActions))
          (recur (merge ctx {:board b/board
                             :activePlayer :o
                             :draw (inc draw)
                             :self {:action nil :state nil}})
                 (dec n))
          (if isSelf
            (let [isWin (b/checkWin board :o)
                  isLose (if (not isWin)
                           (b/checkWin board :x)
                           false)
                  reward (cond
                           isWin 1
                           isLose 0
                           :else 0)
                  brain (if (and (:state self) (:action self))
                          (q/learn brain (:state self) (:action self) reward board)
                          brain)]
              (if (or isWin isLose)
                (recur (merge ctx {:brain brain
                                   :board b/board
                                   :win (if isWin (inc win) win)
                                   :lose (if isLose (inc lose) lose)
                                   :activePlayer :o
                                   :self {:action nil :state nil}})
                       (dec n))
                (let [selectAction (q/selectAction brain board possibleActions)
                      nextBoard (update-in board selectAction (constantly activePlayer))]
                  (recur (merge ctx {:brain brain
                                     :board nextBoard
                                     :activePlayer (if (= :o activePlayer) :x :o)
                                     :self (merge self {:state board
                                                        :action selectAction})})
                         (dec n)))))

            (let [selectAction (nth possibleActions (rand-int (count possibleActions)))
                  nextBoard (update-in board selectAction (constantly activePlayer))]
              (recur (merge ctx {:brain brain
                                 :board nextBoard
                                 :activePlayer (if (= :o activePlayer) :x :o)})
                     (dec n)))))))))

(defn background-train [atomModel]
  (a/go
    (loop [qmodel @atomModel]
      (a/<! (a/timeout 1000))
      (let [qmodel (train qmodel 75)
            _ (reset! atomModel qmodel)]
        (recur qmodel)))))

(defn background-test [atomModel]
  (a/go
    (loop []
      (a/<! (a/timeout 1000))
      (let [qmodel @atomModel
            board [[:o :o nil] [:x :x nil] [nil nil nil]]
            possibleActions (b/possibleActions board)]
        (print (for [;[state actions] (get-in qmodel [:qtable])
              [action value] (get-in qmodel [:qtable [[nil nil nil] [nil nil nil] [nil nil nil]]])]
          (println action value)))
        (println "best:" (q/bestAction qmodel board possibleActions))
        
        (recur)))))

(defn render-board [atomModel]
   ; 和訓練中的頭腦對下的互動介面
  (let [state (r/atom b/board)
        active (r/atom :enemy)
        result (r/atom nil)]
      ; 電腦行為
      ; 等待玩家下子後下子
    (a/go-loop []
      (condp = @active
        :enemy
        (let [brain @atomModel
              actions (b/possibleActions @state)
              bestAction (q/bestAction brain @state actions)
              _ (reset! result (get-in brain [:qtable @state]))]
          (if (> (count actions) 0)
              ; 還有下子空間, 下子並切換玩家
            (do (swap! state (fn [origin]
                               (update-in origin bestAction (constantly :o))))
                (reset! active (if (= :player @active) :enemy :player))
                (recur))
              ; 沒有下子空間, 等待
            (do
              (a/<! (a/timeout 1000))
              (recur))))

          ; 閒置時更新訓練資料的顯示
        (do
          (a/<! (a/timeout 300))
          (recur))))

      ; 盤面
    (defn drawPlayground []
      (let [s @state
            ac @active
            r @result
            drawValue (fn [y x]
                        (let [v (get-in s [y x])]
                          (condp = v
                            :o "O"
                            :x "X"
                            [:button
                             {:on-click #(do
                                           (swap! state (fn [origin]
                                                          (update-in origin [y x] (constantly :x))))
                                           (reset! active (if (= :player @active) :enemy :player)))}
                             "O"])))]
        [:div
         [:button {:on-click #(do (reset! state b/board)
                                  (reset! active :enemy))} "clear"]
         [:div (str s)]
         [:div (str "active " ac)]
         [:div (str "actions " r)]
         [:table {:border 1}
          [:tbody
           (for [y (range 3)]
             ^{:key (str y)}
             [:tr
              [:td (drawValue y 0)]
              [:td (drawValue y 1)]
              [:td (drawValue y 2)]])]]]))

    (r/render [drawPlayground]
              (.getElementById js/document "playground"))))

(defn main []
  (a/go
    (let [model (atom (merge q/model
                             {:learningRate 0.7
                              :discountFactor 1}))
          _ (background-train model)
          ;_ (background-test model)
          _ (render-board model)])))


(main)