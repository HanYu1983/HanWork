Elm.Native.HanLib = {};
Elm.Native.HanLib.Tool = {};
Elm.Native.HanLib.Tool.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
  localRuntime.Native.HanLib = localRuntime.Native.HanLib || {};
	localRuntime.Native.HanLib.Tool = localRuntime.Native.HanLib.Tool || {};
	if (localRuntime.Native.HanLib.Tool.values)
	{
		return localRuntime.Native.HanLib.Tool.values;
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
  
  function alert(msg, x){
    window.alert(msg)
    return x
  }

	return localRuntime.Native.HanLib.Tool.values = {
    log: F2(log),
    performBackground: F2(performBackground),
    alert: F2(alert)
	};
};