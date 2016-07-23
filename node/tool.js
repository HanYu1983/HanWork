var fs, Rx, ref$, reduce, partial, readChunk, mnistDataLabel, mnistDataImage, out$ = typeof exports != 'undefined' && exports || this;
fs = require('fs');
Rx = require('rx');
ref$ = require('ramda'), reduce = ref$.reduce, partial = ref$.partial;
readChunk = function(filepath){
  return Rx.Observable.create(function(obs){
    var x$;
    x$ = fs.createReadStream(filepath);
    x$.on("data", function(chunk){
      return obs.onNext(chunk);
    });
    x$.on("end", function(){
      return obs.onCompleted();
    });
    x$.on("close", function(){});
    return x$;
  });
};
mnistDataLabel = function(filepath){
  return Rx.Observable.create(function(obs){
    return readChunk(filepath).reduce(function(ctx, chunk){
      var state, pos, buf, nctx, ref$, parse;
      state = ctx.state, pos = ctx.pos, buf = ctx.buf;
      chunk.copy(buf, pos);
      nctx = (ref$ = clone$(ctx), ref$.pos = pos + chunk.byteLength, ref$);
      parse = function(ctx){
        var state, pos, buf, magic, num, i, label;
        state = ctx.state, pos = ctx.pos, buf = ctx.buf;
        return (function(){
          var ref$, i$, to$;
          switch (state) {
          case 0:
            if (pos >= 8) {
              magic = buf.readUInt32BE();
              num = buf.readUInt32BE(4);
              console.log("magic)" + magic);
              console.log("num)" + num);
              buf.copy(buf, 0, 8, pos - 8);
              return parse((ref$ = clone$(ctx), ref$.pos = pos - 8, ref$.state = 1, ref$.num = num, ref$));
            } else {
              return ctx;
            }
            break;
          case 1:
            for (i$ = 0, to$ = pos; i$ < to$; ++i$) {
              i = i$;
              label = buf.readUInt8(i);
              obs.onNext(label);
            }
            return ref$ = clone$(ctx), ref$.pos = 0, ref$;
          default:
            return ctx;
          }
        }());
      };
      return parse(nctx);
    }, {
      state: 0,
      pos: 0,
      buf: new Buffer(65535 * 2)
    }).subscribe(function(){}, function(){}, function(){
      return obs.onCompleted();
    });
  });
};
mnistDataImage = function(filepath){
  return Rx.Observable.create(function(obs){
    return readChunk(filepath).reduce(function(ctx, chunk){
      var state, pos, buf, nctx, ref$, parse;
      state = ctx.state, pos = ctx.pos, buf = ctx.buf;
      chunk.copy(buf, pos);
      nctx = (ref$ = clone$(ctx), ref$.pos = pos + chunk.byteLength, ref$);
      parse = function(ctx){
        var state, pos, buf, magic, dataLen, rows, columns, imagelen, numofimg, i, imgbuf;
        state = ctx.state, pos = ctx.pos, buf = ctx.buf;
        return (function(){
          var i$, to$, ref$;
          switch (state) {
          case 0:
            if (pos >= 16) {
              magic = buf.readUInt32BE();
              dataLen = buf.readUInt32BE(4);
              rows = buf.readUInt32BE(8);
              columns = buf.readUInt32BE(12);
              console.log("magic is " + magic);
              console.log("dataLen is " + dataLen);
              console.log("rows is " + rows);
              console.log("columns is " + columns);
              buf.copy(buf, 0, 16, pos - 16);
              return parse(import$(clone$(ctx), {
                state: 1,
                pos: pos - 16,
                dataLen: dataLen,
                rows: rows,
                columns: columns
              }));
            } else {
              return ctx;
            }
            break;
          case 1:
            imagelen = ctx.rows * ctx.columns;
            if (pos >= imagelen) {
              numofimg = Math.floor(pos / imagelen);
              for (i$ = 0, to$ = numofimg; i$ < to$; ++i$) {
                i = i$;
                imgbuf = new Buffer(imagelen);
                buf.copy(imgbuf, 0, imagelen * i, imagelen * i + imagelen);
                obs.onNext(imgbuf);
              }
              buf.copy(buf, 0, imagelen * numofimg, pos - imagelen * numofimg);
              return ref$ = clone$(ctx), ref$.pos = pos - imagelen * numofimg, ref$;
            } else {
              return ctx;
            }
            break;
          default:
            return ctx;
          }
        }());
      };
      return parse(nctx);
    }, {
      state: 0,
      pos: 0,
      buf: new Buffer(65535 * 2)
    }).subscribe(function(){}, function(){}, function(){
      return obs.onCompleted();
    });
  });
};
ref$ = out$;
ref$.readChunk = readChunk;
ref$.mnistDataLabel = mnistDataLabel;
ref$.mnistDataImage = mnistDataImage;
function clone$(it){
  function fun(){} fun.prototype = it;
  return new fun;
}
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}