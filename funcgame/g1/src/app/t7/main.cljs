(ns app.t7.main
  (:require [app.t7.platform :as p])
  (:require-macros [app.t7.55macro :as m]))

(def model (atom nil))

(m/defnx move [:position] [offset self]
  (update-in self [:position] (partial map + offset)))

(m/defnx gravity [:position :gravity] [{g :gravity :as self}]
  (update-in self [:position] (partial map + g)))

(m/defnx velocity [:position :velocity] [{v :velocity :as self}]
  (update-in self [:position] (partial map + v)))

(defn insideView [{pos :position}]
  (if (nil? pos)
    true
    (let [[x _] pos]
      (< x 250))))

(defn step [m]
  (merge m 
    {:entity (->> (map (comp p/collideWall gravity velocity) (:entity m))
                  (filter insideView))}))

(m/defnx drawBox [:position :size] [p {[x y] :position [w h] :size :as self}]
  (.fill p 255 0 0)
  (.rect p x y w h))

(m/defnx drawCircle [:position :radian] [p {[x y] :position radian :radian :as self}]
  (.fill p 0 255 0)
  (.circle p x y radian))

(defn sketch [p]
  (set! (.-setup p)
    (fn []
      (.createCanvas p 250 150)
      (println (p/collideWall {:position [130 60] :size [30 30]}))))
  
  (set! (.-draw p)
    (fn []
      (let [m @model
            entity (:entity m)
            draws (->> [drawBox drawCircle]
                       (map #(partial % p))
                       (reduce comp))]
        (.background p 0)
        (p/draw p)
        (doseq [e entity] 
          (draws e))))))

(defn main []
  (let [timer (-> (.timer js/rxjs 0 100)
                  (.pipe
                    (.map js/rxjs.operators (constantly [:update]))))
        click (-> (.fromEvent js/rxjs js/document "keydown")
                  (.pipe
                    (.map js/rxjs.operators (fn [e] [:keydown, e.key]))))
        evt (-> (.merge js/rxjs 
                  timer
                  click)
                (.pipe
                  (.scan js/rxjs.operators
                    (fn [m [evt args]]
                      (condp = evt
                        :keydown
                        (let [key args]
                          (condp = key
                            "a"
                            (let [players (filter :player (:entity m))
                                  newPlayers (map (partial move [-3 0]) players)]
                              (update-in m [:entity] (partial replace (zipmap players newPlayers))))
                            
                            "d"
                            (let [players (filter :player (:entity m))
                                  newPlayers (map (partial move [3 0]) players)]
                              (update-in m [:entity] (partial replace (zipmap players newPlayers))))
                            
                            "w"
                            (let [players (filter :player (:entity m))
                                  newPlayers (map (partial move [0 -20]) players)]
                              (update-in m [:entity] (partial replace (zipmap players newPlayers))))
                            
                            " "
                            (let [players (filter :player (:entity m))
                                  bullets (map (fn [{pos :position}] {:position pos :radian 3 :velocity [10 0]}) players)]
                              (update-in m [:entity] (partial concat bullets)))
                            
                            "s"
                            (let [players (filter :player (:entity m))
                                  bullets (map (fn [{pos :position}] {:position pos :size [5 5] :velocity [10 0]}) players)]
                              (update-in m [:entity] (partial concat bullets)))
                            
                            m))
                        :update (step m)
                        :default m))
                    {:entity [{:position [50 0] :size [30 30] :gravity [0 5] :player true} {:position [100 0] :size [30 30] :gravity [0 5] :player true}]})))]

    (.subscribe evt
      (fn [m]
        (reset! model m))))
  
  (js/p5. sketch "container"))

