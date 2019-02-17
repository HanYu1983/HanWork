(ns app.t4.main
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require [cljs.core.async :as a]
            [clojure.walk :as w]))

(defn flip [[y x :as pos] ctx]
  (let [openCnt (->
                    (fn [v] 
                      (some (partial = (:state v)) [:open :wait]))
                    (filter (flatten (:view ctx)))                    
                    count)
        isPass (->
                   (get-in ctx [:view y x :state])
                   (= :pass))]
    (if (or isPass (>= openCnt 2))
      ctx
      (update-in ctx (concat [:view] pos) 
        (fn [v] (merge v {:state :open :timer 0}))))))

(defn updateView [ctx]
  (let [changeState 
        (fn [v]
          (if-not (map? v)
            v
            (condp = (:state v)
              :open
              (if-not (> (:timer v) 1000)
                v
                (merge v {:state :wait :timer 0}))
              
              :close v
              
              v)))]
    (merge ctx {:view (w/prewalk changeState (:view ctx))})))

(defn checkWait [ctx]
  (let [waitView (->
                     (fn [v] 
                       (some (partial = (:state v)) [:wait]))
                     (filter (flatten (:view ctx))))
        waitCnt (count waitView)]
    (if (< waitCnt 2)
      ctx
      (let [pass (->>
                      waitView
                      (map :id)
                      (map (fn [[y x :as id]] (get-in ctx (concat [:data] id))))
                      (apply =))]
        (reduce
          (fn [ctx {[y x :as id] :id :as v}]
            (update-in ctx (concat [:view] id) 
              (fn [v]
                (merge v {:state (if pass :pass :close)
                          :timer 0}))))
          ctx
          waitView)))))

(defn updateViewTimer [ctx]
  (let [changeState 
        (fn [v]
          (if-not (map? v)
            v
            (update-in v [:timer] (partial + (get-in ctx [:timer :elapsed])))))]
    (merge ctx {:view (w/prewalk changeState (:view ctx))})))

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
  
  (let [data [[0 0 1 1 2 2]
              [3 3 4 4 5 5]
              [6 6 7 7 8 8]]
        view (->>
                  (for [y (range 3)
                        x (range 6)]
                    {:id [y x]
                     :state :close
                     :timer 0})
                  (partition 6)
                  (map (partial into []))
                  (into []))]
    (am/go-loop [ctx {:select [0 0]
                      :data data
                      :view view
                      :timer {:last (-> (js/Date.) (.getTime)) :elapsed 0}}]
      (set! model ctx)
      (let [e (a/<! evt)]
        (condp = (:type e)
          :mousePressed
          (let [[y x :as id] (:select ctx)]
            (recur (flip id ctx)))
          
          :mouseMoved
          (let [[mx my] (:info e)
                [y x] (->>
                           (map / [my mx] [100 100])
                           (map int))]
            (recur (merge ctx {:select [y x]})))
          
          (recur (update ctx))))))
  
  (let [p5 js/window]
    (set! (.-setup p5)
      (fn []
        (let [canvas (.createCanvas p5 600 300)]
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
      (fn []
        (.fill p5 255)
        (.rect p5 0 0 600 300)
        (when model
          (dorun
            (w/prewalk 
              (fn [v]
                (if-not (map? v)
                  v
                  (let [{[y x] :id} v
                        txt (get-in model [:data y x])]
                    (cond
                      (some (partial = (:state v)) [:open :wait])
                      (do
                        (.fill p5 255)
                        (.rect p5 (* 100 x) (* 100 y) 100 100)
                        (.fill p5 255 0 0)
                        (.text p5 txt (+ 50 (* 100 x)) (+ 50 (* 100 y))))
                      
                      (= :pass (:state v))
                      (do
                        (.fill p5 0 255 0)
                        (.rect p5 (* 100 x) (* 100 y) 100 100)
                        (.fill p5 255 0 0)
                        (.text p5 txt (+ 50 (* 100 x)) (+ 50 (* 100 y))))
                      
                      :else
                      (do 
                        (.fill p5 255 0 0)
                        (.rect p5 (* 100 x) (* 100 y) 100 100))))))
              (:view model))))))))          

(main)
