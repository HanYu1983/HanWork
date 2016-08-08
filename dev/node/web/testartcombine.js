var reduce, Rx, Vue, convnetjs, IMAGE_H, IMAGE_W, COLOR_CHANNEL, RATE, LoadImage, Image2Vol, EmptyVol, DrawImage, Net, TargetVol, AllW, AddGrads, main;
reduce = require('ramda').reduce;
Rx = require('rx');
Vue = require('vue');
convnetjs = require('convnetjs');
IMAGE_H = 120;
IMAGE_W = 120;
COLOR_CHANNEL = 3;
RATE = 0.07;
LoadImage = function(path){
  return Rx.Observable.create(function(obs){
    var x$, img;
    x$ = img = new Image;
    x$.onload = function(){
      return obs.onNext(img);
    };
    x$.src = path;
    return x$;
  });
};
Image2Vol = function(img){
  var data, v, i$, to$, x, j$, to1$, y, k$, to2$, d;
  data = nj.images.read(img);
  console.log(data.shape);
  v = new convnetjs.Vol(IMAGE_W, IMAGE_H, COLOR_CHANNEL, 0);
  for (i$ = 0, to$ = IMAGE_W; i$ < to$; ++i$) {
    x = i$;
    for (j$ = 0, to1$ = IMAGE_H; j$ < to1$; ++j$) {
      y = j$;
      for (k$ = 0, to2$ = COLOR_CHANNEL; k$ < to2$; ++k$) {
        d = k$;
        v.set(x, y, d, data.get(y, x, d) / 255.0);
      }
    }
  }
  return v;
};
EmptyVol = function(){
  return new convnetjs.Vol(IMAGE_W, IMAGE_H, COLOR_CHANNEL, 0);
};
DrawImage = function(canvas, vol){
  var ctx, g, i$, to$, y, j$, to1$, x, pos;
  canvas.width = IMAGE_W;
  canvas.height = IMAGE_H;
  ctx = canvas.getContext('2d');
  g = ctx.createImageData(IMAGE_W, IMAGE_H);
  for (i$ = 0, to$ = IMAGE_H; i$ < to$; ++i$) {
    y = i$;
    for (j$ = 0, to1$ = IMAGE_W; j$ < to1$; ++j$) {
      x = j$;
      pos = y * IMAGE_W + x;
      if (COLOR_CHANNEL === 4) {
        g.data[pos * 4 + 0] = Math.floor(vol.get(x, y, 0) * 255.0);
        g.data[pos * 4 + 1] = Math.floor(vol.get(x, y, 1) * 255.0);
        g.data[pos * 4 + 2] = Math.floor(vol.get(x, y, 2) * 255.0);
        g.data[pos * 4 + 3] = Math.floor(vol.get(x, y, 3) * 255.0);
      } else if (COLOR_CHANNEL === 3) {
        g.data[pos * 4 + 0] = Math.floor(vol.get(x, y, 0) * 255.0);
        g.data[pos * 4 + 1] = Math.floor(vol.get(x, y, 1) * 255.0);
        g.data[pos * 4 + 2] = Math.floor(vol.get(x, y, 2) * 255.0);
        g.data[pos * 4 + 3] = 255;
      } else {
        g.data[pos * 4 + 0] = g.data[pos * 4 + 1] = g.data[pos * 4 + 2] = Math.floor(vol.get(x, y, 0) * 255.0);
        g.data[pos * 4 + 3] = 255;
      }
    }
  }
  return ctx.putImageData(g, 0, 0);
};
Net = function(){
  var inputLayer, conv1, relu1, pool, outputLayer, x$, net;
  inputLayer = new convnetjs.InputLayer({
    out_sx: IMAGE_W,
    out_sy: IMAGE_H,
    out_depth: COLOR_CHANNEL
  });
  conv1 = new convnetjs.ConvLayer({
    in_sx: inputLayer.out_sx,
    in_sy: inputLayer.out_sy,
    in_depth: inputLayer.out_depth,
    sx: 3,
    filters: 10,
    stride: 1,
    pad: 2,
    bias_pref: 0.1
  });
  relu1 = new convnetjs.ReluLayer({
    in_sx: conv1.out_sx,
    in_sy: conv1.out_sy,
    in_depth: conv1.out_depth
  });
  pool = new convnetjs.PoolLayer({
    in_sx: relu1.out_sx,
    in_sy: relu1.out_sy,
    in_depth: relu1.out_depth,
    sx: 2,
    stride: 2
  });
  outputLayer = new convnetjs.RegressionLayer({
    in_sx: pool.out_sx,
    in_sy: pool.out_sy,
    in_depth: pool.out_depth
  });
  x$ = net = new convnetjs.Net;
  x$.layers.push(inputLayer);
  x$.layers.push(conv1);
  x$.layers.push(relu1);
  x$.layers.push(pool);
  x$.layers.push(outputLayer);
  return x$;
};
TargetVol = function(net, input){
  return net.forward(input);
};
AllW = function(net){
  var pglist;
  pglist = net.getParamsAndGrads();
  return function(){
    var i$, ref$, len$, ref1$, params, grads, lresult$, j$, j, results$ = [];
    for (i$ = 0, len$ = (ref$ = pglist).length; i$ < len$; ++i$) {
      ref1$ = ref$[i$], params = ref1$.params, grads = ref1$.grads;
      lresult$ = [];
      for (j$ = 0; j$ < grads; ++j$) {
        j = j$;
        lresult$.push(grads[i] = 0);
      }
      results$.push(lresult$);
    }
    return results$;
  };
};
AddGrads = function(vol){
  var i$, to$, i, results$ = [];
  for (i$ = 0, to$ = IMAGE_W * IMAGE_H * COLOR_CHANNEL; i$ < to$; ++i$) {
    i = i$;
    vol.w[i] -= vol.dw[i] * RATE;
    results$.push(vol.dw[i] = 0);
  }
  return results$;
};
main = function(){
  var model;
  model = new Vue({
    el: '#app',
    data: {
      times: 0,
      loss: 0
    }
  });
  return Rx.Observable.zip(LoadImage("image/test4.jpeg"), LoadImage("image/test5.jpeg"), function(img1, img2){
    return [img1, img2];
  }).tapOnNext(function(arg$){
    var img, img2, x$, container, net, ClearAllW, target1, target2, emptyVol;
    img = arg$[0], img2 = arg$[1];
    x$ = container = model.$els.imgcontainer;
    x$.appendChild(img);
    x$.appendChild(img2);
    net = Net();
    ClearAllW = AllW(net);
    target1 = TargetVol(net, Image2Vol(img));
    target2 = TargetVol(net, Image2Vol(img2));
    emptyVol = EmptyVol();
    return setInterval(function(){
      var loss;
      loss = 0;
      net.forward(emptyVol);
      loss += net.backward(target1.w);
      AddGrads(emptyVol);
      ClearAllW();
      loss += net.backward(target2.w);
      AddGrads(emptyVol);
      ClearAllW();
      DrawImage(model.$els.targetcanvas, emptyVol);
      return model.loss = loss;
    }, 0);
  }).subscribe(function(){}, function(err){
    return console.log(err);
  }, function(){
    return console.log("completed");
  });
};
main();