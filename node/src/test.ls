require! {
  fs
  canvas: Canvas
  rx: Rx
  ramda: {reduce, partial}
  convnetjs
}

# 全域變數
# livescript基本上所有變數會在local宣告，除非指定物件或使用:=引用外層變數
global = 
  imgdir: "../output"
  
writeImage = (imgidx, w, h, buf)->
  Rx.Observable.create (obs)->
    imagelen = w* h
    can = new Canvas(w,h)
    c2d = can.getContext('2d')
    imgdata = c2d.createImageData(w, h)
  
    for i from 0 til imagelen by 1
      imgdata .data[i*4] = buf[i]
      imgdata .data[i*4+1] = buf[i]
      imgdata .data[i*4+2] = buf[i]
      imgdata .data[i*4+3] = 255
  
    c2d.putImageData( imgdata, 0, 0 )
  
    outfilepath = "#{global.imgdir}/#{imgidx}.png"
    out = fs.createWriteStream(outfilepath)
    stream = can.pngStream()
  
    writeImageClosure = (outfile, pngstream)->
      console.log "writeImage > #{outfilepath}"
      pngstream.on do
        'data'
        (chunk) -> 
          outfile.write(chunk)
      # stream結束時要記得關閉outfile的stream, 不然會有建立太多檔案連結例外
      pngstream.on do
        'end'
        -> 
          outfile.end(->)
          obs.onCompleted()
          
    writeImageClosure out, stream

readChunk = (filepath)->
  Rx.Observable.create (obs)->
    fs.createReadStream filepath
      ..on "data", (chunk)->
        obs.onNext chunk
      
      ..on "end", ->
        obs.onCompleted()
      
      ..on "close", ->
      
mnistDataLabel = (filepath)->
  Rx.Observable.create (obs)->
    readChunk(filepath).reduce do
      ({state, pos, buf}:ctx, chunk)->
        chunk.copy(buf, pos)
        nctx = ctx with pos: pos + chunk.byteLength
        parse = ({state, pos, buf}:ctx)->
          return switch state
            | 0 =>
              if pos >= 8
                magic = buf.readUInt32BE()
                num = buf.readUInt32BE(4)
                console.log "magic)#{magic}"
                console.log "num)#{num}"
                buf.copy buf, 0, 8, pos - 8
                parse ctx with pos: pos - 8, state: 1, num: num
              else
                ctx
            | 1 =>
              # 減少遞迴呼叫，因為遞迴深限有上限，大約8000次
              for i from 0 til pos
                label = buf.readUInt8(i)
                obs.onNext label
              # 這裡不需要搬移buf, 只要將curr position變為0就行了
              # 直接回傳
              ctx with pos: 0
            | otherwise =>
              ctx
        parse nctx
      {
        state: 0
        pos: 0
        buf: new Buffer(65535*2)
      }
    .subscribe ->,->,->obs.onCompleted()
        
mnistDataImage = (filepath)->
  Rx.Observable.create (obs)->
    readChunk(filepath).reduce do
      ({state, pos, buf}:ctx, chunk)->
        chunk.copy(buf, pos)
        nctx = ctx with pos: pos + chunk.byteLength
        parse = ({state, pos, buf}:ctx)->
          return switch state
            | 0 =>
              if pos >= 16
                magic = buf.readUInt32BE()
                dataLen = buf.readUInt32BE(4)
                rows = buf.readUInt32BE(8)
                columns = buf.readUInt32BE(12)
                console.log "magic is #{magic}"
                console.log "dataLen is #{dataLen}"
                console.log "rows is #{rows}"
                console.log "columns is #{columns}"
                buf.copy buf, 0, 16, pos-16
                parse ctx with do
                  state: 1
                  pos: pos - 16
                  dataLen: dataLen
                  rows: rows
                  columns: columns
              else
                ctx
            | 1 =>
              imagelen = ctx.rows* ctx.columns
              if pos >= imagelen
                numofimg = Math.floor(pos/ imagelen)
                for i from 0 til numofimg
                  imgbuf = new Buffer(imagelen)
                  buf.copy imgbuf, 0, imagelen* i, imagelen* i + imagelen
                  obs.onNext(imgbuf)
                buf.copy buf, 0, imagelen* numofimg , pos - imagelen* numofimg
                ctx with pos: pos - imagelen* numofimg
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

testConvnet = ->
  layer_defs =
    * type: 'input', out_sx: 24, out_sy: 24, out_depth: 1
    * type: 'conv', sx: 5, filters: 8, stride: 1, pad: 2, activation:'relu'
    * type: 'pool', sx: 2, stride: 2
    * type: 'conv', sx: 5, filters:16, stride: 1, pad: 2, activation:'relu'
    * type: 'pool', sx: 3, stride: 3
    * type: 'softmax', num_classes: 10
  
  net = new convnetjs.Net()
    ..makeLayers layer_defs
    
  trainer = new convnetjs.SGDTrainer do
    net
    * method:'adadelta'
      batch_size:20
      l2_decay:0.001
  
  trainSet = 
    Rx.Observable.zip do
      mnistDataImage("../doc/train-images-idx3-ubyte")
      mnistDataLabel("../doc/train-labels-idx1-ubyte")
      (img, label)->
        x = new convnetjs.Vol(28,28,1,0.0)
        W = 28* 28
        for i from 0 til W
          x.w[i] = img[i]/255.0
        # 強化特徵值
        x = convnetjs.augment(x, 24)
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
    .reduce (acc, curr)->0, 0
      
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
    .reduce (acc, curr)->0, 0
  
  Rx.Observable.from [0 til 20]             # 總共訓練20遍
    .flatMap partial(training, [0, 100, 1]) # 使用編號0~100的數據，各訓練一次
    .reduce (acc, curr)->0, 0               # 消化掉訓練20遍的所有事件
    .flatMap partial(predic, [200, 300])    # 使用編號200~300的數據做預測
    .subscribe do
      ->
      (err)->
        console.log err
      ->
        console.log "completed"

testWriteImage = ->
  mnistDataImage("../doc/train-images-idx3-ubyte")
    .zip do
      Rx.Observable.range(0, 60000)
      (data, idx)->
        [idx, data]
    .skip(59990)  # 只輸出最後10個
    .tapOnNext ([idx, data])->
      writeImage idx, 28, 28, data
        .subscribe ->,->,->
    .subscribe do
      ([idx, data])->
      (err)->
        console.log err
      ->
        console.log "completed"

testShowLabel = ->
  mnistDataLabel("../doc/train-labels-idx1-ubyte")
    .zip do
      Rx.Observable.range(0, 60000)
      (data, idx)->
        [idx, data]
    .skip(59990)  # 只輸出最後10個
    .subscribe do
      ([idx, data])->
        console.log "#{idx})#{data}"
      (err)->
        console.log err
      ->
        console.log "completed"

testConvnet!