(ns app3.system.basic
  (:require [app3.weapon.fist])
  (:require-macros [app3.macros :as m]))


(m/defsys moveSystem
  :update []
  (m/docom {_ :position vel :velocity}
           (update entity :position (partial map + vel))))


(defn boundPosition [model entity]
  (m/docom {[x y] :position}
           (merge entity {:position [(-> x (max 0) (min 600)) (-> y (max 0) (min 600))]})))


(defn resetPlayerVelocity [model entity]
  (m/docom {_ :player _2 :velocity}
           (merge entity {:velocity [0 0]})))


(defn resetEnemyVelocity [model entity]
  (m/docom {_ :enemy _2 :velocity}
           (merge entity {:velocity [0 0]})))


(m/defsys moveCostSystem
  :update []
  (m/docom {vel :velocity hp :hp}
           (if (not (= [0 0] vel))
             (let [len (app3.tool/length vel)]
               (app3.emitter/send [:moveCost entity len] nil)
               (merge entity {:hp (max 0 (- hp (/ len 10)))}))
             entity)))


(m/defsys dieSystem
  :update []
  (m/docom {hp :hp}
           (if (<= hp 0)
             (do 
               (app3.emitter/send [:died entity] nil)
               (merge entity {:hp 100 :useWeapon app3.weapon.fist/fist}))
             entity)))


(m/defsys roundSystem
  :update []
  (update model :ticks inc)
  
  :died [entity]
  (let [isPlayer (:player entity)
        tag (if isPlayer :enemyWin :playerWin)
        plyr (first (filter :player (:entities model)))
        enemy (first (filter :enemy (:entities model)))
        nextPlyr (merge plyr {:hp 100 :position [50 300]})
        nextEnemy (merge enemy {:hp 100 :position [550 300]})]
    (-> model
        (update :ticks (constantly 0))
        (update tag inc)
        (update :round inc)
        (update :entities (partial replace {plyr nextPlyr enemy nextEnemy})))))