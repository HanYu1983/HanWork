module Ask where

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import HanLib.Tool exposing (..)
import Signal exposing (..)
import Json.Decode exposing (..)
import Http exposing (..)
import Task exposing (..)

type alias Game = {
  id: String,
  cardStack: List (String, String, List String)
}

type alias Goal = {
  id: Int,
  description: String,
  parameters: List String
}

parseGameResult : Decoder (Maybe String, Game)
parseGameResult = 
  tuple2 (,) 
    (maybe Json.Decode.string) 
    (object2 Game 
      ("ID" := Json.Decode.string) 
      ("CardStack" := Json.Decode.list (object3 (,,) 
        ("ID" := Json.Decode.string)
        ("Type" := Json.Decode.string)
        ("Card" := Json.Decode.list (object1 identity ("ID" := Json.Decode.string))))))

parseOnlyError : Decoder (Maybe String, Json.Decode.Value)
parseOnlyError = 
  Json.Decode.tuple2 (,) (maybe Json.Decode.string) Json.Decode.value

parseGoalResult : Decoder (Maybe String, List Goal)
parseGoalResult = 
  Json.Decode.tuple2 (,) 
    (maybe Json.Decode.string)
    (Json.Decode.list (object3 Goal 
      ("ID" := Json.Decode.int) 
      ("Description" := Json.Decode.string)
      ("Parameters" := Json.Decode.list Json.Decode.string)))
      
parseSingalGoalResult : Decoder (Maybe String, Goal)
parseSingalGoalResult = 
  Json.Decode.tuple2 (,) 
    (maybe Json.Decode.string)
    (object3 Goal 
      ("ID" := Json.Decode.int) 
      ("Description" := Json.Decode.string)
      ("Parameters" := Json.Decode.list Json.Decode.string))

type Action = 
  NoAction 
  | ClickCard Card
  | ClickLoadGame
  | ClickLoadGoal
  | ClickCommit
  | ClickChangeUser
  | ClickStep
  | OnLoadGame (Result String (Maybe String, Game))
  | OnLoadGoal (Result String (Maybe String, List Goal))
  | OnLoadSingalGoal (Result String (Maybe String, Goal))
  | OnCommited (Result String (Maybe String, Json.Decode.Value))

action : Signal.Mailbox Action
action = Signal.mailbox NoAction

type alias Card = {
  id: String,
  selected: Bool
}

type Op = 
  NoOp
  | OpSelectCard (Int, Int)

type alias Model = {
  handA: List Card,
  handB: List Card,
  commonStack: List Card,
  op: Op,
  currUser: String
}

defaultModel = {
  handA = [{id = "0", selected = False}, {id = "1", selected = False}],
  handB = [{id = "2", selected = False}],
  commonStack = [],
  op = NoOp,
  currUser = "playerA"}

input : Signal Action
input = action.signal

