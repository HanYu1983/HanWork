(ns app3.interface.weapon)

(defmulti fire (fn [w] (:weapon w)))
(defmulti bulletCount (fn [w] (:weapon w)))
(defmulti tick (fn [w] (:weapon w)))
(defmulti createBullet (fn [w] (:weapon w)))
