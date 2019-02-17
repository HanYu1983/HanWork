(ns app.app1)

(defmacro <- [vars expr & body]
  (conj (reverse (conj (reverse 'expr) `(fn ~vars ~@body)))) 'list)


(<- [err ret] (async 1 2)
  (let []
    (print "abc")))

