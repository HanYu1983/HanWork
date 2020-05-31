(ns app.t9.main
  (:require [clojure.core.async :as a]
            [reagent.core :as r])
  (:require [app.t9.qlearning :as q]))

(defn train [atomModel atomOption]
  (let [seq1 (->> (range) (map #(mod % 10)))
        seq2 (->> (range) (map #(mod % 10)) (map #(- 9 %)))
        seq3 (->> (range) (map #(mod % 5)))]
    (a/go
      (loop [qmodel @atomModel
             [x y & s] seq1
             [x2 y2 & s2] seq2
             [x3 y3 & s3] seq3]
        (a/<! (a/timeout 250))
        (let [option @atomOption
              qmodel (cond
                       (= :seq1 (:select option))
                       ; qlearning可以用來預測模式, x透過"變成y的action"變成y
                       ; 之後再遇到x時, 就可以知道有可能變成y
                       (q/learn qmodel x y 1 y)
                       
                       (= :seq2 (:select option))
                       (q/learn qmodel x2 y2 1 y2)
                       
                       :else
                       (q/learn qmodel x3 y3 1 y3))]
          (reset! atomModel qmodel)
          (recur qmodel (cons y s) (cons y2 s2) (cons y3 s3)))))))


(defn predic [atomModel atomOption] 
  (let [state (r/atom nil)
        render (fn []
                 (let [s @state]
                   [:div
                    (str "qlearning可以用來預測模式, x透過'變成y的action'變成y"
                         "之後再遇到x時, 就可以知道有可能變成y")
                    [:br]
                    (str "從數字3開始預測")
                    [:br]
                    (str "seq1" [0 1 2 3 4 5 6 7 8 9])
                    [:br]
                    (str "seq2" [9 8 7 6 5 4 3 2 1 0])
                    [:br]
                    (str "seq3" [0 1 2 3 4 0 1 2 3 4])
                    [:br]
                    [:div
                     [:button {:on-click #(swap! atomOption (fn [origin] (assoc origin :select :seq1)))} "seq1"]
                     [:button {:on-click #(swap! atomOption (fn [origin] (assoc origin :select :seq2)))} "seq2"]
                     [:button {:on-click #(swap! atomOption (fn [origin] (assoc origin :select :seq3)))} "seq3"]]
                    (str "select " (:select @atomOption))
                    [:div (str "[" s "]")]]))]
    (a/go
      (loop []
        (let [qmodel @atomModel
              r (reductions (fn [c _]
                              (q/bestAction qmodel c (range 0 10)))
                            3
                            (range 10))]
          (reset! state r)
          (a/<! (a/timeout 1000))
          (recur))))

    (r/render [render]
              (.getElementById js/document "playground"))))


(defn main []
  (let [option (atom {:select :seq1})
        qmodel (atom (merge q/model {:learningRate 0.5
                                     :discountFactor 0.9}))
        _ (a/go (a/<! (train qmodel option)))
        _ (predic qmodel option)
        ]))
 
(main)