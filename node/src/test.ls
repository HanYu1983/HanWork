require! {
  fs
  canvas: Canvas
  rx: Rx
  ramda: {reduce}
  convnetjs
}

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
      pngstream.on do
        'end'
        -> 
          out.end(->)
          obs.onCompleted()
          
    writeImageClosure out, stream

readChunk = (filepath)->
  Rx.Observable.create (obs)->
    fs.createReadStream filepath
      ..on "data", (chunk)->
        obs.onNext chunk
      
      ..on "end", ->
        console.log "end"
        obs.onCompleted()
      
      ..on "close", ->
        console.log "close"
      
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
    * type: 'conv', sx:5, filters:16, stride:1, pad:2, activation:'relu'
    * type: 'pool', sx: 3, stride: 3
    * type: 'softmax', num_classes: 10
  
  net = new convnetjs.Net()
    ..makeLayers layer_defs
    
  trainer = new convnetjs.SGDTrainer do
    net
    * method:'adadelta'
      batch_size:20
      l2_decay:0.001
  
  Rx.Observable.zip do
    Rx.Observable.range(0, 10)
    mnistDataImage("../doc/train-images-idx3-ubyte")
    mnistDataLabel("../doc/train-labels-idx1-ubyte")
    (idx, img, label)->
      x = new convnetjs.Vol(28,28,1,0.0)
      W = 28* 28
      for i from 0 til W
        x.w[i] = img[i]/255.0
      x = convnetjs.augment(x, 24)
      [idx, x, label]
  .subscribe do
    ([idx, x, y])->
      net.forward(x)
      
      for i from 0 til 100
        stats = trainer.train(x, y)
        lossx = stats.cost_loss
        lossw = stats.l2_decay_loss
      
      yhat = net.getPrediction();
      console.log "#{idx})#{y} > #{yhat}"
    (err)->
      console.log err
    ->
      console.log "completed"
    

/*
mnistDataImage("../doc/train-images-idx3-ubyte")
  .zip do
    Rx.Observable.range(0, 60000)
    (data, idx)->
      [idx, data]
  .skip(59990)
  .tapOnNext ([idx, data])->
    writeImage idx, 28, 28, data
      .subscribe ->,->,->
  .subscribe do
    ([idx, data])->
    (err)->
      console.log err
    ->
      console.log "completed"
*/

/*

mnistDataLabel("../doc/train-labels-idx1-ubyte")
  .zip do
    Rx.Observable.range(0, 60000)
    (data, idx)->
      [idx, data]
  .skip(59990)
  .subscribe do
    ([idx, data])->
      console.log "#{idx})#{data}"
    (err)->
      console.log err
    ->
      console.log "completed"
*/

testConvnet!