update : Action -> Model -> Model
update act model = 
  case act of
    NoAction -> model
    OnCommited result ->
      case result of
        Err msg -> alert msg model
        Ok (err, goal) ->
          case err of
            Just msg -> alert msg model
            Nothing -> 
              {model | 
                op = NoOp,
                handA = List.map (\c -> {c | selected = False}) model.handA,
                handB = List.map (\c -> {c | selected = False}) model.handB}
    -- 3. 取完相依問題後，解決問題
    -- 依問題內容將操作模式切換
    OnLoadSingalGoal result ->
      case result of
        Err msg -> alert msg model
        Ok (err, goal) ->
          case err of
            Just msg -> alert msg model
            Nothing -> 
              case goal.description of
                "select {0} cards" ->
                  {model | 
                    op = OpSelectCard (goal.id, 2)}
                otherwise -> model
    -- 2. 由問題列表的第一個問題取得相依問題
    -- 都由第一個問題來取就行了，因為解決完的問題會自動被後面的問題補上
    OnLoadGoal result -> 
      case result of
        Err msg -> alert msg model
        Ok (err, goals) ->
          case err of
            Just msg -> alert msg model
            Nothing ->
              let
                firstGoal = List.head goals
              in
                case firstGoal of
                  Nothing -> {model | op = NoOp}
                  Just goal ->
                    model
                      |> performBackground (\_ ->
                        Http.url "go/cardgame/ask/goal/dep" [("id", toString goal.id), ("game", "first game")]
                          |> callUrlAndDecodeAndSendAction parseSingalGoalResult OnLoadSingalGoal
                      )
    OnLoadGame result -> 
      case result of
        Err msg -> alert msg model
        Ok (err, game) ->
          case err of
            Just msg -> alert msg model
            Nothing -> 
              let
                ahand = game.cardStack |> List.filter (\(name, _, _) -> name == "A-hand") |> List.head
                bhand = game.cardStack |> List.filter (\(name, _, _) -> name == "B-hand") |> List.head
                common = game.cardStack |> List.filter (\(name, _, _) -> name == "common-stack") |> List.head
              in
                {model |
                  handA = case ahand of
                    Nothing -> model.handA
                    Just (_, _, cards) -> List.map (\id -> Card id False) cards,
                  handB = case bhand of
                    Nothing -> model.handB
                    Just (_, _, cards) -> List.map (\id -> Card id False) cards,
                  commonStack = case common of
                    Nothing -> model.commonStack
                    Just (_, _, cards) -> List.map (\id -> Card id False) cards}
    ClickStep ->
      model
        |> performBackground (\_ ->
          Http.url "go/cardgame/ask/step" [("game", "first game")]
            |> callUrlAndDecodeAndSendAction parseGameResult OnLoadGame
        )
    ClickChangeUser ->
      { model | 
        currUser = if model.currUser == "playerA" then "playerB" else "playerA" }
    -- 4. 最後上傳答案
    ClickCommit ->
      model
        |> performBackground (\_ ->
          case model.op of
            OpSelectCard (goalId, num) ->
              let 
                hand = case model.currUser of
                  "playerA" -> model.handA
                  "playerB" -> model.handB
                  otherwise -> model.handA
                selected = List.filter (.selected) hand
              in
                if List.length selected /= num then
                  alert "select 2 card" (Task.succeed ())
                else
                  Http.url 
                    "go/cardgame/ask/solve" 
                    ([("game", "first game"), ("id", toString goalId)] 
                      ++ (List.map (\c -> ("cardId", c.id)) selected))
                    |> callUrlAndDecodeAndSendAction parseOnlyError OnCommited
            otherwise -> Task.succeed () 
        )
    -- 1. 從服務端取得問題，觸發OnLoadGoal
    ClickLoadGoal -> 
      model
        |> performBackground (\_ ->
          Http.url "go/cardgame/ask/goal" [("game", "first game"), ("user", model.currUser)]
            |> callUrlAndDecodeAndSendAction parseGoalResult OnLoadGoal 
        )
    ClickLoadGame -> 
      model
        |> performBackground (\_ ->
          "go/cardgame/ask/init"
            |> callUrlAndDecodeAndSendAction parseGameResult OnLoadGame 
        )
    ClickCard card ->
      case model.op of
        NoOp -> model
        OpSelectCard (_, num) -> 
          {model | 
            handA = 
              List.map (\c ->
                if c == card then
                  {c | selected = if c.selected == True then False else True }
                else
                  c
              ) model.handA,
            handB = 
              List.map (\c ->
                if c == card then
                  {c | selected = if c.selected == True then False else True }
                else
                  c
              ) model.handB}

callUrlAndDecodeAndSendAction decoder actionConstructor url=
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

model : Signal Model
model = Signal.foldp update defaultModel input

view : Model -> Html
view model =
  div [] [
    div [] [text ("user:" ++ model.currUser)],
    div [] [
      case model.op of
        OpSelectCard (id, num) -> text ("OpSelectCard " ++ (toString id) ++ "," ++ (toString num))
        otherwise -> text "no op"
    ],
    div [] [text "common-stack"],
    div [class "pure-g"]
      (List.map (\c ->
        button [
          classList [("pure-button", True), ("pure-button-active", c.selected)]
        ] [text c.id]
      ) model.commonStack),
    div [] [text "A head"],
    div [class "pure-g"]
      (List.map (\c ->
        button [
          classList [("pure-button", True), ("pure-button-active", c.selected)],
          on "click" targetValue (\_ -> Signal.message action.address (ClickCard c))
        ] [text c.id]
      ) model.handA),
    div [] [text "B head"],
    div [class "pure-g"]
      (List.map (\c ->
        button [
          classList [("pure-button", True), ("pure-button-active", c.selected)],
          on "click" targetValue (\_ -> Signal.message action.address (ClickCard c))
        ] [text c.id]
      ) model.handB),
    div [] [text "Menu"],
    div [class "pure-g"] [
      button [
        class "pure-button",
        on "click" targetValue (\_ -> Signal.message action.address ClickCommit) 
      ] [text "commit"],
      button [
        class "pure-button",
        on "click" targetValue (\_ -> Signal.message action.address ClickLoadGame)
      ] [text "load game"],
      button [
        class "pure-button",
        on "click" targetValue (\_ -> Signal.message action.address ClickLoadGoal)
      ] [text "load goal"],
      button [
        class "pure-button",
        on "click" targetValue (\_ -> Signal.message action.address ClickChangeUser)
      ] [text "change user"],
      button [
        class "pure-button",
        on "click" targetValue (\_ -> Signal.message action.address ClickStep)
      ] [text "step"]
    ]
  ]

main : Signal Html
main = Signal.map view model


