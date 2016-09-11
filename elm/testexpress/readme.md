# 使用Elm開發nodejs/express
## 編譯/執行
    cd /dst/to/testrexpress
    elm make Main.elm --output node/index.js
    cd node
    npm install
    node node/index.js

## 關鍵技術
#### Elm和js協同
使用[Main.elm](./Main.elm)引入[Native/Main.js](./Native/Main.js)  
[elm-package.json](elm-package.json)必須有這行```"native-modules": true```，否則```elm make```會無法找到檔案  
Main.js中的F2代表那個函式有2個參數，若有三個就使用F3，以此累推  
以下為Main.js中的代碼

    return localRuntime.Native.Main.values = {
        listen: listen,
        get: F2(get),
        send: F2(send),
        log: log
    };

在Main.elm中引入Main.js：```import Native.Main```  
Main.elm中為相對應的函式寫出它的Type

    -- 這兩行單純將參數歸類到Type
    type Request = Request
    type Response = Response

    listen : Int -> Task x ()
    listen = Native.Main.listen

    get : String -> (Request -> Response -> Task x ()) -> Task x ()
    get = Native.Main.get

    send : String -> Response -> Task x ()
    send = Native.Main.send

    log : String -> Task x ()
    log = Native.Main.log


#### 非純粹函式
類似Haskell中的IO和purescript的Eff，Elm也是純粹和非純粹是嚴格分離的  
Elm使用Task x ()的Type來處理非純粹任務  
()是Elm中的Tuple0  
Task的```map```是用```andThen```來實現的，以下是Task.elm中的代碼  

    map : (a -> b) -> Task x a -> Task x b
    map func taskA =
      taskA
        `andThen` \a -> succeed (func a)

所以每一條副作用都是一個Task  
注意看Main.js中的

    listen : Int -> Task x ()
    listen = Native.Main.listen

#### 呼叫express
在listen的Task中呼叫express

    var express = require('express')
    var app = express()
    function listen(port){
        return Task.asyncFunction(function(callback) {
            app.listen(port)
            return callback(Task.succeed(Utils.Tuple0));
        });
    }


#### 使用Elm整合nodejs
Elm編譯出來的代碼沒有```exports```出它的Elm，所以無法require到目的代碼中使用  
我們可以在Main.js中最下面加入以下的代碼，這樣在```elm make```時就會自動把這段塞到index.js中，這樣就能運行了

    (function() {
        if (typeof module == 'undefined') {
            throw new Error('You are trying to run a node Elm program in the browser!');
        }

        if (module.exports === Elm) {
            return;
        }

        window = global;

        module.exports = Elm;
        setTimeout(function() {
            if (!module.parent) {
                if ('Main' in Elm) {
                    var app = Elm.worker(Elm.Main, {})
                } else {
                    throw new Error('You are trying to run a node Elm program without a Main module.');
                }
            }
        }); 
    })();