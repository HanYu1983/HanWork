(function (console) { "use strict";
var Main = function() { };
Main.main = function() {
	vic.tools.loadDAE("asset/scene.dae",function(dae) {
		var enviroment1 = new enviroment_ThreeJs($('#webgl'));
		vic.tools.syncDAEScene(dae.scene,enviroment1.camera,enviroment1.scene);
		var t = new THREE.TextureLoader();
		t.load("asset/sgs_desktop.jpg",function(t1) {
			var mesh_board = Main.getMeshByName(enviroment1.scene,"Board");
			mesh_board.children[0].material.map = t1;
			mesh_board.children[0].material.needsUpdate = true;
		});
		var t2 = new THREE.TextureLoader();
		t2.load("asset/cardback3.png",function(t3) {
			var mesh_card = Main.getMeshByName(enviroment1.scene,"Card");
			mesh_card.children[0].material.map = t3;
			mesh_card.children[0].material.needsUpdate = true;
			var card_container = Main.getMeshByName(enviroment1.scene,"Player_deck_position");
			var _g = 0;
			while(_g < 50) {
				var i = _g++;
				var mesh = mesh_card.clone();
				mesh.position.x += Math.random();
				mesh.position.z = 0;
				mesh.position.y = i * .05;
				mesh.rotation.y += Math.random();
				card_container.add(mesh);
			}
		});
	});
};
Main.getMeshByName = function(scene,name) {
	return vic.tools.getMeshByName(scene,name);
};
var enviroment_ThreeJs = function(dom) {
	this.camera = new THREE.PerspectiveCamera(45,1,1,2000);
	this.scene = new THREE.Scene();
	this._renderer = new THREE.WebGLRenderer();
	this._renderer.setPixelRatio(1);
	this._renderer.setSize(800,800);
	dom.append(this._renderer.domElement);
	var ambient = new THREE.AmbientLight( 0xffffff );
	this.scene.add(ambient);
	var directionalLight = new THREE.DirectionalLight( 0xffffff );
	directionalLight.position.set(0,0,1).normalize();
	this.scene.add(directionalLight);
	this.animate();
};
enviroment_ThreeJs.prototype = {
	animate: function() {
		requestAnimationFrame($bind(this,this.animate));
		this.render();
	}
	,render: function() {
		this._renderer.render(this.scene,this.camera);
	}
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
