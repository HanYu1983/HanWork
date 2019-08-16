(ns app3.system.action
  (:require-macros [app3.macros :as m])
  (:require [app3.emitter :refer [send]]
            [app3.interface.player]
            [app3.interface.weapon]))

(m/defsys actionController
  :update []
  (m/docom {pos :position vel :velocity action :action}
    (cond-> entity
            (some (partial contains? action) [:up :left :down :right])
            ((fn [entity]
               (let [v (cond->> [0 0]
                                (contains? action :up) (map + [0 -10])
                                (contains? action :left) (map + [-10 0])
                                (contains? action :down) (map + [0 10])
                                (contains? action :right) (map + [10 0]))]
                 (merge entity {:velocity v}))))
            
            (contains? action :seek)
            ((fn [entity] 
               (let [self entity
                     target (app3.interface.player/target nil model self)]
                 (let [dir (app3.tool/seek (:position self) (:position target))
                       vel (app3.tool/makeLength 3 dir)]
                   (if (< (app3.tool/length dir) 50)
                     self
                     (merge self {:velocity vel}))))))
            
            (contains? action :evade)
            ((fn [entity]
               (let [self entity
                     target (app3.interface.player/target nil model self)]
                 (let [dir (app3.tool/seek (:position target) (:position self))
                       vel (app3.tool/makeLength 5 dir)]
                   (merge self {:velocity vel})))))
            
            (contains? action :fire)
            ((fn [entity]
               (let [self entity
                     weapon (:useWeapon self)]
                 (if weapon
                   (let [nextWeapon (app3.interface.weapon/fire weapon)
                         isFireSuccess (not (= weapon nextWeapon))
                         target (app3.interface.player/target nil model self)]
                     (send [:fire self weapon isFireSuccess target] nil)
                     (merge self {:useWeapon nextWeapon}))
                   self))))
            
            (contains? action :seekWeapon)
            ((fn [entity]
               (let [weapons (filter (partial app3.tool/checkProperty [:position :weapon]) (:entities model))
                     seekWeapon (first weapons)]
                 (if seekWeapon
                   (let [dir (app3.tool/seek pos (:position seekWeapon))
                         vel (app3.tool/makeLength 5 dir)]
                     (merge entity {:velocity vel}))
                   (merge entity {:action (clojure.set/difference action #{:seekWeapon})})))))
            
            (contains? action :seekHealing)
            ((fn [entity]
               (let [healing (filter (partial app3.tool/checkProperty [:position :healing]) (:entities model))
                     seekHealing (first healing)]
                 (if seekHealing
                   (let [dir (app3.tool/seek pos (:position seekHealing))
                         vel (app3.tool/makeLength 5 dir)]
                     (merge entity {:velocity vel}))
                   (merge entity {:action (clojure.set/difference action #{:seekHealing})}))))))))
