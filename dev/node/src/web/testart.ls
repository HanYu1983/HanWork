require! {
  vue: Vue
  ramda: {reduce, map, repeat, clone}
  convnetjs
}

IMAGE_W = 120
IMAGE_H = 120
DRAW_DURATION = 1
RATE = 0.06
NUM_OUTPUT = 0

showTargetImage = (model, img)->
  model.$els.target.appendChild img

data2input = (data)->
  x = new convnetjs.Vol IMAGE_W,IMAGE_H,1,0
  for i from 0 til IMAGE_W*IMAGE_H 
    x.w[i] = data.get(i)/255.0
  return x

drawImage = (model, data)->
  canvas = model.$els.emptycanvas
    ..width = IMAGE_W
    ..height = IMAGE_H
  ctx = canvas.getContext('2d')
  g = ctx.createImageData(IMAGE_W, IMAGE_H)
  for i in [0 til IMAGE_W*IMAGE_H]
    value = Math.floor(data.w[i]*255)
    g.data[i*4+0] = value
    g.data[i*4+1] = value
    g.data[i*4+2] = value
    g.data[i*4+3] = 255
  ctx.putImageData(g, 0, 0)
  
testConvnet = ->
  model = new Vue do
    el: '#app'
    data:
      times: 0
      loss: 0
  /*
  layer_defs =
    * type: 'input', out_sx: IMAGE_W, out_sy: IMAGE_H, out_depth: 1
    * type: 'regression', num_neurons: NUM_OUTPUT
    
  net = new convnetjs.Net
    ..makeLayers layer_defs
  */
  
  inputLayer = new convnetjs.InputLayer(out_sx: IMAGE_W, out_sy: IMAGE_H, out_depth: 1)
  # conv + relu 要記得在conv層加入bias_pref:0.1
  conv1 = new convnetjs.ConvLayer(in_sx:inputLayer.out_sx, in_sy:inputLayer.out_sy,in_depth:inputLayer.out_depth, sx:3, filters:1, stride:1, pad:2, bias_pref:0.1)
  relu1 = new convnetjs.ReluLayer(in_sx:conv1.out_sx, in_sy:conv1.out_sy,in_depth:conv1.out_depth)
  pool = new convnetjs.PoolLayer(in_sx:relu1.out_sx, in_sy:relu1.out_sy,in_depth:relu1.out_depth,sx:2, stride:2)
  
  conv2 = new convnetjs.ConvLayer(in_sx:pool.out_sx, in_sy:pool.out_sy,in_depth:pool.out_depth, sx:3, filters:1, stride:1, pad:2, bias_pref:0.1)
  relu2 = new convnetjs.ReluLayer(in_sx:conv2.out_sx, in_sy:conv2.out_sy,in_depth:conv2.out_depth)
  pool2 = new convnetjs.PoolLayer(in_sx:relu2.out_sx, in_sy:relu2.out_sy,in_depth:relu2.out_depth,sx:2, stride:2)
  
  outputLayer = new convnetjs.RegressionLayer(in_sx: pool2.out_sx, in_sy: pool2.out_sy, in_depth: pool2.out_depth)
  
  net = new convnetjs.Net
    ..layers.push inputLayer
    ..layers.push conv1
    ..layers.push relu1
    ..layers.push pool
    ..layers.push conv2
    ..layers.push relu2
    ..layers.push pool2
    ..layers.push outputLayer
  
  img = new Image
    ..onload = ->
      showTargetImage model, img
      
      data = nj.images.read img
      input = data2input data.reshape(IMAGE_W*IMAGE_H)
      yhat = net.forward input
      input2 = data2input nj.zeros(IMAGE_W*IMAGE_H)
      pglist = net.getParamsAndGrads()
      
      console.log yhat
      
      totalsize = 
        reduce do
          (acc, curr)->
            acc+curr.grads.length
          0
          pglist
      console.log totalsize
      
      setInterval do
        ->
          net.forward input2
          cost_loss = net.backward yhat.w
          model.loss = cost_loss
          
          model.times += 1
          
          for i in [0 til IMAGE_W*IMAGE_H]
            input2.w[i] -= input2.dw[i]* RATE
            input2.dw[i] = 0
          for {params, grads} in pglist
            for j from 0 til grads
              grads[i] = 0
              
          if model.times % DRAW_DURATION == 0
            drawImage model, input2
        0
      
    ..src = 'image/test2.jpg'
  
testConvnet!
  
