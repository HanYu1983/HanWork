var Vue, ref$, reduce, map, repeat, clone, convnetjs, IMAGE_W, IMAGE_H, COLOR_CHANNEL, DRAW_DURATION, RATE, NUM_OUTPUT, showTargetImage, rgb2input, drawImage, testConvnet;
Vue = require('vue');
ref$ = require('ramda'), reduce = ref$.reduce, map = ref$.map, repeat = ref$.repeat, clone = ref$.clone;
convnetjs = require('convnetjs');
IMAGE_W = 150;
IMAGE_H = 143;
COLOR_CHANNEL = 1;
DRAW_DURATION = 10;
RATE = 0.07;
NUM_OUTPUT = IMAGE_W * IMAGE_H;
showTargetImage = function(model, img){
  return model.$els.target.appendChild(img);
};
rgb2input = function(data){
  var v, i$, ref$, len$, x, j$, ref1$, len1$, y, k$, ref2$, len2$, d;
  v = new convnetjs.Vol(IMAGE_W, IMAGE_H, COLOR_CHANNEL, 0);
  for (i$ = 0, len$ = (ref$ = (fn$())).length; i$ < len$; ++i$) {
    x = ref$[i$];
    for (j$ = 0, len1$ = (ref1$ = (fn1$())).length; j$ < len1$; ++j$) {
      y = ref1$[j$];
      for (k$ = 0, len2$ = (ref2$ = (fn2$())).length; k$ < len2$; ++k$) {
        d = ref2$[k$];
        v.set(x, y, d, data.get(x, y, d) / 255.0);
      }
    }
  }
  return v;
  function fn$(){
    var i$, to$, results$ = [];
    for (i$ = 0, to$ = IMAGE_W; i$ < to$; ++i$) {
      results$.push(i$);
    }
    return results$;
  }
  function fn1$(){
    var i$, to$, results$ = [];
    for (i$ = 0, to$ = IMAGE_H; i$ < to$; ++i$) {
      results$.push(i$);
    }
    return results$;
  }
  function fn2$(){
    var i$, to$, results$ = [];
    for (i$ = 0, to$ = COLOR_CHANNEL; i$ < to$; ++i$) {
      results$.push(i$);
    }
    return results$;
  }
};
drawImage = function(model, data){
  var x$, canvas, ctx, g, i$, ref$, len$, y, j$, ref1$, len1$, x, pos;
  x$ = canvas = model.$els.emptycanvas;
  x$.width = IMAGE_W;
  x$.height = IMAGE_H;
  ctx = canvas.getContext('2d');
  g = ctx.createImageData(IMAGE_W, IMAGE_H);
  for (i$ = 0, len$ = (ref$ = (fn$())).length; i$ < len$; ++i$) {
    y = ref$[i$];
    for (j$ = 0, len1$ = (ref1$ = (fn1$())).length; j$ < len1$; ++j$) {
      x = ref1$[j$];
      pos = y * IMAGE_W + x;
      if (COLOR_CHANNEL === 3) {
        g.data[pos * 4 + 0] = Math.floor(data.get(y, x, 0) * 255.0);
        g.data[pos * 4 + 1] = Math.floor(data.get(y, x, 1) * 255.0);
        g.data[pos * 4 + 2] = Math.floor(data.get(y, x, 2) * 255.0);
      } else {
        g.data[pos * 4 + 0] = g.data[pos * 4 + 1] = g.data[pos * 4 + 2] = Math.floor(data.get(y, x, 0) * 255.0);
      }
      g.data[pos * 4 + 3] = 255;
    }
  }
  return ctx.putImageData(g, 0, 0);
  function fn$(){
    var i$, to$, results$ = [];
    for (i$ = 0, to$ = IMAGE_H; i$ < to$; ++i$) {
      results$.push(i$);
    }
    return results$;
  }
  function fn1$(){
    var i$, to$, results$ = [];
    for (i$ = 0, to$ = IMAGE_W; i$ < to$; ++i$) {
      results$.push(i$);
    }
    return results$;
  }
};
testConvnet = function(){
  var model, x$, img;
  console.log("start");
  model = new Vue({
    el: '#app',
    data: {
      times: 0,
      loss: 0
    }
  });
  console.log("load image...");
  x$ = img = new Image;
  x$.onload = function(){
    var data, input, input2, layer_defs, x$, net, yhat;
    console.log("image loaded");
    showTargetImage(model, img);
    data = nj.images.read(img);
    input = rgb2input(data);
    input2 = rgb2input(nj.zeros([IMAGE_W, IMAGE_H, COLOR_CHANNEL]));
    layer_defs = [
      {
        type: 'input',
        out_sx: IMAGE_W,
        out_sy: IMAGE_H,
        out_depth: COLOR_CHANNEL
      }, {
        type: 'conv',
        sx: 3,
        filters: 3,
        stride: 1,
        pad: 2,
        activation: 'relu'
      }, {
        type: 'pool',
        sx: 2,
        stride: 2
      }, {
        type: 'regression',
        num_neurons: NUM_OUTPUT
      }
    ];
    x$ = net = new convnetjs.Net;
    x$.makeLayers(layer_defs);
    yhat = net.forward(input);
    drawImage(model, input2);
    return setInterval(function(){
      var cost_loss, i$, ref$, len$, i;
      net.forward(input2);
      cost_loss = net.backward(yhat.w);
      for (i$ = 0, len$ = (ref$ = (fn$())).length; i$ < len$; ++i$) {
        i = ref$[i$];
        input2.w[i] -= input2.dw[i] * RATE;
        input2.dw[i] = 0;
      }
      model.loss = cost_loss;
      model.times += 1;
      if (model.times % DRAW_DURATION === 0) {
        return drawImage(model, input2);
      }
      function fn$(){
        var i$, to$, results$ = [];
        for (i$ = 0, to$ = IMAGE_W * IMAGE_H * COLOR_CHANNEL; i$ < to$; ++i$) {
          results$.push(i$);
        }
        return results$;
      }
    }, 0);
  };
  x$.src = 'image/test3.jpg';
  return x$;
};
testConvnet();