com.gameworks.cube.stage.viewer = com.gameworks.cube.stage.viewer || {};

(function(){
	var pack = com.gameworks.cube.stage.viewer
	
	function SimpleCubeStageViewer(){}
	SimpleCubeStageViewer.prototype = {
		init: function( param ){
			this.cubes = {}
			this.size = param.size
			this.selectCR = { c: -1, r: -1 }
			return this
		},
		clear: function(){
			for( var k in this.cubes )
				delete this.cubes[k]
		},
		onNewCube: function( stage, cube ){
			this.cubes[cube.id] = {
				id: cube.id,
				pos: [cube.pos[0], cube.pos[1]],
				type: cube.type
			}
		},
		onUpdateCube: function( stage, cube ){
			this.cubes[cube.id].pos[0] = cube.pos[0]
			this.cubes[cube.id].pos[1] = cube.pos[1]
		},
		onDeleteCube: function( state, cube ){
			delete this.cubes[cube.id]
		},
		draw: function( shader, mesh, x, y ){
			var mat4 = com.gameworks.math.mat4
			var color = mat4.create()
			var transform = mat4.create()
			for( var k in this.cubes )
			{
				var cube = this.cubes[k]
				mat4.identity( color )
				mat4.translate( color, [ cube.type/10, 1-cube.type/10, .5, 1 ] )
				
				mat4.identity( transform )
				mat4.translate( transform, [ x+cube.pos[0], y+cube.pos[1], 0 ])
				mat4.scale( transform, [this.size, this.size, 1 ])
				
				mat4.set( color, shader.state.colorTransform )
				mat4.set( transform, shader.state.transform )
				
				shader.bind()
				mesh.draw()
			}
		}
	}
	pack.SimpleCubeStageViewer = SimpleCubeStageViewer
})()