module HanLib.Tool where

import Native.HanLib.Tool
import Task exposing (..)
{-| 呼叫原生console.log
-}
log : msg -> x -> x
log = Native.HanLib.Tool.log

{-| 呼叫原生alert 
-}
alert : msg -> x -> x
alert = Native.HanLib.Tool.alert

{-| 這個方法非常重要
所有副作用就透過這個方法處理
使用這個方法讓Elm0.16沒有像Elm0.17那樣奇怪的subscriptions
-}
performBackground : (x -> Task err ()) -> y -> y
performBackground = Native.HanLib.Tool.performBackground