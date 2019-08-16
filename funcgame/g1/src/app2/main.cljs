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
    (am/go-loop [model {:players {:player :ai
                                  :enemy :ai}
                        :active :player
                        :playerInfos {:player {:brain b/brain}
                                      :enemy {:brain b/brain}}
                        :board board
                        :result {:player 0 :enemy 0 :draw 0}}]
      (let [currPlayerType (get-in model [:players (:active model)])]
        (a/<! (a/timeout 10))
        ;(print model)
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
              ;draw
              (recur (-> model
                         (merge {:board board
                                 :active oppositePlayer})
                         (update-in [:result :draw] inc)
                         (update-in [:playerInfos :player :brain] b/clearState)
                         (update-in [:playerInfos :enemy :brain] b/clearState)))
              (let [brain (get-in model [:playerInfos activePlayer :brain])
                    action (b/selectAction brain state actions)]
                (if (get-in state action)
                  (js/throw "xxxx")
                  (let [nextBrain (b/updateQ brain state action actions)
                        nextState (update-in state action (constantly activePlayer))
                        isWin (checkWin nextState activePlayer)]
                    (if isWin
                      (let [nextBrain (-> nextBrain
                                          (b/updateR (partial + 10))
                                          (b/updateQ state action actions)
                                          (b/clearState))
                            oppositeBrain (-> (get-in model [:playerInfos oppositePlayer :brain])
                                              (b/updateR (partial + (- 100)))
                                              (b/updateQ nil nil actions)
                                              (b/clearState))
                            nextState board]
                        (reset! data model)
                        (recur (-> model
                                   (merge {:board nextState
                                           :active oppositePlayer})
                                   (update-in [:playerInfos activePlayer :brain] (constantly nextBrain))
                                   (update-in [:playerInfos oppositePlayer :brain] (constantly oppositeBrain))
                                   (update-in [:result activePlayer] inc))))
                      (let [nextBrain (-> nextBrain
                                          (b/updateR (partial + 1)))]
                        (recur (-> model
                                   (merge {:board nextState
                                           :active oppositePlayer})
                                   (update-in [:playerInfos activePlayer :brain] (constantly nextBrain)))))))))))

          (recur model))))

    (let [state (r/atom board)
          active (r/atom :player)
          result (r/atom nil)]
      (am/go-loop []
        (condp = @active
          :enemy
          (let [model @data
                brain (get-in model [:playerInfos :enemy :brain])
                actions (possibleActions @state)
                bestAction (b/bestAction brain @state actions)]
            (if (> (count actions) 0)
              (do (swap! state (fn [origin]
                                 (update-in origin bestAction (constantly :enemy))))
                  (reset! active (if (= :player @active) :enemy :player))
                  (recur))
              (do 
                (a/<! (a/timeout 1000))
                (recur))))

          (do
            (a/<! (a/timeout 1000))
            (reset! result (:result @data))
            (recur))))

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
                                             (reset! active (if (= :player @active) :enemy :player))
                                             )}
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

    ; 畫qtable
    (let [tmodel (r/atom false)
          table (r/atom {})]

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

      (mountit))
    
    ))