com.gameworks.gl.flash = com.gameworks.gl.flash || {};
(function(){
	var pack = com.gameworks.gl.flash
	
	function flashMatrix2leftMat4( mat ){
		return new Float32Array([
		    mat.a,
        	mat.b,
        	0,
        	0,
        					
        	mat.c,
        	mat.d,
            0,
            0,
             					
            0,
            0,
            1,
            0,
             					
            mat.tx,
            mat.ty,
            0,
            1])
	}
	pack.flashMatrix2leftMat4 = flashMatrix2leftMat4
	/**
	 * 從最底層開始動作
	 * @param	target	目標物件
	 * 
	 * 圖片
	 * [TextureManager.Type_Image]:Object
	 *   [iid]:Object
	 *     ["texture"]:String	存在的貼圖ID
	 *     ["tx"]:Number		貼圖左上座標與轉換前原點座標距離
	 *     ["ty"]:Number		貼圖左上座標與轉換前原點座標距離
	 *     ["rectangle"]:Object	大貼圖中座標、長寬
	 *       ["x"]:Number			大貼圖中座標
	 *       ["y"]:Number			大貼圖中座標
	 *       ["w"]:Number			大貼圖中寬度
	 *       ["h"]:Number			大貼圖中高度
	 * 
	 * 單純顯示容器
	 * [TextureManager.Type_Sprite]:Object
	 *   [sid]:Object
	 *     ["link"]:String	物件連結名稱（有設定才有）
	 *     ["child"]:Array	子物件陣列（依深度排列）
	 *       [depth]:Object		depth:此影格中物件的深度
	 *         ["id"]:String		物件id
	 *         ["name"]:String		物件實體名稱（有設定才有）
	 *         ["alpha"]:Number		透明度（!=1 才有）
	 *         ["matrix"]:Object	此影格中的位置、變形效果
	 *           ["a"]
	 *           ["b"]
	 *           ["c"]
	 *           ["d"]
	 *           ["tx"]
	 *           ["ty"]
	 *         ["filter"]:Object	此影格中的濾鏡效果(待)
	 * 
	 * 影片物件
	 * [TextureManager.Type_MovieClip]:Object
	 *   [mid]:Object
	 *     ["link"]:String		物件連結名稱（有設定才有）
	 *     ["frame"]:Array		影格陣列
	 *       [frame]:Object			frame:影格編號
	 *         ["tag"]:String			影格標籤（待）
	 *         ["child"]:Array			子物件陣列（依深度排列）
	 *           [depth]:Object				depth:此影格中物件的深度
	 *             ["frame"]:int			此影格物件在此影格中顯示的影格編號(如果物件是影格物件才有此參數，從0開始)
	 *             ["sgid"]:String			"single id" 物件存在期間的唯一id（在連續動作中辨識是否一直存在的id）
	 *             ["id"]:String			物件id
	 *             ["name"]:String			物件實體名稱（有設定才有）
	 *             ["link"]:String			物件連結名稱（有設定才有）
	 *             ["alpha"]:Number			透明度（!=1 才有）
	 *             ["matrix"]:Object		此影格中的位置、變形效果
	 *               ["a"]
	 *               ["b"]
	 *               ["c"]
	 *               ["d"]
	 *               ["tx"]
	 *               ["ty"]
	 *             ["filter"]:Object	此影格中的濾鏡效果(待)
	 * 
	 * ["text"]:Object	文字物件(待)
	 */
	var mat3 = com.gameworks.math.mat3
	var mat4 = com.gameworks.math.mat4
	
	function Drawer( param ){}
	Drawer.prototype = {
		init: function( param ){
			this.gl = param.gl
			this.mesh = param.mesh
			this.shader = param.shader
			this.gl.useProgram( this.shader.program )
			this.textures = {}
			this.images = {}
			this.cached = {}
			this.avatarNames = {}
			return this
		},
		loadDescription: function( url, callback ){
			var self = this
			jQuery.ajax({
				url: url,
				type: 'GET',
				dataType: 'text',
				error: function(){
					throw new Error('load error')
				},
				success: function( data ){
					self.description = eval('('+data+')')
					callback()
				}
			});
		},
		beginCache: function( id ){
			if( !this.cached[id])
				this.cached[id] = {
					bids:[],globals:[],avatars:[]
				}
			this.beganCached = id
		},
		endCache: function(){
			delete this.beganCached
		},
		isMovieClip: function( id ){
			return id.indexOf('mid') != -1
		},
		isImage: function( id ){
			return id.indexOf('iid') != -1
		},
		isSprite: function( id ){
			return id.indexOf('sid') != -1
		},
		loadImage: function( dir, callback ){
			var bitmap = this.description.image
			var self = this
			var set = {}
			for( var k in bitmap )
			{
				var texName = bitmap[k].texture
				set[texName] = 1
			}
			var total = 0
			for( var k in set )
				++total
			for( var k in bitmap )
			{
				var texName = bitmap[k].texture
				if( this.images[texName] )
					continue
				var image = new Image
				this.images[ texName ] = image
				var closure = function(){
					var ct = texName
					return function(){
						var tex = com.gameworks.gl.createTexture( self.gl, this )
						self.textures[ ct ] = tex
						if( --total == 0 )
							callback()
					}
				}
				image.onload = closure()
				var src = texName+'.png'
				if( dir )
					src = dir+'/'+src
				image.src = src
			}
		},
		drawAvatar: function( name, transform, option ){
			console.log('draw avatar '+ name)
		},
		drawImage: function( bid, transform, option ){
			if( this.beganCached )
			{
				this.cached[this.beganCached].bids.push( bid )
				this.cached[this.beganCached].globals.push( transform )
				return
			}
			var info = this.description.image[bid]
			var texName = info.texture,
				tx = info.tx,
				ty = info.ty,
				sx = info.rectangle.x,
				sy = info.rectangle.y,
				sw = info.rectangle.w,
				sh = info.rectangle.h
			var imgWidth = this.images[ texName ].width,
				imgHeight = this.images[ texName ].height
			var tex = this.textures[texName]
			
			var totalm = mat4.create()
			mat4.identity( totalm )
			mat4.multiply( totalm, transform, totalm )
			mat4.translate( totalm, [tx, ty, 0] )
			mat4.scale( totalm, [sw, sh, 1 ])
			
			var tm = mat3.create()
			mat3.makeTextureRightMatrixWithSrcRect( 
				imgWidth, 
				imgHeight, 
				{ x: sx, y: sy, width: sw, height: sh },
				tm
			)
			var shader = this.shader
			shader.state.tex = tex
			mat4.set( totalm, shader.state.transform )
			mat3.set( tm, shader.state.texTransform )
			shader.bind()
			this.mesh.draw()
		},
		drawSprite: function( cid, transform, option ){
			var info = this.description.sprite[cid]
			var objs = info.child
			this.drawObjects( objs, transform, option )
		},
		drawObjects: function( objs, transform, option ){
			for( var i in objs )
			{
				var obj = objs[i],
					id = obj.id
				var mat = obj.matrix
				var local = flashMatrix2leftMat4( mat )
				var global = mat4.create()
				mat4.multiply( transform, local, global )
				if( this.isMovieClip( id ) )
				{
					var fi = 0
					if( obj.frame )
						fi = obj.frame
					this.drawMovieClip( id, fi, global, option )
				}
				else if( this.isImage( id ) )
					this.drawImage( id, global, option )
				else if( this.isSprite( id ) )
					this.drawSprite( id, global, option )
			}
			
			for( var i in objs )
			{
				var obj = objs[i]
				if( this.avatarNames[ obj.name ])
				{
					var mat = obj.matrix
					var local = flashMatrix2leftMat4( mat )
					var global = mat4.create()
					mat4.multiply( transform, local, global )
					if( this.beganCached )
					{
						var a = this.cached[ this.beganCached ]
						a.avatars.push({
							name: obj.name, global: global
						})
						continue
					}
					this.drawAvatar( obj.name, global, option )
				}
			}
		},
		drawMovieClip: function( mid, frame, transform, option ){
			var info = this.description.movieClip[mid]
			var f = frame% info.frame.length
			var frameInfo = info.frame[ f ]
			var objs = frameInfo.child
			this.drawObjects( objs, transform, option )
		},
		draw: function( id, frame, transform, option ){
			if( this.isMovieClip( id ) )
				this.drawMovieClip( id, frame, transform, option )
			else if( this.isImage( id ) )
				this.drawImage( id, transform, option )
			else if( this.isSprite( id ) )
				this.drawSprite( id, transform, option )
		},
		drawCached: function( cid, transform, option ){
			var o = this.cached[cid]
			var globals = o.globals
			var global = mat4.create()
			var avatars = o.avatars
			for( var i in o.bids )
			{
				var local = globals[i]
				mat4.multiply( transform, local, global)
				this.drawImage(o.bids[i], global, option)
			}
			for( var i in avatars )
			{
				var a = avatars[i]
				var local = a.global
				mat4.multiply( transform, local, global)
				this.drawAvatar( a.name, global, option )
			}
		}
	}
	Drawer.findWithName = function( description, attributeName, name ){
		var mc = description.movieClip
		for( var k in mc )
		{
			var info = mc[k]
			if( info[attributeName] && info[attributeName] === name )
				return k
			for( var f in info.frame )
			{
				
				var finfo = info.frame[f]
				var children = finfo.child
				for( var i in children )
				{
					var c = children[i]
					if( !c[attributeName] )
						continue
					if( c[attributeName] === name )
						return c.id
				}
			}
		}
		var sc = description.sprite
		for( var k in sc )
		{
			var info = sc[k]
			if( info[attributeName] && info[attributeName] === name )
				return k
			var children = sc.child
			for( var i in children )
			{
				var c = children[i]
				if( !c[attributeName] )
					continue
				if( c[attributeName] === name )
					return c.id
			}
		}
		return 0
	}
	pack.Drawer = Drawer
	
})()