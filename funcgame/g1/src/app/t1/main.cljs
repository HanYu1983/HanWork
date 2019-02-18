(ns app.t1.main
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require [cljs.core.async :as a]))
; 定義遊戲內容
(def data {:fish ["fish" "魚"]
           :family ["family" "家人"]
           :rock ["rock" "岩石"]})
; 傳遞資料給視覺的容器
(def model nil)
; 事件流
(def evt (a/chan))
; ===================
; ==== 定義模型端 =====
; ===================
; 組成事件流
(let [canvas (.getElementById js/document "canvas1")]
  ; 按下事件
  (.addEventListener canvas "mousedown"
    (fn []
      (am/go
        (a/>! evt {:type :mousedown})))
    false)
  ; 放開事件
  (.addEventListener canvas "mouseup"
    (fn []
      (am/go
        (a/>! evt {:type :mouseup})))
    false)
  ; 移動事件
  ; 並記錄位置
  (.addEventListener canvas "mousemove"
    (fn [evt2]
      (let [rect (.getBoundingClientRect canvas)
            x (- (.-clientX evt2) (.-left rect))
            y (- (.-clientY evt2) (.-top rect))]
        (am/go
          (a/>! evt {:type :mousemove :info [x y]}))))
    false)
  ; 迴圈事件
  (js/setInterval
    (fn []
      (am/go
        (a/>! evt {:type :update})))
    33))
(declare update)
; 遊戲迴圈
(am/go-loop [ctx {:mousePressed false
                  :mousePos [0 0]
                  :leftCircle [[50 50 20 :fish] [50 100 20 :family] [50 150 20 :rock]]
                  :rightCircle [[150 50 20 :rock] [150 100 20 :fish] [150 150 20 :family]]
                  :line nil
                  :select1 nil
                  :buildLine #{}}]
  ; 傳送資料給視覺
  (set! model ctx)
  ; 處理各種事件
  (let [e (a/<! evt)]
    (condp = (:type e)
      :update
      (recur (update ctx))
      
      ; 記錄游標位置
      :mousemove
      (recur (merge ctx {:mousePos (:info e)}))
      
      ; 記錄按鍵狀態
      :mouseup
      (recur (merge ctx {:mousePressed false :mouseUp true}))
      
      ; 記錄按鍵狀態
      :mousedown
      (recur (merge ctx {:mousePressed true :mouseDown true}))
      
      (recur ctx))))

(defn isPointInCircle [p [x y radius]]
  (->>
       ; 相對向量
       (map - [x y] p)
       ; 相對向量內積自己後對於向量長度的平方
       (repeat)
       (take 2)
       (apply map *)
       (apply +)
       ; 測試碰撞半徑（一樣用平方來比較）
       (> (* radius radius))))

(defn checkAnswer [ctx s1 s2]
  (let [[_ _ _ a1] (get-in ctx [:leftCircle s1])
        [_ _ _ a2] (get-in ctx [:rightCircle s2])]
    (= a1 a2)))

(defn update [ctx]
  (cond
    ; 按下游標
    (:mouseDown ctx)
    (let [idx (->> ; 和左方的圓圈測試點擊
                   (map (partial isPointInCircle (:mousePos ctx)) (:leftCircle ctx))
                   ; 將結果配對索引
                   (map vector (range))
                   ; 找出點擊到的圓圈索引
                   (filter (fn [[_ selected]] selected))
                   ; 取出索引
                   (ffirst))]
      ; 設定選擇1
      (merge ctx {:mouseDown false :select1 idx}))
    
    ; 放開游標
    (:mouseUp ctx)
    (let [idx (->> ; 同上。但和右方的圓圈測試
                   (map (partial isPointInCircle (:mousePos ctx)) (:rightCircle ctx))
                   (map vector (range))
                   (filter (fn [[_ selected]] selected))
                   (ffirst))]
      (if-not idx
        ; 若放開時沒有在右邊圓圈內，則取消選擇1
        (merge ctx {:mouseUp false :select1 nil})
        ; 計算答案
        (let [s1 (:select1 ctx)
              s2 idx
              pass (checkAnswer ctx s1 s2)]
          (if-not pass
            (merge ctx {:mouseUp false :select1 nil})
            ; 若成功配對，將結果記錄在buildLine(成功的線)中。注意buildLine為集合
            (merge ctx {:mouseUp false :select1 nil :buildLine (conj (:buildLine ctx) [s1 s2])})))))
    
    :else
    ctx))
; ===================
; ==== 定義視覺端 =====
; ===================
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
          ; 背景
          (.background pc 200)
          ; 左右邊的球和文字
          (dorun 
            (doseq [c (concat (:leftCircle model) (:rightCircle model))]
              (let [isLeft (some (partial = c) (:leftCircle model))
                    [x y radius a] c
                    radius2 (* radius 2)
                    showText (get-in data [a (if isLeft 0 1)])
                    showTextOffsetX (-> (.textWidth pc showText) (/ 2) -)
                    selected (isPointInCircle mousePos c)]
                (if-not selected
                  (do
                    (.fill pc 255)
                    (.ellipse pc x y radius2 radius2))
                  (do
                    (.fill pc 100 0 0)
                    (.ellipse pc x y radius2 radius2)))
                (.fill pc 0)
                (.text pc showText (+ x showTextOffsetX) y))))
          ; 連結中的線
          (.fill pc 0)
          (if-let [s1 (:select1 model)]
            (let [[x y] (get-in model [:leftCircle s1])]
              (.line pc x y mx my)))
          ; 連結成功的線
          (.fill pc 0)
          (dorun
            (doseq [line (:buildLine model)]
              (let [[s1 s2] line
                    [x y] (nth (:leftCircle model) s1)
                    [x2 y2] (nth (:rightCircle model) s2)]
                (.line pc x y x2 y2))))
          ; 位置
          (.fill pc 255)
          (.ellipse pc mx my 10 10))))))
(let [canvas (.getElementById js/document "canvas1")
      p (js/Processing. canvas sketchProc)])
