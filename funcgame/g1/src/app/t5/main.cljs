(ns app.t5.main
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require [cljs.core.async :as a]))

(def p5 js/window)
(def w 10)
(def h 30)
(def cellW (/ 100 w))
(def cellH (/ 300 h))

(def cells 
  (->> 0
       repeat
       (take w)
       (into [])
       repeat
       (take h)
       (into [])))

(def shapes [[[-1 -1] [0 -1] [-1 0] [0 0]]
             [[0 -2] [0 -1] [0 0] [0 1]]
             [[-1 -1] [0 -1] [0 0] [0 1]]
             [[1 -1] [0 -1] [0 0] [0 1]]
             [[0 -1] [0 0] [-1 0] [1 0]]])

(defn rotate90 [s]
  (into [] (map (fn [[x y]]
                  [(- y) x]) s)))

(defn rotate180 [s]
  (into [] (map (fn [[x y]] 
                  [(- x) (- y)]) s)))

(defn rotate [type dir s]
  (condp = type
    0 s
    1 (cond
        (some (partial = dir) [1 3])
        (rotate90 s)
        
        :else
        s)
    (condp = dir
      0 s
      1 (rotate180 (rotate90 s))
      2 (rotate180 s)
      3 (rotate90 s)
      s)))

(defn pos2cr [[x y :as pos]]
  [(int (/ x cellW)) (int (/ y cellH))])

(defn fixPos [ctx]
  (let [type (get-in ctx [:drop :type])
        dir (get-in ctx [:drop :dir])
        pos (get-in ctx [:drop :pos])
        s (->> (get shapes type) (rotate type dir))
        allColumns (->> s
                        (map (fn [s] (map + (pos2cr pos) s)))
                        (map first))
        minColumn (apply min allColumns)
        maxColumn (apply max allColumns)
        offset1 (if (< minColumn 0) (* cellW (- minColumn)) 0)
        offset2 (if (> maxColumn (dec w)) (* cellW (- (dec w) maxColumn)) 0)
        offset (+ offset1 offset2)]
    (update-in ctx [:drop :pos] (partial map + [offset 0]))))

(defn handleInput [key ctx]
  (condp = key
    "a"
    (update-in ctx [:drop :pos] (partial map + [(- cellW) 0]))
    
    "d"
    (update-in ctx [:drop :pos] (partial map + [cellW 0]))
    
    " "
    (update-in ctx [:drop :dir] #(mod (inc %) 4))
    
    ctx))

(defn dropShape [ctx]
  (update-in ctx [:drop :pos] (partial map + [0 1])))

(defn update [ctx]
  (-> ctx
      dropShape))

(defn drawShape [p5 shape [px py :as pos]]
  (dorun
    (doseq [s shape]
      (let [[x y] s]
        (.rect p5 (+ px (* cellW x)) (+ py (* cellH y)) cellW cellH)))))

;(.log js/console (clj->js cells))

(defn main []
  
  (def model nil)
  (def evt (a/chan))
  
  (js/setInterval
      (fn []
        (am/go
          (a/>! evt {:type :update})))
      33)
  
  (am/go-loop [ctx {:cells cells
                    :drop {:pos [0 0] :tx 0 :ty 0 :type 4 :dir 0}}]
    (set! model ctx)
    (let [e (a/<! evt)]
      (condp = (:type e)
        :keyPressed 
        (recur (->>
                    ctx
                    (handleInput (:key e))
                    fixPos))
        
        (recur (update ctx)))))
  
  (set! (.-setup p5)
    (fn []
      (let [canvas (.createCanvas p5 300 600)]
        (.parent canvas "container"))))
  
  (set! (.-draw p5)
    (fn []
      (.fill p5 255)
      (.stroke p5 0)
      (.rect p5 0 0 300 600)
      (when model
        (dorun
          (for [x (range w) y (range h)]
            (let [type (get-in model [:cells y x])]
              (when true
                (.fill p5 255)
                (.stroke p5 0)
                (.rect p5 (* cellW x) (* cellH y) cellW cellH)))))
        (let [type (get-in model [:drop :type])
              dir (get-in model [:drop :dir])
              pos (get-in model [:drop :pos])
              s (->> (get shapes type) (rotate type dir))]
          (.fill p5 255 0 0)
          (drawShape p5 s pos)))))
  
  (set! (.-keyPressed p5)
    (fn []
      (am/go
        (a/>! evt {:type :keyPressed :key (.-key p5)}))))
  
  (set! (.-keyReleased p5)
    (fn []
      (am/go
        (a/>! evt {:type :keyReleased :key (.-key p5)})))))

(main)
