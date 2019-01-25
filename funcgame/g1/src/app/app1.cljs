(ns app.app1
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require [cljs.core.async :as a]))

(def model nil)

(defn sketchProc [pc]
  (def pg 0)
  
  (set! (.-setup pc) 
    (fn []
      (.size pc 200 200)
      (set! pg
        (.createGraphics pc 80 80 (.-P3D pc)))))
  
  (set! (.-draw pc)
    (fn []
      (.fill pc 0 12)
      (.rect pc 0 0 200 200)
      (.fill pc 255)
      (.noStroke pc)
      (.ellipse pc (.-mouseX pc) (.-mouseY pc) 60 60)
      
      (.beginDraw pg)
      (.background pg 102)
      (.noFill pg)
      (.stroke pg 255)
      (.ellipse pg (- (.-mouseX pc) 60) (- (.-mouseY pc) 60) 60 60)
      (.endDraw pg)
      (.image pc pg 60 60)
      
      (.text pc "woo" 10 10)
      (.text pc "Hello 5" 20 20)
      (if model
        (.text pc "model" 30 30)
        (.text pc "no model" 30 30))))
  
  (set! (.-mouseDragged pc)
    (fn [])))

(let [canvas (.getElementById js/document "canvas1")
      p (js/Processing. canvas sketchProc)])
