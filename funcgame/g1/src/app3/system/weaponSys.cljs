(ns app3.system.weaponSys
  (:require-macros [app3.macros :as m])
  (:require [app3.interface.weapon]
            [app3.weapon.gun :refer [gun]]
            [app3.weapon.meleeGun :refer [meleeGun]]))

(m/defPlayerCollide playerCollideWeapon :weapon 
  (fn [plyr weapon]
    (-> plyr
        (assoc :useWeapon weapon)
        (assoc :action (clojure.set/difference (:action plyr) #{:seekWeapon})))))


(m/defsys tickWeapon
  :update []
  (m/lete [plyrs [:player]
           enemies [:enemy]]
    (let [hasWeapon (filter :useWeapon (concat plyrs enemies))
          next (map (fn [e] (update e :useWeapon app3.interface.weapon/tick)) hasWeapon)]
      (update model :entities (partial replace (zipmap hasWeapon next))))))


(m/defsys fireBullet
  :fire [plyr weapon isFireSuccess target]
  (let [bullets (if isFireSuccess
                  (app3.interface.weapon/createBullet weapon plyr target)
                  [])]
    (update model :entities (partial concat bullets))))


(m/defsys spawnWeapon
  :spawn [what]
  (if (= :weapon what)
    (m/lete [weapons [:weapon]]
      (if (< (count weapons) 2)
        (let [newW (-> (rand)
                       (< 0.5)
                       (if gun meleeGun))]
          (update model :entities (partial cons (merge newW {:position [(rand-int 600) (rand-int 600)]}))))
        model))
    model))