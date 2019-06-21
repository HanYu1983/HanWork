(ns app.t7.tool)

(defn checkProperty [self coms]
  (->>
       (map #(% self) coms)
       (every? (comp not nil?))))
