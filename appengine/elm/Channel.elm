module Channel where

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Signal
import Debug
import Http
import Task exposing (..)
import Json.Decode exposing (..)
import Native.Channel

type Action = 
  NoAction
  | InputNameAction String
  | InputMessageAction String
  | ClickLoginAction
  | ClickSendMessage
  | LoginAction (Result String (Maybe String, String))
  | SendAction (Result String (Maybe String, Json.Decode.Value))
  | OnMessage String

---- Step1. 一切從Signal開始 ----
action : Signal.Mailbox Action
action = Signal.mailbox NoAction

---- Step2. 有了Signal，就能定義主事件流 ----
input : Signal Action
input = action.signal

---- Step3. 定義資料 ----
type alias Model = {
  user : String,
  token : String,
  msg : String,
  msgs : List String
}

defaultModel : Model
defaultModel = { 
  user = "",
  token = "",
  msg = "",
  msgs = []}

---- Step4. 定義資料更新方法 ----
update : Action -> Model -> Model
update act model = 
  -- 剛好有共通的Pattern
  -- 都是先送http get > 解碼 > 送出Action (Result x y)
  -- 所以只要將decoder和action的建構子參數化就可以重構成方法
  let callUrlAndDecodeAndSendAction decoder actionConstructor url=
    let
      decodeResult = 
        Task.map (decodeString decoder)
      sendToAction task=
        Task.andThen task (\value -> Signal.send action.address (actionConstructor value))
    in
      url
        |> Http.getString 
        |> decodeResult
        |> sendToAction
  in
    case act of
      NoAction -> model
      InputNameAction name -> { model | user = Debug.log "name:" name }
      InputMessageAction msg -> { model | msg = Debug.log "msg:" msg }
      ClickLoginAction -> 
        model
          |> performBackground (\_ -> 
            let
              makeUrl user =
                Http.url "go/channel/login" [("user", user)]
            in
              model.user 
                |> makeUrl 
                |> callUrlAndDecodeAndSendAction parseUserResult LoginAction
          )
      ClickSendMessage ->
        model
          |> performBackground (\_ -> 
            let
              makeUrl {user, msg} =
                Http.url "go/channel/sendMessage" [("user", user), ("msg", msg)]
            in
              model
                |> makeUrl 
                |> callUrlAndDecodeAndSendAction parseOnlyError SendAction
          )
      LoginAction result ->
        case result of
          Ok (err, token) -> 
            case err of 
              Just msg ->
                model |> alert ("err:" ++ msg)
              Nothing ->
                {model | token = token} 
                  |> alert "登入成功"
                  |> createChannel token (\msg -> 
                    Signal.send action.address (OnMessage msg)
                  )
          Err err -> model |> alert err
      SendAction result ->
        case result of
          Ok (err, token) -> 
            case err of 
              Just msg ->
                model |> alert ("err:" ++ msg)
              Nothing ->
                model
          Err err -> model |> alert err
      OnMessage msg -> {model | msgs = msg :: model.msgs} |> log msg

---- Step5. 串接Signal Action事件流到Model ----
model : Signal Model
model = Signal.foldp update defaultModel input

---- Step6. 定義視覺 ----
view : Model -> Html
view model = 
  let sendAction address constructor value = 
    Signal.message address (constructor value)
  in
    div [] [
      div [class "panel panel-default"] [
        div [class "row"] [
          div [class "col-sm-10"] [
            Html.input [
              class "form-control",
              on "keyup" targetValue (sendAction action.address InputNameAction)
            ] []
          ],
          div [class "col-sm-2"] [
            Html.button [
              class "btn btn-primary",
              on "click" targetValue (\_ -> Signal.message action.address ClickLoginAction)
            ] [text "Login"]
          ]
        ]
      ],
      div [class "panel panel-default"] [
        div [class "row"] [
          div [class "col-sm-10"] [
            Html.input [
              class "form-control",
              on "keyup" targetValue (sendAction action.address InputMessageAction)
            ] []
          ],
          div [class "col-sm-2"] [
            Html.button [
              class "btn btn-primary",
              on "click" targetValue (\_ -> Signal.message action.address ClickSendMessage)
            ] 
            [text "Send"]
          ]
        ],
        div [class "row list-group"] 
        (messageView model.msgs)
      ]
    ]

---- Step7. 將資料接到視覺，寫出main ----
main : Signal Html
main = Signal.map view model

---- 輔助函式 ----
parseUserResult : Decoder (Maybe String, String)
parseUserResult = Json.Decode.tuple2 (,) (oneOf [null Nothing, Json.Decode.map Just string]) Json.Decode.string

{-| 這個函式我們只需要解 error message
所以將Tuple的第2毎參數就單純解成json value
是什麼類就不管它了
-}
parseOnlyError : Decoder (Maybe String, Json.Decode.Value)
parseOnlyError = Json.Decode.tuple2 (,) (oneOf [null Nothing, Json.Decode.map Just string]) Json.Decode.value

messageView : List String -> List Html
messageView = 
  List.map (\msg ->
    div [class "list-group-item"] [text msg]
  )

---- 橋接原生方法 ----
{-| 呼叫原生console.log
-}
log : msg -> x -> x
log = Native.Channel.log

{-| 呼叫原生alert 
-}
alert : msg -> x -> x
alert = Native.Channel.alert

{-| 這個方法非常重要
所有副作用就透過這個方法處理
使用這個方法讓Elm0.16沒有像Elm0.17那樣奇怪的subscriptions
-}
performBackground : (x -> Task err ()) -> y -> y
performBackground = Native.Channel.performBackground

{-| 建立appengine的channel
請參考Native/Channel.js
-}
createChannel : String -> (x -> Task err ()) -> y -> y
createChannel = Native.Channel.createChannel