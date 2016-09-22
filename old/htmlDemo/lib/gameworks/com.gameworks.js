var com = com || {};
com.gameworks = com.gameworks || {};
(function(){
	var pack = com.gameworks
	function copy( target, obj ){
		for( var k in obj )
			target[k] = obj[k]
		return target
	}
	pack.copy = copy
	
})()

