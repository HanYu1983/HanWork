var fs, Canvas, Rx, ref$, reduce, partial, convnetjs, global, writeImage, readChunk, mnistDataLabel, mnistDataImage, testConvnet;
fs = require('fs');
Canvas = require('canvas');
Rx = require('rx');
ref$ = require('ramda'), reduce = ref$.reduce, partial = ref$.partial;
convnetjs = require('convnetjs');
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
testConvnet = function(){
  var layer_defs, x$, net, trainer, trainSet, training, predic;
  layer_defs = [
    {
      type: 'input',
      out_sx: 24,
      out_sy: 24,
      out_depth: 1
    }, {
      type: 'conv',
      sx: 5,
      filters: 8,
      stride: 1,
      pad: 2,
      activation: 'relu'
    }, {
      type: 'pool',
      sx: 2,
      stride: 2
    }, {
      type: 'conv',
      sx: 5,
      filters: 16,
      stride: 1,
      pad: 2,
      activation: 'relu'
    }, {
      type: 'pool',
      sx: 3,
      stride: 3
    }, {
      type: 'softmax',
      num_classes: 10
    }
  ];
  x$ = net = new convnetjs.Net();
  x$.makeLayers(layer_defs);
  trainer = new convnetjs.SGDTrainer(net, {
    method: 'adadelta',
    batch_size: 20,
    l2_decay: 0.001
  });
  trainSet = Rx.Observable.zip(mnistDataImage("../doc/train-images-idx3-ubyte"), mnistDataLabel("../doc/train-labels-idx1-ubyte"), function(img, label){
    var x, W, i$, i;
    x = new convnetjs.Vol(28, 28, 1, 0.0);
    W = 28 * 28;
    for (i$ = 0; i$ < W; ++i$) {
      i = i$;
      x.w[i] = img[i] / 255.0;
    }
    x = convnetjs.augment(x, 24);
    return [x, label];
  });
  training = function(s, e, time){
    return trainSet.zip(Rx.Observable.range(0, e), function(ts, idx){
      return [idx, ts];
    }).skip(s).tapOnNext(function(arg$){
      var idx, ref$, x, y, i$, to$, i, stats, lossx, lossw, yhat;
      idx = arg$[0], ref$ = arg$[1], x = ref$[0], y = ref$[1];
      for (i$ = 0, to$ = time; i$ < to$; ++i$) {
        i = i$;
        stats = trainer.train(x, y);
        lossx = stats.cost_loss;
        lossw = stats.l2_decay_loss;
      }
      net.forward(x);
      yhat = net.getPrediction();
      return console.log("tarin:" + idx + ")" + y + " > " + yhat);
    }).reduce(function(acc, curr){
      return 0;
    }, 0);
  };
  predic = function(s, e){
    return trainSet.zip(Rx.Observable.range(0, e), function(ts, idx){
      return [idx, ts];
    }).skip(s).tapOnNext(function(arg$){
      var idx, ref$, x, y, yhat;
      idx = arg$[0], ref$ = arg$[1], x = ref$[0], y = ref$[1];
      net.forward(x);
      yhat = net.getPrediction();
      return console.log("predict:" + idx + ")" + y + " > " + yhat);
    }).reduce(function(acc, curr){
      return 0;
    }, 0);
  };
  return Rx.Observable.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]).flatMap(partial(training, [0, 100, 1])).reduce(function(acc, curr){
    return 0;
  }, 0).flatMap(partial(predic, [200, 300])).subscribe(function(){}, function(err){
    return console.log(err);
  }, function(){
    return console.log("completed");
  });
};
/*
mnistDataImage("../doc/train-images-idx3-ubyte")
  .zip do
    Rx.Observable.range(0, 60000)
    (data, idx)->
      [idx, data]
  .skip(59990)
  .tapOnNext ([idx, data])->
    writeImage idx, 28, 28, data
      .subscribe ->,->,->
  .subscribe do
    ([idx, data])->
    (err)->
      console.log err
    ->
      console.log "completed"
*/
/*

mnistDataLabel("../doc/train-labels-idx1-ubyte")
  .zip do
    Rx.Observable.range(0, 60000)
    (data, idx)->
      [idx, data]
  .skip(59990)
  .subscribe do
    ([idx, data])->
      console.log "#{idx})#{data}"
    (err)->
      console.log err
    ->
      console.log "completed"
*/
testConvnet();
function clone$(it){
  function fun(){} fun.prototype = it;
  return new fun;
}
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}