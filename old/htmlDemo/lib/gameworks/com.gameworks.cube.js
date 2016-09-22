com.gameworks.cube = com.gameworks.cube || {};

(function(){
	var pack = com.gameworks.cube
	function CR(){}
	CR.prototype = {
		init: function( param ){
			this.c = param.c
			this.r = param.r
			return this
		},
		addEqual: function( cr ){
			this.c += cr.c
			this.r += cr.r
			return this
		},
		subEqual: function( cr ){
			this.c -= cr.c
			this.r -= cr.r
			return this
		},
		add: function( cr ){
			var ret = new CR(this)
			return ret.addEqual( cr )
		},
		sub: function( cr ){
			var ret = new CR(this)
			return ret.addEqual( cr )
		},
		isEquals: function( cr ){
			return this.c == cr.c && this.r == cr.r
		},
		distanceSq: function( cr ){
			var dr = this.r- cr.r
			var dc = this.c- cr.c
			return dr* dr+ dc* dc;
		}
	}
	pack.CR = CR
})()