var Vue, ref$, reduce, map, repeat, clone, convnetjs, IMAGE_W, IMAGE_H, DRAW_DURATION, RATE, NUM_OUTPUT, showTargetImage, data2input, drawImage, testConvnet;
Vue = require('vue');
ref$ = require('ramda'), reduce = ref$.reduce, map = ref$.map, repeat = ref$.repeat, clone = ref$.clone;
convnetjs = require('convnetjs');
IMAGE_W = 120;
IMAGE_H = 120;
DRAW_DURATION = 10;
RATE = 0.07;
NUM_OUTPUT = IMAGE_W * IMAGE_H;
showTargetImage = function(model, img){
  return model.$els.target.appendChild(img);
};
data2input = function(data){
  var x, i$, to$, i;
  x = new convnetjs.Vol(IMAGE_W, IMAGE_H, 1, 0);
  for (i$ = 0, to$ = IMAGE_W * IMAGE_H; i$ < to$; ++i$) {
    i = i$;
    x.w[i] = data.selection.data[i] / 255.0;
  }
  return x;
};
drawImage = function(model, data){
  var x$, canvas, ctx, g, i$, ref$, len$, i, value;
  x$ = canvas = model.$els.emptycanvas;
  x$.width = IMAGE_W;
  x$.height = IMAGE_H;
  ctx = canvas.getContext('2d');
  g = ctx.createImageData(IMAGE_W, IMAGE_H);
  for (i$ = 0, len$ = (ref$ = (fn$())).length; i$ < len$; ++i$) {
    i = ref$[i$];
    value = Math.floor(data[i] * 255);
    g.data[i * 4 + 0] = value;
    g.data[i * 4 + 1] = value;
    g.data[i * 4 + 2] = value;
    g.data[i * 4 + 3] = 255;
  }
  return ctx.putImageData(g, 0, 0);
  function fn$(){
    var i$, to$, results$ = [];
    for (i$ = 0, to$ = IMAGE_W * IMAGE_H; i$ < to$; ++i$) {
      results$.push(i$);
    }
    return results$;
  }
};
testConvnet = function(){
  var model, layer_defs, x$, net, y$, img;
  model = new Vue({
    el: '#app',
    data: {
      times: 0,
      loss: 0
    }
  });
  layer_defs = [
    {
      type: 'input',
      out_sx: IMAGE_W,
      out_sy: IMAGE_H,
      out_depth: 1
    }, {
      type: 'conv',
      sx: 3,
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
      sx: 3,
      filters: 32,
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
  y$ = img = new Image;
  y$.onload = function(){
    var data, input, yhat, input2;
    showTargetImage(model, img);
    data = nj.images.read(img);
    input = data2input(data.reshape(IMAGE_W * IMAGE_H));
    yhat = net.forward(input);
    input2 = data2input(nj.zeros([IMAGE_W, IMAGE_H]));
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
        return drawImage(model, input2.w);
      }
      function fn$(){
        var i$, to$, results$ = [];
        for (i$ = 0, to$ = IMAGE_W * IMAGE_H; i$ < to$; ++i$) {
          results$.push(i$);
        }
        return results$;
      }
    }, 0);
  };
  y$.src = 'image/test2.jpg';
  return y$;
};
testConvnet();