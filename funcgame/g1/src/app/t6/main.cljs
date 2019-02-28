(ns app.t6.main
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require [cljs.core.async :as a]))

(def p5 js/window)

; 畫布大小
(def cw 600)
(def ch 600)
; 行列數
(def w 30)
(def h 30)
; 地雷數
(def mineCnt 100)
(def gw (int (/ cw w)))
(def gh (int (/ ch h)))

; =====
; MODEL
; =====

; 安排地雷
(def mine (->> 
               (concat 
                 (repeat mineCnt 1) 
                 (repeat (- (* w h) mineCnt) 0))
               shuffle
               (partition w)
               (map (partial into []))
               (into [])))
; 先行計算背景數字
(def cells (->>
                (for [y (range h) x (range w)]
                  (let [isMine (-> (get-in mine [y x]) (= 1))
                        borders (map 
                                  (partial map + [y x]) 
                                  [[-1 -1] [0 -1] [1 -1]
                                   [-1 0] [1 0]
                                   [-1 1] [0 1] [1 1]])
                        lazyBorderMineCnt (->>
                                               (map (partial get-in mine) borders)
                                               (filter (partial = 1)))]
                    (if isMine
                      9
                      (count lazyBorderMineCnt))))
                (partition w)
                (map (partial into []))
                (into [])))
; 插旗子
(defn flag [[r c :as rc] ctx]
  (let [s (get-in ctx [:states r c])]
    (condp = s
      :close
      (update-in ctx [:states r c] (constantly :flag))
      
      :flag
      (update-in ctx [:states r c] (constantly :close))
      
      ctx)))
; 翻牌
(defn flip [[r c :as rc] ctx]
  (let [v (get-in ctx [:cells r c])
        s (get-in ctx [:states r c])]
    (if (= :open s)
      ctx
      (cond
        ; 停止條件
        (nil? v)
        ctx
        
        ; 地雷。結束遊戲
        (= 9 v)
        (-> ctx
            (update-in [:states r c] (constantly :open))
            (update-in [:gameState] (constantly :died)))
        
        ; 周圍沒有任何地雷。翻開至有地雷為止
        (= 0 v)
        (reduce
          (fn [ctx [r c :as offset]]
            (flip (map + offset rc) ctx))
          (update-in ctx [:states r c] (constantly :open))
          ; 四個方向
          [[0 -1] [1 0] [0 1] [-1 0]])
        
        ; 其它情況就單純把牌打開
        :else
        (update-in ctx [:states r c] (constantly :open))))))

; ====
; VIEW
; ====

; 畫背景數字和地雷
(defn drawOpen [p5 v x y w h]
  (condp = v
    9
    (let [size h]
      (.fill p5 0)
      (.circle p5 (+ x (/ w 2)) (+ y (/ h 2)) (/ (min w h) 2)))
    
    (let [[r g b] (condp = (int (/ v 3))
                    0 [0 255 0]
                    1 [0 255 255]
                    2 [255 0 0])]
      (.textSize p5 h)
      (.fill p5 r g b)
      (.text p5 v (+ x (/ (.textWidth p5 v) 2)) (+ h y)))))
; 畫旗子
(defn drawFlag [p5 x y w h]
  (.triangle p5 (+ x (/ w 2)) y x (+ y h) (+ x w) (+ y h)))

(defn main []
  (def model nil)
  (def evt (a/chan))
  
  (am/go-loop [ctx {:cells cells
                    :states (->> :close
                                 (repeat (* w h))
                                 (partition w)
                                 (map (partial into []))
                                 (into []))
                    :gameState :play}]
    (set! model ctx)
    (let [e (a/<! evt)]
      (condp = (:type e)
        :mouseReleased
        (let [btn (get-in e [:info :btn])
              rc (get-in e [:info :rc])]
          (condp = btn
            ; 左鍵。翻牌
            :left
            (recur (flip rc ctx))
            
            ; 右鍵。插旗子
            :right
            (recur (flag rc ctx))
            
            (recur ctx)))
        
        (recur ctx))))
  
  (set! (.-setup p5)
    (fn []
      (.noStroke p5)
      (let [canvas (.createCanvas p5 cw ch)]
        (.parent canvas "container"))))
  
  (set! (.-draw p5)
    (fn []
      (.fill p5 255)
      (.rect p5 0 0 cw ch)
      (when model
        (dorun
          (for [y (range h)
                x (range w)]
            (let [v (get-in model [:cells y x])
                  s (get-in model [:states y x])]
              (cond
                (or 
                    (= :open s)
                    ; 遊戲結束後，沒有插旗子的格子若是地雷要畫出來
                    (and (not (= :flag s))
                         (= :died (:gameState model)) 
                         (= 9 v)))
                (do
                  (.fill p5 255)
                  (.rect p5 (* x gw) (* y gh) gw gh)
                  (drawOpen p5 v (* x gw) (* y gh) gw gh))
                
                (= :close s)
                (do
                  (.fill p5 122 61 122)
                  (.rect p5 (* x gw) (* y gh) gw gh))
                
                (= :flag s)
                (do
                  (.fill p5 122 61 122)
                  (.rect p5 (* x gw) (* y gh) gw gh)
                  (.fill p5 255 0 0)
                  (drawFlag p5 (* x gw) (* y gh) gw gh))
                
                :else
                nil))))
        (when (= :died (:gameState model))
          (.fill p5 0 0 255)
          (.textSize p5 50)
          (.text p5 "Game Over" (- (/ cw 2) (/ (.textWidth p5 "Game Over") 2)) (/ ch 2))))))
  
  ; =====
  ; EVENT
  ; =====
  
  (set! (.-mouseReleased p5)
    (fn []
      (am/go
        ; 按下鍵後組成行列資料
        (let [mx (.-mouseX p5)
              my (.-mouseY p5)
              btn (.-mouseButton p5)
              c (int (/ mx gw))
              r (int (/ my gh))]
          (a/>! evt {:type :mouseReleased :info {:rc [r c] :btn (keyword btn)}}))))))

(main)
                      
                      
             
