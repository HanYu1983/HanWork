(ns app.t2.main
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require [cljs.core.async :as a]))

(defn targetCreate [{pos :pos :as info}]
  (merge 
    {:id (gensym) :pos pos :origin pos :startTime 0 :state :normal}
    info))

(defn targetGo [{time :time :as ctx} target]
  (if-not (= (:state target) :normal)
    target
    (merge target {:startTime time :state :go})))

(defn targetUpdate [{time :time :as ctx} target]
  (condp = (:state target)
    :go
    (let [offsetTime (- time (:startTime target))
          offsetY (-> offsetTime (min 500) (/ 1000) (* -50))]
      (if (> offsetTime 500)
        (merge target {:state :wait :startTime time})
        (merge target {:pos (map + (:origin target) [0 offsetY])})))
    :goback
    (let [offsetTime (- time (:startTime target))
          offsetY (->> offsetTime (min 500) (- 500) (* (/ 1 1000)) (* -50))]
      (if (> offsetTime 500)
        (merge target {:state :normal :pos (:origin target)})
        (merge target {:pos (map + (:origin target) [0 offsetY])})))
    :wait
    (let [offsetTime (- time (:startTime target))]
      (if (> offsetTime 500)
        (merge target {:state :goback :startTime time})
        target))
    :normal
    target
    
    target))

(defn update [ctx]
  (let [handleEvents
        (fn [ctx]
          (reduce 
            (fn [ctx e]
              (condp = (:type e)
                :go
                (let [targets (:targets e)
                      targetsAfterEffect (map (partial targetGo ctx) targets)
                      replaceForm (zipmap targets targetsAfterEffect)
                      replaceTargets (replace replaceForm (:targets ctx))]
                  (merge ctx {:targets replaceTargets}))
                ctx))
            (merge ctx {:events []})
            (:events ctx)))
        handleTargets
        (fn [ctx]
          (merge ctx {:targets (map (partial targetUpdate ctx) (:targets ctx))}))
        handleTime
        (fn [ctx]
          (merge ctx {:time (-> (js/Date.) (.getTime))}))]
    (-> ctx handleEvents handleTargets handleTime)))

(defn main []
  (def model nil)
  (def evt (a/chan))
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
                      :events [{:type :go :targets [firstTarget]}]
                      :score 0}]
      (set! model ctx)
      ;(.log js/console (clj->js ctx))
      (let [e (a/<! evt)]
        (condp = (:type e)
          :mousePressed
          (recur
            (update-in ctx [:events] conj {:type :go :targets [(nth (:targets ctx) 2) (nth (:targets ctx) 3)]}))
          
          :randomGo
          (recur
            (update-in ctx [:events] conj {:type :go :targets [(nth (:targets ctx) (rand-int 9))]}))
          
          :keyPressed
          (let [key (:key e)
                keyToIdx (zipmap keys (range 9))
                idx (get keyToIdx key)]
            (recur
              (cond
                (some (partial = key) keys)
                (let [{state :state :as target} (nth (:targets ctx) idx)]
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
