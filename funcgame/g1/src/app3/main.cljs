(ns app3.main
  (:require-macros [app3.macros :as m])
  (:require [app3.tool]
            [app3.emitter :refer [inputOb send]]
            [app3.qlearning :as q]
            [app3.system.basic :refer [moveSystem
                                      boundPosition
                                      resetPlayerVelocity
                                      resetEnemyVelocity
                                      moveCostSystem
                                      dieSystem
                                      roundSystem]]
            [app3.system.weaponSys :refer [tickWeapon
                                          fireBullet
                                          playerCollideWeapon
                                          spawnWeapon]]
            [app3.system.bulletSys :refer [checkBulletHitPlayer
                                          removeBullet]]
            [app3.system.healingSys :refer [playerCollideHealing
                                           spawnHealing]]
            [app3.system.input :refer [playerController]]
            [app3.system.action :refer [actionController]]
            [app3.system.ai :refer [updateBrain
                                   syncBrainAction
                                   brainReward]]
            [app3.system.debug :refer [logSystem]]
            [app3.playerImpl]
            [app3.weapon.def]
            [app3.weapon.fist :refer [fist]]
            [app3.weapon.gun :refer [gun]]
            [app3.weapon.meleeGun :refer [meleeGun]]
            [reagent.core :as r]))

(m/requireJs [fromEvent timer Subject] rxjs)
(m/requireJs [mapTo scan] rxjs.operators)

