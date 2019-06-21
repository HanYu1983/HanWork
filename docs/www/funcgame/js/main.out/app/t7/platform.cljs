(ns app.t7.platform
  (:require-macros [app.t7.macro :as m])
  (:require [app.t7.tool]))

(def cw 50)
(def ch 50)
(def data [[0 0 0 0 0]
           [0 0 1 0 0]
           [1 1 1 1 1]])

(defn boxCorner [[x y] [w h]]
  [[x y] [(+ x w) y] [(+ x w) (+ y h)] [x (+ y h)]])

(m/defnx collideWall [:position :size] [{[x y :as pos] :position [w h :as size] :size :as self}]
  (let [[c r] (map (comp (.-floor js/Math) /) pos [cw ch])
        [lt rt rb lb :as corners] (boxCorner pos size)
        walls (for [c corners] 
                 (->> (map (comp (.-floor js/Math) /) c [cw ch])
                      reverse
                      (get-in data)
                      (= 1)))]
    (reduce 
      (fn [self [corner wall?]]
        (if (not wall?)
          self
          (condp = corner
            lt
            (update-in self [:position] 
              (fn [[x y]]
                [(* (inc c) cw) y]))
            
            lb
            (update-in self [:position] 
              (fn [[x y]]
                [x (- (* (inc r) ch) h)]))
            
            rt
            (update-in self [:position] 
              (fn [[x y]]
                [(- (* (inc c) cw) w) y]))
            
            rb
            (update-in self [:position] 
              (fn [[x y]]
                [x (- (* (inc r) ch) h)]))
            
            self)))
      self
      (map vector corners walls))))

(defn draw [p]
  (doall
    (doseq [y (range (count data)) 
            x (range (count (first data)))]
      (let [val (get-in data [y x])
            color (if (= 1 val) 100 255)]
        (.fill p color)
        (.rect p (* x cw) (* y ch) cw ch)))))
