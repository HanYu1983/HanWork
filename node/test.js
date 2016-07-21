var fs, canvas, context, parse, readable, x$;
fs = require('fs');
canvas = require('canvas');
context = {
  imgdir: "../output",
  state: 0,
  pos: 0,
  buf: new Buffer(65535 * 2),
  imgidx: 0
};
parse = function(ctx){
  var state, pos, buf, imgidx, magic, dataLen, rows, columns, imagelen, can, c2d, imgdata, i, out, stream, writeImage;
  state = ctx.state, pos = ctx.pos, buf = ctx.buf, imgidx = ctx.imgidx;
  return (function(){
    var i$, to$;
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
        can = new canvas(ctx.rows, ctx.columns);
        c2d = can.getContext('2d');
        imgdata = c2d.createImageData(ctx.rows, ctx.columns);
        for (i$ = 0, to$ = imagelen; i$ < to$; ++i$) {
          i = i$;
          imgdata.data[i * 4] = buf[i];
          imgdata.data[i * 4 + 1] = buf[i];
          imgdata.data[i * 4 + 2] = buf[i];
          imgdata.data[i * 4 + 3] = 255;
        }
        c2d.putImageData(imgdata, 0, 0);
        out = fs.createWriteStream(ctx.imgdir + "/" + imgidx + ".png");
        stream = can.pngStream();
        writeImage = function(outfile, pngstream){
          console.log("writeImage");
          pngstream.on('data', function(chunk){
            return outfile.write(chunk);
          });
          return pngstream.on('end', function(){
            return out.end(function(){});
          });
        };
        writeImage(out, stream);
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
readable = (x$ = fs.createReadStream("../doc/train-images-idx3-ubyte"), x$.on("data", function(trunk){
  var ref$, ok, nctx, results$ = [];
  trunk.copy(context.buf, context.pos);
  context.pos += trunk.byteLength;
  for (;;) {
    ref$ = parse(context), ok = ref$[0], nctx = ref$[1];
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
}), x$.on("end", function(){
  return console.log("end");
}), x$.on("close", function(){
  return console.log("close");
}), x$);
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
function clone$(it){
  function fun(){} fun.prototype = it;
  return new fun;
}