(ns app.t2.main
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require [cljs.core.async :as a]))

; 建立目標
(defn targetCreate [{pos :pos :as info}]
  (merge 
    {:id (gensym) :pos pos :origin pos :startTime 0 :state :normal}
    info))

; 目標冒頭
(defn targetGo [{time :time :as ctx} target]
  (if-not (= (:state target) :normal)
    target
    (merge target {:startTime time :state :go})))

; 更新目標狀態
(defn targetUpdate [{time :time :as ctx} target]
  (condp = (:state target)
    ; 冒頭
    :go
    ; 計算經過時間並使用內插法計算冒頭位置
    (let [offsetTime (- time (:startTime target))
          offsetY (-> offsetTime (min 500) (/ 1000) (* -50))]
      (if (> offsetTime 500)
        (merge target {:state :wait :startTime time})
        (merge target {:pos (map + (:origin target) [0 offsetY])})))
    ; 縮頭
    :goback
    ; 將冒頭的計算方法用500反減回去，計算出冒頭倒反的位移。注意這裡使用->>
    (let [offsetTime (- time (:startTime target))
          offsetY (->> offsetTime (min 500) (- 500) (* (/ 1 1000)) (* -50))]
      (if (> offsetTime 500)
        (merge target {:state :normal :pos (:origin target)})
        (merge target {:pos (map + (:origin target) [0 offsetY])})))
    ; 等待打擊
    :wait
    (let [offsetTime (- time (:startTime target))]
      (if (> offsetTime 500)
        (merge target {:state :goback :startTime time})
        target))
    :normal
    target
    
    target))

; 遊戲更新
(defn update [ctx]
  (let [; 處理事件
        handleEvents
        (fn [ctx]
          (reduce 
            (fn [ctx e]
              (condp = (:type e)
                ; 指定目標冒頭事件
                :go
                (let [; 取得冒頭目標
                      targets (:targets e)
                      ; 更新為冒頭狀態
                      targetsAfterEffect (map (partial targetGo ctx) targets)
                      ; 建立修改資料結構的對映表
                      replaceForm (zipmap targets targetsAfterEffect)
                      ; 修改後的資料
                      replaceTargets (replace replaceForm (:targets ctx))]
                  ; 應用修改
                  (merge ctx {:targets replaceTargets}))
                ctx))
            (merge ctx {:events []})
            (:events ctx)))
        ; 更新目標
        handleTargets
        (fn [ctx]
          (merge ctx {:targets (map (partial targetUpdate ctx) (:targets ctx))}))
        ; 更新遊戲時間
        handleTime
        (fn [ctx]
          (merge ctx {:time (-> (js/Date.) (.getTime))}))]
    (-> ctx handleEvents handleTargets handleTime)))

(defn main []
  (def model nil)
  (def evt (a/chan))
  ; 依打擊順序定義按鍵
  (def keys ["q" "w" "e" "a" "s" "d" "z" "x" "c"])
  
  (js/setInterval
      (fn []
        (am/go
          (a/>! evt {:type :update})))
      33)
      
  (js/setInterval
      (fn []
        (am/go
          (a/>! evt {:type :randomGo})))
      1000)
  
  (let [firstTarget (targetCreate {:pos [100 100]})]  
    (am/go-loop [ctx {:time (-> (js/Date.) (.getTime))
                      ; 依順序建立目標，注意座標有順序
                      :targets (concat 
                                 [firstTarget]
                                 [(targetCreate {:pos [200 100]})
                                  (targetCreate {:pos [300 100]})
                                  (targetCreate {:pos [100 200]})
                                  (targetCreate {:pos [200 200]})
                                  (targetCreate {:pos [300 200]})
                                  (targetCreate {:pos [100 300]})
                                  (targetCreate {:pos [200 300]})
                                  (targetCreate {:pos [300 300]})])
                      ; 事件佇列
                      :events [{:type :go :targets [firstTarget]}]
                      :score 0}]
      (set! model ctx)
      (let [e (a/<! evt)]
        (condp = (:type e)
          ; 測試事件
          :mousePressed
          (recur
            (update-in ctx [:events] conj {:type :go :targets [(nth (:targets ctx) 2) (nth (:targets ctx) 3)]}))
          
          ; 隨機冒頭事件
          :randomGo
          (recur
            (update-in ctx [:events] conj {:type :go :targets [(nth (:targets ctx) (rand-int 9))]}))
          
          ; 按鍵打擊
          :keyPressed
          (let [; 依定義鍵按的順序尋找對映的目標
                key (:key e)
                keyToIdx (zipmap keys (range 9))
                idx (get keyToIdx key)]
            (recur
              (cond
                (some (partial = key) keys)
                (let [{state :state :as target} (nth (:targets ctx) idx)]
                  ; 冒頭和等待狀態才能得分
                  (if-not (some (partial = state) [:wait :go])
                    ctx
                    (update-in ctx [:score] inc)))
                
                :else
                ctx)))
          
          (recur (update ctx))))))
  
  (let [p5 js/window
        setup
        (fn []
          (let [canvas (.createCanvas p5 600 400)
                txt (.createDiv p5 "string")]
            (.mousePressed canvas
              (fn []
                (am/go
                  (a/>! evt {:type :mousePressed}))))
            (.parent canvas "container")
            (.position txt 20 20)))
        keyPressed
        (fn []
          (am/go
            (a/>! evt {:type :keyPressed :key (.-key p5)})))
        draw
        (fn []
          (.background p5 0)
          (.fill p5 255)
          (.stroke p5 100)
          (when model
            (dorun
              (doseq [[idx, {pos :pos origin :origin :as t}] (map vector (range) (:targets model))]
                (let [[x y] pos
                      [ox oy] origin
                      showKey (nth keys idx)]
                  (.fill p5 255)
                  (.ellipse p5 x y 50 50)
                  (.rect p5 (- ox 25) (- oy 25) 50 50)
                  
                  (.fill p5 100 0 0)
                  (.text p5 showKey ox oy))))
            (.fill p5 255)
            (.text p5 (str "score:" (:score model)) 50 20)))]
    (set! (.-setup p5) setup)
    (set! (.-draw p5) draw)
    (set! (.-keyPressed p5) keyPressed)))

(main)
