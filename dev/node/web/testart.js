var Vue, ref$, reduce, map, repeat, clone, convnetjs, IMAGE_W, IMAGE_H, DRAW_DURATION, RATE, NUM_OUTPUT, showTargetImage, data2input, drawImage, testConvnet;
Vue = require('vue');
ref$ = require('ramda'), reduce = ref$.reduce, map = ref$.map, repeat = ref$.repeat, clone = ref$.clone;
convnetjs = require('convnetjs');
IMAGE_W = 120;
IMAGE_H = 120;
DRAW_DURATION = 1;
RATE = 0.06;
NUM_OUTPUT = 0;
showTargetImage = function(model, img){
  return model.$els.target.appendChild(img);
};
data2input = function(data){
  var x, i$, to$, i;
  x = new convnetjs.Vol(IMAGE_W, IMAGE_H, 1, 0);
  for (i$ = 0, to$ = IMAGE_W * IMAGE_H; i$ < to$; ++i$) {
    i = i$;
    x.w[i] = data.get(i) / 255.0;
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
    value = Math.floor(data.w[i] * 255);
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
  var model, inputLayer, conv1, relu1, pool, conv2, relu2, pool2, outputLayer, x$, net, y$, img;
  model = new Vue({
    el: '#app',
    data: {
      times: 0,
      loss: 0
    }
  });
  /*
  layer_defs =
    * type: 'input', out_sx: IMAGE_W, out_sy: IMAGE_H, out_depth: 1
    * type: 'regression', num_neurons: NUM_OUTPUT
    
  net = new convnetjs.Net
    ..makeLayers layer_defs
  */
  inputLayer = new convnetjs.InputLayer({
    out_sx: IMAGE_W,
    out_sy: IMAGE_H,
    out_depth: 1
  });
  conv1 = new convnetjs.ConvLayer({
    in_sx: inputLayer.out_sx,
    in_sy: inputLayer.out_sy,
    in_depth: inputLayer.out_depth,
    sx: 3,
    filters: 1,
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
  conv2 = new convnetjs.ConvLayer({
    in_sx: pool.out_sx,
    in_sy: pool.out_sy,
    in_depth: pool.out_depth,
    sx: 3,
    filters: 1,
    stride: 1,
    pad: 2,
    bias_pref: 0.1
  });
  relu2 = new convnetjs.ReluLayer({
    in_sx: conv2.out_sx,
    in_sy: conv2.out_sy,
    in_depth: conv2.out_depth
  });
  pool2 = new convnetjs.PoolLayer({
    in_sx: relu2.out_sx,
    in_sy: relu2.out_sy,
    in_depth: relu2.out_depth,
    sx: 2,
    stride: 2
  });
  outputLayer = new convnetjs.RegressionLayer({
    in_sx: pool2.out_sx,
    in_sy: pool2.out_sy,
    in_depth: pool2.out_depth
  });
  x$ = net = new convnetjs.Net;
  x$.layers.push(inputLayer);
  x$.layers.push(conv1);
  x$.layers.push(relu1);
  x$.layers.push(pool);
  x$.layers.push(conv2);
  x$.layers.push(relu2);
  x$.layers.push(pool2);
  x$.layers.push(outputLayer);
  y$ = img = new Image;
  y$.onload = function(){
    var data, input, yhat, input2, pglist, totalsize;
    showTargetImage(model, img);
    data = nj.images.read(img);
    input = data2input(data.reshape(IMAGE_W * IMAGE_H));
    yhat = net.forward(input);
    input2 = data2input(nj.zeros(IMAGE_W * IMAGE_H));
    pglist = net.getParamsAndGrads();
    console.log(yhat);
    totalsize = reduce(function(acc, curr){
      return acc + curr.grads.length;
    }, 0, pglist);
    console.log(totalsize);
    return setInterval(function(){
      var cost_loss, i$, ref$, len$, i, ref1$, params, grads, j$, j;
      net.forward(input2);
      cost_loss = net.backward(yhat.w);
      model.loss = cost_loss;
      model.times += 1;
      for (i$ = 0, len$ = (ref$ = (fn$())).length; i$ < len$; ++i$) {
        i = ref$[i$];
        input2.w[i] -= input2.dw[i] * RATE;
        input2.dw[i] = 0;
      }
      for (i$ = 0, len$ = (ref$ = pglist).length; i$ < len$; ++i$) {
        ref1$ = ref$[i$], params = ref1$.params, grads = ref1$.grads;
        for (j$ = 0; j$ < grads; ++j$) {
          j = j$;
          grads[i] = 0;
        }
      }
      if (model.times % DRAW_DURATION === 0) {
        return drawImage(model, input2);
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