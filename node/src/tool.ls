require! {
  fs
  rx: Rx
  ramda: {reduce, partial}
}

# 將檔案輸入流轉成Rx事件流
readChunk = (filepath)->
  Rx.Observable.create (obs)->
    fs.createReadStream filepath
      ..on "data", (chunk)->
        obs.onNext chunk
      
      ..on "end", ->
        obs.onCompleted()
      
      ..on "close", ->

# 取得minst的label
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

# 取得mnist的圖片
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
    
export
  readChunk: readChunk
  mnistDataLabel: mnistDataLabel
  mnistDataImage: mnistDataImage