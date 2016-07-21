var fs, Canvas, Rx, reduce, global, writeImage, readChunk, parse, mnistData;
fs = require('fs');
Canvas = require('canvas');
Rx = require('rx');
reduce = require('ramda').reduce;
global = {
  imgdir: "../output"
};
writeImage = function(imgidx, w, h, buf){
  return Rx.Observable.create(function(obs){
    var imagelen, can, c2d, imgdata, i$, i, outfilepath, out, stream, writeImageClosure;
    imagelen = w * h;
    can = new Canvas(w, h);
    c2d = can.getContext('2d');
    imgdata = c2d.createImageData(w, h);
    for (i$ = 0; i$ < imagelen; ++i$) {
      i = i$;
      imgdata.data[i * 4] = buf[i];
      imgdata.data[i * 4 + 1] = buf[i];
      imgdata.data[i * 4 + 2] = buf[i];
      imgdata.data[i * 4 + 3] = 255;
    }
    c2d.putImageData(imgdata, 0, 0);
    outfilepath = global.imgdir + "/" + imgidx + ".png";
    out = fs.createWriteStream(outfilepath);
    stream = can.pngStream();
    writeImageClosure = function(outfile, pngstream){
      console.log("writeImage > " + outfilepath);
      pngstream.on('data', function(chunk){
        return outfile.write(chunk);
      });
      return pngstream.on('end', function(){
        out.end(function(){});
        return obs.onCompleted();
      });
    };
    return writeImageClosure(out, stream);
  });
};
readChunk = function(filepath){
  return Rx.Observable.create(function(obs){
    var x$;
    x$ = fs.createReadStream(filepath);
    x$.on("data", function(chunk){
      return obs.onNext(chunk);
    });
    x$.on("end", function(){
      console.log("end");
      return obs.onCompleted();
    });
    x$.on("close", function(){
      return console.log("close");
    });
    return x$;
  });
};
parse = function(ctx, obs){
  var state, pos, buf, magic, dataLen, rows, columns, imagelen, imgbuf;
  state = ctx.state, pos = ctx.pos, buf = ctx.buf;
  return (function(){
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
        return [
          true, import$(clone$(ctx), {
            state: 1,
            pos: pos - 16,
            dataLen: dataLen,
            rows: rows,
            columns: columns
          })
        ];
      } else {
        return [false];
      }
      break;
    case 1:
      imagelen = ctx.rows * ctx.columns;
      if (pos >= imagelen) {
        imgbuf = new Buffer(imagelen);
        buf.copy(imgbuf, 0, 0, imagelen);
        obs.onNext(imgbuf);
        buf.copy(buf, 0, imagelen, pos - imagelen);
        return [
          true, import$(clone$(ctx), {
            pos: pos - imagelen
          })
        ];
      } else {
        return [false];
      }
      break;
    default:
      return [false];
    }
  }());
};
mnistData = function(filepath){
  return Rx.Observable.create(function(obs){
    return readChunk(filepath).reduce(function(ctx, chunk){
      var state, pos, buf, imgidx, nctx, ref$, parseWhileTrue;
      state = ctx.state, pos = ctx.pos, buf = ctx.buf, imgidx = ctx.imgidx;
      chunk.copy(buf, pos);
      nctx = (ref$ = clone$(ctx), ref$.pos = pos + chunk.byteLength, ref$);
      parseWhileTrue = function(ctx, obs){
        var ref$, ok, nctx;
        ref$ = parse(ctx, obs), ok = ref$[0], nctx = ref$[1];
        if (ok) {
          return parseWhileTrue(nctx, obs);
        } else {
          return ctx;
        }
      };
      return parseWhileTrue(nctx, obs);
    }, {
      state: 0,
      pos: 0,
      buf: new Buffer(65535 * 2)
    }).subscribe(function(){}, function(){}, function(){
      return obs.onCompleted();
    });
  });
};
mnistData("../doc/train-images-idx3-ubyte").zip(Rx.Observable.range(0, 60000), function(data, idx){
  return [idx, data];
}).tapOnNext(function(arg$){
  var idx, data;
  idx = arg$[0], data = arg$[1];
  return writeImage(idx, 28, 28, data).subscribe(function(){}, function(){}, function(){});
}).subscribe(function(arg$){
  var idx, data;
  idx = arg$[0], data = arg$[1];
}, function(err){
  return console.log(err);
}, function(){
  return console.log("completed");
});
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
function clone$(it){
  function fun(){} fun.prototype = it;
  return new fun;
}