var fs, Canvas, Rx, readChunk, ref$, reduce, partial, flatten, convnetjs, writeImageRGB, cifarImageLabels, testWriteImage, testConvnet;
fs = require('fs');
Canvas = require('canvas');
Rx = require('rx');
readChunk = require('./tool.js').readChunk;
ref$ = require('ramda'), reduce = ref$.reduce, partial = ref$.partial, flatten = ref$.flatten;
convnetjs = require('convnetjs');
writeImageRGB = function(imgname, w, h, buf){
  return Rx.Observable.create(function(obs){
    var imagelen, can, c2d, imgdata, i$, to$, i, outfilepath, out, stream, writeImageClosure;
    imagelen = w * h;
    can = new Canvas(w, h);
    c2d = can.getContext('2d');
    imgdata = c2d.createImageData(w, h);
    for (i$ = 0, to$ = buf.length; i$ < to$; ++i$) {
      i = i$;
      imgdata.data[i * 4] = buf[i][0];
      imgdata.data[i * 4 + 1] = buf[i][1];
      imgdata.data[i * 4 + 2] = buf[i][2];
      imgdata.data[i * 4 + 3] = 255;
    }
    c2d.putImageData(imgdata, 0, 0);
    outfilepath = imgname + "";
    out = fs.createWriteStream(outfilepath);
    stream = can.pngStream();
    writeImageClosure = function(outfile, pngstream){
      console.log("writeImage > " + outfilepath);
      pngstream.on('data', function(chunk){
        return outfile.write(chunk);
      });
      return pngstream.on('end', function(){
        outfile.end(function(){});
        return obs.onCompleted();
      });
    };
    return writeImageClosure(out, stream);
  });
};
cifarImageLabels = function(filepath){
  return Rx.Observable.create(function(obs){
    return readChunk(filepath).reduce(function(ctx, chunk){
      var state, pos, buf, nctx, ref$, parse;
      state = ctx.state, pos = ctx.pos, buf = ctx.buf;
      chunk.copy(buf, pos);
      nctx = (ref$ = clone$(ctx), ref$.pos = pos + chunk.byteLength, ref$);
      parse = function(ctx){
        var state, pos, buf, size, num, i, label, img, j, r, g, b;
        state = ctx.state, pos = ctx.pos, buf = ctx.buf;
        return (function(){
          var i$, to$, res$, j$, ref$;
          switch (state) {
          case 0:
            size = 1 + 1024 + 1024 + 1024;
            if (pos >= size) {
              num = Math.floor(pos / size);
              for (i$ = 0, to$ = num; i$ < to$; ++i$) {
                i = i$;
                label = buf.readUInt8(i * size);
                res$ = [];
                for (j$ = 0; j$ < 1024; ++j$) {
                  j = j$;
                  r = buf.readUInt8(i * size + 1 + j);
                  g = buf.readUInt8(i * size + 1 + 1024 + j);
                  b = buf.readUInt8(i * size + 1 + 1024 + 1024 + j);
                  res$.push([r, g, b]);
                }
                img = res$;
                obs.onNext([img, label]);
              }
              buf.copy(buf, 0, num * size, pos - num * size);
              return ref$ = clone$(ctx), ref$.pos = pos - num * size, ref$;
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
testWriteImage = function(){
  return cifarImageLabels("../doc/cifar-10-batches-bin/data_batch_1.bin").zip(Rx.Observable.range(0, 100), function(data, idx){
    return [idx, data];
  }).flatMap(function(arg$){
    var idx, ref$, img, label;
    idx = arg$[0], ref$ = arg$[1], img = ref$[0], label = ref$[1];
    return writeImageRGB("../output/cifar_" + idx + ".png", 32, 32, img);
  }).subscribe(function(){}, function(err){
    return console.log(err);
  }, function(){
    return console.log("complited");
  });
};
testConvnet = function(){
  var layer_defs, layer_defs2, x$, net, trainer, trainSet, training, predic;
  layer_defs = [
    {
      type: 'input',
      out_sx: 32,
      out_sy: 32,
      out_depth: 3
    }, {
      type: 'conv',
      sx: 5,
      filters: 16,
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
      filters: 20,
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
      filters: 20,
      stride: 1,
      pad: 2,
      activation: 'relu'
    }, {
      type: 'pool',
      sx: 2,
      stride: 2
    }, {
      type: 'softmax',
      num_classes: 10
    }
  ];
  layer_defs2 = [
    {
      type: 'input',
      out_sx: 32,
      out_sy: 32,
      out_depth: 3
    }, {
      type: 'softmax',
      num_classes: 10
    }
  ];
  x$ = net = new convnetjs.Net;
  x$.makeLayers(layer_defs2);
  trainer = new convnetjs.SGDTrainer(net, {
    method: 'adadelta',
    batch_size: 4,
    l2_decay: 0.001
  });
  trainSet = cifarImageLabels("../doc/cifar-10-batches-bin/data_batch_1.bin").map(function(arg$){
    var img, label, x, W, i$, i, xc, yc, dx, dy;
    img = arg$[0], label = arg$[1];
    x = new convnetjs.Vol(32, 32, 3, 0.0);
    W = 32 * 32;
    for (i$ = 0; i$ < W; ++i$) {
      i = i$;
      xc = i % 32;
      yc = Math.floor(i / 32);
      x.set(yc, xc, 0, img[i][0] / 255.0 - 0.5);
      x.set(yc, xc, 1, img[i][1] / 255.0 - 0.5);
      x.set(yc, xc, 2, img[i][2] / 255.0 - 0.5);
    }
    dx = Math.floor(Math.random() * 5 - 2);
    dy = Math.floor(Math.random() * 5 - 2);
    x = convnetjs.augment(x, 32, dx, dy, Math.random() < 0.5);
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
  return Rx.Observable.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]).flatMap(partial(training, [0, 100, 1])).reduce(function(acc, curr){
    return 0;
  }, 0).flatMap(partial(predic, [200, 300])).subscribe(function(){}, function(err){
    return console.log(err);
  }, function(){
    return console.log("completed");
  });
};
testConvnet();
function clone$(it){
  function fun(){} fun.prototype = it;
  return new fun;
}