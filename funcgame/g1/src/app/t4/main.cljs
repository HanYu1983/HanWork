(ns app.t4.main
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require [cljs.core.async :as a]))

(defn flip [[y x :as pos] ctx]
  (let [openCnt (->
                    (fn [v] 
                      (some (partial = (:state v)) [:open :wait]))
                    (filter (:view ctx))
                    count)]
    (if (>= openCnt 2)
      ctx
      (update-in ctx (concat [:view] pos) 
        (fn [v] (merge v {:state :open :timer 0}))))))

(defn updateView [ctx]
  (let [changeState 
        (fn [v]
          (condp = (:state v)
            :open
            (if-not (> (:timer v) 1000)
              v
              (merge v {:state :wait :timer 0}))
            
            :close v
            
            v))])
  (merge ctx {:view (map changeState (:view ctx))}))

(defn checkWait [ctx]
  (let [waitView (->
                     (fn [v] 
                       (some (partial = (:state v)) [:wait]))
                     (filter (:view ctx)))
        waitCnt (count waitView)]
    (if (< waitCnt 2)
      ctx
      (let [pass (->>
                      waitView
                      (map :id)
                      (map (fn [[y x :as id]] (get-in ctx (concat [:data] id))))
                      (apply map =)
                      first)]
        (reduce
          (fn [ctx {[y x] :id :as v}]
            (update-in ctx (concat [:view] id) 
              (fn [v]
                (merge v {:state (if pass :pass :close)
                          :timer 0}))))
          ctx
          waitView)))))

(defn updateViewTimer [ctx]
  (let [changeState 
        (fn [v]
          (update-in v [:timer] (partial + (get-in ctx [:timer :elapsed]))))]
    (merge ctx {:view (map changeState (:view ctx))})))

(defn updateTimer [ctx]
  (let [now (-> (js/Date.) (.getTime))
        last (get-in ctx [:timer :last])
        elapsed (- now last)]
    (merge ctx {:timer {:last now :elapsed elapsed}})))

(defn update [ctx]
  (-> ctx
      updateTimer
      updateView
      checkWait
      updateViewTimer))


(defn main []
  (def model nil)
  (def evt (a/chan))
  
  (js/setInterval
      (fn []
        (am/go
          (a/>! evt {:type :update})))
      33)
  
  (am/go-loop [ctx {}]
    (set! model ctx)
    ; (.log js/console (clj->js ctx))
    (let [e (a/<! evt)]
      (condp = (:type e)
        (recur (update ctx)))))
  
  (let [p5 js/window]
    (set! (.-setup p5)
      (fn []
        (let [canvas (.createCanvas p5 600 400)]
          (.mousePressed canvas
            (fn []
              (am/go
                (a/>! evt {:type :mousePressed}))))
          (.mouseMoved canvas            
            (fn []
              (let [x (.-mouseX p5)
                    y (.-mouseY p5)]
                (am/go
                  (a/>! evt {:type :mouseMoved :info [x y]})))))
          (.parent canvas "container"))))
    
    (set! (.-draw p5)
      (fn []))))

(main)
