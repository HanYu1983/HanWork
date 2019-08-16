(ns app3.qlearning)

; 這段放在cljs裡的話會stackOverflow, 所以改用java環境跑就沒問題
(defmacro states []
  (into []
        (for [hp [:low :mid :high]
              weapon [:fist :gun :meleeGun]
              bulletCount [:low :mid :high]
              enemyHp [:low :mid :high]
              enemyWeapon [:fist :gun :meleeGun]
              enemyBulletCount [:low :mid :high]
              distance [:low :mid :high]]
          {:hp hp
           :weapon weapon
           :bulletCount bulletCount
           :enemyHp enemyHp
           :enemyWeapon enemyWeapon
           :enemyBulletCount enemyBulletCount
           :distance distance})))