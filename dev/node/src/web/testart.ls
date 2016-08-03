require! {
  vue: Vue
  ramda: {reduce, map, repeat, clone}
  convnetjs
}

showTargetImage = (model, img)->
  model.$els.target.appendChild img

data2input = (data)->
  x = new convnetjs.Vol 64,64,1,0
  for i from 0 til 64*64
    x.w[i] = data.selection.data[i]/255.0
  return x

drawImage = (model, data)->
  canvas = model.$els.emptycanvas
  ctx = canvas.getContext('2d')
  g = ctx.createImageData(64, 64)
  for i in [0 til 64*64]
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
      W: []
      
  layer_defs =
    * type: 'input', out_sx: 64, out_sy: 64, out_depth: 1
    * type: 'conv', sx: 5, filters: 10, stride: 1, pad: 2, activation:'relu'
    * type: 'pool', sx: 2, stride: 2
    * type: 'conv', sx: 5, filters: 10, stride: 1, pad: 2, activation:'relu'
    * type: 'pool', sx: 2, stride: 2
    * type: 'regression', num_neurons: 2000
    
  net = new convnetjs.Net
    ..makeLayers layer_defs
  
  img = new Image
    ..onload = ->
      showTargetImage model, img
      
      data = nj.images.read img
      input = data2input data.reshape(64*64)
      yhat = net.forward input
      input2 = data2input nj.zeros([64,64])
      
      setInterval do
        ->
          net.forward input2
          cost_loss = net.backward yhat.w
          for i in [0 til 64*64]
            input2.w[i] -= input2.dw[i]* 0.07
            input2.dw[i] = 0
          model.loss = cost_loss
          model.W = input2.w
          model.times += 1
          if model.times % 10 == 0
            drawImage model, input2.w
        0
      
    ..src = '../bw/asset/icon_diff.jpg'
  
testConvnet!
  
