(ns app.t4.main
  (:require-macros [app.t4.tool :as tool]))



(defn flip [[y x :as pos] ctx]
  (update-in ctx (concat [:view] pos) (fn [v] (merge v {:state :open :time 0}))))

(defn updateView [ctx]
  (let [changeState 
        (fn [v]
          (condp = (:state v)
            :open
            (if-not (> (:time v) 1000)
              v
              (merge v {:state :close :time 0}))
            
            :close v
            
            v))])
  (merge ctx {:view (map changeState (:view ctx))}))

(defn updateViewTimer [ctx])


(defn update [ctx])


(tool/m1 (do (print "abc") "return abc"))

(tool/m2 (print "hello"))

(defn async [a b f]
  (f (+ a 100) b))

(def a4 "str")

(tool/m3 [a b] [async 1 2]
  (print a b)
  (print "m3"))

(tool/m4 [a b] (2 1 async)
  (print a b)
  (print "m4"))

(print a4)
