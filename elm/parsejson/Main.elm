module Main where

import Signal
import Debug
import Task
import Time
import Json.Decode exposing (..)

-- Applicative’s `pure`:
constructing : a -> Decoder a
constructing = succeed

-- Applicative’s `<*>`:
{-|
object2 :
(a -> b -> c) -> Json.Decode.Decoder a -> Json.Decode.Decoder b -> Json.Decode.Decoder c

(<|) :
(a -> b) -> a -> b

(|>) :
a -> (a -> b) -> b
-}
apply : Decoder (a -> b) -> Decoder a -> Decoder b 
apply = object2 (<|)

type alias Food = {name:String, image:Maybe String, description:Maybe String}

type alias Wine = {
  name:String,
  region: Maybe String,
  image: Maybe String,
  description: Maybe String,
  winetype: Maybe String,
  producer: Maybe String,
  varietal: Maybe String,
  winery: Maybe String,
  acidity: Maybe String,
  ph: Maybe String,
  sugar: Maybe String,
  alcohol: Maybe String,
  foods: List Food
}

parseWineList : Decoder (List Wine)
parseWineList =
  let
    parseWine err =
      case err of
        Just e ->
          fail e
        Nothing ->
          object1 identity
            ("Info" :=
              Json.Decode.list
                (constructing Wine
                  `apply` ("name" := string)
                  `apply` ("region" := oneOf [null Nothing, map Just string])
                  `apply` ("image" := oneOf [null Nothing, map Just string])
                  `apply` ("description" := oneOf [null Nothing, map Just string])
                  `apply` ("type" := oneOf [null Nothing, map Just string])
                  `apply` ("producer" := oneOf [null Nothing, map Just string])
                  `apply` ("varietal" := oneOf [null Nothing, map Just string])
                  `apply` ("winery" := oneOf [null Nothing, map Just string])
                  `apply` ("acidity" := oneOf [null Nothing, map Just string])
                  `apply` ("ph" := oneOf [null Nothing, map Just string])
                  `apply` ("sugar" := oneOf [null Nothing, map Just string])
                  `apply` ("alcohol" := oneOf [null Nothing, map Just string])
                  `apply`
                  ("foods" := Json.Decode.list
                    (object3 Food
                      ("name" := string)
                      ("image" := oneOf [null Nothing, map Just string])
                      ("description" := oneOf [null Nothing, map Just string])))))
  in
    object1 identity ("Error" := oneOf [null Nothing, map Just string])
      `Json.Decode.andThen`
      parseWine

port inputJson : Signal Value

port index : Signal (Task.Task err ())
port index = 
  inputJson
    |> Signal.map (decodeValue parseWineList)
    |> Signal.map (\n -> 
      case n of
        Ok wines ->
          Task.succeed wines
            |> Task.map (List.head >> (Maybe.map ((.name) >> (Debug.log "name"))))
            |> Task.map (always ())
        Err err ->
          Task.succeed err
            |> Task.map (Debug.log "err")
            |> Task.map (always ())
    )
