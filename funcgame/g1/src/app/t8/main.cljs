(ns app.t8.main
  (:require [clojure.core.async :as a])
  (:require [app.t8.qlearning :as q]
            [app.t8.board :as b]))

(defn train [qmodel n]
  (a/go
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
                    isLose (b/checkWin board :x)
                    reward (cond
                             isWin 10
                             isLose -10
                             :else 1)
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
                       (dec n))))))))))

(defn background-train [atomModel]
  (a/go
    (loop [qmodel q/model]
      (a/<! (a/timeout 100))
      (let [qmodel (a/<! (train qmodel 100))]
        (reset! atomModel qmodel)
        (comment (for [[state actions] (get-in qmodel [:qtable])
                       [action value] actions]
                   (println state action value)))
        (recur qmodel)))))

(defn background-test [atomModel]
  (a/go
    (loop []
      (a/<! (a/timeout 1000))
      (let [qmodel @atomModel
            board [[:o :o nil] [:x :x nil] [nil nil nil]]
            possibleActions (b/possibleActions board)]
        (println "best:" (q/bestAction qmodel board possibleActions))
        (recur)))))

(defn main []
  (a/go
    (let [model (atom q/model)
          _ (background-train model)
          _ (background-test model)])))


(main)