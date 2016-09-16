# 使用Channel寫網路聊天室

## 建立、放送事件
    // 建立
    token, err := channel.Create(ctx, username)
    // 發送
    channel.Send(ctx, username, message)

請參考[basic.go](basic.go)
## 監聽Channel連線、斷線事件
在app.yaml最後面加入

    # 傾聽事件
    # google 的 channel會自己在前台送request到
    # /_ah/channel/connected 和 /_ah/channel/disconnected
    # 前台會一直polling，所以這個功能最好使用在小型專案
    inbound_services:
    - channel_presence

handlers的地方加入

    # 必須將/_ah/打開，不然收得到channel事件的request但是無法處理
    - url: /_ah/.*
      script: _go_app

就能在hello.go中傾聽事件

    // 即時訊息傾聽事件
    http.HandleFunc("/_ah/channel/connected/", channel.OnChannelConnected)
    http.HandleFunc("/_ah/channel/disconnected/", channel.OnChannelDisconnected)

## 前台JS配置
需引入以下這行

    <script type="text/javascript" src="/_ah/channel/jsapi"></script>

建立channel並加入監聽

    var channel = new goog.appengine.Channel(yourtoken);
    var socket = channel.open()
    socket.onopen = function(){
        console.log("onopen")
    }
    socket.onmessage = function(path, option){
        console.log(path)
    }
    socket.onerror = function(){
        console.log("onerror")
    }
    socket.onclose = function(){
        console.log("onclose")
    }

token就是由你的方法而來[basic.go](basic.go)

    username := r.Form["user"][0]
    token, err := channel.Create(ctx, username)
    if err != nil {
        panic(err)
    }
    Json(w, token, nil)