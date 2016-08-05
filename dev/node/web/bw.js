var ref$, repeat, map, zip, merge, equals, concat, reduce, takeWhile, filter, append, W, H, EMPTY, WHITE, BLACK, Pos, PosId, PlayerPiece, PutPiece, ChangePlayer, MoveCursor, VolidateCursor, ApplyBlackWhiteTransform, SendEvent, Main, slice$ = [].slice;
ref$ = require('ramda'), repeat = ref$.repeat, map = ref$.map, zip = ref$.zip, merge = ref$.merge, equals = ref$.equals, concat = ref$.concat, reduce = ref$.reduce, takeWhile = ref$.takeWhile, filter = ref$.filter, append = ref$.append;
W = 8;
H = 8;
EMPTY = 0;
WHITE = 1;
BLACK = 2;
Pos = function(posId){
  return [Math.floor(posId % W), Math.floor(posId / W)];
};
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
VolidateCursor = function(model){
  return merge(model, {
    cursor: [
      partialize$.apply(Math, [Math.min, [W - 1, void 8], [1]])(
      partialize$.apply(Math, [Math.max, [0, void 8], [1]])(
      model.cursor[0])), partialize$.apply(Math, [Math.min, [H - 1, void 8], [1]])(
      partialize$.apply(Math, [Math.max, [0, void 8], [1]])(
      model.cursor[1]))
    ]
  });
};
ApplyBlackWhiteTransform = function(posId, model){
  var checkType, pos, IdsMustChange, idsMustChange;
  checkType = model.board[posId];
  pos = Pos(posId);
  IdsMustChange = function(checkIds){
    var ret, ref$;
    ret = reduce(function(ctx, id){
      var ary, state;
      ary = ctx.ary, state = ctx.state;
      switch (state) {
      case 0:
        if (id === posId) {
          return ctx;
        } else {
          if (model.board[id] === EMPTY) {
            return merge(ctx, {
              state: -1
            });
          } else {
            if (model.board[id] !== checkType) {
              return merge(ctx, {
                ary: append(id, ary)
              });
            } else {
              return merge(ctx, {
                state: 1
              });
            }
          }
        }
        break;
      case -1:
      case 1:
        return ctx;
      }
    }, {
      ary: [],
      state: 0
    }, checkIds);
    if ((ref$ = ret.state) === -1 || ref$ === 0) {
      return [];
    } else {
      return ret.ary;
    }
  };
  idsMustChange = partialize$.apply(this, [
    concat, [
      IdsMustChange(partialize$.apply(this, [map, [PosId, void 8], [1]])(
      zip((function(){
        var i$, to$, results$ = [];
        for (i$ = pos[0], to$ = W; i$ <= to$; ++i$) {
          results$.push(i$);
        }
        return results$;
      }()), (function(){
        var i$, to$, results$ = [];
        for (i$ = pos[1], to$ = H; i$ <= to$; ++i$) {
          results$.push(i$);
        }
        return results$;
      }())))), void 8
    ], [1]
  ])(
  partialize$.apply(this, [
    concat, [
      IdsMustChange(partialize$.apply(this, [map, [PosId, void 8], [1]])(
      zip((function(){
        var i$, to$, results$ = [];
        for (i$ = pos[0], to$ = W; i$ <= to$; ++i$) {
          results$.push(i$);
        }
        return results$;
      }()), (function(){
        var i$, results$ = [];
        for (i$ = pos[1]; i$ >= 0; --i$) {
          results$.push(i$);
        }
        return results$;
      }())))), void 8
    ], [1]
  ])(
  partialize$.apply(this, [
    concat, [
      IdsMustChange(partialize$.apply(this, [map, [PosId, void 8], [1]])(
      zip((function(){
        var i$, results$ = [];
        for (i$ = pos[0]; i$ >= 0; --i$) {
          results$.push(i$);
        }
        return results$;
      }()), (function(){
        var i$, to$, results$ = [];
        for (i$ = pos[1], to$ = H; i$ <= to$; ++i$) {
          results$.push(i$);
        }
        return results$;
      }())))), void 8
    ], [1]
  ])(
  partialize$.apply(this, [
    concat, [
      IdsMustChange(partialize$.apply(this, [map, [PosId, void 8], [1]])(
      zip((function(){
        var i$, results$ = [];
        for (i$ = pos[0]; i$ >= 0; --i$) {
          results$.push(i$);
        }
        return results$;
      }()), (function(){
        var i$, results$ = [];
        for (i$ = pos[1]; i$ >= 0; --i$) {
          results$.push(i$);
        }
        return results$;
      }())))), void 8
    ], [1]
  ])(
  partialize$.apply(this, [
    concat, [
      IdsMustChange((function(){
        var i$, to$, results$ = [];
        for (i$ = posId, to$ = Math.floor(posId / W) * W + W; i$ < to$; ++i$) {
          results$.push(i$);
        }
        return results$;
      }())), void 8
    ], [1]
  ])(
  partialize$.apply(this, [
    concat, [
      IdsMustChange((function(){
        var i$, to$, results$ = [];
        for (i$ = posId, to$ = Math.floor(posId / W) * W; i$ >= to$; --i$) {
          results$.push(i$);
        }
        return results$;
      }())), void 8
    ], [1]
  ])(
  partialize$.apply(this, [
    concat, [
      IdsMustChange((function(){
        var i$, step$, to$, results$ = [];
        for (i$ = posId, to$ = W * H, step$ = W; step$ < 0 ? i$ > to$ : i$ < to$; i$ += step$) {
          results$.push(i$);
        }
        return results$;
      }())), void 8
    ], [1]
  ])(
  partialize$.apply(this, [
    concat, [
      IdsMustChange((function(){
        var i$, step$, results$ = [];
        for (i$ = posId, step$ = -W; step$ < 0 ? i$ >= 0 : i$ <= 0; i$ += step$) {
          results$.push(i$);
        }
        return results$;
      }())), void 8
    ], [1]
  ])(
  []))))))));
  return merge(model, {
    board: map(function(arg$){
      var idx, oldpiece;
      idx = arg$[0], oldpiece = arg$[1];
      if (in$(idx, idsMustChange)) {
        return checkType;
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
        partialize$.apply(this, [VolidateCursor, [void 8], [0]])(
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
        }()), model)));
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
function in$(x, xs){
  var i = -1, l = xs.length >>> 0;
  while (++i < l) if (x === xs[i]) return true;
  return false;
}