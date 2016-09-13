-- 使用js函式當中可以寫副作用來假裝很純粹
module Main where

import Native.Main
import Task exposing (..)

-- 打印"加回傳"
-- 每一個假裝純粹的函式的最後一個參數都直接回傳
-- 將computation可以一直向下傳遞
log : msg -> x -> x
log = Native.Main.log

-- 背景執行"加回傳"
-- 一樣，最一個參數是computation，並回傳
performBackground : (x -> Task err ()) -> y -> y
performBackground = Native.Main.performBackground

-- 模擬背景工作，回等待1秒後回傳
somethingHttpRequest : Task x (String, String)
somethingHttpRequest = Native.Main.somethingHttpRequest

-- main 為Elm的進入點名稱，簽名規定是 Html, Signal Html, ...
-- 所以無法使用main，隨便改成另一個名字
index : Int
index = 
  -- 使用0當成computation
  0
    |> log "hello world"
    |> log "how are you"
    |> performBackground (\_->
      somethingHttpRequest
        `andThen` (\(x,y)->
          () |> log x |> log y |> succeed
        )
    )
    |> performBackground (\_->
      somethingHttpRequest 
        `andThen` (\(x,y)->
          () |> log "bye" |> succeed
        )
    )