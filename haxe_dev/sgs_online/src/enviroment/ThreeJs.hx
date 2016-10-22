package enviroment;


/**
 * ...
 * @author vic
 */
class ThreeJs
{
	private var _renderer:Dynamic;
	
	public var camera(default, default):Dynamic;
	public var scene(default, null):Dynamic;

	public function new( dom:Dynamic ) 
	{
		camera = untyped __js__( "new THREE.PerspectiveCamera" )( 45, 1, 1, 2000 );
		
		scene = untyped __js__( "new THREE.Scene" )();
		_renderer = untyped __js__("new THREE.WebGLRenderer()");
		_renderer.setPixelRatio( 1 );
		_renderer.setSize( 800, 800 );
		dom.append( _renderer.domElement );
		
		var ambient:Dynamic = untyped __js__("new THREE.AmbientLight( 0xffffff )");
		scene.add( ambient );

		var directionalLight:Dynamic = untyped __js__("new THREE.DirectionalLight( 0xffffff )");
		directionalLight.position.set( 0, 0, 1 ).normalize();
		scene.add( directionalLight );
		
		animate();
	}
	
	private function animate() {
		untyped __js__( "requestAnimationFrame" )( animate );
		render();
	}
	
	private function render() {
		_renderer.render( scene, camera );
	}
}