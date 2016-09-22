(ns test8)
; 以下程式只是將Scala養魚程式用clojure來表現，程式碼說明請看Scala版本
(def people
  #{:people-English
    :people-Sweden
    :people-Denmark
    :people-Norway
    :people-Germany})
(def color
  #{:color-red
    :color-white
    :color-green
    :color-yellow
    :color-blue})
(def pet
  #{:pet-bird
    :pet-dog
    :pet-horse
    :pet-cat
    :pet-fish})
(def drink
  #{:drink-tea
    :drink-coffee
    :drink-milk
    :drink-water
    :drink-beer})
(def smoke
  #{:smoke-pallMall
    :smoke-dunhill
    :smoke-blends
    :smoke-blueMaster
    :smoke-prince})
(defrecord House [people color pet drink smoke])
(defn rule1
  "英国人住红色房子"
  [group]
  (some #(and (= (:color %) :color-red) (= (:people %) :people-English)) group))
(defn rule2
  "瑞典人养狗"
  [group]
  (some #(and (= (:people %) :people-Sweden) (= (:pet %) :pet-dog)) group))
(defn rule3
  "丹麦人喝茶"
  [group]
  (some #(and (= (:people %) :people-Denmark) (= (:drink %) :drink-tea)) group))
(defn rule4
  "绿房子紧挨着白房子，在白房子的左边"
  [group]
  (let [whiteHouse (first (filter #(= (:color %) :color-white) group))
        wid (.indexOf group whiteHouse)]
    (if (= wid 0)
      false
      (let [leftHouse (nth group (dec wid))]
        (= (:color leftHouse) :color-green)))))
(defn rule5
  "绿色房子主人喝咖啡"
  [group]
  (let [greenHouse (first (filter #(= (:color %) :color-green) group))]
    (= :drink-coffee (:drink greenHouse))))
(defn rule6
  "抽PallMall香烟的人养鸟"
  [group]
  (let [smokePallMall (first (filter #(= (:smoke %) :smoke-pallMall) group))]
    (= :pet-bird (:pet smokePallMall))))
(defn rule7
  "黄色房子主人抽Dunhill香烟"
  [group]
  (let [yellowHouse (first (filter #(= (:color %) :color-yellow) group))]
    (= :smoke-dunhill (:smoke yellowHouse))))
(defn rule8
  "住在中间房子的人喝牛奶"
  [group]
  (let [center (nth group 2)]
    (= :drink-milk (:drink center))))
(defn rule9
  "挪威人住第一间房"
  [group]
  (let [target (first (filter #(= (:people %) :people-Norway) group))]
    (= 0 (.indexOf group target))))
(defn rule10
  "抽Blends香烟的人住在养猫的人隔壁"
  [group]
  (let [smoke (first (filter #(= (:smoke %) :smoke-blends) group))
        cat (first (filter #(= (:pet %) :pet-cat) group))]
    (= 1 (Math/abs (- (.indexOf group smoke) (.indexOf group cat))))))    
(defn rule11
  "养马的人住抽Dunhill香烟的人隔壁"
  [group]
  (let [horse (first (filter #(= (:pet %) :pet-horse) group))
        dunhill (first (filter #(= (:smoke %) :smoke-dunhill) group))]
    (= 1 (Math/abs (- (.indexOf group horse) (.indexOf group dunhill))))))    
(defn rule12
  "抽BlueMaster的人喝啤酒"
  [group]
  (let [blueMaster (first (filter #(= (:smoke %) :smoke-blueMaster) group))]
    (= :drink-beer (:drink blueMaster))))
(defn rule13
  "德国人抽Prince香烟"
  [group]
  (let [target (first (filter #(= (:people %) :people-Germany) group))]
    (= :smoke-prince (:smoke target))))
(defn rule14
  "挪威人住蓝色房子隔壁"
  [group]
  (let [t1 (first (filter #(= (:people %) :people-Norway) group))
        t2 (first (filter #(= (:color %) :color-blue) group))]
    (= 1 (Math/abs (- (.indexOf group t1) (.indexOf group t2))))))   
(defn rule15
  "抽Blends香烟的人有一个喝水的邻居"
  [group]
  (let [target (first (filter #(= (:smoke %) :smoke-blends) group))
        tid (.indexOf group target)
        pid (Math/max 0 (- tid 1))
        nid (Math/min (dec (count group)) (+ tid 1))
        phouse (nth group pid)
        nhouse (nth group nid)
        find (filter #(= :drink-water (:drink %)) [phouse nhouse])]
    (not (empty? find))))
(defn calcScore
  [group fns]
  (reduce #(+ %1 (if (%2 group) 1 0)) 0 fns))
(defn changeHouse [group]
  (loop [newGroup []
         oldGroup group]
    (if (empty? oldGroup)
      newGroup
      (let [select (rand-nth oldGroup)]
        (recur (conj newGroup select) (remove #(= % select) oldGroup))))))
(defn changeProperty [group]
  (let [a (rand-nth group)
        b (rand-nth group)]
    (if (= a b)
      (recur group)
      (let [propName (rand-nth [:people :color :pet :drink :smoke])
            na (assoc a propName (get b propName))
            nb (assoc b propName (get a propName))
            ia (.indexOf group a)
            step1 (concat
                    (filter #(< (.indexOf group %) ia) group)
                    [na]
                    (filter #(> (.indexOf group %) ia) group))
            ib (.indexOf step1 b)
            step2 (concat
                    (filter #(< (.indexOf step1 %) ib) step1)
                    [nb]
                    (filter #(> (.indexOf step1 %) ib) step1))]
        step2))))
(defn initGroup []
  (reduce #(conj %1 (House. (nth (seq people) %2)
                            (nth (seq color) %2)
                            (nth (seq pet) %2)
                            (nth (seq drink) %2)
                            (nth (seq smoke) %2))) [] (range 5)))
(defn mutate [group]
  (let [v (rand-int 10)]
    (cond
      (> v 8) (changeHouse group)
      :else (changeProperty group))))
(defn findResult [group]
  (first (filter #(= (:pet %) :pet-fish) group)))
(defn alg
  ([group fns]
    (let [score (calcScore group fns)]
      (alg group score fns 0)))
  ([group score fns calcCount]
    (if (= score (count fns))
      [calcCount (:people (findResult group)) group]
      (if (= calcCount 2000000)
        "result not found"
        (let [newGroup (mutate group)
              newScore (calcScore newGroup fns)]
          (if (or (> newScore score) (< (rand-int 10) 1))
            (recur newGroup newScore fns (inc calcCount))
            (recur group score fns (inc calcCount))))))))

(def fns [rule1 rule2 rule3 rule4 rule5 rule6 rule7 rule8 rule9 rule10 rule11 rule12 rule13 rule14 rule15])
(dotimes [idx 2] (time (println (alg (initGroup) fns))))

(comment "[1194111 :people-Germany (#test8.House{:people :people-Norway, :color :color-yellow, :pet :pet-cat, :drink :drink-water, :smoke :smoke-dunhill} #test8.House{:people :people-Denmark, :color :color-blue, :pet :pet-horse, :drink :drink-tea, :smoke :smoke-blends} #test8.House{:people :people-English, :color :color-red, :pet :pet-bird, :drink :drink-milk, :smoke :smoke-pallMall} #test8.House{:people :people-Germany, :color :color-green, :pet :pet-fish, :drink :drink-coffee, :smoke :smoke-prince} #test8.House{:people :people-Sweden, :color :color-white, :pet :pet-dog, :drink :drink-beer, :smoke :smoke-blueMaster})]
\"Elapsed time: 391471.341049 msecs\"
[1870647 :people-Germany (#test8.House{:people :people-Norway, :color :color-yellow, :pet :pet-cat, :drink :drink-water, :smoke :smoke-dunhill} #test8.House{:people :people-Denmark, :color :color-blue, :pet :pet-horse, :drink :drink-tea, :smoke :smoke-blends} #test8.House{:people :people-English, :color :color-red, :pet :pet-bird, :drink :drink-milk, :smoke :smoke-pallMall} #test8.House{:people :people-Germany, :color :color-green, :pet :pet-fish, :drink :drink-coffee, :smoke :smoke-prince} #test8.House{:people :people-Sweden, :color :color-white, :pet :pet-dog, :drink :drink-beer, :smoke :smoke-blueMaster})]
\"Elapsed time: 611640.400662 msecs\"")