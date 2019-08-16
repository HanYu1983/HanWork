(ns app3.system.healingSys
  (:require-macros [app3.macros :as m]))

(m/defPlayerCollide playerCollideHealing :healing 
  (fn [plyr other] 
    (merge plyr {:hp (min 100 (+ 50 (:hp plyr)))})))


(m/defsys spawnHealing
  :spawn [what]
  (if (= :healing what)
    (m/lete [healings [:healing]]
      (if (< (count healings) 3)
        (update model :entities (partial cons {:position [(rand-int 600) (rand-int 600)] :size [4 4] :healing 0}))
        model))
    model))