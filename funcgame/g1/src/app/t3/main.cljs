(ns app.t3.main
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require [cljs.core.async :as a]
            [clojure.set :as s]))


(defn updatePlayerInput [ctx]
  (reduce
    (fn [ctx key]
      (if-not (contains? (:keyPressed ctx) key)
        ctx
        (condp = key
          "w"
          (update-in ctx [:player :pos] (partial map + [0 -1]))

          "s"
          (update-in ctx [:player :pos] (partial map + [0 1]))
          
          "a"
          (update-in ctx [:player :pos] (partial map + [-1 0]))
          
          "d"
          (update-in ctx [:player :pos] (partial map + [1 0]))
          
          "j"
          (update-in ctx [:entities] #(conj % {:flag #{:playerBullet} :pos (get-in ctx [:player :pos]) :velocity [10 0]}))
          
          ctx)))
    ctx
    ["w" "a" "s" "d" "j"]))

(defn updatePlayerThrust [ctx]
  (update-in ctx [:player :pos] (partial map + [1 0])))

(defn updateKey [ctx]
  (merge ctx {:keyPressed (s/difference (:keyPressed ctx) (:keyReleased ctx))
              :keyReleased #{}}))

(defn updateCamera [ctx]
  (update-in ctx [:camera :pos] (partial map + [1 0])))

(defn updateVelocity [entity]
  (if-not (contains? entity :velocity)
    entity
    (update-in entity [:pos] (partial map + (:velocity entity)))))

(defn updateEntities [ctx]
  (merge ctx {:entities (map updateVelocity (:entities ctx))}))

(defn removeEntityIfOutOfBound [ctx]
  (let [[cx _] (get-in ctx [:camera :pos])
        entities (:entities ctx)]
    (merge ctx {:entities (filter 
                            (fn [{[x _] :pos :as entity}]
                              (and (< x (+ cx 500))
                                   (> x (- cx 100))))
                            entities)})))

(defn spawnEnemy [ctx]
  (let [spawnPos [[1 1 1 1 0 0 0 0]
                  [0 0 0 0 1 1 1 1]
                  [0 0 0 0 0 0 0 0]
                  [0 0 0 0 1 1 1 1]
                  [1 1 1 1 0 0 0 0]]
        [cx _] (get-in ctx [:camera :pos])
        c (int (/ cx 50))
        rcs (for [r (range 5)] [r c (get-in spawnPos [r c])])
        spawnRcs (filter #(< 0 (nth % 2)) rcs)
        spawnRcsOnce (s/difference (set spawnRcs) (:mark ctx))
        spawnEnemies (map (fn [[r c]] {:pos [(+ cx 200) (* r 30)] :velocity [-1 0]}) spawnRcsOnce)]
    (merge ctx {:mark (s/union (:mark ctx) (set spawnRcs))
                :entities (concat (:entities ctx) spawnEnemies)})))

(defn update [ctx]
  (let [{player :player} ctx
        [px py pr] (:pos player)]
    (-> ctx 
        updatePlayerInput
        updatePlayerThrust
        updateEntities
        removeEntityIfOutOfBound
        spawnEnemy
        updateCamera
        updateKey)))

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
    ; (.log js/console (clj->js ctx))
    (let [e (a/<! evt)]
      (condp = (:type e)
        :keyPressed
        (recur (update-in ctx [:keyPressed] conj (:key e)))
        
        :keyReleased
        (recur (update-in ctx [:keyReleased] conj (:key e)))
        
        (recur (update ctx)))))
  
  (let [p5 js/window
        projectionFn (partial projection {:view [50 200]})]
    (set! (.-setup p5)
      (fn []
        (let [canvas (.createCanvas p5 600 400)]
          (.parent canvas "container"))))
    
    (set! (.-draw p5)
      (fn []
        (when model
          (let [[px py] (->> (get-in model [:player :pos]) (projectionFn (get-in model [:camera :pos])))]
            (.fill p5 255)
            (.rect p5 0 0 599 399)
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
