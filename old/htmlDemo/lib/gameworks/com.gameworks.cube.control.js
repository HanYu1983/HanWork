com.gameworks.cube.control = com.gameworks.cube.control || {};
(function(){
	var pack = com.gameworks.cube.control
	
	function SimpleControl(){}
	SimpleControl.prototype = {
		init: function( param ){
			this.callback = param.callback
			this.crs = []
			this.newTouch = false
			this.checkPos = param.checkPos
			this.notifyCR = [ 0, 0 ];
			return this
		},
		handleTouchBegin: function( cr ){
			this.putCR( cr )
			this.newTouch = true
			if( this.callback )
				this.callback.onTouchBegin( this, cr )
		},
		handleTouchMove: function( cr ){
			if( !this.newTouch )
				return
			this.putCR( cr )
			if( this.callback )
				this.callback.onTouchMove( this, cr )
		},
		handleTouchEnd: function( cr ){
			this.newTouch = false
		},
		putCR: function( cr ){
			if( this.crs.length )
			{
				var last = this.crs[this.crs.length-1]
				if( com.gameworks.cube.CR.prototype.isEquals.call( last, cr ) )
					return
			}
			this.crs.push( cr )
			this.notifySwap()
		},
		notifySwap: function(){
			if( this.crs.length == 2 )
			{
				this.notifyCR[0] = this.crs[0]
				this.notifyCR[1] = this.crs[1]
				this.clear()
			}
		},
		// 交換方塊成功後呼叫 //
		clear: function(){
			this.crs.length = 0
			this.newTouch = false
		},
		update: function(){
			if( this.notifyCR[0] && this.notifyCR[1] )
			{
				if( this.checkPos )
				{
					if( com.gameworks.cube.alg.isCanSwapWithCR(this.notifyCR[0], this.notifyCR[1]) )
						if( this.callback )
							this.callback.onSwapCR( this, this.notifyCR[0], this.notifyCR[1] )
				}
				else
					if( this.callback )
						this.callback.onSwapCR( this, this.notifyCR[0], this.notifyCR[1] )
				this.notifyCR[0] = this.notifyCR[1] = 0
			}
		}
	}
	pack.SimpleControl = SimpleControl
	
	
})()