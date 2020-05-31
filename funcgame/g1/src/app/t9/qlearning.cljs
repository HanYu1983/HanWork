(ns app.t9.qlearning
  (:require [clojure.spec.alpha :as s]))

(s/def ::state identity)
(s/def ::action identity)
(s/def ::qvalue (s/and number? (comp not js/isNaN)))
(s/def ::qtable (s/map-of ::state (s/map-of ::action ::qvalue)))
(s/def ::model (s/keys :req-un [::qtable ::learningRate ::discountFactor]))

(def model {:qtable {}
            :learningRate 1
            :discountFactor 1})

(s/explain ::model model)

(defn learn [{:keys [learningRate discountFactor] :as ctx} state action reward newState]
  {:pre [(s/valid? ::model ctx) (s/valid? ::state newState)]
   :post [(s/valid? ::model %)]}
  (update-in ctx [:qtable state action]
             (fn [oldQ]
               (let [oldQ (or oldQ 0)
                     maxV  (or (->> (get-in ctx [:qtable newState]) vals (apply max))
                               0)
                     newQ (+ reward (* discountFactor maxV))
                     nextQ (+ (* (- 1 learningRate) oldQ) (* learningRate newQ))]
                 nextQ))))

(defn selectAction [ctx state actions]
  (let [scores (map #(get-in ctx [:qtable state %]) actions)
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
  (let [scores (map #(get-in self [:qtable state %]) actions)
        best (->> (zipmap actions scores)
                  (sort #(compare (second %2) (second %1)))
                  ffirst)]
    best))

(defn test-it []
  (let [state [0 0 0]
        action 1
        model (merge model {:state state
                            :action action})
        new-state (update state action (constantly 1))
        model (learn model state action 1 new-state)
        _ (print model)
        state new-state
        action (selectAction model state [0 2])
        _ (print action)
        new-state (update state action (constantly 1))
        model (learn model state action -1 new-state)
        _ (print model)
        ]))
