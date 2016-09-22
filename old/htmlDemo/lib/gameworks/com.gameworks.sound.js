
com.gameworks.sound = com.gameworks.sound || {};

(function(){
	var pack = com.gameworks.sound
	
	function createAudioTag( srcs, callback ){
		var tag = jQuery('<audio/>')
		for( var i in srcs ){
			var srcTag = jQuery('<source/>')
							.attr('src', srcs[i])
							.attr('preload', 'auto')
							.css('display', 'none')
			
			tag.append( srcTag )
		}
		tag.bind('loadeddata', function(){
			callback( tag )
		})
		tag.bind('ended', function(){
			tag.remove()
		})
		jQuery(document.body).append( tag )
		return tag
	}
	pack.createAudioTag = createAudioTag
	
	function Audio( param ){}
	Audio.prototype = {
		init: function( param ){
			this.srcs = param.srcs || 0
			this.loop = param.loop == undefined ? false : param.loop
			return this
		},
		play: function( async ){
			if( async )
			{
				var self = this
				pack.createAudioTag( this.srcs, function( dom ){
					self.dom = dom
					dom[0].loop = self.loop
					dom[0].play()
				})
			}
			else
			{
				if( this.dom )
					this.dom[0].play()
				else
					this.play( true )
			}
		},
		pause: function(){
			if( this.dom ) 
				this.dom[0].pause()
		},
		stop: function(){
			this.pause()
			if( this.dom )
			{ 
				this.dom.remove()
				this.dom = 0
			}
		}
	}
	pack.Audio = Audio
	
})()
