(ns app.t6.main
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require [cljs.core.async :as a]))

(def p5 js/window)

(def cw 300)
(def ch 300)
(def w 10)
(def h 10)
(def gw (int (/ cw w)))
(def gh (int (/ ch h)))

(def mineCnt 10)
(def mine (->> 
               (concat 
                 (repeat mineCnt 1) 
                 (repeat (- (* w h) mineCnt) 0))
               shuffle
               (partition w)
               (map (partial into []))
               (into [])))
(def cells (->>
                (for [y (range h) x (range w)]
                  (let [isMine (-> (get-in mine [y x]) (= 1))
                        borders (map 
                                  (partial map + [y x]) 
                                  [[-1 -1] [0 -1] [1 -1]
                                   [-1 0] [1 0]
                                   [-1 1] [0 1] [1 1]])
                        lazyBorderMineCnt (->>
                                               (map (partial get-in mine) borders)
                                               (filter (partial = 1)))]
                    (if isMine
                      9
                      (count lazyBorderMineCnt))))
                (partition w)
                (map (partial into []))
                (into [])))

(defn flag [[r c :as rc] ctx]
  (let [s (get-in ctx [:states r c])]
    (condp = s
      :close
      (update-in ctx [:states r c] (constantly :flag))
      
      :flag
      (update-in ctx [:states r c] (constantly :close))
      
      ctx)))

(defn flip [[r c :as rc] ctx]
  (let [v (get-in ctx [:cells r c])
        s (get-in ctx [:states r c])]
    (if (= :open s)
      ctx
      (cond
        (nil? v)
        ctx
        
        (= 9 v)
        (update-in ctx [:gameState] (constantly :died))
        
        (= 0 v)
        (reduce
          (fn [ctx [r c :as offset]]
            (flip (map + offset rc) ctx))
          (update-in ctx [:states r c] (constantly :open))
          [[0 -1] [1 0] [0 1] [-1 0]])
        
        :else
        (update-in ctx [:states r c] (constantly :open))))))
      

(defn main []
  (def model nil)
  (def evt (a/chan))
  
  (am/go-loop [ctx {:cells cells
                    :states (->> :close
                                 (repeat (* w h))
                                 (partition w)
                                 (map (partial into []))
                                 (into []))
                    :gameState :play}]
    (set! model ctx)
    (let [e (a/<! evt)]
      (condp = (:type e)
        :mouseReleased
        (let [btn (get-in e [:info :btn])
              rc (get-in e [:info :rc])]
          (condp = btn
            :left
            (recur (flip rc ctx))
            
            :right
            (recur (flag rc ctx))
            
            (recur ctx)))
        
        :update
        (recur ctx)
        
        (recur ctx))))
  
  (set! (.-setup p5)
    (fn []
      (let [canvas (.createCanvas p5 cw ch)]
        (.parent canvas "container"))))
  
  (set! (.-draw p5)
    (fn []
      (.fill p5 255)
      (.stroke p5 0)
      (.rect p5 0 0 cw ch)
      (when model
        (dorun
          (for [y (range h)
                x (range w)]
            (let [v (get-in model [:cells y x])
                  s (get-in model [:states y x])]
              (condp = s
                :close
                (do
                  (.fill p5 255)
                  (.rect p5 (* x gw) (* y gh) gw gh))
                
                :open
                (do
                  (.fill p5 255)
                  (.rect p5 (* x gw) (* y gh) gw gh)
                  (.fill p5 255 0 0)
                  (.text p5 v (* x gw) (+ 12 (* y gh))))
                
                :flag
                (do
                  (.text p5 "flag" (* x gw) (+ 12 (* y gh))))))))
        
        (when (= :died (:gameState model))
          (.text p5 "DIED" (/ cw 2) (/ ch 2))))))
  
  (set! (.-mouseReleased p5)
    (fn []
      (am/go
        (let [mx (.-mouseX p5)
              my (.-mouseY p5)
              btn (.-mouseButton p5)
              c (int (/ mx gw))
              r (int (/ my gh))]
          (a/>! evt {:type :mouseReleased :info {:rc [r c] :btn (keyword btn)}})))))
  
  ; =====
  ; EVENT
  ; =====
  
  (js/setInterval
    (fn []
      (am/go
        (a/>! evt {:type :update})))
    33))

(main)
                      
                      
             
