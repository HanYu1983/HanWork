(ns app.t5.main
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require [cljs.core.async :as a]))

(def p5 js/window)

; =====
; MODEL
; =====

(def w 10)
(def h 30)
(def cellW (/ 100 w))
(def cellH (/ 300 h))
(def emptyCell -1)
(def spawnPos [40 20])
(def dropSpd 3)

; 建立背景區塊
(def cells 
  (->> emptyCell
       repeat
       (take w)
       (into [])
       repeat
       (take h)
       (into [])))

; 定義方塊
; 因碰撞演算法的限制，y不得小於-2
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

; 旋轉方塊
(defn rotate [type dir s]
  (condp = type
    ; 0代表正方形，不必旋轉
    0 s
    ; 1是長條形，只分垂直和水平
    1 (cond
        (some (partial = dir) [1 3])
        (rotate90 s)
        
        :else
        s)
    ; 其它的形狀就必須處理4個方向
    (condp = dir
      0 s
      1 (rotate180 (rotate90 s))
      2 (rotate180 s)
      3 (rotate90 s)
      s)))

; 將像素座標改為區塊的行列座標
; 這裡要注意，列數會額外加1。因為每個方塊是以左上角為錨點，加1代表錨點改為左下角，這樣計算碰撞會比較正確
(defn pos2cr [[x y :as pos]]
  [(int (/ x cellW)) (inc (int (/ y cellH)))])

; 計算是否有碰䃥
(defn isCollide [ctx shape]
  (some 
    (fn [[c r]] 
      (not (= emptyCell (get-in ctx [:cells r c])))) 
    shape))

; 處理碰撞
(defn collide [ctx]
  (let [[type dir pos] (map #(get-in ctx [:drop %]) [:type :dir :pos])
        [c r :as cr] (pos2cr pos)
        shape (->> (get shapes type) (rotate type dir))
        shapeWithPos (map (fn [s] (map + cr s)) shape)
        ; 尋找上方不會碰撞的空間
        findEmpty (fn [shape or]
                    (if (<= or 0)
                      or
                      (let [shapeWithPos (map (fn [s] (map + [c or] s)) shape)]
                        (if (not (isCollide ctx shapeWithPos))
                          or
                          (recur shape (dec or))))))]
    (if-not (isCollide ctx shapeWithPos)
      ctx
      (let [; 找出方塊落下的行列座標
            topR (findEmpty shape r)
            ; 方塊在背景區塊所佔據的位置
            fixedShape (map (fn [s] (map + [c topR] s)) shape)
            ; 佔據位置
            applyFixedShape (fn [ctx]
                              (reduce
                                (fn [ctx [c r]]
                                  ; 行列座標小於0的不處理
                                  (if (some (partial > 0) [c r])
                                    ctx
                                    (update-in ctx [:cells r c] (constantly type)))) 
                                ctx
                                fixedShape))
            ; 成生下一個方塊
            randomNext (fn [ctx] (merge ctx {:drop {:pos spawnPos 
                                                    :type (rand-int (count shapes))
                                                    :dir 0}}))]
        (-> ctx
            applyFixedShape
            randomNext)))))

; 吃掉滿格的列
(defn eatLine [ctx]
  (let [; 先去除滿格的列
        nextCells (reduce
                    (fn [cells line]
                      (if (every? (complement (partial = emptyCell)) line)
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

; 處理輸入
(defn handleInput [key ctx]
  (condp = key
    "a"
    (let [[type dir pos] (map #(get-in ctx [:drop %]) [:type :dir :pos])
          [c r :as cr] (pos2cr pos)
          shape (->> (get shapes type) (rotate type dir))
          nextCr (map + cr [-1 0])
          nextShape (map (fn [s] (map + nextCr s)) shape)]
      (if (isCollide ctx nextShape)
        ctx
        (update-in ctx [:drop :pos] (partial map + [(- cellW) 0]))))
    
    "d"
    (let [[type dir pos] (map #(get-in ctx [:drop %]) [:type :dir :pos])
          [c r :as cr] (pos2cr pos)
          shape (->> (get shapes type) (rotate type dir))
          nextCr (map + cr [1 0])
          nextShape (map (fn [s] (map + nextCr s)) shape)]
      (if (isCollide ctx nextShape)
        ctx
        (update-in ctx [:drop :pos] (partial map + [(+ cellW) 0]))))
    
    " "
    (let [[type dir pos] (map #(get-in ctx [:drop %]) [:type :dir :pos])
          [c r :as cr] (pos2cr pos)
          nextDir (mod (inc dir) 4)
          shape (->> (get shapes type) (rotate type nextDir))
          nextShape (map (fn [s] (map + cr s)) shape)]
      (if (isCollide ctx nextShape)
        ctx
        (update-in ctx [:drop :dir] #(mod (inc %) 4))))
    
    ctx))
    
; 處理下降方塊
(defn dropShape [ctx]
  (update-in ctx [:drop :pos] (partial map + [0 dropSpd])))

(defn update [ctx]
  (-> ctx
      dropShape
      collide
      eatLine))

; ====
; VIEW
; ====

; 畫方塊
(defn drawShape [p5 shape [px py :as pos]]
  (dorun
    (doseq [s shape]
      (let [[x y] s]
        (.rect p5 (+ px (* cellW x)) (+ py (* cellH y)) cellW cellH)))))

; 設定方塊顏色
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
  
  ; 遊戲迴圈
  (am/go-loop [ctx {:cells cells
                    :drop {:pos spawnPos 
                           :type (rand-int (count shapes)) 
                           :dir 0}}]
    (set! model ctx)
    (let [e (a/<! evt)]
      (condp = (:type e)
        :keyPressed
        (recur (handleInput (:key e) ctx))

        :update
        (recur (update ctx))
        
        (recur ctx))))
  
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
        ; 背景區塊
        ; 使用dorun來強制墮性序列求值
        (dorun
          (for [x (range w) y (range h)]
            (let [type (get-in model [:cells y x])]
              (when (> type emptyCell)
                (fillShapeColor p5 type)
                (.stroke p5 0)
                (.rect p5 (* cellW x) (* cellH y) cellW cellH)))))
        ; 下落中的方塊
        (let [[type dir pos] (map #(get-in model [:drop %]) [:type :dir :pos])
              shape (->> (get shapes type) (rotate type dir))]
          (fillShapeColor p5 type)
          (drawShape p5 shape pos)))))
  
  ; =====
  ; EVENT
  ; =====
  
  (js/setInterval
      (fn []
        (am/go
          (a/>! evt {:type :update})))
      33)
      
  (set! (.-keyPressed p5)
    (fn []
      (am/go
        (a/>! evt {:type :keyPressed :key (.-key p5)}))))
  
  (set! (.-keyReleased p5)
    (fn []
      (am/go
        (a/>! evt {:type :keyReleased :key (.-key p5)})))))

(main)
