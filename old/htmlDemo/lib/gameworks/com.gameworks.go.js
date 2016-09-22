com.gameworks.go = com.gameworks.go || {};

(function(){
	var pack = com.gameworks.go
	var vec3 = com.gameworks.math.vec3
	var mat4 = com.gameworks.math.mat4
	var quat4 = com.gameworks.math.quat4
	
	function Life(){}
	Life.prototype = {
		init: function( param ){
			this.duration = param.duration
			this.life = 0
			return this
		},
		update: function( elapsed ){
			this.life += elapsed
			if( this.life >= this.duration ){
				this.gameObject.remove()
			}
		}
	}
	pack.Life = Life
	
	function GameObject(){}
	GameObject.prototype = {
		init: function( param ){
			this.components = {}
			this.type = 0
			this.id = param.id
			this.name = ''
			this.transform = new THREE.Object3D
			this.transform.useQuaternion = true
			this.addComponent( '__transform', this.transform )
			this.isRemove = false
			return this
		},
		remove: function(){
			this.isRemove = true
		},
		addComponent: function( name, com ){
			com.gameObject = this
			this.components[name] = com
		},
		getComponent: function( name ){
			return this.components[name]
		},
		update: function( elapsed ){
			for( var k in this.components )
			{
				var com = this.components[k]
				if( com.update )
					com.update( elapsed )
			}
		}
	}
	pack.GameObject = GameObject
	
	function GameObjectManager(){}
	GameObjectManager.prototype = {
		init: function( param ){
			this.gameObjectId = 0
			this.objs = {}
			return this
		},
		createGameObject: function( type ){
			var go = new GameObject().init({ id: this.gameObjectId++ })
			go.type = type
			this.objs[ go.id ] = go
			return go
		},
		update: function( elapsed ){
			for( var k in this.objs )
			{
				var go = this.objs[k]
				if( go.isRemove )
					delete this.objs[k]
				else
					go.update( elapsed )
			}
		}
	}
	pack.GameObjectManager = GameObjectManager
})()