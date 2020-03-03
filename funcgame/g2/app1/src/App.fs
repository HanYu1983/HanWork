module App
open System
open Fable.Core
open Fable.Core.JsInterop
open Browser
open Browser.Types
open Fable.React
open Fable.React.Props

[<Emit("window")>]
let window : obj = jsNative
let console : obj = window?console

// model
type Model = {
  pos : int * int
}

let initModel = {
  pos = (0, 0)
}

// controller
type Msg = 
  | Init
  | ClickUp
  | ClickDown
  | ClickLeft
  | ClickRight

let mutable modelBox : Option<MailboxProcessor<Model>> = None

let controller (model: Model) (inbox:MailboxProcessor<Msg>) =
  let rec messageLoop (model: Model) = async{
    
    match modelBox with 
      | Some (box) ->
        box.Post model
      | _ ->
        ()
      |> ignore

    let! msg = inbox.Receive()
    match msg with
      | Init -> 
        return! messageLoop model
      | ClickUp -> 
        let (x, y) = model.pos
        let model = { model with pos = (x, y - 1)}
        return! messageLoop model
      | ClickDown -> 
        let (x, y) = model.pos
        let model = { model with pos = (x, y + 1)}
        return! messageLoop model
      | ClickLeft -> 
        let (x, y) = model.pos
        let model = { model with pos = (x - 1, y)}
        return! messageLoop model
      | ClickRight -> 
        let (x, y) = model.pos
        let model = { model with pos = (x + 1, y)}
        return! messageLoop model
  }
  messageLoop model

let view (signal: MailboxProcessor<Msg>) (inbox: MailboxProcessor<Model>) =
  // view
  let _view (props: Model) =
    let (x, y) = props.pos

    div [] [
      str (sprintf "%i, %i" x y)
      button [OnClick (fun _ -> signal.Post ClickUp)] [str "up"]
      button [OnClick (fun _ -> signal.Post ClickDown)] [str "down"]
      button [OnClick (fun _ -> signal.Post ClickLeft)] [str "left"]
      button [OnClick (fun _ -> signal.Post ClickRight)] [str "right"]
    ]

  let _View = FunctionComponent.Of _view

  let render (model: Model) =
    ReactDom.render(
      _View model,
      document.getElementsByClassName("react-app").[0])
  
  let rec messageLoop () = async{
    let! model = inbox.Receive()
    render model
    return! messageLoop ()
  }
  messageLoop ()

let signal = MailboxProcessor.Start (controller initModel)
modelBox <- Some (MailboxProcessor.Start (view signal))
signal.Post Init