require! {
  vue: Vue
  ramda: {reduce, map, repeat, clone}
  convnetjs
}

IMAGE_W = 120
IMAGE_H = 120
DRAW_DURATION = 10
RATE = 0.07
NUM_OUTPUT = IMAGE_W *IMAGE_H

showTargetImage = (model, img)->
  model.$els.target.appendChild img

data2input = (data)->
  x = new convnetjs.Vol IMAGE_W,IMAGE_H,1,0
  for i from 0 til IMAGE_W*IMAGE_H 
    x.w[i] = data.selection.data[i]/255.0
  return x

drawImage = (model, data)->
  canvas = model.$els.emptycanvas
    ..width = IMAGE_W
    ..height = IMAGE_H
  ctx = canvas.getContext('2d')
  g = ctx.createImageData(IMAGE_W, IMAGE_H)
  for i in [0 til IMAGE_W*IMAGE_H]
    value = Math.floor(data[i]*255)
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
      
  layer_defs =
    * type: 'input', out_sx: IMAGE_W, out_sy: IMAGE_H, out_depth: 1
    * type: 'conv', sx: 3, filters: 16, stride: 1, pad: 2, activation:'relu'
    * type: 'pool', sx: 2, stride: 2
    * type: 'conv', sx: 3, filters: 32, stride: 1, pad: 2, activation:'relu'
    * type: 'pool', sx: 2, stride: 2
    * type: 'regression', num_neurons: NUM_OUTPUT
    
  net = new convnetjs.Net
    ..makeLayers layer_defs
  
  img = new Image
    ..onload = ->
      showTargetImage model, img
      
      data = nj.images.read img
      input = data2input data.reshape(IMAGE_W*IMAGE_H)
      yhat = net.forward input
      input2 = data2input nj.zeros([IMAGE_W,IMAGE_H])
      
      setInterval do
        ->
          net.forward input2
          cost_loss = net.backward yhat.w
          for i in [0 til IMAGE_W*IMAGE_H]
            input2.w[i] -= input2.dw[i]* RATE
            input2.dw[i] = 0
          model.loss = cost_loss
          model.times += 1
          if model.times % DRAW_DURATION == 0
            drawImage model, input2.w
        0
      
    ..src = 'image/test2.jpg'
  
testConvnet!
  
