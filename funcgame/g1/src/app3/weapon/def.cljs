(ns app3.weapon.def
  (:require [app3.interface.weapon]))

(defn fire [self]
  (if (<= (:bulletCount self) 0)
    self
    (if (> (:hot self) 0)
      self
      (merge self
          {:bulletCount (dec (:bulletCount self))
           :hot 10}))))

(defn tick [self]
  (update self :hot (fn [origin]
                      (max (dec origin) 0))))

(defn bulletCount [self]
  (:bulletCount self))


(defmethod app3.interface.weapon/fire :default [self]
  (fire self))

(defmethod app3.interface.weapon/tick :default [self]
  (tick self))

(defmethod app3.interface.weapon/bulletCount :default [self]
  (bulletCount self))
