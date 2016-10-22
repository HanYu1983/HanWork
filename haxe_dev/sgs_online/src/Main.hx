package;

import enviroment.ThreeJs;
import js.Lib;

/**
 * ...
 * @author vic
 */
class Main 
{
	
	static function main() 
	{
		untyped __js__( "vic.tools.loadDAE" )( 'asset/scene.dae', function( dae:Dynamic ) {
			var enviroment:ThreeJs =  new ThreeJs( untyped __js__("$('#webgl')"));
			untyped __js__( "vic.tools.syncDAEScene" )( dae.scene, enviroment.camera, enviroment.scene );
			
			
			
			
			var t:Dynamic = untyped __js__("new THREE.TextureLoader()" );
			t.load('asset/sgs_desktop.jpg', function( t ) {
				
				var mesh_board = getMeshByName( enviroment.scene, "Board" );
				mesh_board.children[0].material.map = t;
				mesh_board.children[0].material.needsUpdate = true;
				
			});
			
			var t2:Dynamic = untyped __js__("new THREE.TextureLoader()" );
			t2.load( 'asset/cardback3.png', function( t ) {
				
				var mesh_card = getMeshByName( enviroment.scene, "Card" );
				mesh_card.children[0].material.map = t;
				mesh_card.children[0].material.needsUpdate = true;
				
				var card_container = getMeshByName( enviroment.scene, "Player_deck_position" );
				for ( i in 0...50 ) {
					var mesh:Dynamic = mesh_card.clone();
					
					mesh.position.x += Math.random();
					mesh.position.z = 0;
					mesh.position.y = i * .05;
					
					mesh.rotation.y += Math.random();
					card_container.add( mesh );
				}
			});
		});
	}
	
	public static function getMeshByName( scene:Dynamic, name:String ) {
		return untyped __js__( "vic.tools.getMeshByName" )( scene, name );
	}
}