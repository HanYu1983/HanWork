var Vue, ref$, reduce, map, repeat, clone, convnetjs, showTargetImage, data2input, drawImage, testConvnet;
Vue = require('vue');
ref$ = require('ramda'), reduce = ref$.reduce, map = ref$.map, repeat = ref$.repeat, clone = ref$.clone;
convnetjs = require('convnetjs');
showTargetImage = function(model, img){
  return model.$els.target.appendChild(img);
};
data2input = function(data){
  var x, i$, to$, i;
  x = new convnetjs.Vol(64, 64, 1, 0);
  for (i$ = 0, to$ = 64 * 64; i$ < to$; ++i$) {
    i = i$;
    x.w[i] = data.selection.data[i] / 255.0;
  }
  return x;
};
drawImage = function(model, data){
  var canvas, ctx, g, i$, ref$, len$, i, value;
  canvas = model.$els.emptycanvas;
  ctx = canvas.getContext('2d');
  g = ctx.createImageData(64, 64);
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
    for (i$ = 0, to$ = 64 * 64; i$ < to$; ++i$) {
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
      loss: 0,
      W: []
    }
  });
  layer_defs = [
    {
      type: 'input',
      out_sx: 64,
      out_sy: 64,
      out_depth: 1
    }, {
      type: 'conv',
      sx: 5,
      filters: 10,
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
      filters: 10,
      stride: 1,
      pad: 2,
      activation: 'relu'
    }, {
      type: 'pool',
      sx: 2,
      stride: 2
    }, {
      type: 'regression',
      num_neurons: 2000
    }
  ];
  x$ = net = new convnetjs.Net;
  x$.makeLayers(layer_defs);
  y$ = img = new Image;
  y$.onload = function(){
    var data, input, yhat, input2;
    showTargetImage(model, img);
    data = nj.images.read(img);
    input = data2input(data.reshape(64 * 64));
    yhat = net.forward(input);
    input2 = data2input(nj.zeros([64, 64]));
    return setInterval(function(){
      var cost_loss, i$, ref$, len$, i;
      net.forward(input2);
      cost_loss = net.backward(yhat.w);
      for (i$ = 0, len$ = (ref$ = (fn$())).length; i$ < len$; ++i$) {
        i = ref$[i$];
        input2.w[i] -= input2.dw[i] * 0.07;
        input2.dw[i] = 0;
      }
      model.loss = cost_loss;
      model.W = input2.w;
      model.times += 1;
      if (model.times % 10 === 0) {
        return drawImage(model, input2.w);
      }
      function fn$(){
        var i$, to$, results$ = [];
        for (i$ = 0, to$ = 64 * 64; i$ < to$; ++i$) {
          results$.push(i$);
        }
        return results$;
      }
    }, 0);
  };
  y$.src = '../bw/asset/icon_diff.jpg';
  return y$;
};
testConvnet();