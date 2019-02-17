(ns app.t5.main
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require [cljs.core.async :as a]))
            

(def p5 js/window)
(def w 10)
(def h 30)
(def cellW (/ 100 w))
(def cellH (/ 300 h))
(def emptyCell -1)

(def cells 
  (->> emptyCell
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
  [(int (/ x cellW)) (inc (int (/ y cellH)))])

(defn isCollide [ctx shape]
  (some 
    (fn [[c r]] 
      (not (= emptyCell (get-in ctx [:cells r c])))) 
    shape))

(defn fixPos [ctx]
  (let [type (get-in ctx [:drop :type])
        dir (get-in ctx [:drop :dir])
        pos (get-in ctx [:drop :pos])
        shape (->> (get shapes type) (rotate type dir))
        allColumns (->> shape
                        (map (fn [s] (map + (pos2cr pos) s)))
                        (map first))
        minColumn (apply min allColumns)
        maxColumn (apply max allColumns)
        offset1 (if (< minColumn 0) (* cellW (- minColumn)) 0)
        offset2 (if (> maxColumn (dec w)) (* cellW (- (dec w) maxColumn)) 0)
        offset (+ offset1 offset2)]
    (update-in ctx [:drop :pos] (partial map + [offset 0]))))

(defn collide [ctx]
  (let [type (get-in ctx [:drop :type])
        dir (get-in ctx [:drop :dir])
        pos (get-in ctx [:drop :pos])
        [c r] (pos2cr pos)
        shape (->> (get shapes type) (rotate type dir))
        cells (map (fn [s] (map + [c r] s)) shape)
        findEmpty (fn [shape or]
                    (let [shapeWithPos (map (fn [s] (map + [c or] s)) shape)]
                      (if (not (isCollide ctx shapeWithPos))
                        or
                        (recur shape (dec or)))))]
    (if-not (isCollide ctx cells)
      ctx
      (let [topR (findEmpty shape r)
            fixedShape (map (fn [s] (map + [c topR] s)) shape)
            applyFixedShape (fn [ctx]
                              (reduce
                                (fn [ctx [c r]]
                                  (if (some (partial > 0) [c r])
                                    ctx
                                    (update-in ctx [:cells r c] (constantly type)))) 
                                ctx
                                fixedShape))
            randomNext (fn [ctx] (merge ctx {:drop {:type (rand-int (count shapes)) :pos [20 20] :dir 0}}))]
        (-> ctx
            applyFixedShape
            randomNext)))))

(defn eatLine [ctx]
  (let [; 先去除滿格的列
        nextCells (reduce
                    (fn [cells line]
                      (if (every? #(not (= emptyCell %)) line)
                        cells
                        (conj cells line)))
                    []    ;使用[]使順序一致，代表reduce是從前面開始
                    (:cells ctx))
        ; 計算需要回補幾行
        offset (- h (count nextCells))]
    ; 若不需回補就直接回傳
    (if (<= offset 0)
      ctx
      ; 將空白行塞到前面
      (merge ctx {:cells (reduce
                           conj
                           (->> emptyCell
                                repeat
                                (take w)
                                (into [])
                                repeat
                                (take offset)
                                (into []))
                           nextCells)}))))

(defn handleInput [key ctx]
  (condp = key
    "a"
    (let [type (get-in ctx [:drop :type])
          dir (get-in ctx [:drop :dir])
          pos (get-in ctx [:drop :pos])
          [c r :as cr] (pos2cr pos)
          shape (->> (get shapes type) (rotate type dir))
          nextCr (map + cr [-1 0])
          nextShape (map (fn [s] (map + nextCr s)) shape)]
      (if (isCollide ctx nextShape)
        ctx
        (update-in ctx [:drop :pos] (partial map + [(- cellW) 0]))))
    
    "d"
    (let [type (get-in ctx [:drop :type])
          dir (get-in ctx [:drop :dir])
          pos (get-in ctx [:drop :pos])
          [c r :as cr] (pos2cr pos)
          shape (->> (get shapes type) (rotate type dir))
          nextCr (map + cr [1 0])
          nextShape (map (fn [s] (map + nextCr s)) shape)]
      (if (isCollide ctx nextShape)
        ctx
        (update-in ctx [:drop :pos] (partial map + [(+ cellW) 0]))))
    
    " "
    (let [type (get-in ctx [:drop :type])
          dir (get-in ctx [:drop :dir])
          pos (get-in ctx [:drop :pos])
          [c r :as cr] (pos2cr pos)
          nextDir (mod (inc dir) 4)
          shape (->> (get shapes type) (rotate type nextDir))
          nextShape (map (fn [s] (map + cr s)) shape)]
      (if (isCollide ctx nextShape)
        ctx
        (update-in ctx [:drop :dir] #(mod (inc %) 4))))
    
    ctx))

(defn dropShape [ctx]
  (update-in ctx [:drop :pos] (partial map + [0 1])))

(defn update [ctx]
  (-> ctx
      dropShape
      collide
      eatLine))

(defn drawShape [p5 shape [px py :as pos]]
  (dorun
    (doseq [s shape]
      (let [[x y] s]
        (.rect p5 (+ px (* cellW x)) (+ py (* cellH y)) cellW cellH)))))

(defn fillShapeColor [p5 type]
  (condp = type
    0
    (.fill p5 255 0 0)
    
    1
    (.fill p5 0 255 0)
    
    2
    (.fill p5 0 0 255)
    
    3
    (.fill p5 128 128 0)
    
    4
    (.fill p5 128 0 128)
    
    (.fill p5 255)))

(defn main []
  
  (def model nil)
  (def evt (a/chan))
  
  (js/setInterval
      (fn []
        (am/go
          (a/>! evt {:type :update})))
      33)
  
  (am/go-loop [ctx {:cells cells
                    :drop {:pos [50 50] :type 1 :dir 0}}]
    (set! model ctx)
    (let [e (a/<! evt)]
      (condp = (:type e)
        :keyPressed 
        (recur (->> ctx
                    (handleInput (:key e))
                    fixPos))
        
        (recur (update ctx)))))
  
  (set! (.-setup p5)
    (fn []
      (let [canvas (.createCanvas p5 100 300)]
        (.parent canvas "container"))))
  
  (set! (.-draw p5)
    (fn []
      (.fill p5 255)
      (.stroke p5 0)
      (.rect p5 0 0 (dec 100) (dec 300))
      (when model
        (dorun
          (for [x (range w) y (range h)]
            (let [type (get-in model [:cells y x])]
              (when (> type emptyCell)
                (fillShapeColor p5 type)
                (.stroke p5 0)
                (.rect p5 (* cellW x) (* cellH y) cellW cellH)))))
        (let [type (get-in model [:drop :type])
              dir (get-in model [:drop :dir])
              pos (get-in model [:drop :pos])
              s (->> (get shapes type) (rotate type dir))]
          (fillShapeColor p5 type)
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
