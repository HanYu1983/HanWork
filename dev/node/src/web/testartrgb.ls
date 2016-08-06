require! {
  vue: Vue
  ramda: {reduce, map, repeat, clone}
  convnetjs
}

IMAGE_H = 143
IMAGE_W = 150
COLOR_CHANNEL = 3
DRAW_DURATION = 10
RATE = 0.06

showTargetImage = (model, img)->
  model.$els.target.appendChild img

rgb2input = (data)->
  console.log data.shape
  v = new convnetjs.Vol IMAGE_W,IMAGE_H,COLOR_CHANNEL,0
  for x from 0 til IMAGE_W
    for y from 0 til IMAGE_H
      for d from 0 til COLOR_CHANNEL
        # ndarray的寬和高是倒反的
        v.set x, y, d, data.get(y, x, d)/ 255.0
  return v

drawImage = (model, data)->
  canvas = model.$els.emptycanvas
    ..width = IMAGE_W
    ..height = IMAGE_H
  ctx = canvas.getContext('2d')
  g = ctx.createImageData(IMAGE_W, IMAGE_H)
  for y from 0 til IMAGE_H
    for x from 0 til IMAGE_W
      pos = y* IMAGE_W+ x
      if COLOR_CHANNEL == 3
        g.data[pos*4+0] = Math.floor(data.get(x,y,0)* 255.0)
        g.data[pos*4+1] = Math.floor(data.get(x,y,1)* 255.0)
        g.data[pos*4+2] = Math.floor(data.get(x,y,2)* 255.0)
      else
        g.data[pos*4+0] = g.data[pos*4+1] = g.data[pos*4+2] = Math.floor(data.get(x,y,0)* 255.0)
      g.data[pos*4+3] = 255
  ctx.putImageData(g, 0, 0)
  
testConvnet = ->
  model = new Vue do
    el: '#app'
    data:
      times: 0
      loss: 0
  
  img = new Image
    ..onload = ->
      showTargetImage model, img
      
      data = nj.images.read img
      input = rgb2input data
      input2 = rgb2input nj.zeros([IMAGE_H,IMAGE_W,COLOR_CHANNEL])
      
      inputLayer = new convnetjs.InputLayer(out_sx: IMAGE_W, out_sy: IMAGE_H, out_depth: COLOR_CHANNEL)
      # conv + relu 要記得在conv層加入bias_pref:0.1
      conv1 = new convnetjs.ConvLayer(in_sx:inputLayer.out_sx, in_sy:inputLayer.out_sy,in_depth:inputLayer.out_depth, sx:3, filters:20, stride:1, pad:2, bias_pref:0.1)
      relu1 = new convnetjs.ReluLayer(in_sx:conv1.out_sx, in_sy:conv1.out_sy,in_depth:conv1.out_depth)
      pool = new convnetjs.PoolLayer(in_sx:relu1.out_sx, in_sy:relu1.out_sy,in_depth:relu1.out_depth,sx:2, stride:2)
      outputLayer = new convnetjs.RegressionLayer(in_sx: pool.out_sx, in_sy: pool.out_sy, in_depth: pool.out_depth)
  
      net = new convnetjs.Net
        ..layers.push inputLayer
        ..layers.push conv1
        ..layers.push relu1
        ..layers.push pool
        ..layers.push outputLayer
        
      yhat = net.forward input
      pglist = net.getParamsAndGrads()
      
      drawImage model, input2
      setInterval do
        ->
          net.forward input2
          cost_loss = net.backward yhat.w
          for i from 0 til IMAGE_W*IMAGE_H*COLOR_CHANNEL
            input2.w[i] -= input2.dw[i]* RATE
            input2.dw[i] = 0
          for {params, grads} in pglist
            for j from 0 til grads
              grads[i] = 0
          model.loss = cost_loss
          model.times += 1
          if model.times % DRAW_DURATION == 0
            drawImage model, input2
        0
      
    ..src = 'image/test3.jpg'
  
testConvnet!
  
