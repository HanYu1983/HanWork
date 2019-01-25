(ns app.t1.main
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require [cljs.core.async :as a]))

(def data {:fish ["fish" "sakana"]
           :family ["family" "katei"]
           :rock ["rock" "ici"]})

(def model nil)
(def evt (a/chan))

(let [canvas (.getElementById js/document "canvas1")]
  (.addEventListener canvas "mousedown"
    (fn []
      (am/go
        (a/>! evt {:type :mousedown})))
    false)
  
  (.addEventListener canvas "mouseup"
    (fn []
      (am/go
        (a/>! evt {:type :mouseup})))
    false)
  
  (.addEventListener canvas "mousemove"
    (fn [evt2]
      (let [rect (.getBoundingClientRect canvas)
            x (- (.-clientX evt2) (.-left rect))
            y (- (.-clientY evt2) (.-top rect))]
        (am/go
          (a/>! evt {:type :mousemove :info [x y]}))))
    false)
  
  (js/setInterval
    (fn []
      (am/go
        (a/>! evt {:type :update})))
    33))

(declare update)

(am/go-loop [ctx {:mousePressed false
                  :mousePos [0 0]
                  :leftCircle [[10 50 30 :fish] [10 100 30 :family] [10 150 30 :rock]]
                  :rightCircle [[190 50 30 :rock] [190 100 30 :fish] [190 150 30 :family]]
                  :line nil
                  :select1 nil
                  :buildLine #{}}]
  (set! model ctx)
  (let [e (a/<! evt)]
    (condp = (:type e)
      :update
      (recur (update ctx))
      
      :mousemove
      (recur (merge ctx {:mousePos (:info e)}))
      
      :mouseup
      (recur (merge ctx {:mousePressed false :mouseUp true}))
      
      :mousedown
      (recur (merge ctx {:mousePressed true :mouseDown true}))
      
      (recur ctx))))

(defn isPointInCircle [p [x y radius]]
  (->>
       ; offset
       (map - [x y] p)
       ; dot
       (repeat)
       (take 2)
       (apply map *)
       (apply +)
       ; test radius
       (> (* radius radius))))

(defn checkAnswer [ctx s1 s2]
  (let [[_ _ _ a1] (get-in ctx [:leftCircle s1])
        [_ _ _ a2] (get-in ctx [:rightCircle s2])]
    (= a1 a2)))

(defn update [ctx]
  (cond
    (:mouseDown ctx)
    (let [idx (->>
                   (map (partial isPointInCircle (:mousePos ctx)) (:leftCircle ctx))
                   (map vector (range))
                   (filter (fn [[_ selected]] selected))
                   (ffirst))]
      (merge ctx {:mouseDown false :select1 idx}))
    
    (:mouseUp ctx)
    (let [idx (->>
                   (map (partial isPointInCircle (:mousePos ctx)) (:rightCircle ctx))
                   (map vector (range))
                   (filter (fn [[_ selected]] selected))
                   (ffirst))]
      (if-not idx
        (merge ctx {:mouseUp false :select1 nil})
        (let [s1 (:select1 ctx)
              s2 idx
              pass (checkAnswer ctx s1 s2)]
          (if-not pass
            (merge ctx {:mouseUp false :select1 nil})
            (merge ctx {:mouseUp false :select1 nil :buildLine (conj (:buildLine ctx) [s1 s2])})))))
    
    :else
    ctx))

(defn sketchProc [pc]
  (def pg 0)
  (def circleRadius 5)
  
  (set! (.-setup pc) 
    (fn []
      (.size pc 200 200)
      (set! pg
        (.createGraphics pc 200 200 (.-P3D pc)))))
  
  (set! (.-draw pc)
    (fn []
      ;(.log js/console (clj->js model))
      (if-not model
        (.text pc "no model" 30 30)
        (let [mousePos (:mousePos model)
              [mx my] mousePos]
          (.background pc 102)
          (.fill pc 120)
          (dorun 
            (doseq [c (concat (:leftCircle model) (:rightCircle model))]
              (let [[x y radius] c
                    selected (isPointInCircle mousePos c)]
                (if-not selected
                  (do
                    (.fill pc 255)
                    (.ellipse pc x y radius radius))
                  (do
                    (.fill pc 100 0 0)
                    (.ellipse pc x y radius radius))))))
          (if-let [s1 (:select1 model)]
            (let [[x y] (get-in model [:leftCircle s1])]
              (.line pc x y mx my)))
          (dorun
            (doseq [line (:buildLine model)]
              (let [[s1 s2] line
                    [x y] (nth (:leftCircle model) s1)
                    [x2 y2] (nth (:rightCircle model) s2)]
                (.line pc x y x2 y2))))
          (.fill pc 255)
          (.ellipse pc mx my 10 10))))))


(let [canvas (.getElementById js/document "canvas1")
      p (js/Processing. canvas sketchProc)])
