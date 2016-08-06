var Vue, ref$, reduce, map, repeat, clone, convnetjs, IMAGE_H, IMAGE_W, COLOR_CHANNEL, DRAW_DURATION, RATE, showTargetImage, rgb2input, drawImage, testConvnet;
Vue = require('vue');
ref$ = require('ramda'), reduce = ref$.reduce, map = ref$.map, repeat = ref$.repeat, clone = ref$.clone;
convnetjs = require('convnetjs');
IMAGE_H = 143;
IMAGE_W = 150;
COLOR_CHANNEL = 3;
DRAW_DURATION = 10;
RATE = 0.06;
showTargetImage = function(model, img){
  return model.$els.target.appendChild(img);
};
rgb2input = function(data){
  var v, i$, to$, x, j$, to1$, y, k$, to2$, d;
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
drawImage = function(model, data){
  var x$, canvas, ctx, g, i$, to$, y, j$, to1$, x, pos;
  x$ = canvas = model.$els.emptycanvas;
  x$.width = IMAGE_W;
  x$.height = IMAGE_H;
  ctx = canvas.getContext('2d');
  g = ctx.createImageData(IMAGE_W, IMAGE_H);
  for (i$ = 0, to$ = IMAGE_H; i$ < to$; ++i$) {
    y = i$;
    for (j$ = 0, to1$ = IMAGE_W; j$ < to1$; ++j$) {
      x = j$;
      pos = y * IMAGE_W + x;
      if (COLOR_CHANNEL === 3) {
        g.data[pos * 4 + 0] = Math.floor(data.get(x, y, 0) * 255.0);
        g.data[pos * 4 + 1] = Math.floor(data.get(x, y, 1) * 255.0);
        g.data[pos * 4 + 2] = Math.floor(data.get(x, y, 2) * 255.0);
      } else {
        g.data[pos * 4 + 0] = g.data[pos * 4 + 1] = g.data[pos * 4 + 2] = Math.floor(data.get(x, y, 0) * 255.0);
      }
      g.data[pos * 4 + 3] = 255;
    }
  }
  return ctx.putImageData(g, 0, 0);
};
testConvnet = function(){
  var model, x$, img;
  model = new Vue({
    el: '#app',
    data: {
      times: 0,
      loss: 0
    }
  });
  x$ = img = new Image;
  x$.onload = function(){
    var data, input, input2, inputLayer, conv1, relu1, pool, outputLayer, x$, net, yhat, pglist;
    showTargetImage(model, img);
    data = nj.images.read(img);
    input = rgb2input(data);
    input2 = rgb2input(nj.zeros([IMAGE_H, IMAGE_W, COLOR_CHANNEL]));
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
      filters: 20,
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
    yhat = net.forward(input);
    pglist = net.getParamsAndGrads();
    drawImage(model, input2);
    return setInterval(function(){
      var cost_loss, i$, to$, i, ref$, len$, ref1$, params, grads, j$, j;
      net.forward(input2);
      cost_loss = net.backward(yhat.w);
      for (i$ = 0, to$ = IMAGE_W * IMAGE_H * COLOR_CHANNEL; i$ < to$; ++i$) {
        i = i$;
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
      model.loss = cost_loss;
      model.times += 1;
      if (model.times % DRAW_DURATION === 0) {
        return drawImage(model, input2);
      }
    }, 0);
  };
  x$.src = 'image/test3.jpg';
  return x$;
};
testConvnet();