com.gameworks.debug = com.gameworks.debug || {};

(function(){
	var pack = com.gameworks.debug
	pack.console = console || { log: trace }

	function assertNow( msg, clzName, funcName ){
		if( !clzName )
			clzName = 'unknown'
		if( !funcName )
			funcName = 'unknown'
		return new Error('['+clzName+']['+funcName+']['+msg+']')
	}
	pack.assertNow = assertNow
	
	function SimpleLogger(){}
	
	SimpleLogger.prototype = {
		init: function( param ){
			this.enableClz = {}
			return this
		},
		setEnableClassName: function( clzName, value ){
			this.enableClz[clzName] = value
		},
		log: function( msg, clzName, funcName ){
			if( !clzName )
				clzName = 'unknown'
			if( !funcName )
				funcName = 'unknown'
			if( !this.enableClz[clzName] )
				return
			pack.console.log('[',clzName,'][',funcName,'][',msg,']')
		}
	}
	pack.SimpleLogger = SimpleLogger
})()