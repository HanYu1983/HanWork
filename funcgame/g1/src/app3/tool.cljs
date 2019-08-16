(ns app3.tool)

(defn comduce [fns]
  (fn [a c]
    (reduce (fn [a f] (f a c)) a fns)))

(defn checkProperty [coms self]
  (every? #(% self) coms))

(defn seek [v1 v2]
  (map - v2 v1))

(defn length [dir]
  (->> (map * dir dir)
       (apply +)
       (js/Math.sqrt)))

(defn makeLength [l dir]
  (let [oriLen (length dir)
        nor (map / dir [oriLen oriLen])]
    (map * nor [l l])))


(defn checkCollide [v1 v2 len]
  (-> (seek v1 v2)
      length
      (< len)))

