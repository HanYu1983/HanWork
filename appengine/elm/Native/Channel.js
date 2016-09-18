Elm.Native.Channel = {};
Elm.Native.Channel.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Channel = localRuntime.Native.Channel || {};
	if (localRuntime.Native.Channel.values)
	{
		return localRuntime.Native.Channel.values;
	}

	var Task = Elm.Native.Task.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);
  
  function log(msg, x){
    console.log(msg)
    return x
  }
  
  function performBackground(fn, x){
    Task.perform(fn())
    return x
  }
  
  function createChannel(token, onmessage, x){
		var channel = new goog.appengine.Channel(token);
		var socket = channel.open()
		socket.onopen = function(){
			console.log("onopen")
		}
		socket.onmessage = function(path, option){
			console.log(path)
      // 記得要使用Task.perform
      Task.perform(onmessage(path.data))
		}
		socket.onerror = function(){
			console.log("onerror")
		}
		socket.onclose = function(){
			console.log("onclose")
		}
    return x
  }
  
  function alert(msg, x){
    alert(msg)
    return x
  }

  // 以下一樣記得，參數一個以上的要加上配對的F2, F3 or etc...
	return localRuntime.Native.Channel.values = {
    log: F2(log),
    performBackground: F2(performBackground),
    createChannel: F3(createChannel),
    alert: F2(alert)
	};
};