(ns app3.system.input
  (:require-macros [app3.macros :as m]))

(m/defsys playerController
  :keydown [key]
  (m/docom {player :player}
    (let [action (-> (zipmap ["w" "a" "s" "d" " "] [:up :left :down :right :fire])
                     (get key))]
      (update entity :action (partial clojure.set/union #{action}))))
  
  :keyup [key]
  (m/docom {player :player}
    (let [action (-> (zipmap ["w" "a" "s" "d" " "] [:up :left :down :right :fire])
                     (get key))]
      (update entity :action (fn [origin] (clojure.set/difference origin #{action}))))))
