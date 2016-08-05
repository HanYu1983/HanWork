require! {
  vue: Vue
  ramda: {reduce, map, repeat, clone}
  convnetjs
}

IMAGE_W = 150
IMAGE_H = 143
COLOR_CHANNEL = 1
DRAW_DURATION = 10
RATE = 0.07
NUM_OUTPUT = IMAGE_W* IMAGE_H

showTargetImage = (model, img)->
  model.$els.target.appendChild img

rgb2input = (data)->
  v = new convnetjs.Vol IMAGE_W,IMAGE_H,COLOR_CHANNEL,0
  for x in [0 til IMAGE_W]
    for y in [0 til IMAGE_H]
      for d in [0 til COLOR_CHANNEL]
        v.set x, y, d, data.get(x, y, d)/ 255.0
  return v

drawImage = (model, data)->
  canvas = model.$els.emptycanvas
    ..width = IMAGE_W
    ..height = IMAGE_H
  ctx = canvas.getContext('2d')
  g = ctx.createImageData(IMAGE_W, IMAGE_H)
  for y in [0 til IMAGE_H]
    for x in [0 til IMAGE_W]
      pos = y* IMAGE_W+ x
      if COLOR_CHANNEL == 3
        g.data[pos*4+0] = Math.floor(data.get(y,x,0)* 255.0)
        g.data[pos*4+1] = Math.floor(data.get(y,x,1)* 255.0)
        g.data[pos*4+2] = Math.floor(data.get(y,x,2)* 255.0)
      else
        g.data[pos*4+0] = g.data[pos*4+1] = g.data[pos*4+2] = Math.floor(data.get(y,x,0)* 255.0)
      g.data[pos*4+3] = 255
  ctx.putImageData(g, 0, 0)
  
testConvnet = ->
  console.log("start")
  
  model = new Vue do
    el: '#app'
    data:
      times: 0
      loss: 0
  
  console.log("load image...")
  
  img = new Image
    ..onload = ->
      console.log("image loaded")
      
      showTargetImage model, img
      
      data = nj.images.read img
      input = rgb2input data
      input2 = rgb2input nj.zeros([IMAGE_W,IMAGE_H,COLOR_CHANNEL])
      
      layer_defs =
        * type: 'input', out_sx: IMAGE_W, out_sy: IMAGE_H, out_depth: COLOR_CHANNEL
        * type: 'conv', sx:3, filters:3, stride:1, pad:2, activation:'relu'
        * type: 'pool', sx:2, stride:2
        * type: 'regression', num_neurons: NUM_OUTPUT
    
      net = new convnetjs.Net
        ..makeLayers layer_defs
      
      yhat = net.forward input
      
      drawImage model, input2
      setInterval do
        ->
          net.forward input2
          cost_loss = net.backward yhat.w
          for i in [0 til IMAGE_W*IMAGE_H*COLOR_CHANNEL]
            input2.w[i] -= input2.dw[i]* RATE
            input2.dw[i] = 0
          model.loss = cost_loss
          model.times += 1
          if model.times % DRAW_DURATION == 0
            drawImage model, input2
        0
      
    ..src = 'image/test3.jpg'
  
testConvnet!
  
