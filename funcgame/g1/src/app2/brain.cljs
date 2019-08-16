(ns app2.brain)

(def brain {:q nil :r 0 :lastState nil :lastAction nil})

(defn clearState [self]
  (merge self {:lastState nil :lastAction nil}))

(defn updateR [self f]
  (update self :r f))

(defn updateQ [{:keys [lastState lastAction q] :as self} state action actions]
  (if (and lastState lastAction)
    (->
     (update-in self [:q lastState lastAction]
                (fn [oldQ]
                  (let [learningRate 0.5
                        discountFactor 0.9
                        reward (get self :r)
                        maxV (->> actions
                                  (map (partial vector state))
                                  (map (partial get-in q))
                                  (apply max))
                        newQ (+ reward (* discountFactor maxV))
                        nextQ (+ (* (- 1 learningRate) oldQ) (* learningRate newQ))]
                    nextQ)))
     (merge {:lastState state
             :lastAction action
             :lastTime (-> (js/Date.) .getTime)
             :r 0}))
    (merge self {:lastState state :lastAction action})))

(defn actionR [self]
  (:r self))

(defn actionQ [self state actions]
  (let [scores (replace {nil 0}
                        (map #(get-in self [:q state %])
                             actions))]
    scores))

(defn log [a]
  (print a)
  a)

(defn selectAction [self state actions]
  (let [scores (replace {nil 0} (map #(get-in self [:q state %]) actions))
        scoresAddMin (map (comp inc (partial + (- (apply min scores)))) scores)
        total (apply + scoresAddMin)
        scoreNormalize (map (fn [o]
                              (-> o
                                  (* 100)
                                  (/ total)
                                  int))
                            scoresAddMin)
        selectIdx (rand-int (apply + scoreNormalize))
        action (->> (map vector actions scoreNormalize)
                    (mapcat (fn [[action score]]
                              (repeat score action)))
                    (drop selectIdx)
                    first)]
    action))

(defn bestAction [self state actions]
  (let [scores (replace {nil 0} (map #(get-in self [:q state %]) actions))
        best (->> (map vector actions scores)
                  (sort #(compare (last %2) (last %1)))
                  ffirst)]
    best))