var vic = vic || {};
vic.view = vic.view || {};

(function( module ){
	var container, stats;

	var camera, scene, renderer;

	var mouseX = 0, mouseY = 0;

	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;
	
	var mesh, mats, objl;
	var iconCon;

	function init() {

		container = $('#webgl');

		camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
		camera.position.y = 50;
		camera.position.z = 20;
		
		iconCon = new THREE.Object3D();

		// scene

		scene = new THREE.Scene();
		iconCon.position.x = -10;
		iconCon.position.z = -10;
		iconCon.position.y = 2;
		scene.add( iconCon );
		
		camera.lookAt( scene.position );

		var ambient = new THREE.AmbientLight( 0xffffff );
		scene.add( ambient );

		var directionalLight = new THREE.DirectionalLight( 0xffffff );
		directionalLight.position.set( 0, 0, 1 ).normalize();
		scene.add( directionalLight );

		// model

		var onProgress = function ( xhr ) {
			if ( xhr.lengthComputable ) {
				var percentComplete = xhr.loaded / xhr.total * 100;
				console.log( Math.round(percentComplete, 2) + '% downloaded' );
			}
		};

		var onError = function ( xhr ) { };

		//THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );

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
		
		var mtlLoader2 = new THREE.MTLLoader();
		mtlLoader2.load( 'asset/icon.mtl', function( materials ) {
			materials.preload();

			var objLoader = new THREE.OBJLoader();
			objLoader.setMaterials( materials );
			objLoader.load( 'asset/icon.obj', function ( object ) {
				//object.position.y = - 95;
				//scene.add( object );
				
				for( var i = 0; i < 10; ++i ){
					var newobj = object.clone();
					newobj.position.x = i * 2.5;
					
					iconCon.add( newobj );
					
					Tweener.addTween(newobj.rotation, {x:3.14, time:2, delay:i * 1, transition:"easeOutBounce"});
				}

			}, onProgress, onError );

		});

		//

		renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		container.append( renderer.domElement );

		document.addEventListener( 'mousemove', onDocumentMouseMove, false );

		//

		window.addEventListener( 'resize', onWindowResize, false );

	}

	function onWindowResize() {

		windowHalfX = window.innerWidth / 2;
		windowHalfY = window.innerHeight / 2;

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

	}

	function onDocumentMouseMove( event ) {

		mouseX = ( event.clientX - windowHalfX ) / 2;
		mouseY = ( event.clientY - windowHalfY ) / 2;

	}

	//

	function animate() {

		requestAnimationFrame( animate );
		render();

	}

	function render() {

		//camera.position.x += ( mouseX - camera.position.x ) * .05;
		//camera.position.y += ( - mouseY - camera.position.y ) * .05;

		//camera.lookAt( scene.position );

		renderer.render( scene, camera );

	}
	
	module.init = init;
	module.animate = animate;
})( vic.view );

vic.view.init();
vic.view.animate();