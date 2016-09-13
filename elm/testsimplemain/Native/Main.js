Elm.Native.Main = {};
Elm.Native.Main.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Main = localRuntime.Native.Main || {};
	if (localRuntime.Native.Main.values)
	{
		return localRuntime.Native.Main.values;
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
  
  var somethingHttpRequest = Task.asyncFunction(function(callback) {
    setTimeout(function(){
      callback(Task.succeed(Utils.Tuple2("hello","world")));
    }, 1000)
  });

  // 以下一樣記得，參數一個以上的要加上配對的F2, F3 or etc...
	return localRuntime.Native.Main.values = {
    log: F2(log),
    performBackground: F2(performBackground),
    somethingHttpRequest: somethingHttpRequest
	};
};