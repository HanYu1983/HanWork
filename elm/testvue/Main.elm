module Main where

import Native.Main
import Task exposing (..)
import Signal
---- 原生方法 ----
log : String -> Task x ()
log = Native.Main.log

---- 外部控制 ----
-- 初始設定
-- 前端一開始呼叫
port init : Signal String
-- 遊戲暫停
-- 沒有作用，只是為了示範
port pause : Signal String
port setMoney : Signal Int
---- 遊戲領域模型 ----
-- 輸入指令
type Input = InputInit String | InputPause String | InputSetMoney Int
-- 遊戲資料
type alias Model = { money: Int }
-- 遊戲事件
-- Input 經由 processTask 發送 Action
-- 再由model來處理Action
type Action = EmptyAction | InputAction Input
-- 遊戲事件的郵箱
actionMailbox : Signal.Mailbox Action
actionMailbox = Signal.mailbox EmptyAction

---- 主程式 ----
-- 初始狀態
defaultModel : Model
defaultModel = { money = 0 }
-- 主要輸入的指令事件流
-- 匯集所有指令事件
input : Signal Input
input = 
  Signal.mergeMany [
    init |> Signal.map (\n -> InputInit n),
    pause |> Signal.map (\n -> InputPause n),
    setMoney |> Signal.map (\n -> InputSetMoney n)
  ]
-- 處理遊戲的副作用
-- Input 經由 processTask 發送 Action
-- 注意：回傳類型是Task x ()，代表你可以做任何事情
port processTask : Signal (Task x ())
port processTask = 
  input |> Signal.map (\action -> 
    case action of
      InputInit s -> log s
      InputPause s -> log s
      InputSetMoney money -> Signal.send actionMailbox.address (InputAction (InputSetMoney money))
  )
-- 主迴圈
-- 純粹函式
-- 由外部定閱這個port來接收資料
-- 每一次變化都會觸發這個signal
port model : Signal Model
port model = 
  Signal.foldp (\cmd model->
    case cmd of
      EmptyAction -> model
      InputAction input -> 
        case input of
          InputInit s -> model
          InputPause s -> model
          InputSetMoney money -> {model | money = money}
  ) defaultModel actionMailbox.signal

-- Json.Encode.object [("money", Json.Encode.int m.money)])