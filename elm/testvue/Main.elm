module Main where

import Native.Main
import Task exposing (..)
import Signal
---- 原生方法 ----
log : String -> Task x ()
log = Native.Main.log

---- 外部橋接 ----
-- 初始設定
-- 外部一開始呼叫
port init : Signal String

-- 遊戲暫停
-- 沒有作用，只是為了示範
port pause : Signal String
port setMoney : Signal Int

-- 外部指令
type Call = CallInit String | CallPause String | CallSetMoney Int

-- 匯集所有外部指令
call : Signal Call
call = 
  Signal.mergeMany [
    init |> Signal.map (\n -> CallInit n),
    pause |> Signal.map (\n -> CallPause n),
    setMoney |> Signal.map (\n -> CallSetMoney n)
  ]

-- 遊戲事件
-- 所有外部指令會經過 processTask 處理成 Action
-- 再由 model 來處理 Action
type Action = NoAction | SetMoneyAction Int

-- 遊戲事件的郵箱
-- 定一個郵箱來接收 Action
-- 遊戲會從這個 signal 取得事件
actionMailbox : Signal.Mailbox Action
actionMailbox = Signal.mailbox NoAction

-- 橋接的主要部分
-- 將外部指令處理成遊戲指令
-- 注意：回傳類型是Task x ()，代表你可以做任何事情－比如讀檔
port processTask : Signal (Task x ())
port processTask = 
  call |> Signal.map (\action -> 
    case action of
      CallInit s -> log s
      CallPause s -> log s
      CallSetMoney money -> 
        Signal.send actionMailbox.address (SetMoneyAction money)
  )
  
---- 主程式 ----
-- 遊戲資料
type alias Model = { money: Int }

-- 初始狀態
defaultModel : Model
defaultModel = { money = 0 }

-- 主迴圈
-- 純粹函式
-- 由外部定閱這個port來接收資料
-- 每一次變化都會觸發這個signal
port model : Signal Model
port model = 
  Signal.foldp (\cmd model->
    case cmd of
      NoAction -> model
      SetMoneyAction money -> {model | money = money}
  ) defaultModel actionMailbox.signal

-- Json.Encode.object [("money", Json.Encode.int m.money)])