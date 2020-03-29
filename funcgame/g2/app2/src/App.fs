module App

(**
 The famous Increment/Decrement ported from Elm.
 You can find more info about Elmish architecture and samples at https://elmish.github.io/
*)

open Elmish
open Elmish.React
open Fable.React
open Fable.React.Props
open FSharp.Control


let dispatch, obs = AsyncRx.subject ()

let main = async {
    let! sub = obs.SubscribeAsync obv
    do! dispatch.OnNextAsync 42
}

Async.StartImmediate main ()
