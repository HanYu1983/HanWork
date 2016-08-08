require! {
  ramda: {reduce}
  rx: Rx
  vue: Vue
  convnetjs
}

IMAGE_H = 120
IMAGE_W = 120
COLOR_CHANNEL = 3
RATE = 0.07

LoadImage = (path)->
  Rx.Observable.create (obs)->
    img = new Image
      ..onload = ->
        obs.onNext img
      ..src = path

Image2Vol = (img)->
  data = nj.images.read img
  console.log data.shape
  v = new convnetjs.Vol IMAGE_W,IMAGE_H,COLOR_CHANNEL,0
  for x from 0 til IMAGE_W
    for y from 0 til IMAGE_H
      for d from 0 til COLOR_CHANNEL
        # ndarray的寬和高是倒反的
        v.set x, y, d, data.get(y, x, d)/ 255.0
  return v

EmptyVol = ->
  new convnetjs.Vol IMAGE_W,IMAGE_H,COLOR_CHANNEL,0

DrawImage = (canvas, vol)->
  canvas.width = IMAGE_W
  canvas.height = IMAGE_H
  ctx = canvas.getContext('2d')
  g = ctx.createImageData(IMAGE_W, IMAGE_H)
  for y from 0 til IMAGE_H
    for x from 0 til IMAGE_W
      pos = y* IMAGE_W+ x
      if COLOR_CHANNEL == 4
        g.data[pos*4+0] = Math.floor(vol.get(x,y,0)* 255.0)
        g.data[pos*4+1] = Math.floor(vol.get(x,y,1)* 255.0)
        g.data[pos*4+2] = Math.floor(vol.get(x,y,2)* 255.0)
        g.data[pos*4+3] = Math.floor(vol.get(x,y,3)* 255.0)
      else if COLOR_CHANNEL == 3
        g.data[pos*4+0] = Math.floor(vol.get(x,y,0)* 255.0)
        g.data[pos*4+1] = Math.floor(vol.get(x,y,1)* 255.0)
        g.data[pos*4+2] = Math.floor(vol.get(x,y,2)* 255.0)
        g.data[pos*4+3] = 255
      else
        g.data[pos*4+0] = g.data[pos*4+1] = g.data[pos*4+2] = Math.floor(vol.get(x,y,0)* 255.0)
        g.data[pos*4+3] = 255
  ctx.putImageData(g, 0, 0)
  
Net = ->
  inputLayer = new convnetjs.InputLayer(out_sx: IMAGE_W, out_sy: IMAGE_H, out_depth: COLOR_CHANNEL)
  # conv + relu 要記得在conv層加入bias_pref:0.1
  conv1 = new convnetjs.ConvLayer(in_sx:inputLayer.out_sx, in_sy:inputLayer.out_sy,in_depth:inputLayer.out_depth, sx:3, filters:10, stride:1, pad:2, bias_pref:0.1)
  relu1 = new convnetjs.ReluLayer(in_sx:conv1.out_sx, in_sy:conv1.out_sy,in_depth:conv1.out_depth)
  pool = new convnetjs.PoolLayer(in_sx:relu1.out_sx, in_sy:relu1.out_sy,in_depth:relu1.out_depth,sx:2, stride:2)
  outputLayer = new convnetjs.RegressionLayer(in_sx: pool.out_sx, in_sy: pool.out_sy, in_depth: pool.out_depth)

  net = new convnetjs.Net
    ..layers.push inputLayer
    ..layers.push conv1
    ..layers.push relu1
    ..layers.push pool
    ..layers.push outputLayer

TargetVol = (net, input)->
  net.forward input

AllW = (net)->
  pglist = net.getParamsAndGrads()
  ->
    for {params, grads} in pglist
      for j from 0 til grads
        grads[i] = 0

AddGrads = (vol)->
  for i from 0 til IMAGE_W*IMAGE_H*COLOR_CHANNEL
    vol.w[i] -= vol.dw[i]* RATE
    vol.dw[i] = 0

main = ->
  model = new Vue do
    el: '#app'
    data:
      times: 0
      loss: 0
      
  Rx.Observable.zip do
    LoadImage "image/test4.jpeg"
    LoadImage "image/test5.jpeg"
    (img1, img2)->
      [img1, img2]
  .tapOnNext ([img, img2])->
    container = model.$els.imgcontainer
      ..appendChild img
      ..appendChild img2
      
    net = Net!
    ClearAllW = AllW net
    target1 = TargetVol net, (Image2Vol img)
    target2 = TargetVol net, (Image2Vol img2)
    
    emptyVol = EmptyVol!
    
    setInterval do
      ->
        loss = 0
        net.forward emptyVol
        
        loss += net.backward target1.w
        AddGrads emptyVol
        ClearAllW!
        
        loss += net.backward target2.w
        AddGrads emptyVol
        ClearAllW!
        
        DrawImage model.$els.targetcanvas, emptyVol
        model.loss = loss
      0
    
  .subscribe do
    ->
    (err)->
      console.log err
    ->
      console.log "completed"
main!