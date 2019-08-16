(ns app3.system.debug
  (:require-macros [app3.macros :as m]))

(defn logSystem [model [evt & args]]
  (if (not (or (= evt :update)
               (= evt :fire)
               (= evt :keydown)
               (= evt :keyup)))
    (do 
      (print evt)
      (comment (print evt args))
      (comment (print model))
      model)
    model))
