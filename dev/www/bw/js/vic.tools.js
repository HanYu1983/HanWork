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
	
	module.loadMesh = loadMesh;
	module.loadMaterials = loadMaterials;
	module.loadMeshAndMaterials = loadMeshAndMaterials;
	
/*
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.load( 'asset/plate.mtl', function( materials ) {
		mats = materials;
		materials.preload();

		var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials( materials );
		objLoader.load( 'asset/plate.obj', function ( object ) {
		
			mesh = object;
			object.rotation.y = -3.14/2;
			//object.position.y = - 95;
			scene.add( object );

		}, onProgress, onError );
		
		objl = objLoader;
	});
	*/
})( vic.tools );