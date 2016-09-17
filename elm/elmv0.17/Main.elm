-- 如果程式裡有用到port
-- 則要在module前面加入port關鍵字
port module Main exposing (..)

import Html exposing (..)
import Task exposing (..)
import Html.App as App
import Debug exposing (..)
import Http exposing (..)
import Time exposing (..)

-- 本來的簽名是 anything 變成 anything -> Cmd msg
-- 就是多了 Cmd msg
port outmsg : String -> Cmd msg

-- 本來的簽名是 Signal anything 變成 (anything -> msg) -> Sub msg
-- Signal不存在了
port inmsg : (Int -> msg) -> Sub msg

type alias Model = Int

type Msg = 
  ResponseString String |
  ResponseError Error |
  TimeTick Time |
  In Int

-- 使用perform將任何外部處理的Task轉成內部的Cmd結果
performGetString : String -> Cmd Msg 
performGetString url = 
  perform 
    (\x -> ResponseError x)
    (\str -> ResponseString str)
    (getString url) -- getString 是 Task Error String

init : (Model, Cmd Msg)
init = (0, Cmd.none)

update : Msg -> Model -> (Int, Cmd Msg)
update msg model =
  case msg of
    ResponseString str -> (log str model, Cmd.none)
    ResponseError err -> (log "err" model, Cmd.none)
    TimeTick delta -> (log (toString delta) model, Cmd.none)
    -- 傳資訊到外部的port
    In 1 -> (model, performGetString "http://www.google.com")
    In n -> (log (toString n) model, outmsg ("from elm:" ++ (toString n)))

view : Model -> Html Msg
view model = 
  div [] []

-- subscriptions 大概可以想成是本來的 input signal
-- 但我還不知道怎麼操做 subscriptions 的事件流
subscriptions : Model -> Sub Msg
subscriptions model =
  Sub.batch [ 
    -- 以下這行等於every second (\delta -> TimeTick delta)
    every second TimeTick,
    -- 將外部port的事件接過來
    -- 以下這行等於inmsg (\n -> In n)
    inmsg In
  ]

-- 變成一定要使用 App.program
main =
  App.program
    { 
      init = init,
      view = view,
      update = update,
      subscriptions = subscriptions
    }

