(ns app3.system.ai
  (:require-macros [app3.macros :as m])
  (:require [app3.interface.player]
            [app3.qlearning :as q]))

(def brainMode :fast)


(m/defsys updateBrain
  :update []
  (m/lete [plyrs [:brain]]
          (let [targets (map (partial app3.interface.player/target nil model) plyrs)
                nextPlyrs (map (partial app3.interface.player/updateBrain brainMode model) targets plyrs)]
            (update model :entities (partial replace (zipmap plyrs nextPlyrs))))))


(m/defsys syncBrainAction
  :update []
  (m/docom {brain :brain}
           (let [[move hand] (:lastAction brain)]
             (if (and hand move)
               (let [handAction {:normal nil
                                 :attack :fire}
                     moveAction {:normal nil
                                 :attack :seek
                                 :evade :evade
                                 :findWeapon :seekWeapon
                                 :findHealing :seekHealing}
                     actions (->> (map vals [handAction moveAction])
                                  (reduce concat)
                                  (filter (comp not nil?))
                                  (into #{}))]
                 (update entity :action (fn [origin]
                                          (-> origin
                                              (clojure.set/difference actions)
                                              (clojure.set/union #{(hand handAction) (move moveAction)})))))
               entity))))


(m/defsys brainReward
  ; change to :update for test
  :update2 []
  (m/lete [plyrs [:brain]]
          (let [nextPlyrs (->> (map :brain plyrs)
                               (map (fn [{:keys [lastAction] :as brain}]
                                      (let [updateFn (cond
                                                       (not (= [:normal :normal] lastAction)) identity
                                                       true (fn [o] (+ o 1000)))]
                                        (q/updateR brain updateFn))))
                               (map (fn [plyr brain]
                                      (merge plyr {:brain brain}))
                                    plyrs))]
            (update model :entities (partial replace (zipmap plyrs nextPlyrs)))))

  :update []
  (m/lete [plyrs [:brain]]
          (let [nextPlyrs (->> (map :brain plyrs)
                               (map #(q/updateR % inc))
                               (map #(merge % {:brain %2}) plyrs))]
            (update model :entities (partial replace (zipmap plyrs nextPlyrs)))))

  :died [plyr]
  (let [plyr (first (filter #(= (:id %) (:id plyr)) (:entities model)))
        enemy (app3.interface.player/target nil model plyr)]
    (if plyr
      (let [nextPlyr (merge plyr {:brain (q/updateR (:brain plyr) (fn [o] (- o 1000)))})
            nextEnemy (merge enemy {:brain (q/updateR (:brain enemy) (fn [o] (+ o 0)))})]
        (update model :entities (partial replace {plyr nextPlyr enemy nextEnemy})))
      model))

  ; 沒有使用
  :moveCost_xxxx [plyr len]
  (let [plyr (first (filter #(= (:id %) (:id plyr)) (:entities model)))]
    (if plyr
      (let [nextPlyr (merge plyr {:brain (q/updateR (:brain plyr) (fn [o] (- o (/ len 100))))})]
        (update model :entities (partial replace {plyr nextPlyr})))
      model))

  :fire [plyr weapon isFireSuccess target]
  model

  :playerCollideHealing [originPlyr healing]
  (let [plyr (first (filter #(= (:id %) (:id originPlyr)) (:entities model)))]
    (if plyr
      (let [hpOffset (- (:hp plyr) (:hp originPlyr))
            nextPlyr (merge plyr {:brain (q/updateR (:brain plyr) (fn [o] (+ o (* 10 hpOffset))))})]
        (update model :entities (partial replace {plyr nextPlyr})))
      model))

  :playerCollideWeapon [plyr weapon]
  model

  :bulletCollidePlayer [collides]
  (let [hitBullets (map second collides)
        fromPlyrs (->> (map (fn [bullet]
                              (first (filter (fn [e] (= (get-in bullet [:from :id]) (:id e))) (:entities model))))
                            hitBullets)
                       (filter (comp not nil?)))
        fromGroup (group-by identity fromPlyrs)
        plyrs (keys fromGroup)
        hitCount (map count (vals fromGroup))
        nextPlyrs (->> (map :brain plyrs)
                       (map (fn [cnt brain]
                              (q/updateR brain (fn [o] (+ o (* 10 cnt)))))
                            hitCount)
                       (map (fn [plyr brain]
                              (merge plyr {:brain brain}))
                            plyrs))]
    (update model :entities (partial replace (zipmap plyrs nextPlyrs))))

  :bulletHitWall [bullets]
  (m/lete [brains [:brain]]
          (let [fromIds (map #(get-in % [:from :id]) bullets)
                idGroup (group-by identity fromIds)
                ids (keys idGroup)
                cnts (map count (vals idGroup))
                plyrs (map (fn [target]
                             (-> (filter #(= (:id %) target) brains)
                                 first))
                           ids)
                nextPlyrs (map
                           (fn [plyr cnt]
                             (merge plyr {:brain (q/updateR (:brain plyr)
                                                            (fn [o] (+ o (- (* cnt 10)))))}))
                           plyrs
                           cnts)]
            (update model :entities (partial replace (zipmap plyrs nextPlyrs))))))
