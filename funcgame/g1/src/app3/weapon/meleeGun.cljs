(ns app3.weapon.meleeGun
  (:require [app3.interface.weapon]))


(def meleeGun {:id nil :weapon :meleeGun :hot 0 :bulletCount 10 :position [0 0]})

(defn rotateDir [radians dir]
  (let [dirV (js/Vector.create (js/Array. (first dir) (second dir) 0))
        rotV (.rotate dirV radians js/Line.Z)]
    [(aget rotV.elements 0) (aget rotV.elements 1)]))

(defn createBullet [self plyr target] 
  (let [dir (app3.tool/seek (:position plyr) (:position target))]
    (for [a (take 5 (iterate (partial + 0.2) -0.4))]
      {:position (:position plyr)
       :velocity (app3.tool/makeLength 15 (rotateDir a dir))
       :size [5 5]
       :from plyr
       :bullet 0
       :flyLength 100})))

(defmethod app3.interface.weapon/createBullet :meleeGun [self plyr target]
  (createBullet self plyr target))
