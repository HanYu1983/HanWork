com.gameworks.three = com.gameworks.three || {};

(function(){
	var pack = com.gameworks.three
	function lookAtFor2d( mat, eye, target, z ) {
		var te = mat.elements;
		// 偷偷使用three的變量 //
		var x = THREE.Matrix4.__v1;
		var y = THREE.Matrix4.__v2;
		x.sub( eye, target ).normalize();
		if ( x.length() === 0 ) {
			x.z = 1;
		}
		if(!z)
			z = new THREE.Vector3(0,0,1)
		y.cross( z, x );
		te[0] = x.x; te[4] = y.x; te[8] = z.x;
		te[1] = x.y; te[5] = y.y; te[9] = z.y;
		te[2] = x.z; te[6] = y.z; te[10] = z.z;
		return mat;
	}
	pack.lookAtFor2d = lookAtFor2d
	
	// 計算角度差d = -a* b //
	function quatSub( a, b, d ){
		if( !d )
			d = new THREE.Quaternion
		d.copy( a )
		d.inverse()
		d.multiplySelf( b )
		return d
	}
	pack.quatSub = quatSub
	
	// 使角度乘以倍數 //
	function quatScale( a, scale, d ){
		var zero = new THREE.Quaternion().setFromEuler( new THREE.Vector3(0,0,0 ))
		if( !d )
			d = new THREE.Quaternion
		THREE.Quaternion.slerp( zero, a, d, scale)
		return d
	}
	pack.quatScale = quatScale
})()
