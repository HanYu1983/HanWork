require! {
  fs
  canvas
}
  
context = 
  imgdir: "../output"
  state: 0
  pos: 0
  buf: new Buffer(65535*2)
  imgidx: 0

parse = ({state, pos, buf, imgidx}:ctx)->
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
        can = new canvas(ctx.rows, ctx.columns)
        c2d = can.getContext('2d')
        imgdata = c2d.createImageData(ctx.rows, ctx.columns)
        
        for i from 0 til imagelen by 1
          imgdata .data[i*4] = buf[i]
          imgdata .data[i*4+1] = buf[i]
          imgdata .data[i*4+2] = buf[i]
          imgdata .data[i*4+3] = 255
        
        c2d.putImageData( imgdata, 0, 0 )
        
        out = fs.createWriteStream("#{ctx.imgdir}/#{imgidx}.png")
        stream = can.pngStream()
        
        writeImage = (outfile, pngstream)->
          console.log "writeImage"
          pngstream.on do
            'data'
            (chunk) -> outfile.write(chunk)
          pngstream.on do
            'end'
            -> 
              out.end(->)
            
        writeImage out, stream
        
        buf.copy buf, 0, imagelen, pos - imagelen
        [
          true,
          ctx with do
            pos: pos - imagelen
            imgidx: imgidx+1
        ]
      else
        [false]
    | otherwise =>
      [false]

readable = do
  fs.createReadStream("../doc/train-images-idx3-ubyte")
    ..on "data", (trunk)->
      trunk.copy(context.buf, context.pos);
      context.pos += trunk.byteLength
      while true
        [ok, nctx] = parse context
        if ok
          context.state = nctx.state
          context.pos = nctx.pos
          context.dataLen = nctx.dataLen
          context.rows = nctx.rows
          context.columns = nctx.columns
          context.imgidx = nctx.imgidx
        else
          break
      
    ..on "end", ->
      console.log "end"
      
    ..on "close", ->
      console.log "close"