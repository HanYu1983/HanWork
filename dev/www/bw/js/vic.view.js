var vic = vic || {};
vic.view = vic.view || {};

(function( module ){
	var camera, scene, renderer;

	var mouseX = 0, mouseY = 0;

	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;
	
	var plate;
	var select;
	var mats, objl;
	var iconCon;
	
	var icon_ori_pos = new THREE.Vector3();
	icon_ori_pos.x = -8.7;
	icon_ori_pos.z = -8.7;
	icon_ori_pos.y = 2;
	
	var icon_size = 2.54;
	
	var ary_icon_pos = {};
	for( var i = 0; i < 64; ++i ){
		var x = i % 8;
		var y = Math.floor( i / 8 );
		var pos = new THREE.Vector3(x * icon_size, 0, y * icon_size);
		ary_icon_pos[x+'_'+y] = pos;
	}
	
	console.log( ary_icon_pos );
	
	function getPositionByPos(x, y){
		return ary_icon_pos[x+'_'+y];
	}
	
	function prepareLib( ary, cb ){
		var tempConfig = ary.slice();
		loadOne();
		
		function loadOne(){
			if( tempConfig.length > 0 ){
				var conf = tempConfig.shift();
				var path = conf.path;
				var mtlPath = conf.mtlPath;
				if( mtlPath != undefined ){
					vic.tools.loadMeshAndMaterials( path, mtlPath,  function ( mesh ) {
						conf.mesh = mesh;
						loadOne();
					});
				}else{
					vic.tools.loadMesh( path, undefined, function ( mesh ) {
						conf.mesh = mesh;
						loadOne();
					});
				}
			}else{
				cb( ary );
			}
		}
	}
	
	function cloneMeshFromLib( lib, name ){
		var ret = undefined;
		_.each( lib, function( obj ){
			if( obj.name == name )
				ret = obj.mesh.clone();
		});
		return ret;
	}
	
	function putSelect( x, y ){
		var pos = getPositionByPos(x, y );
		var toGlobal = pos.clone().add( iconCon.position );
		
		select.position.x = toGlobal.x;
		select.position.y = toGlobal.y;
		select.position.z = toGlobal.z;
		
		/*
		console.log('=-============');
		console.log( toGlobal );
		console.log( iconCon.matrixWorld );
		console.log( toGlobal.applyMatrix4( iconCon.matrixWorld ) );
		console.log( toGlobal );
		*/
	}
	
	function putIcon(x, y, black, mesh){
		var pos = getPositionByPos(x, y );
		var toGlobal = pos.clone().add( iconCon.position );
		
		scene.add( mesh );
		mesh.position.x = 10;
		mesh.position.y = 10;
		
		Tweener.addTween(mesh.position, {x:toGlobal.x, y:toGlobal.y, z:toGlobal.z, time:1, transition:"easeOutQuad"});
		if( black )
			Tweener.addTween(mesh.rotation, {x:3.14, time:1, transition:"easeOutQuad"});
	}

	function init( lib, div_container ) {
		
		camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
		camera.position.y = 50;
		camera.position.z = 20;
		
		iconCon = new THREE.Object3D();
		iconCon.position.x = icon_ori_pos.x;
		iconCon.position.y = icon_ori_pos.y;
		iconCon.position.z = icon_ori_pos.z;
		
		console.log( iconCon.matrixWorld );
		

		scene = new THREE.Scene();
		scene.add( iconCon );
		
		camera.lookAt( scene.position );

		var ambient = new THREE.AmbientLight( 0xffffff );
		scene.add( ambient );

		var directionalLight = new THREE.DirectionalLight( 0xffffff );
		directionalLight.position.set( 0, 0, 1 ).normalize();
		scene.add( directionalLight );
		
		plate = cloneMeshFromLib( lib, 'plate' );
		if( plate != undefined )
			scene.add( plate );
	
		select = cloneMeshFromLib( lib, 'border' );
		if( select != undefined )
			scene.add( select );
		select.position.y = 0;
		
		/*
		for( var i = 0; i < 64; ++i ){
			var icon = cloneMeshFromLib( lib, 'icon' );
			if( icon != undefined ){
				var pos = getPositionByPos( i % 8, Math.floor( i / 8 ) );
				
				icon.position.x = pos[0];
				icon.position.z = pos[1];
				iconCon.add( icon );
				Tweener.addTween(icon.rotation, {x:3.14, time:2, delay:i * 1, transition:"easeOutBounce"});
			}
		}
		*/
		putSelect(1, 1 );
		putIcon(2, 3, true, cloneMeshFromLib( lib, 'icon' ) );
		putIcon(3, 6, true, cloneMeshFromLib( lib, 'icon' ) );
		putIcon(4, 1, false, cloneMeshFromLib( lib, 'icon' ) );
		putIcon(2, 6, true, cloneMeshFromLib( lib, 'icon' ) );
		

		renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		div_container.append( renderer.domElement );

		document.addEventListener( 'mousemove', onDocumentMouseMove, false );

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
		
		select.rotation.y += .01;

		renderer.render( scene, camera );

	}
	
	module.prepareLib = prepareLib;
	module.init = init;
	module.animate = animate;
})( vic.view );

vic.view.meshConfig = [
						{name:'plate', path:'asset/plate.obj',mtlPath:'asset/plate.mtl'}, 
						{name:'icon', path:'asset/icon.obj', mtlPath:'asset/icon.mtl'},
						{name:'border', path:'asset/border.obj'}
						];
						
vic.view.prepareLib( vic.view.meshConfig, function( lib ){
	
	vic.view.init( lib, $('#webgl') );
	vic.view.animate();
});
