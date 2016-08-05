require!{
  ramda: {repeat, map, zip, merge, equals, concat, reduce, takeWhile, filter, append}
}

# 棋盤寬
W = 8
# 棋盤高
H = 8

# 棋子種類
# 空
EMPTY = 0
# 白子
WHITE = 1
# 黑子
BLACK = 2

# 位置id改為[x,y]
Pos = (posId)->
  [Math.floor(posId%W), Math.floor(posId/W)]

# [x,y]改為位置id
PosId = ([x, y])->
  y* W+x

# 取出指定玩家的棋子種類
# player為0或1
PlayerPiece = (player)->
  if player == 0
    BLACK
  else
    WHITE

# 放子
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

# 切換玩家
# player為現在的玩家(model.currplayer)
ChangePlayer = (player, model)->
  merge do
    model
    currplayer:
      if player == 0
        1
      else
        0

# 移動游標
# t為[offsetX, offsetY]
MoveCursor = (t, model)->
  merge do
    model
    cursor:
      map (([a,b])->a+b), zip(t, model.cursor)

# 有效化游標位置
# 限制游標位置在棋盤內，反正一呼叫MoveCursor，就呼叫VolidateCursor
VolidateCursor = (model)->
  merge do
    model
    cursor:
      [
        model.cursor[0] |> (Math.max 0, _) |> (Math.min W - 1, _)
        model.cursor[1] |> (Math.max 0, _) |> (Math.min H - 1, _)
      ]

# 黑白轉換
# 放子時呼叫
# posId為剛放子的位置
ApplyBlackWhiteTransform = (posId, model)->
  checkType = model.board[posId]
  pos = Pos posId
  
  IdsMustChange = (checkIds)->
    ret = reduce do
      ({ary, state}:ctx, id)->
        switch state
          | 0 =>
            # 忽略自己
            if id == posId
              ctx
            else
              # 遇到空白就代表失敗。state設為-1
              if model.board[id] == EMPTY
                merge ctx, state: -1
              else 
                # 非空白也非同一個類型，就加入
                if model.board[id] != checkType
                  merge ctx, ary: append(id, ary)
                else
                  # 遇到同一個類型就結束。state設為1
                  merge ctx, state: 1
          | -1, 1 =>
            ctx
      {
        ary: []
        state: 0
      }
      checkIds
    if ret.state in [-1,0]
      []
    else
      ret.ary
  
  idsMustChange = []
    # 四個方向
    |> (concat IdsMustChange([posId to 0 by -W]), _)
    |> (concat IdsMustChange([posId til W*H by W]), _)
    |> (concat IdsMustChange([posId to Math.floor(posId/W)*W by -1]), _)
    |> (concat IdsMustChange([posId til Math.floor(posId/W)*W+W by 1]), _)
    # 四個鈄向
    |> (concat IdsMustChange(zip([pos[0] to 0 by -1], [pos[1] to 0 by -1]) |> (map PosId, _)), _)
    |> (concat IdsMustChange(zip([pos[0] to 0 by -1], [pos[1] to H by 1]) |> (map PosId, _)), _)
    |> (concat IdsMustChange(zip([pos[0] to W by 1], [pos[1] to 0 by -1]) |> (map PosId, _)), _)
    |> (concat IdsMustChange(zip([pos[0] to W by 1], [pos[1] to H by 1]) |> (map PosId, _)), _)
  
  merge do
    model
    board:
      map do
        ([idx, oldpiece])->
          if idx in idsMustChange
            checkType
          else
            oldpiece
        zip [0 til W*H], model.board

# 發送事件
# 為了方便實做函數式，這個函式會回傳所送物件
SendEvent = (cmd, obj)->
  window.global.onModel.onNext [cmd, obj]
  obj

# 進入點
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
      # console.log cmd, params
      # console.log model
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
              |> (VolidateCursor _)
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