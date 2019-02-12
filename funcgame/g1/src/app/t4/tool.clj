(ns app.t4.tool)

(defmacro unless [arg & body]
  `(if (not ~arg)
     (do ~@body)))

(defmacro m1 [body]
  `(print (str '~body "=" ~body)))


(defmacro m2 [body]
  (conj body 'print))

(defmacro m3 [vars name & body]
  (let [callback# `(fn ~vars ~@body)]
    (reverse (conj (reverse name) callback#))))

(defmacro m4 [vars name & body]
  (let [callback# `(fn ~vars ~@body)]
    (reverse (conj name callback#))))
