(ns app2.main
  (:require [app2.brain :as b]
            [clojure.core.async :as a]
            [reagent.core :as r])
  (:require-macros [clojure.core.async :as am]))


(def board (->>
            (repeat 3 nil)
            (into [])
            (repeat 3)
            (into [])))

(def lines
  (let [hs (for [x (range 3)] [[0 x] [1 x] [2 x]])
        vs (for [y (range 3)] [[y 0] [y 1] [y 2]])
        x1  (for [x (range 3) y (range 3) :when (= x y)] [y x])
        x2 (for [x (range 3) y (range 3) :when (= 2 (+ x y))] [y x])]
    (concat hs vs [x1] [x2])))

(defn checkWin [board player]
  (->> lines
       (map (fn [line]
              (every?
               (partial = player)
               (map (fn [pos]
                      (get-in board pos))
                    line))))
       (some true?)))

(defn possibleActions [board]
  (for [x (range 3) y (range 3) :when (->> (get-in board [y x]) nil?)]
    [y x]))

(defn log [a]
  (print a)
  a)

(defn main []
  
  (let [userInput (a/chan)
        data (atom nil)]
    
    ; 訓練頭腦
    (am/go-loop [model {:players {:player :ai
                                  :enemy :ai}
                        :active :player
                        :playerInfos {:player {:brain b/brain}
                                      :enemy {:brain b/brain}}
                        :board board
                        :result {:player 0 :enemy 0 :draw 0}}]
      (let [currPlayerType (get-in model [:players (:active model)])]
        (a/<! (a/timeout 10))
        (condp = currPlayerType
          :player
          (let [input (a/<! userInput)]
            (recur model))

          :ai
          (let [activePlayer (:active model)
                oppositePlayer (if (= activePlayer :player) :enemy :player)
                state (:board model)
                actions (possibleActions state)]
            (if (= 0 (count actions))
              ; 平手
              (recur (-> model
                         (merge {:board board
                                 :active oppositePlayer})
                         (update-in [:result :draw] inc)
                         (update-in [:playerInfos :player :brain] b/clearState)
                         (update-in [:playerInfos :enemy :brain] b/clearState)))
              (let [brain (get-in model [:playerInfos activePlayer :brain])
                    action (b/selectAction brain state actions)]
                (if (get-in state action)
                  (js/throw "位置已被下過. 這裡不該被執行到")
                  (let [nextBrain (b/updateQ brain state action actions)
                        nextState (update-in state action (constantly activePlayer))
                        isWin (checkWin nextState activePlayer)]
                    (if isWin
                      ; 主動玩家勝
                      (let [; 加分
                            nextBrain (-> nextBrain
                                          (b/updateR (partial + 10))
                                          (b/updateQ state action actions)
                                          (b/clearState))
                            ; 對手減分
                            oppositeBrain (-> (get-in model [:playerInfos oppositePlayer :brain])
                                              (b/updateR (partial + (- 100)))
                                              (b/updateQ nil nil actions)
                                              (b/clearState))
                            ; 清場
                            nextState board]
                        ; 記錄訓練結果, 這個結果用來展示
                        (reset! data model)
                        (recur (-> model
                                   (merge {:board nextState
                                           :active oppositePlayer})
                                   (update-in [:playerInfos activePlayer :brain] (constantly nextBrain))
                                   (update-in [:playerInfos oppositePlayer :brain] (constantly oppositeBrain))
                                   (update-in [:result activePlayer] inc))))
                      ; 還沒分出勝負
                      (let [; 加分
                            nextBrain (-> nextBrain
                                          (b/updateR (partial + 1)))]
                        (recur (-> model
                                   (merge {:board nextState
                                           :active oppositePlayer})
                                   (update-in [:playerInfos activePlayer :brain] (constantly nextBrain)))))))))))

          (recur model))))

    ; 和訓練中的頭腦對下的互動介面
    (let [state (r/atom board)
          active (r/atom :player)
          result (r/atom nil)]
      ; 電腦行為
      ; 等待玩家下子後下子
      (am/go-loop []
        (condp = @active
          :enemy
          (let [model @data
                brain (get-in model [:playerInfos :enemy :brain])
                actions (possibleActions @state)
                bestAction (b/bestAction brain @state actions)]
            (if (> (count actions) 0)
              ; 還有下子空間, 下子並切換玩家
              (do (swap! state (fn [origin]
                                 (update-in origin bestAction (constantly :enemy))))
                  (reset! active (if (= :player @active) :enemy :player))
                  (recur))
              ; 沒有下子空間, 等待
              (do
                (a/<! (a/timeout 1000))
                (recur))))
          
          ; 閒置時更新訓練資料的顯示
          (do
            (a/<! (a/timeout 1000))
            (reset! result (:result @data))
            (recur))))

      ; 盤面
      (defn drawPlayground []
        (let [s @state
              ac @active
              r @result
              drawValue (fn [y x]
                          (let [v (get-in s [y x])]
                            (condp = v
                              :player "O"
                              :enemy "X"
                              [:button
                               {:on-click #(do
                                             (swap! state (fn [origin]
                                                            (update-in origin [y x] (constantly :player))))
                                             (reset! active (if (= :player @active) :enemy :player)))}
                               "O"])))]
          [:div
           [:button {:on-click #(reset! state board)} "clear"]
           [:div (str s)]
           [:div (str "active " ac)]
           [:div (str r)]
           [:table {:border 1}
            [:tbody
             (condp = ac
               :player
               (for [y (range 3)]
                 ^{:key (str y)}
                 [:tr
                  [:td (drawValue y 0)]
                  [:td (drawValue y 1)]
                  [:td (drawValue y 2)]])

               (for [y (range 3)]
                 ^{:key (str y)}
                 [:tr
                  [:td (drawValue y 0)]
                  [:td (drawValue y 1)]
                  [:td (drawValue y 2)]]))]]]))

      (r/render [drawPlayground]
                (.getElementById js/document "playground")))

    ; 頭腦的訓練結果
    (let [tmodel (r/atom false)
          table (r/atom {})]

      ; 每秒同步資料
      (am/go-loop []
        (let [model @data
              brain (get-in model [:playerInfos :enemy :brain])]
          (reset! table (:q brain))
          (<! (a/timeout 1000))
          (recur)))

      (defn drawQtable []
        (let [tm @tmodel
              t @table]
          (if tm
            [:div
             [:button {:on-click #(swap! tmodel not)} "close"]
             [:table {:border 1}
              [:tbody
               (for [[state sub] t
                     [action value] sub]
                 ^{:key (str state " " action)}
                 [:tr
                  [:td (str state)]
                  [:td (str action)]
                  [:td {:style {:background-color (if (< value 0)
                                                    "red"
                                                    (if (> value 5)
                                                      "green"
                                                      "white"))}} (str value)]])]]]
            [:button {:on-click #(swap! tmodel not)} "open"])))

      (defn mountit []
        (r/render [drawQtable]
                  (.getElementById js/document "qtable")))

      (mountit))))