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
        
MoveCursor = (t, model)->
  merge do
    model
    cursor:
      map (([a,b])->a+b), zip(t, model.cursor)

ApplyBlackWhiteTransform = (posId, model)->
  model
  
SendEvent = (cmd, obj)->
  window.global.onModel.onNext [cmd, obj]
  obj

Main = ->
  model = 
    board: repeat(EMPTY, W* H)
    currplayer: 0
    cursor: [0,0]
  
  onKeyUp =
    document.body |>
    Rx.Observable.fromEvent _, "keyup"
    
  onInput = 
    Rx.Observable.merge do
      onKeyUp
        .map ({code})->
          ['keyup', code]
      window.global.onView
      Rx.Observable.just(['init'])
    
  onInput.reduce do
    (model, [cmd, params])->
      console.log cmd, params
      console.log model
      switch cmd
        | "init" =>
          SendEvent "init", model
        | "keyup" =>
          switch params
            | "ArrowUp","ArrowDown","ArrowLeft","ArrowRight" =>
              MoveCursor do
                switch params
                  | "ArrowUp" => [0, -1]
                  | "ArrowDown" => [0, 1]
                  | "ArrowLeft" => [-1, 0]
                  | "ArrowRight" => [1, 0]
                model
              |> (SendEvent "updateCursor", _)
            | "Space" =>
              ChangePlayerIfSuccessPut = (oldmodel, newmodel)->
                # 如果棋盤沒有變，代表沒有下成功，不需改變玩家
                if equals(oldmodel.board, newmodel.board)
                  oldmodel
                else
                  ChangePlayer newmodel.currplayer, newmodel
              SendUpdateEventIfSuccessPut = (oldmodel, newmodel)->
                if equals(oldmodel.board, newmodel.board)
                  oldmodel
                else
                  SendEvent "update", newmodel
              piece = PlayerPiece model.currplayer
              posId = PosId model.cursor
              model
                |> (PutPiece piece, posId, _) 
                |> (ChangePlayerIfSuccessPut model, _)
                |> (ApplyBlackWhiteTransform posId, _)
                |> (SendUpdateEventIfSuccessPut model, _)
            | otherwise =>
              model
        | otherwise => 
          model
    model
  .subscribe do
    ->
    (err)->
      console.log(err)
    ->
  
Main!