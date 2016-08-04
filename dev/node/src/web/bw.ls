require!{
  ramda: {repeat, map, zip, merge, equals}
}

W = 8
H = 8

EMPTY = 0
WHITE = 1
BLACK = 2

PosId = ([x, y])->
  y* W+x

PlayerPiece = (player)->
  if player == 0
    BLACK
  else
    WHITE

PutPiece = (piece, posId, model)->
  merge do
    model
    board:
      map do
        ([idx, oldpiece])->
          if idx == posId
            if oldpiece == EMPTY
              piece
            else
              oldpiece
          else
            oldpiece
        zip [0 til W*H], model.board

ChangePlayer = (player, model)->
  merge do
    model
    currplayer:
      if player == 0
        1
      else
        0

ApplyBlackWhiteTransform = (posId, model)->
  model

Main = ->
  model = 
    board: repeat(EMPTY, W* H)
    currplayer: 0
  
  onKeyUp =
    document.body |>
    Rx.Observable.fromEvent _, "keyup"
    
  onInput = 
    Rx.Observable.merge do
      onKeyUp
        .map ({code})->
          ['keyup', code]
      window.global.onModel
    
  onInput.reduce do
    (model, [cmd, params])->
      console.log cmd, params
      console.log model
      switch cmd
        | "keyup" =>
          ChangePlayerIfSuccessPut = (oldmodel, newmodel)->
            if equals(oldmodel.board, newmodel.board)
              oldmodel
            else
              ChangePlayer newmodel.currplayer, newmodel
          piece = PlayerPiece model.currplayer
          posId = PosId [0,0]
          model
            |> (PutPiece piece, posId, _) 
            |> (ChangePlayerIfSuccessPut model, _)
            |> (ApplyBlackWhiteTransform posId, _)
        | otherwise => 
          model
    model
  .subscribe do
    ->
    (err)->
      console.log(err)
    ->
  
Main!