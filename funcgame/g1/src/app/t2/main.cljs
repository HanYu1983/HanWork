(ns app.t2.main
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require [cljs.core.async :as a]))

(defn targetGo [{time :time :as ctx} target]
  (if-not (= (:state target) :normal)
    target
    (merge target {:startTime time :state :go})))

(defn targetUpdate [{time :time :as ctx} target]
  (condp = (:state target)
    :go
    (let [offsetTime (- time (:startTime target))
          offsetY (-> offsetTime (min 1000) (/ 1000) (* -50))]
      (update-in target [:pos] (partial map + [0 offsetY])))
    
    :normal
    target
    
    target))

(defn update [ctx]
  (let [handleEvents
        (fn [ctx]
          (reduce 
            (fn [ctx e]
              (.log js/console (clj->js e))
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
  (let [evt (a/chan)
        loop
        (js/setInterval
            (fn []
              (am/go
                (a/>! evt {:type :update})))
            33)
        firstTarget {:id (gensym) :pos [100 300] :startTime 0 :state :normal}]
    (am/go-loop [ctx {:time (-> (js/Date.) (.getTime))
                      :targets [firstTarget]
                      :events [{:type :go :targets [firstTarget]}]}]
      (set! model ctx)
      (.log js/console (clj->js ctx))
      (let [e (a/<! evt)]
        (recur (update ctx)))))
  
  (let [p5 js/window
        setup
        (fn []
          (let [canvas (.createCanvas p5 600 400)
                txt (.createDiv p5 "string")]
            (.parent canvas "container")
            (.position txt 20 20)))
        draw
        (fn []
          (.background p5 0)
          (.fill p5 255)
          (.stroke p5 100)
          ;(.log js/console (clj->js model))
          (when model
            (dorun
              (doseq [{pos :pos :as t} (:targets model)]
                (let [[x y] pos]
                  (.ellipse p5 x y 50 50))))))]
    (set! (.-setup p5) setup)
    (set! (.-draw p5) draw)))

(main)
