com.gameworks.util = com.gameworks.util || {};

(function(){
	var pack = com.gameworks.util
	
	function ObjectPool(){}
	
	ObjectPool.prototype = {
		init: function( param ){
			this.objs = []
			this.idles = []
			return this
		},
		create: function( size, factory ){
			for( var i =0; i<size; ++i )
			{
				var obj = factory( i )
				obj.id = i
				this.objs.push( obj )
				this.idles.push( true )
			}
		},
		get: function(){
			for( var i in this.objs )
				if( this.idles[i] )
				{
					this.idles[i] = false
					return this.objs[i]
				}
			com.gameworks.debug.assertNow('can not get object', 'ObjectPool', 'get')
		},
		put: function( obj ){
			if( this.idles[obj.id] )
				com.gameworks.debug.assertNow('xxx', 'ObjectPool', 'get')
			this.idles[obj.id] = true
		},
		peek: function( id ){
			return this.objs[id]
		}
	}
	pack.ObjectPool = ObjectPool
	
	
	function SimpleFSM(){}
	SimpleFSM.prototype = {
		init: function( param ){
			if( param )
			{
				this.observer = param.observer
				this.state = param.state
			}
			this.timer = 0
			return this
		},
		changeState: function( state, force ){
			if( force || state != this.state )
			{
				this.state = state
				this.timer = 0
				if( this.observer )
					this.observer.onFSMStateChange( this )
			}
		},
		setState: function( state ){
			this.state = state
		},
		update: function( elapsed ){
			this.timer += elapsed
		}
	}
	pack.SimpleFSM = SimpleFSM
	
	
})()