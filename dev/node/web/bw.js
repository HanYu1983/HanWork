var ref$, repeat, map, zip, merge, equals, W, H, EMPTY, WHITE, BLACK, PosId, PlayerPiece, PutPiece, ChangePlayer, MoveCursor, ApplyBlackWhiteTransform, SendEvent, Main, slice$ = [].slice;
ref$ = require('ramda'), repeat = ref$.repeat, map = ref$.map, zip = ref$.zip, merge = ref$.merge, equals = ref$.equals;
W = 8;
H = 8;
EMPTY = 0;
WHITE = 1;
BLACK = 2;
PosId = function(arg$){
  var x, y;
  x = arg$[0], y = arg$[1];
  return y * W + x;
};
PlayerPiece = function(player){
  if (player === 0) {
    return BLACK;
  } else {
    return WHITE;
  }
};
PutPiece = function(piece, posId, model){
  return merge(model, {
    board: map(function(arg$){
      var idx, oldpiece;
      idx = arg$[0], oldpiece = arg$[1];
      if (idx === posId) {
        if (oldpiece === EMPTY) {
          return piece;
        } else {
          return oldpiece;
        }
      } else {
        return oldpiece;
      }
    }, zip((function(){
      var i$, to$, results$ = [];
      for (i$ = 0, to$ = W * H; i$ < to$; ++i$) {
        results$.push(i$);
      }
      return results$;
    }()), model.board))
  });
};
ChangePlayer = function(player, model){
  return merge(model, {
    currplayer: player === 0 ? 1 : 0
  });
};
MoveCursor = function(t, model){
  return merge(model, {
    cursor: map(function(arg$){
      var a, b;
      a = arg$[0], b = arg$[1];
      return a + b;
    }, zip(t, model.cursor))
  });
};
ApplyBlackWhiteTransform = function(posId, model){
  return model;
};
SendEvent = function(cmd, obj){
  window.global.onModel.onNext([cmd, obj]);
  return obj;
};
Main = function(){
  var model, onKeyUp, onInput;
  model = {
    board: repeat(EMPTY, W * H),
    currplayer: 0,
    cursor: [0, 0]
  };
  onKeyUp = Rx.Observable.fromEvent(document.body, "keyup");
  onInput = Rx.Observable.merge(onKeyUp.map(function(arg$){
    var code;
    code = arg$.code;
    return ['keyup', code];
  }), window.global.onView, Rx.Observable.just(['init']));
  return onInput.reduce(function(model, arg$){
    var cmd, params, ChangePlayerIfSuccessPut, SendUpdateEventIfSuccessPut, piece, posId;
    cmd = arg$[0], params = arg$[1];
    console.log(cmd, params);
    console.log(model);
    switch (cmd) {
    case "init":
      return SendEvent("init", model);
    case "keyup":
      switch (params) {
      case "ArrowUp":
      case "ArrowDown":
      case "ArrowLeft":
      case "ArrowRight":
        return partialize$.apply(this, [SendEvent, ["updateCursor", void 8], [1]])(
        MoveCursor((function(){
          switch (params) {
          case "ArrowUp":
            return [0, -1];
          case "ArrowDown":
            return [0, 1];
          case "ArrowLeft":
            return [-1, 0];
          case "ArrowRight":
            return [1, 0];
          }
        }()), model));
      case "Space":
        ChangePlayerIfSuccessPut = function(oldmodel, newmodel){
          if (equals(oldmodel.board, newmodel.board)) {
            return oldmodel;
          } else {
            return ChangePlayer(newmodel.currplayer, newmodel);
          }
        };
        SendUpdateEventIfSuccessPut = function(oldmodel, newmodel){
          if (equals(oldmodel.board, newmodel.board)) {
            return oldmodel;
          } else {
            return SendEvent("update", newmodel);
          }
        };
        piece = PlayerPiece(model.currplayer);
        posId = PosId(model.cursor);
        return partialize$.apply(this, [SendUpdateEventIfSuccessPut, [model, void 8], [1]])(
        partialize$.apply(this, [ApplyBlackWhiteTransform, [posId, void 8], [1]])(
        partialize$.apply(this, [ChangePlayerIfSuccessPut, [model, void 8], [1]])(
        partialize$.apply(this, [PutPiece, [piece, posId, void 8], [2]])(
        model))));
      default:
        return model;
      }
      break;
    default:
      return model;
    }
  }, model).subscribe(function(){}, function(err){
    return console.log(err);
  }, function(){});
};
Main();
function partialize$(f, args, where){
  var context = this;
  return function(){
    var params = slice$.call(arguments), i,
        len = params.length, wlen = where.length,
        ta = args ? args.concat() : [], tw = where ? where.concat() : [];
    for(i = 0; i < len; ++i) { ta[tw[0]] = params[i]; tw.shift(); }
    return len < wlen && len ?
      partialize$.apply(context, [f, ta, tw]) : f.apply(context, ta);
  };
}