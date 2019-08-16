(ns app3.macros)

(defmacro defdocom [name coms & body]
  `(defn ~name [~'model ~'entity]
    (if (app3.tool/checkProperty ~(into [] (vals coms)) ~'entity)
     (let [~coms ~'entity] ~@body)
     ~'model)))

(defmacro defsys [name & conds]  
  (list 'defn name ['model 'event]    
    (->>
         (list 'condp '= (list 'first 'event))
         list
         (map
           (fn [syntax]
             (reduce
               (fn [syntax [action args body]]
                 (concat syntax [action `(let [~args (rest ~'event)] ~body)]))
               syntax            
               (partition 3 conds))))
         (map
           (fn [syntax]
             (concat syntax ['model])))
         first)))

(defmacro docom [coms & body]
  `(let [~'entities (:entities ~'model)
         ~'origin (filter (partial app3.tool/checkProperty ~(into [] (vals coms))) ~'entities)
         ~'next (map (fn [~(merge coms {:as 'entity})] ~@body) ~'origin)]
    (update ~'model :entities (partial replace (zipmap ~'origin ~'next)))))

(defmacro lete [pairs & body]
  (list 'let
    (->>
         (partition 2 pairs)
         (reduce 
           (fn [syntax [var coms]]
             (concat syntax [var `(filter (partial app3.tool/checkProperty ~coms) (:entities ~'model))]))
           '())
         (into []))
    `(do ~@body)))

(defmacro requireJs [fns module]
  (concat 
    ['do]
    (map 
      (fn [f] (list 'def f (-> (str "js/" module "." f) symbol)))
      fns)))


(defmacro defPlayerCollide [name target modifyPlayer]
  `(defsys ~name
    :update []
    (lete [~'players [:player]
           ~'enemies [:enemy]
           ~'others [:position ~target]]
      (let [~'collides (->>
                          (for [~'o1 (concat ~'players ~'enemies)
                                ~'o2 ~'others]
                            [[~'o1 ~'o2] (app3.tool/checkCollide (:position ~'o1) (:position ~'o2) 50)])
                          (filter (fn [[~'_ ~'isCollide]] ~'isCollide))
                          (map first))]
        (if (> (count ~'collides) 0)
          (let [[~'plyr ~'other] (first ~'collides)]
            (->> ~'model
                 ((fn [~'model]
                    (update ~'model :entities (fn [~'origin] 
                                               (->> ~'origin
                                                    (replace {~'plyr (~modifyPlayer ~'plyr ~'other)})
                                                    (filter (comp not (partial = ~'other))))))))
                 (app3.emitter/send [~(-> (str "playerCollide" (clojure.string/capitalize (subs (str target) 1))) keyword) ~'plyr ~'other])))
          ~'model)))))

(defmacro canUseJavaClass []
  (let [buf (java.lang.StringBuffer.)]
    (.append buf "dde")
    (.append buf "ddee")
    (.toString buf)))