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
  /*
  function throwError(){
    return Task.asyncFunction(function(callback) {
      try{
        "xxx".log()
      }catch(e){
        return callback(Task.fail(e))
      }
    }
  }
  */
  function log(msg){
		return Task.asyncFunction(function(callback) {
      console.log(msg)
      return callback(Task.succeed(Utils.Tuple0));
		});
  }

	return localRuntime.Native.Main.values = {
    //throwError: throwError,
    log: log
	};
};
/*
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
*/