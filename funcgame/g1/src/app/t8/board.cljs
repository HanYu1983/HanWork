(ns app.t8.board)

(def board (->>
            (repeat 3 nil)
            (into [])
            (repeat 3)
            (into [])))

(def lines
  (let [hs (for [x (range 3)] [[0 x] [1 x] [2 x]])
        vs (for [y (range 3)] [[y 0] [y 1] [y 2]])
        x1  (for [x (range 3) y (range 3) :when (= x y)] [y x])
        x2 (for [x (range 3) y (range 3) :when (= 2 (+ x y))] [y x])]
    (concat hs vs [x1] [x2])))

(defn checkWin [board player]
  (->> lines
       (map (fn [line]
              (every?
               (partial = player)
               (map (fn [pos]
                      (get-in board pos))
                    line))))
       (some true?)))

(defn possibleActions [board]
  (for [x (range 3) y (range 3) :when (->> (get-in board [y x]) nil?)]
    [y x]))
