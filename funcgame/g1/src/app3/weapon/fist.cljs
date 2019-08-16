(ns app3.weapon.fist
  (:require [app3.interface.weapon]))

(def fist {:id nil :weapon :fist :hot 0 :bulletCount 10 :position [0 0]})

(defn createBullet [self plyr target] 
  (let [dir (app3.tool/seek (:position plyr) (:position target))
        vel (app3.tool/makeLength 10 dir)]
    [{:position (:position plyr)
      :velocity vel
      :size [5 5]
      :from plyr
      :bullet 0
      :flyLength 80}]))


(defmethod app3.interface.weapon/createBullet :fist [self plyr target]
  (createBullet self plyr target))