(print (macroexpand '(m/defPlayerCollide playerCollideHealing :healing (fn [plyr] plyr))))

(def player {:id nil
             :hp 100
             :useWeapon fist
             :position [0 0]
             :velocity [0 0]
             :action #{}
             :radius 50})
(def box {:hp 200 :position [200 100] :radius 10})
(def healing {:position [0 0] :healing 0 :radius 10})
(def bullet {:from nil :position [0 0] :velocity [0 0] :radius 5 :power 0 :bullet 0})
(def model (atom nil))

(defn main []
  (print (m/canUseJavaClass))
  ; model
  (let [initialModel {:round 0
                      :playerWin 0
                      :enemyWin 0
                      :ticks 0
                      :entities [(merge player {:id (gensym)
                                                :player 0
                                                :brain q/qtable
                                                :position [50 300]})
                                 (merge player {:id (gensym)
                                                :radius 30
                                                :position [550 300]
                                                :enemy 0
                                                :brain q/qtable})
                                 (merge box {:healing 0})
                                 (merge gun {:position [200 200]})
                                 (merge meleeGun {:position [150 300]})]}
        ontick (-> (timer 0 0)
                   (.pipe
                    (mapTo [:update])))
        onkeydown (-> (fromEvent js/document "keydown")
                      (.pipe
                       (js/rxjs.operators.map (fn [e] [:keydown, e.key]))))
        onkeyup (-> (fromEvent js/document "keyup")
                    (.pipe
                     (js/rxjs.operators.map (fn [e] [:keyup, e.key]))))
        trigger (-> (timer 5000)
                    (.pipe
                     (mapTo [:playerCollideWeapon nil nil])))
        onSpawnHealing (-> (timer 0 1000)
                           (.pipe
                            (mapTo [:spawn :healing])))
        onSpawnWeapon (-> (timer 0 1000)
                          (.pipe
                           (mapTo [:spawn :weapon])))
        evtStream (-> (js/rxjs.merge ontick onkeydown onkeyup inputOb onSpawnHealing onSpawnWeapon)
                      (.pipe
                       (scan
                        (app3.tool/comduce [playerController
                                           actionController
                                           moveSystem
                                           ;moveCostSystem
                                           checkBulletHitPlayer
                                           playerCollideHealing
                                           playerCollideWeapon
                                           tickWeapon
                                           fireBullet
                                           updateBrain
                                           syncBrainAction
                                           brainReward
                                           removeBullet
                                           boundPosition
                                           resetPlayerVelocity
                                           resetEnemyVelocity
                                           spawnHealing
                                           spawnWeapon
                                           dieSystem
                                           roundSystem
                                           ;logSystem
                                           ])
                        initialModel)))

        testQlearn (-> (js/rxjs.merge ontick onkeydown)
                       (.pipe
                        (scan
                         (fn [model evt]
                           (-> model
                               (updateBrain evt)
                               (syncBrainAction evt)
                               (brainReward evt)))
                         {:entities [(merge player {:id (gensym) :player 0})
                                     (merge player {:id (gensym)
                                                    :radius 30
                                                    :position [400 50]
                                                    :enemy 0})]})))]

    (.subscribe evtStream (fn [m] (reset! model m)))
    (comment (.subscribe testQlearn (fn [m] (print m)))))


  ; view
  (defn sketch [p]
    (set! (.-setup p)
          (fn []
            (.createCanvas p 600 600)
            ; 在這裡定義函式將p閉包起來
            (m/defdocom drawCircle {pos :position radius :radius}
              (.fill p 255)
              (.circle p (first pos) (second pos) radius)
              model)

            (m/defdocom drawRect {pos :position size :size}
              (.rect p (first pos) (second pos) (first size) (second size))
              model)

            (m/defdocom drawWeapon {pos :position type :weapon}
              (.text p (str type) (first pos) (second pos))
              model)

            (m/defdocom drawState {pos :position}
              (.text p (str type) (first pos) (second pos))
              model)

            (m/defdocom drawUseWeapon {useW :useWeapon [x y] :position}
              (.fill p 0)
              (.text p (str (:weapon useW) " " (:bulletCount useW)) x y)
              model)

            (m/defdocom drawActionValue {brain :brain [x y] :position action :action}
              (.fill p 0)
              (.text p (str (:lastAction brain)) x (+ y 40))
              (.text p (str action) x (+ y 60))
              model)

            ; 這裡示範和model分離的視覺狀態.
            ; clojure也能很好的將功能切割(非純函數式), 使用atom
            (def drawHp
              (let [; 可以進一步將輸入由外部傳入(entities observable)
                    entities (-> (timer 0 33)
                                 (.pipe
                                  (js/rxjs.operators.map
                                   (fn []
                                     (filter (partial app3.tool/checkProperty [:id :hp :position]) (:entities @model))))))
                    view (atom nil)
                    _ (-> entities
                          (.pipe
                           (scan
                            (fn [a entities]
                              (reduce
                               (fn [a {:keys [id hp position] :as obj}]
                                 (let [old (get-in a [id :old])
                                       curr hp
                                       offset (- curr old)]
                                   (-> a
                                       (update-in [id :hp] (constantly hp))
                                       (update-in [id :position] (constantly position))
                                       (update-in [id :old] (partial + (/ offset 10))))))
                               a
                               entities))
                            {}))
                          (.subscribe (fn [m] (reset! view m))))]
                (fn []
                  (doseq [hp @view]
                    (let [barLen 100
                          [id {:keys [hp position old]}] hp
                          [x y] position
                          [x y] (map + position [-50 20])]
                      (.fill p 0)
                      (.rect p x y barLen 5)
                      (.fill p 255 0 0)
                      (.rect p x y (-> old (/ 100) (* barLen)) 5)
                      (.fill p 0 255 0)
                      (.rect p x y (-> hp (/ 100) (* barLen)) 5)
                      ;(.text p (str hp) x y)
                      (comment "end seq"))))))

            (defn drawRoundState []
              (let [m @model]
                (.fill p 0)
                (.text p (str "round: " (:round m)) 0 20)
                (.text p (str "playerWin: " (:playerWin m)) 0 40)
                (.text p (str "enemyWin: " (:enemyWin m)) 0 60)
                (.text p (str "ticks: " (:ticks m)) 0 80)))))

    (set! (.-draw p)
          (fn []
            (let [m @model
                  entities (:entities m)]
              (.fill p 255 255 255)
              (.rect p 0 0 600 600)
              (.fill p 0)
              (doall [(reduce
                       (app3.tool/comduce [drawCircle
                                          drawRect
                                          drawWeapon
                                          drawUseWeapon
                                          drawActionValue])
                       m
                       entities)])
              (drawHp)
              (drawRoundState)))))

  (js/p5. sketch "container")


  (let [m @model
        plyr (first (filter :player (:entities m)))]
    (doseq [[k v] (get-in plyr [:q])]))



  (let [tmodel (r/atom false)
        table (r/atom {})
        _ (-> (timer 0 5000)
              (.pipe
               (js/rxjs.operators.map
                (fn []
                  (first (filter :player (:entities @model)))))
               (js/rxjs.operators.map #(:brain %)))
              (.subscribe (fn [brain] (reset! table (:q brain)))))]

    (defn drawQtable []
      (let [tm @tmodel
            t @table]
        (if tm
          [:div 
           [:button {:on-click #(swap! tmodel not)} "close"]
           [:table {:border 1}
            [:tbody
             (for [[state sub] t
                   [action value] sub]
               ^{:key (str state " " action)}
               [:tr
                [:td (str state)]
                [:td (str action)]
                [:td {:style {:background-color (if (< value 0)
                                                  "red"
                                                  (if (> value 5)
                                                    "green"
                                                    "white"))}} (str value)]])]]]
          [:button {:on-click #(swap! tmodel not)} "open"])))

    (defn mountit []
      (r/render [drawQtable]
                (.getElementById js/document "qtable"))))

  (mountit)



  (print "start app xx2"))
