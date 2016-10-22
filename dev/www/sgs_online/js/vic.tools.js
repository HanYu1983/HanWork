var vic = vic || {};
vic.tools = vic.tools || {};

(function( module ){
	
	var onProgress = function ( xhr ) {
		if ( xhr.lengthComputable ) {
			var percentComplete = xhr.loaded / xhr.total * 100;
			console.log( Math.round(percentComplete, 2) + '% downloaded' );
		}
	};

	var onError = function ( xhr ) { };

	//THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );
	
	function loadMeshAndMaterials( meshPath, matsPath, cb ){
		loadMaterials( matsPath, function( mat ){
			loadMesh( meshPath, mat, function( mesh ){
				cb( mesh );
			});
		});
	}
	
	function loadMesh( path, mats, cb ){
		var objLoader = new THREE.OBJLoader();
		if( mats != undefined )
			objLoader.setMaterials( mats );
		objLoader.load( path, function ( mesh ) {
			cb( mesh );
		}, onProgress, onError );
	}
	
	function loadMaterials( path, cb ){
		var mtlLoader = new THREE.MTLLoader();
		mtlLoader.load( path, function( materials ) {
			materials.preload();
			cb( materials );
		});
	}
	
	function loadDAE( path, callback ){
		var loader = new THREE.ColladaLoader();
		loader.options.convertUpAxis = true;
		loader.load( path, function ( collada ) {
			if( callback != null ) callback( collada );
		} );
	}
	
	function getMeshByName( scene, name ){
		console.log( scene );
		for( var i = 0; i < scene.children.length; ++i ){
			var obj = scene.children[i];
			console.log( obj.name );
			if( obj.name == name )	return obj;
		}
		return null;
	}
	
	function syncDAEScene( daeScene, camera, scene ){
		for ( var i = 0; i < daeScene.children.length; ++i ) {
				var obj = daeScene.children[i];
				switch( obj.name ) {
					case 'Camera':
						camera.name = obj.name;
						camera.position.x = obj.position.x;
						camera.position.y = obj.position.y;
						camera.position.z = obj.position.z;
						camera.rotation.x = obj.rotation.x;
						camera.rotation.y = obj.rotation.y;
						camera.rotation.z = obj.rotation.z;
						break;
					case 'vic_camera_target':
						camera.lookAt( obj.position );
						break;
					default:
						scene.add( obj.clone() );
						break;
				}
				
			}
	}
	
	/*
	[
		['plate','asset/plate.obj','asset/plate.mtl'],
		['coin','asset/coin.obj','asset/coin.mtl']
	];
	*/
	function prepareLib( loads, cb ){
		var tempConfig = loads.slice();
		var ret_lib = {};
		loadOne();
		
		function loadOne(){
			if( tempConfig.length > 0 ){
				var conf = tempConfig.shift();
				var name = conf[0];
				var path = conf[1];
				var mtlPath = conf[2];
				if( mtlPath != undefined ){
					loadMeshAndMaterials( path, mtlPath,  function ( mesh ) {						//conf.mesh = mesh;
						ret_lib[name] = mesh;
						loadOne();
					});
				}else{
					loadMesh( path, undefined, function ( mesh ) {
						ret_lib[name] = mesh;
						loadOne();
					});
				}
			}else{
				cb( ret_lib );
			}
		}
	}
	
	module.loadMesh = loadMesh;
	module.loadMaterials = loadMaterials;
	module.loadMeshAndMaterials = loadMeshAndMaterials;
	module.prepareLib = prepareLib;
	module.loadDAE = loadDAE;
	module.syncDAEScene = syncDAEScene;
	module.getMeshByName = getMeshByName;
	
})( vic.tools );





