require! {
  fs
  canvas: Canvas
  rx: Rx
  "./tool.js": {readChunk}
  ramda: {reduce, partial, flatten}
  convnetjs
}


# 使用指定的alpha層bytes寫入圖片
writeImageRGB = (imgname, w, h, buf)->
  Rx.Observable.create (obs)->
    imagelen = w* h
    can = new Canvas(w,h)
    c2d = can.getContext('2d')
    imgdata = c2d.createImageData(w, h)
  
    for i from 0 til buf.length
      imgdata.data[i*4] = buf[i][0]
      imgdata.data[i*4+1] = buf[i][1]
      imgdata.data[i*4+2] = buf[i][2]
      imgdata.data[i*4+3] = 255
      
    c2d.putImageData( imgdata, 0, 0 )
  
    outfilepath = "#{imgname}"
    out = fs.createWriteStream(outfilepath)
    stream = can.pngStream()
  
    writeImageClosure = (outfile, pngstream)->
      console.log "writeImage > #{outfilepath}"
      pngstream.on do
        'data'
        (chunk) -> 
          outfile.write(chunk)
      # stream結束時要記得關閉outfile的stream, 不然會有「建立太多檔案連結」例外
      pngstream.on do
        'end'
        -> 
          outfile.end(->)
          obs.onCompleted()
          
    writeImageClosure out, stream

# 取得cifar
cifarImageLabels = (filepath)->
  Rx.Observable.create (obs)->
    readChunk(filepath).reduce do
      ({state, pos, buf}:ctx, chunk)->
        chunk.copy(buf, pos)
        nctx = ctx with pos: pos + chunk.byteLength
        parse = ({state, pos, buf}:ctx)->
          return switch state
            | 0 =>
              size = 1+1024+1024+1024
              if pos >= size
                num = Math.floor(pos/ size)
                for i from 0 til num
                  label = buf.readUInt8(i*size)
                  img = 
                    for j from 0 til 1024
                      r = buf.readUInt8(i*size+1+j)
                      g = buf.readUInt8(i*size+1+1024+j)
                      b = buf.readUInt8(i*size+1+1024+1024+j)
                      [r, g, b]
                  obs.onNext([img, label])
                buf.copy buf, 0, num*size, pos - num*size
                ctx with pos: pos - num * size
              else
                ctx
            | otherwise =>
              ctx
        parse nctx
      {
        state: 0
        pos: 0
        buf: new Buffer(65535*2)
      }
    .subscribe ->,->,->obs.onCompleted()
    

testWriteImage = ->
  cifarImageLabels("../doc/cifar-10-batches-bin/data_batch_1.bin")
    .zip do
      Rx.Observable.range(0, 100)
      (data, idx)->
        [idx, data]
    .flatMap ([idx, [img, label]])->
      writeImageRGB "../output/cifar_#{idx}.png", 32, 32, img
    .subscribe do
      ->
      (err)->
        console.log(err)
      ->
        console.log("complited")
        
testConvnet = ->
  layer_defs =
    * type: 'input', out_sx: 32, out_sy: 32, out_depth: 3
    * type: 'conv', sx: 5, filters: 16, stride: 1, pad: 2, activation:'relu'
    * type: 'pool', sx: 2, stride: 2
    * type: 'conv', sx: 5, filters: 20, stride: 1, pad: 2, activation:'relu'
    * type: 'pool', sx: 2, stride: 2
    * type: 'conv', sx: 5, filters: 20, stride: 1, pad: 2, activation:'relu'
    * type: 'pool', sx: 2, stride: 2
    * type: 'softmax', num_classes: 10
  
  # 簡單的fc網路就可以訓練出來，但準確率較低
  layer_defs2 = 
    * type: 'input', out_sx: 32, out_sy: 32, out_depth: 3
    * type: 'softmax', num_classes:10
  
  net = new convnetjs.Net
    ..makeLayers layer_defs2 # 這裡選擇要使用哪一個網路
    
  trainer = new convnetjs.SGDTrainer do
    net
    * method:'adadelta'
      batch_size:4
      l2_decay:0.001
  
  trainSet = 
    cifarImageLabels("../doc/cifar-10-batches-bin/data_batch_1.bin")
      .map ([img, label])->
        x = new convnetjs.Vol(32,32,3,0.0)
        W = 32* 32
        for i from 0 til W
          xc = i%32
          yc = Math.floor(i/32)
          x.set(yc,xc,0,img[i][0]/255.0-0.5)
          x.set(yc,xc,1,img[i][1]/255.0-0.5)
          x.set(yc,xc,2,img[i][2]/255.0-0.5)
        # 強化特徵值
        dx = Math.floor(Math.random()*5-2)
        dy = Math.floor(Math.random()*5-2)
        x = convnetjs.augment(x, 32, dx, dy, Math.random()<0.5) #maybe flip horizontally
        [x, label]
        
  training = (s, e, time)->
    trainSet.zip do
      Rx.Observable.range(0, e)
      (ts, idx)->
        [idx, ts]
    .skip(s)
    .tapOnNext ([idx, [x, y]])->
      for i from 0 til time
        stats = trainer.train(x, y)
        # 示範取出loss值
        lossx = stats.cost_loss
        lossw = stats.l2_decay_loss
      net.forward(x)
      yhat = net.getPrediction();
      console.log "tarin:#{idx})#{y} > #{yhat}"
    .reduce (acc, curr)->0, 0 # 消化掉所有事件
      
  predic = (s, e)->
    trainSet.zip do
      Rx.Observable.range(0, e)
      (ts, idx)->
        [idx, ts]
    .skip(s)
    .tapOnNext ([idx, [x, y]])->
      net.forward(x)
      yhat = net.getPrediction()
      console.log "predict:#{idx})#{y} > #{yhat}"
    .reduce (acc, curr)->0, 0 # 消化掉所有事件
  
  Rx.Observable.from [0 til 100]             # 總共訓練20遍
    .flatMap partial(training, [0, 100, 1]) # 使用編號0~100的數據，各訓練一次
    .reduce (acc, curr)->0, 0               # 消化掉訓練20遍的所有事件
    .flatMap partial(predic, [200, 300])    # 使用編號200~300的數據做預測
    .subscribe do
      ->
      (err)->
        console.log err
      ->
        console.log "completed"
        
testConvnet!