var fs, Canvas, Rx, global, writeImage, parse, mnistData;
fs = require('fs');
Canvas = require('canvas');
Rx = require('rx');
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
parse = function(ctx, obs){
  var state, pos, buf, imgidx, magic, dataLen, rows, columns, imagelen, imgbuf;
  state = ctx.state, pos = ctx.pos, buf = ctx.buf, imgidx = ctx.imgidx;
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
            pos: pos - imagelen,
            imgidx: imgidx + 1
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
    var context, x$;
    context = {
      state: 0,
      pos: 0,
      buf: new Buffer(65535 * 2),
      imgidx: 0
    };
    x$ = fs.createReadStream(filepath);
    x$.on("data", function(trunk){
      var ref$, ok, nctx, results$ = [];
      trunk.copy(context.buf, context.pos);
      context.pos += trunk.byteLength;
      for (;;) {
        ref$ = parse(context, obs), ok = ref$[0], nctx = ref$[1];
        if (ok) {
          context.state = nctx.state;
          context.pos = nctx.pos;
          context.dataLen = nctx.dataLen;
          context.rows = nctx.rows;
          context.columns = nctx.columns;
          results$.push(context.imgidx = nctx.imgidx);
        } else {
          break;
        }
      }
      return results$;
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
mnistData("../doc/train-images-idx3-ubyte").zip(Rx.Observable.range(0, 200), function(data, idx){
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