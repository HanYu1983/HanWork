(ns app3.emitter)

(def inputOb (js/rxjs.Subject.))
(defn send [evt a]
  ;use settimeout to schedule event
  (js/setTimeout
    (fn [] (.next inputOb evt))
    1)
  a)
