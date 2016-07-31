var fs, Canvas, Rx, ref$, reduce, partial, convnetjs, readChunk, mnistDataLabel, mnistDataImage, global, writeImage, testConvnet, testWriteImage, testShowLabel;
fs = require('fs');
Canvas = require('canvas');
Rx = require('rx');
ref$ = require('ramda'), reduce = ref$.reduce, partial = ref$.partial;
convnetjs = require('convnetjs');
ref$ = require('./tool.js'), readChunk = ref$.readChunk, mnistDataLabel = ref$.mnistDataLabel, mnistDataImage = ref$.mnistDataImage;
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
        outfile.end(function(){});
        return obs.onCompleted();
      });
    };
    return writeImageClosure(out, stream);
  });
};
testConvnet = function(){
  var layer_defs, layer_defs2, x$, net, trainer, trainSet, training, predic;
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
  layer_defs2 = [
    {
      type: 'input',
      out_sx: 24,
      out_sy: 24,
      out_depth: 1
    }, {
      type: 'softmax',
      num_classes: 10
    }
  ];
  x$ = net = new convnetjs.Net;
  x$.makeLayers(layer_defs2);
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
testWriteImage = function(){
  return mnistDataImage("../doc/train-images-idx3-ubyte").zip(Rx.Observable.range(0, 60000), function(data, idx){
    return [idx, data];
  }).skip(59990).tapOnNext(function(arg$){
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
};
testShowLabel = function(){
  return mnistDataLabel("../doc/train-labels-idx1-ubyte").zip(Rx.Observable.range(0, 60000), function(data, idx){
    return [idx, data];
  }).skip(59990).subscribe(function(arg$){
    var idx, data;
    idx = arg$[0], data = arg$[1];
    return console.log(idx + ")" + data);
  }, function(err){
    return console.log(err);
  }, function(){
    return console.log("completed");
  });
};
testConvnet();