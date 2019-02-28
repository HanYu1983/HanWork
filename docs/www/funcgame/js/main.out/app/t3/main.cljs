(ns app.t3.main
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require [cljs.core.async :as a]
            [clojure.set :as s]))

(def cw 600)
(def ch 400)
(def spd (/ ch 50))
(def bltspd (/ ch 25))
(def thrustSpd 1)
(def p5 js/window)

; 處理使用者輸入
(defn updatePlayerInput [ctx]
  (reduce
    (fn [ctx key]
      (if-not (contains? (:keyPressed ctx) key)
        ctx
        (condp = key
          "w"
          (update-in ctx [:player :pos] (partial map + [0 (- spd)]))

          "s"
          (update-in ctx [:player :pos] (partial map + [0 spd]))
          
          "a"
          (update-in ctx [:player :pos] (partial map + [(- spd) 0]))
          
          "d"
          (update-in ctx [:player :pos] (partial map + [spd 0]))
          
          "j"
          ; 發射子彈
          (update-in ctx [:entities] #(conj % {:flag #{:playerBullet} 
                                               :pos (get-in ctx [:player :pos]) 
                                               :velocity [bltspd 0]}))
          
          ctx)))
    ctx
    ["w" "a" "s" "d" "j"]))

; 自機自動噴射位移
(defn updatePlayerThrust [ctx]
  (update-in ctx [:player :pos] (partial map + [thrustSpd 0])))

; 更新按鍵狀態
(defn updateKey [ctx]
  (merge ctx {:keyPressed (s/difference (:keyPressed ctx) (:keyReleased ctx))
              :keyReleased #{}}))

; 更新攝影機位置
; 速率與自機噴射同
(defn updateCamera [ctx]
  (update-in ctx [:camera :pos] (partial map + [thrustSpd 0])))

; 若有pos與velocity，更新pos
(defn updateVelocity [entity]
  (if-not (every? (partial contains? entity) [:pos :velocity])
    entity
    (update-in entity [:pos] (partial map + (:velocity entity)))))

; 更新實體
(defn updateEntities [ctx]
  (merge ctx {:entities (map updateVelocity (:entities ctx))}))

; 移除螢幕範圍外的實體
(defn removeEntityIfOutOfBound [ctx]
  (let [[cx _] (get-in ctx [:camera :pos])
        entities (:entities ctx)]
    (merge ctx {:entities (filter 
                            (fn [{[x _] :pos :as entity}]
                              (and (< x (+ cx cw))
                                   (> x (- cx cw))))
                            entities)})))

; 生成敵機
(defn spawnEnemy [ctx]
  (let [; 定義成生位置。分成5個列，每個數值間隔30像素
        spawnPos [[1 1 1 1 0 0 0 0 0 0 0 0]
                  [0 0 0 0 1 1 1 1 0 0 0 0]
                  [0 0 0 0 0 0 0 0 1 1 1 1]
                  [0 0 0 0 1 1 1 1 0 0 0 0]
                  [1 1 1 1 0 0 0 0 0 0 0 0]]
        ; 用攝相機座標判斷
        [cx _] (get-in ctx [:camera :pos])
        c (int (/ cx 30))
        ; 取得對映行列的值
        rcs (for [r (range 5)] [r c (get-in spawnPos [r c])])
        ; 大於0的值代表要生成
        spawnRcs (filter #(< 0 (nth % 2)) rcs)
        ; 和生成過的比對，只生成一次
        spawnRcsOnce (s/difference (set spawnRcs) (:mark ctx))
        ; 生成
        spawnEnemies (map 
                       (fn [[r c]] 
                         {:flag #{:enemy}
                          :pos [(+ cx cw) (- (* (inc r) (/ ch 6)) (/ ch 2))] 
                          :velocity [-1 0]})
                       spawnRcsOnce)]
    ; 套用
    (merge ctx {; 成生過的記錄起來，下次不再生成
                :mark (s/union (:mark ctx) (set spawnRcs))
                :entities (concat (:entities ctx) spawnEnemies)})))

; 判斷碰撞
(defn checkCollide [ctx]
  (let [; 自機子彈
        playerBullets (filter #(contains? (:flag %) :playerBullet) (:entities ctx))
        ; 敵機
        enemies (filter #(contains? (:flag %) :enemy) (:entities ctx))
        ; 碰撞偵測
        check (for [b playerBullets
                    e enemies]
                 (let [[bx by] (:pos b)
                       [ex ey] (:pos e)]
                   [b e (.collidePointRect p5 ex ey bx by 30 30)]))
        ; 取得碰撞對象
        collide (filter (fn [[_ _ isCollide]] isCollide) check)
        ; 移除對象
        removeEnemies (filter #(not (some (partial = %) (map second collide))) (:entities ctx))]
    ; 套用
    (merge ctx {:entities removeEnemies})))

(defn update [ctx]
  (-> ctx 
      updatePlayerInput
      updatePlayerThrust
      updateEntities
      removeEntityIfOutOfBound
      checkCollide
      spawnEnemy
      updateCamera
      updateKey))

; 依攝相機投影
(defn projection [{view :view} camera pos]
  (->>
       (map - pos camera)
       (map + view)))

(defn main []
  (def model nil)
  (def evt (a/chan))
  
  (js/setInterval
      (fn []
        (am/go
          (a/>! evt {:type :update})))
      33)
  
  (am/go-loop [ctx {:player {:pos [0 0]}
                    :keyPressed #{}
                    :keyReleased #{}
                    :camera {:pos [0 0]}
                    :entities [{:pos [100 0] :velocity [0 -1]}]
                    :mark #{}}]
    (set! model ctx)
    (let [e (a/<! evt)]
      (condp = (:type e)
        :keyPressed
        (recur (update-in ctx [:keyPressed] conj (:key e)))
        
        :keyReleased
        (if (= (:key e) "q")
          (do 
            (.log js/console "exit")
            (a/close! evt))
          (recur (update-in ctx [:keyReleased] conj (:key e))))
        
        (recur (update ctx)))))
  
  (let [projectionFn (partial projection {:view [50 (int (/ ch 2))]})]
    (set! (.-setup p5)
      (fn []
        (let [canvas (.createCanvas p5 cw ch)]
          (.parent canvas "container"))))
    
    (set! (.-draw p5)
      (fn []
        (when model
          (let [[px py] (->> (get-in model [:player :pos]) (projectionFn (get-in model [:camera :pos])))]
            (.fill p5 255)
            (.rect p5 0 0 cw ch)
            (.push p5)
            (.translate p5 px py)
            (.rotate p5 0)
            (.fill p5 100)
            (.rect p5 -5 -5 10 10)
            (.pop p5))
          (dorun
            (doseq [entity (:entities model)]
              (let [[px py] (->> (get-in entity [:pos]) (projectionFn (get-in model [:camera :pos])))]
                (.rect p5 px py 10 10)))))))
    
    (set! (.-keyPressed p5)
      (fn []
        (am/go
          (a/>! evt {:type :keyPressed :key (.-key p5)}))))
    
    (set! (.-keyReleased p5)
      (fn []
        (am/go
          (a/>! evt {:type :keyReleased :key (.-key p5)}))))))

(main)
