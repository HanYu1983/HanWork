com.gameworks.gl = com.gameworks.gl || {};

(function(){
	var pack = com.gameworks.gl
	//--------------------webgl base------------------------//
	function createGLWithDom( canvasDom, param ){
		var gl = WebGLUtils.setupWebGL( canvasDom, param )
		gl.viewport( 0, 0, canvasDom.width, canvasDom.height );
		gl.clearColor( 0, 0, 0, 1 );
		return gl
	}
	pack.createGLWithDom = createGLWithDom
	
	function createGL( tagId, param ){
		return createGLWithDom( document.getElementById(tagId), param )
	}
	pack.createGL = createGL
	
	
	function blendAdd( gl, draw ){
		gl.enable( gl.BLEND )
		gl.blendFunc( gl.ONE, gl.ONE )
		draw()
		gl.disable( gl.BLEND )
	}
	pack.blendAdd = blendAdd
	
	function blendImage( gl, draw ){
		gl.enable( gl.BLEND )
		gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA )
		draw()
		gl.disable( gl.BLEND )
	}
	pack.blendImage = blendImage
	
	//---------------------webgl attribute-------------------------//
	function getDrawingBufferWidth( gl ){
		return gl.drawingBufferWidth
	}
	pack.getDrawingBufferWidth = getDrawingBufferWidth
	
	function getDrawingBufferHeight( gl ){
		return gl.drawingBufferHeight
	}
	pack.getDrawingBufferHeight = getDrawingBufferHeight
	
	function getTextureMode( gl ){
		return {
			repeat: gl.REPEAT,
			mirroredRepeat: gl.MIRRORED_REPEAT,
			// 這個設定沒有效果 //
			clampToEdge: gl.CLAMP_TO_EDGE,
			// 沒有這個常數 //
			clampToBorder: gl.GLAMP_TO_BORDER
		}
	}
	pack.getTextureMode = getTextureMode
	
	
	//----------------------shader---------------------------//
	function createShaderWithTagID(gl, id) {
	    var shaderScript = document.getElementById(id);
	    if (!shaderScript) {
	        return null;
	    }
	    var str = "";
	    var k = shaderScript.firstChild;
	    while (k) {
	        if (k.nodeType == 3) {
	            str += k.textContent;
	        }
	        k = k.nextSibling;
	    }
	    var shader;
	    if (shaderScript.type == "x-shader/x-fragment") {
	        shader = gl.createShader(gl.FRAGMENT_SHADER);
	    } else if (shaderScript.type == "x-shader/x-vertex") {
	        shader = gl.createShader(gl.VERTEX_SHADER);
	    } else {
	        return null;
	    }
	    gl.shaderSource(shader, str);
	    gl.compileShader(shader);
	    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
	        alert(gl.getShaderInfoLog(shader));
	        return null;
	    }
	    return shader;
	}
	pack.createShaderWithTagID = createShaderWithTagID
	
	function createShaderWithString( gl, shaderType, str ){
		var shader = gl.createShader( shaderType );
		gl.shaderSource(shader, str);
	    gl.compileShader(shader);
	    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
	        alert(gl.getShaderInfoLog(shader));
	        return null;
	    }
	    return shader;
	}
	pack.createShaderWithString = createShaderWithString
	
	function createShaderProgramWithShaderString( gl, vss, fss ){
		var vs = createShaderWithString( gl, gl.VERTEX_SHADER, vss )
		var fs = createShaderWithString( gl, gl.FRAGMENT_SHADER, fss )
		return createShaderProgramWithShader( gl, vs, fs )
	}
	pack.createShaderProgramWithShaderString = createShaderProgramWithShaderString

	function createShaderProgramWithShader( gl, vs, fs ){
		var shaderProgram = gl.createProgram();
	    gl.attachShader(shaderProgram, vs);
	    gl.attachShader(shaderProgram, fs);
	    gl.linkProgram(shaderProgram);
	    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
	        alert("Could not initialise shaders");
	    }
	    return shaderProgram;
	}
	pack.createShaderProgramWithShader = createShaderProgramWithShader
	
	function ShaderLoader( param ){}
	ShaderLoader.prototype = {
		load: function( gl, url, callback ){
			var shader = createShaderWithTagID( gl, url )
			callback.onload( shader )
		}
	}
	pack.ShaderLoader = ShaderLoader

	function createShaderProgramWithShaderLoader( gl, loader, vs, fs, callback ){
		var vss, fss;
		function loaderCallbackHandler(){
			if( vss && fss )
				callback.onload( createShaderProgramWithShader( gl, vss, fss) )
		}
		loader.load( gl, vs, {
			onload: function( shader ){
				vss = shader
				loaderCallbackHandler()
			}
		})
		loader.load( gl, fs, {
			onload: function( shader ){
				fss = shader
				loaderCallbackHandler()
			}
		})
	}
	pack.createShaderProgramWithShaderLoader = createShaderProgramWithShaderLoader
	
	//---------------------------mesh------------------------------//
	function Mesh(){}
	Mesh.prototype = {
		init: function( param ){
			if( !param.gl )
				throw new Error('gl')
			if( !param.va )
				throw new Error('va')
			if( !param.itemSize )
				throw new Error('itemSize')
			if( !param.drawType )
				throw new Error('drawType')
			this.gl = param.gl
			this.va= param.va
			this.ta = param.ta
			this.ca = param.ca
			this.ia = param.ia
			this.itemSize = param.itemSize
			this.drawType = param.drawType
			this.vbo = this.gl.createBuffer()
			if( this.ta )
				this.tbo = this.gl.createBuffer()
			if( this.na )
				this.nbo = this.gl.createBuffer()
			if( this.ca )
				this.cbo = this.gl.createBuffer()
			if( this.ia )
				this.ibo = this.gl.createBuffer()
			this.bindBufferData()
			return this
		},
		bindBufferData: function(){
			this.gl.bindBuffer( this.gl.ARRAY_BUFFER, this.vbo )
			this.gl.bufferData( this.gl.ARRAY_BUFFER, this.va, this.gl.STATIC_DRAW )
			if( this.ta )
			{
				this.gl.bindBuffer( this.gl.ARRAY_BUFFER, this.tbo )
				this.gl.bufferData( this.gl.ARRAY_BUFFER, this.ta, this.gl.STATIC_DRAW )
			}
			if( this.na )
			{
				this.gl.bindBuffer( this.gl.ARRAY_BUFFER, this.nbo );
			    this.gl.bufferData( this.gl.ARRAY_BUFFER, this.na, this.gl.STATIC_DRAW);
			}
			if( this.ca )
			{
				this.gl.bindBuffer( this.gl.ARRAY_BUFFER, this.cbo );
			    this.gl.bufferData( this.gl.ARRAY_BUFFER, this.ca, this.gl.STATIC_DRAW);
			}
			if( this.ia )
			{
				this.gl.bindBuffer( this.gl.ELEMENT_ARRAY_BUFFER, this.ibo )
				this.gl.bufferData( this.gl.ELEMENT_ARRAY_BUFFER, this.ia, this.gl.STATIC_DRAW )
			}
		},
		bindVertex: function( location ){
			this.gl.bindBuffer( this.gl.ARRAY_BUFFER, this.vbo )
			this.gl.vertexAttribPointer( location, this.itemSize, this.gl.FLOAT, false, 0, 0 )
		},
		bindTex: function( location ){
			if( this.tbo )
			{
				this.gl.bindBuffer( this.gl.ARRAY_BUFFER, this.tbo )
				this.gl.vertexAttribPointer( location, 2,this.gl.FLOAT, false, 0, 0 )
			}
		},
		bindColor: function( location ){
			if( this.cbo )
			{
				this.gl.bindBuffer( this.gl.ARRAY_BUFFER, this.cbo );
				this.gl.vertexAttribPointer( location, 4, this.gl.FLOAT, false, 0, 0); 
			}
		},
		bindNormal: function( location ){
			if( this.nbo )
			{
				this.gl.bindBuffer( this.gl.ARRAY_BUFFER, this.nbo )
				this.gl.vertexAttribPointer( location, 3,this.gl.FLOAT, false, 0, 0 )
			}
		},
		draw: function( drawType ){
			if( typeof drawType == 'undefined' )
				drawType = this.drawType
			if( this.ibo )
			{
				this.gl.bindBuffer( this.gl.ELEMENT_ARRAY_BUFFER, this.ibo )
				this.gl.drawElements( drawType, this.ia.length, this.gl.UNSIGNED_SHORT, 0 )
			}
			else
			{
				this.gl.drawArrays( drawType, 0, this.va.length/this.itemSize )
			}
		}
	}
	pack.Mesh = Mesh
	
	
	function createMeshPlain( gl ){
		var vertices = new Float32Array( [	0.0, 0.0,  0.0, 1.0,
		                                 	0.0, 1.0,  0.0, 1.0,
		                                 	1.0, 0.0,  0.0, 1.0,
		                                 	1.0, 1.0,  0.0, 1.0 ] );
		var textureCoords = new Float32Array([ 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0 ])
		var colors = new Float32Array([  
		              1.0,  1.0,  1.0,  1.0,    // white  
		              1.0,  0.0,  0.0,  1.0,    // red  
		              0.0,  1.0,  0.0,  1.0,    // green  
		              0.0,  0.0,  1.0,  1.0     // blue  
		          ]);
		var imesh = new Mesh().init({ 
			va: vertices, 
			ta: textureCoords,
			ca: colors,
			itemSize: 4, 
			drawType: gl.TRIANGLE_STRIP, 
			gl: gl 
		})
		return imesh
	}
	pack.createMeshPlain = createMeshPlain
	
	function createIndicesMeshPlain( gl ){
		var vertices = new Float32Array( [	0.0, 0.0,  0.0, 1.0,
		                                 	0.0, 1.0,  0.0, 1.0,
		                                 	1.0, 0.0,  0.0, 1.0,
		                                 	1.0, 1.0,  0.0, 1.0 ] );
		var textureCoords = new Float32Array([ 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0 ])
		var cubeVertexIndices = new Uint16Array([ 0, 1, 2, 3 ])
		var colors = new Float32Array([  
		              1.0,  1.0,  1.0,  1.0,    // white  
		              1.0,  0.0,  0.0,  1.0,    // red  
		              0.0,  1.0,  0.0,  1.0,    // green  
		              0.0,  0.0,  1.0,  1.0     // blue  
		          ]);
		var imesh = new Mesh().init({ 
			va: vertices, 
			ta: textureCoords,
			ia: cubeVertexIndices,
			ca: colors,
			itemSize: 4, 
			drawType: gl.TRIANGLE_STRIP, 
			gl: gl 
		})
		return imesh
	}
	pack.createIndicesMeshPlain = createIndicesMeshPlain
	
	//-------------------texture----------------------//
	function setTextureMode( gl, smode, tmode ){
		if( !tmode )
			tmode = smode
		gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, smode )
		gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, tmode )
	}
	pack.setTextureMode = setTextureMode
	
	function createTexture( gl, image ){
		var texture = gl.createTexture();
		gl.bindTexture( gl.TEXTURE_2D, texture );
		gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image );
		textureFilterDefault( gl, texture )
		return texture;
	};
	pack.createTexture = createTexture

	
	function textureFilterDefault( gl, glTexture ){
		gl.bindTexture( gl.TEXTURE_2D, glTexture );
		// 貼圖被放大時使用線性內插 //
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		// 貼圖被縮小時使用線性內插 //
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		// webgl預設是repeat模式 //
		setTextureMode( gl, getTextureMode(gl).clampToEdge )
	}
	pack.textureFilterDefault = textureFilterDefault
	
	function textureFilterGenerateMipmap( gl, glTexture ){
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
		gl.bindTexture(gl.TEXTURE_2D, glTexture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
        gl.generateMipmap(gl.TEXTURE_2D);
	}
	pack.textureFilterGenerateMipmap = textureFilterGenerateMipmap
	
	function bindTexture2D( gl, tex, channel, uniLocation ){
		gl.activeTexture( gl.TEXTURE0 + channel )
		gl.bindTexture( gl.TEXTURE_2D, tex )
		gl.uniform1i( uniLocation, channel )
	}
	pack.bindTexture2D = bindTexture2D
	
	function createEmptyTexture( gl, width, height ){
		var dw = 1, dh = 1
        while( dw< width )
        	dw<<=1
        while( dh< height )
        	dh<<=1
		var rttTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, rttTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, dw, dh, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        textureFilterDefault( gl, rttTexture )
        // generateMipmap必須在texImage2D之後呼叫 //
        gl.generateMipmap(gl.TEXTURE_2D);
        return {
        	texture: rttTexture,
        	width: dw,
        	height: dh
        }
	}
	pack.createEmptyTexture = createEmptyTexture
	
	//----------------------------frame buffer---------------------------------//
	function bindFramebufferTexture2D( gl, framebuffer, texture ){
		gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
	}
	pack.bindFramebufferTexture2D = bindFramebufferTexture2D
	

	function createSimpleTextureFramebuffer2D( gl, width, height ){
		width = width || gl.drawingBufferWidth;
        height = height || gl.drawingBufferHeight;
        var framebuffer = gl.createFramebuffer()
        var texture = createEmptyTexture( gl, width, height )
        gl.bindFramebuffer( gl.FRAMEBUFFER, framebuffer )
        bindFramebufferTexture2D( gl, framebuffer, texture.texture )
        return {
        	framebuffer: framebuffer,
        	texture: texture.texture,
        	width: texture.width,
        	height: texture.height
        }
	}
	pack.createSimpleTextureFramebuffer2D = createSimpleTextureFramebuffer2D
	
	function createTextureFramebuffer3D( gl, width, height ){
		var buf = createSimpleTextureFramebuffer2D( gl, width, height )
		var renderbuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, buf.width, buf.height);

        gl.bindFramebuffer(gl.FRAMEBUFFER, buf.framebuffer);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer);
        return {
        	renderbuffer: renderbuffer,
        	framebuffer: buf.framebuffer,
        	texture: buf.texture,
        	width: buf.width,
        	height: buf.height
        }
	}
	
	//---------------------------text-------------------------//
	
	function createTextImage( size, w ){
		var canvasDom = jQuery('<canvas></canvas>');
		var cw = w*size
		var ch = Math.floor(126/w)*size
		canvasDom[0].width = cw;
		canvasDom[0].height = ch;
		var ctx = canvasDom[0].getContext('2d')
		ctx.fillStyle = "rgba(0, 0, 0, 0)";
		ctx.fillRect( 0, 0, cw, ch )
		ctx.fillStyle = "rgba(0, 0, 0, 1)";
		//ctx.font = 'bold '+(size-6)+'px Verdana';
		ctx.font = (size-6)+'px ariel'
		var map = {}
		for( var i=33, pos=0; i<=126; ++i, ++pos )
		{
			var c = String.fromCharCode(i)
			ctx.fillText( c, (pos% w)*size, Math.floor(pos/w)*size+size/1.5)
			if( map )
				map[i] = pos;
		}
		
		return {
			dom: canvasDom,
			image: canvasDom[0],
			width: cw,
			height: ch,
			size: size,
			columnCount: w,
			map: map
		}
	}
	pack.createTextImage = createTextImage

	function drawText( shader, mesh, textObject, text, textSize, offset, transform  ){
		var math = com.gameworks.math
		var size = textObject.size
		var w = textObject.columnCount
		
		for( var i in text )
		{
			var c = text.charCodeAt(i)
			var pos = textObject.map[c]
			math.mat4.set( transform, shader.state.transform )
			math.mat4.translate( shader.state.transform, [ i* offset, 0, 0 ] )
			math.mat4.scale( shader.state.transform, [ textSize, textSize, 1 ])
	    	math.mat3.makeTextureRightMatrixWithSrcRect( 
				textObject.width, 
				textObject.height, 
				{ x:(pos% w)*size, y:Math.floor(pos/w)*size, width: size, height: size },
	    		shader.state.texTransform 
	    	)
	    	shader.bind()
			mesh.draw()
		}
	}
	pack.drawText = drawText
	pack.drawText = drawText
	
})()