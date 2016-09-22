com.gameworks.gl.shader = com.gameworks.gl.shader || {};

(function(){
	var pack = com.gameworks.gl.shader
	var copy = com.gameworks.copy
	
	function AbstractShader(){}
	AbstractShader.prototype = {
		init: function( param ){
			this.gl = param.gl
			this.attribute = {}
			this.uniform = {}
			this.vs = 0
			this.fs = 0
			this.program = 0
			return this
		},
		initAttributeAndUniformLocation: function(){
			var vss = this.createVSS(),
				fss = this.createFSS()
			this.vs = com.gameworks.gl.createShaderWithString( this.gl, this.gl.VERTEX_SHADER, vss )
			this.fs = com.gameworks.gl.createShaderWithString( this.gl, this.gl.FRAGMENT_SHADER, fss )
			var program = com.gameworks.gl.createShaderProgramWithShader( this.gl, this.vs, this.fs )
			var attribs = this.createAttribString()
			for( var i in attribs )
			{
				var an = attribs[i]
				var loc = this.gl.getAttribLocation( program, an )
				this.gl.enableVertexAttribArray( loc )
				this.attribute[an] = loc
			}
			var uni = this.createUniformString()
			for( var i in uni )
			{
				var un = uni[i]
				var loc = this.gl.getUniformLocation( program, un )
				this.uniform[un] = loc;
			}
			this.gl.useProgram( program )
			this.program = program
        },
        free: function(){
            this.gl.deleteProgram(this.program);
            this.gl.deleteShader(this.vs);
            this.gl.deleteShader(this.fs);
        },
        bind: function(){
        	throw new Error('must implements bind')
        },
		createAttribString:function(){
			throw new Error('must implements createAttribString')
		},
        createUniformString:function(){
        	throw new Error('must implements createUniformString')
        },
        createFSS:function(){
        	throw new Error('must implements createFSS')
        },
        createVSS:function(){
        	throw new Error('must implements createVSS')
        }
	}
	pack.AbstractShader = AbstractShader
	
	
	var math = com.gameworks.math
	
	function SimpleShader(){}
	SimpleShader.prototype = copy( new AbstractShader, {
		init: function( param ){
			this.base = AbstractShader.prototype
			this.base.init.call( this, param )
			this.clearState()
			return this
		},
		state: {
			projection: math.mat4.create(),
			transform: math.mat4.create(),
			colorTransform: math.mat4.create(),
			texTransform: math.mat3.create(),
			tex: null
		},
		clearState: function(){
			this.state.tex = null
			math.mat4.identity( this.state.projection )
			math.mat4.identity( this.state.transform )
			math.mat4.identity( this.state.colorTransform )
			math.mat3.identity( this.state.texTransform )
        },
		bind: function(){
            com.gameworks.gl.bindTexture2D( this.gl, this.state.tex, 0, this.uniform["u_tex"]);
            this.gl.uniformMatrix4fv( this.uniform["u_projection"], false, this.state.projection)
            this.gl.uniformMatrix4fv( this.uniform["u_transform"], false, this.state.transform)
            this.gl.uniformMatrix4fv( this.uniform["u_colorTransform"], false, this.state.colorTransform)
            this.gl.uniformMatrix3fv( this.uniform["u_texTransform"], false, this.state.texTransform)
        },
		getVertexLocation: function(){ 
			return this.attribute["a_position"]; 
		},
        getTexLocation: function(){ 
        	return this.attribute["a_texCoord"];
        },
		createAttribString:function(){
            return ['a_position','a_texCoord']
		},
        createUniformString:function(){
            return ['u_tex','u_projection','u_transform','u_texTransform','u_colorTransform']
        },
        createFSS:function(){
        	return[
            "#ifdef GL_ES\n",
            "precision highp float;\n",
            "#endif\n",
            
            "uniform sampler2D",
            " u_tex;",
            "uniform mat4",
            " u_colorTransform;",
            
            "varying vec2",
            " v_texCoord;",
            
            "void main(void){",
            " vec4 color = texture2D( u_tex, v_texCoord );",
            " color = u_colorTransform* color;",
            " gl_FragColor = color;",
            "}"].join('\n')
        },
        createVSS:function(){
        	return [
            "attribute vec4",
            " a_position;",
            "attribute vec2",
            " a_texCoord;",
            
            "uniform mat4",
            " u_projection;",
            "uniform mat4",
            " u_transform;",
            "uniform mat3",
            " u_texTransform;",
            "varying vec2",
            " v_texCoord;",
            
            "void main(){",
            " vec4 pos = u_projection* u_transform* a_position;",
            " gl_Position = pos;",
            " v_texCoord = ( u_texTransform* vec3( a_texCoord.st, 1 )).xy;\n",
            "}"].join('\n')
        }
	})
	pack.SimpleShader = SimpleShader
	
})()