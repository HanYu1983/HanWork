(ns app3.playerImpl
  (:require-macros [app3.macros :as m])
  (:require [app3.interface.player]
            [app3.qlearning :as q]))


(defmethod app3.interface.player/target :default [_ model self]
  (m/lete [players [:player]
           enemies [:enemy]]
          (cond
            (:player self) (first enemies)
            (:enemy self) (first players)
            true (js/Error. "must have :player or :enemy"))))


(defmethod app3.interface.player/updateBrain :default [_ model target self]
  (let [brain (:brain self)
        lastState (:lastState brain)
        currState (q/mapState self target)
        isStateChange (not (= lastState currState))]
    (if isStateChange
      (let [action (q/selectAction brain currState)
            brain (q/updateQ brain currState action)]
        (merge self {:brain brain}))
      (let [offsetTime (- (-> (js/Date.) .getTime)
                          (:lastTime brain))]
        (if (> offsetTime 3000)
          (let [action (q/selectAction brain currState)
                brain (q/updateQ brain currState action)]
            (merge self {:brain brain}))
          self)))))

(defmethod app3.interface.player/updateBrain :fast [_ model target self]
  (let [brain (:brain self)
        lastState (:lastState brain)
        currState (q/mapState self target)]
    (let [action (q/selectAction brain currState)
          brain (q/updateQ brain currState action)]
      (merge self {:brain brain}))))