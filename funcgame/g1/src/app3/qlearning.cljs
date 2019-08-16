(ns app3.qlearning
  (:require-macros [app3.qlearning :as m]))

(def states (m/states))

(def actions
  (for [move [:normal :attack :evade :findWeapon :findHealing]
        hand [:normal :attack]]
    [move hand]))

(def randomQ
  (zipmap states (repeatedly (fn [] (zipmap actions (repeatedly #(rand-int 100)))))))

(def zeroQ
  (zipmap states (repeat (zipmap actions (repeat 0)))))

(def qtable {:lastState nil :lastAction nil :q zeroQ :r 0 :lastTime 0})

(defn updateR [self f]
  (update self :r f))

(defn updateQ [{:keys [lastState lastAction q] :as self} state action]
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

(defn actionQ [self]
  (let [scores (replace {nil 0}
                        (map #(get-in self [:q (:lastState self) %])
                             actions))]
    scores))

(defn selectAction [self state]
  (let [scores (replace {nil 0} (map #(get-in self [:q state %]) actions))
        scoresAddMin (map (comp inc (partial + (- (apply min scores)))) scores)
        total (apply + scoresAddMin)
        scoreNormalize (map (fn [o]
                              (-> o
                                  (* 100)
                                  (/ total)
                                  int))
                            scoresAddMin)
        selectIdx (rand-int 100)
        action (->> (map vector actions scoreNormalize)
                    (mapcat (fn [[action score]]
                              (repeat score action)))
                    (drop selectIdx)
                    first)]
    action))

(defn bestAction [self]
  (let [scores (replace {nil 0} (map #(get-in self [:q (:lastState self) %]) actions))
        best (->> (map vector actions scores)
                  (sort #(compare (last %2) (last %1)))
                  ffirst)]
    best))

(defn mapState [player enemy]
  {:hp
   (cond
     (< (:hp player) 20) :low
     (> (:hp player) 80) :high
     true :mid)

   :weapon (get-in player [:useWeapon :weapon])

   :bulletCount
   (cond
     (< (get-in player [:useWeapon :bulletCount]) 2) :low
     (> (get-in player [:useWeapon :bulletCount]) 8) :high
     true :mid)

   :enemyHp
   (cond
     (< (:hp enemy) 20) :low
     (> (:hp enemy) 80) :high
     true :mid)

   :enemyWeapon (get-in enemy [:useWeapon :weapon])

   :enemyBulletCount
   (cond
     (< (get-in enemy [:useWeapon :bulletCount]) 2) :low
     (> (get-in enemy [:useWeapon :bulletCount]) 8) :high
     true :mid)

   :distance
   (let [dis (app3.tool/length (map - (:position player) (:position enemy)))]
     (cond
       (< dis 80) :low
       (> dis 400) :high
       true :mid))})

