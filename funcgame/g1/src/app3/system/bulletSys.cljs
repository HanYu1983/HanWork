(ns app3.system.bulletSys
  (:require-macros [app3.macros :as m])
  (:require [app3.emitter :refer [send]]))

(m/defsys checkBulletHitPlayer
  :update []
  (m/lete [players [:player]
           enemies [:enemy]
           bullets [:bullet]]
          (let [collides (->>
                          (for [o1 (concat players enemies)
                                o2 bullets]
                            [[o1 o2] (let [fromPlyrId (get-in o2 [:from :id])
                                           toId (:id o1)
                                           shouldIgnore (= fromPlyrId toId)]
                                       (if shouldIgnore
                                         false
                                         (app3.tool/checkCollide (:position o1) (:position o2) 30)))])
                          (filter (fn [[_ isCollide]] isCollide))
                          (map first))]
            (if (> (count collides) 0)
              (let [hitPlyrs (map first collides)
                    hitBullets (map second collides)
                    plyrGroup (group-by identity hitPlyrs)
                    plyrs (keys plyrGroup)
                    hitCounts (map count (vals plyrGroup))]
                (->> model
                     ((fn [model]
                        (update model :entities (fn [origin]
                                                  (->> origin
                                                       (replace (zipmap hitBullets (repeat nil)))
                                                       (replace (zipmap plyrs (map
                                                                               (fn [e hitCnt]
                                                                                 (-> e
                                                                                     (assoc :hp (-> (:hp e)
                                                                                                    (- (* 10 hitCnt))
                                                                                                    (max 0)))))
                                                                               plyrs
                                                                               hitCounts)))
                                                       (filter (comp not nil?)))))))
                     (send [:bulletCollidePlayer collides])))
              model))))

(m/defsys removeBullet
  :update []
  (m/lete [bullets [:bullet]]
          (let [outBullets (filter
                            (fn [{[x y] :position maxFlyLength :flyLength :as bullet}]
                              (let [fly (-> (map - [x y] (get-in bullet [:from :position]))
                                            (app3.tool/length))]
                                (or (> fly maxFlyLength)
                                    (< x 0)
                                    (> x 600)
                                    (< y 0)
                                    (> y 600))))
                            bullets)]
            (if (> (count outBullets) 0)
              (do (send [:bulletHitWall outBullets] nil)
                  (update model :entities (fn [origin]
                                            (->> origin
                                                 (replace (zipmap outBullets (repeat nil)))
                                                 (filter (comp not nil?))))))
              model))))
