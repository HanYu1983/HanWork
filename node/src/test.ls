require! {
  fs
  canvas: Canvas
  rx: Rx
  ramda: {reduce}
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
        
parse = ({state, pos, buf}:ctx, obs)->
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
        [ 
          true, 
          ctx with do
            state: 1
            pos: pos-16
            dataLen: dataLen
            rows: rows
            columns: columns
        ]
      else
        [false]
    | 1 =>
      imagelen = ctx.rows* ctx.columns
      if pos >= imagelen
        imgbuf = new Buffer(imagelen)
        buf.copy imgbuf, 0, 0, imagelen
        obs.onNext(imgbuf)
        buf.copy buf, 0, imagelen, pos - imagelen
        [
          true,
          ctx with do
            pos: pos - imagelen
        ]
      else
        [false]
    | otherwise =>
      [false]
        
mnistData = (filepath)->
  Rx.Observable.create (obs)->
    readChunk(filepath).reduce do
      ({state, pos, buf, imgidx}:ctx, chunk)->
        chunk.copy(buf, pos)
        nctx = ctx with pos: pos + chunk.byteLength
        parseWhileTrue = (ctx, obs)->
          [ok, nctx] = parse ctx, obs
          if ok
            parseWhileTrue nctx, obs
          else
            ctx
        parseWhileTrue nctx, obs
      {
        state: 0
        pos: 0
        buf: new Buffer(65535*2)
      }
    .subscribe ->,->,->obs.onCompleted()

mnistData("../doc/train-images-idx3-ubyte")
  .zip do
    Rx.Observable.range(0, 60000)
    (data, idx)->
      [idx, data]
  .tapOnNext ([idx, data])->
    writeImage idx, 28, 28, data
      .subscribe ->,->,->
  .subscribe do
    ([idx, data])->
    (err)->
      console.log err
    ->
      console.log "completed"

