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

log : msg -> x -> x
log = Native.Channel.log

alert : msg -> x -> x
alert = Native.Channel.alert

performBackground : (x -> Task err ()) -> y -> y
performBackground = Native.Channel.performBackground

createChannel : String -> (x -> Task err ()) -> y -> y
createChannel = Native.Channel.createChannel

type Action = 
  NoAction
  | InputNameAction String
  | InputMessageAction String
  | ClickLoginAction
  | ClickSendMessage
  | LoginAction (Result String (Maybe String, String))
  | SendAction (Result String (Maybe String, Json.Decode.Value))
  | OnMessage String

{-| 一切從Singal開始
  -}
action : Signal.Mailbox Action
action = Signal.mailbox NoAction

input : Signal Action
input = action.signal

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

update : Action -> Model -> Model
update act model = 
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
            decodeResult = 
              Task.map (decodeString parseUserResult)
            sendToAction task=
              Task.andThen task (\value -> Signal.send action.address (LoginAction value))
          in
            model.user 
              |> makeUrl 
              |> Http.getString 
              |> decodeResult
              |> sendToAction
        )
    ClickSendMessage ->
      model
        |> performBackground (\_ -> 
          let
            makeUrl {user, msg} =
              Http.url "go/channel/sendMessage" [("user", user), ("msg", msg)]
            decodeResult = 
              Task.map (decodeString parseOnlyError)
            sendToAction task=
              Task.andThen task (\value -> Signal.send action.address (SendAction value))
          in
            model
              |> makeUrl 
              |> Http.getString 
              |> decodeResult
              |> sendToAction
        )
    LoginAction result ->
      case result of
        Ok (err, token) -> 
          case err of 
            Just msg ->
              model |> alert ("err:" ++ msg)
            Nothing ->
              {model | token = token} 
                |> log token
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

model : Signal Model
model = Signal.foldp update defaultModel input

parseUserResult : Decoder (Maybe String, String)
parseUserResult = Json.Decode.tuple2 (,) (oneOf [null Nothing, Json.Decode.map Just string]) Json.Decode.string

parseOnlyError : Decoder (Maybe String, Json.Decode.Value)
parseOnlyError = Json.Decode.tuple2 (,) (oneOf [null Nothing, Json.Decode.map Just string]) Json.Decode.value

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

messageView : List String -> List Html
messageView = 
  List.map (\msg ->
    div [class "list-group-item"] [text msg]
  )

main : Signal Html
main = Signal.map view model