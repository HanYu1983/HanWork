com.gameworks.gl.sample = com.gameworks.gl.sample || {};

(function(){
	var pack = com.gameworks.gl.sample
	var ggl = com.gameworks.gl
	var math = com.gameworks.math
	function SampleGame(){}
	SampleGame.prototype = {
		init: function( param ){
			var zoom = param.zoom
			var cw = param.cw
			var ch = param.ch
			var dom = jQuery('<canvas></canvas>');
			dom[0].width = cw* zoom
			dom[0].height = ch* zoom
			var gl = ggl.createGLWithDom( dom[0],  {preserveDrawingBuffer: true} )
			jQuery('body').append( dom )
			var plane = ggl.createMeshPlain( gl )
    		var shader = new ggl.shader.SimpleShader().init({gl: gl})
    		shader.initAttributeAndUniformLocation()
    		plane.bindVertex( shader.getVertexLocation() )
        	plane.bindTex( shader.getTexLocation() )
    		gl.clearColor(0.0, 0.0, 0.0, 1.0);
			this.zoom = zoom
			this.cw = cw
			this.ch = ch
			this.gl = gl
			this.dom = dom[0]
			this.plane = plane
			this.shader = shader
			this.textObj = ggl.createTextImage( 30, 20 )
			this.textTex = ggl.createTexture( gl, this.textObj.image )
			this.autoClearState = param.autoClearState
			return this
		},
		clearState: function(){
			this.shader.clearState()
		},
		begin2d: function(){
			this.plane.bindVertex( this.shader.getVertexLocation() )
        	this.plane.bindTex( this.shader.getTexLocation() )
			math.mat4.makeRightMatrix2DProjection( this.cw, this.ch, this.shader.state.projection )
		},
		drawRect: function( transform, iw, ih, color ){
			if( this.autoClearState )
				this.clearState()
			this.plane.bindVertex( this.shader.getVertexLocation() )
        	this.plane.bindTex( this.shader.getTexLocation() )
        	
			math.mat4.makeRightMatrix2DProjection( this.cw, this.ch, this.shader.state.projection )
			math.mat4.set( transform, this.shader.state.transform )
			math.mat4.scale( this.shader.state.transform, [iw, ih, 1 ])
			math.mat4.translate( this.shader.state.colorTransform, color )
            this.shader.state.tex = null
        	this.shader.bind()
        	this.plane.draw()
		},
		drawTexture: function( tex, transform, iw, ih ){
			if( this.autoClearState )
				this.clearState()
			this.plane.bindVertex( this.shader.getVertexLocation() )
        	this.plane.bindTex( this.shader.getTexLocation() )
        	
			math.mat4.makeRightMatrix2DProjection( this.cw, this.ch, this.shader.state.projection )
			math.mat4.set( transform, this.shader.state.transform )
			math.mat4.scale( this.shader.state.transform, [iw, ih, 1 ])
            this.shader.state.tex = tex
        	this.shader.bind()
        	this.plane.draw()
		},
		drawText: function( text, transform, size, offset, color ){
			if( this.autoClearState )
				this.clearState()
			this.plane.bindVertex( this.shader.getVertexLocation() )
        	this.plane.bindTex( this.shader.getTexLocation() )
			math.mat4.makeRightMatrix2DProjection( this.cw, this.ch, this.shader.state.projection )
			math.mat4.set( transform, this.shader.state.transform )
			math.mat4.translate( this.shader.state.colorTransform, color )
			this.shader.state.tex = this.textTex
        	this.shader.bind()
           	ggl.drawText( this.shader, this.plane, this.textObj, text, size, offset, transform )
		},
		drawMesh: function( mesh, tex, transform ){
			if( this.autoClearState )
				this.clearState()
			mesh.bindVertex( this.shader.getVertexLocation() )
    		mesh.bindTex( this.shader.getTexLocation() )
    		
			this.gl.enable( this.gl.DEPTH_TEST )
			math.mat4.perspective(45, 1, 0.1, 100.0, this.shader.state.projection );
            math.mat4.set( transform, this.shader.state.transform )
            this.shader.state.tex = tex
            this.shader.bind()
            mesh.draw()
            this.gl.disable( this.gl.DEPTH_TEST )
		},
		clearCanvas: function(){
			this.gl.viewport(0, 0, this.cw, this.ch);
            this.gl.clear( this.gl.COLOR_BUFFER_BIT| this.gl.DEPTH_BUFFER_BIT)
		}
	}
	pack.SampleGame = SampleGame
	
})()