(ns lib.macro)

;(m/<- [a b] [async 1 2]
;  (print a b)
;  (print "m3"))
(defmacro <- [vars name & body]
  (let [callback# `(fn ~vars ~@body)]
    (reverse (conj (reverse name) callback#))))


;(m/<-2 [a b] (2 1 async)
;  (print a b)
;  (print "m4"))
(defmacro <-2 [vars name & body]
  (let [callback# `(fn ~vars ~@body)]
    (reverse (conj name callback#))))
