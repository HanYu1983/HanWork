com.gameworks.math = com.gameworks.math || {};

(function(){
	var pack = com.gameworks.math
	var glMatrixArrayType = Array;
	var vec3 = {};

	vec3.create = function(vec) {
		var dest = new glMatrixArrayType(3);
		if ( vec )
		{
			dest[0] = vec[0];
			dest[1] = vec[1];
			dest[2] = vec[2];
		}
		else
		{
			dest[0] = 0;
			dest[1] = 0;
			dest[2] = 0;
		}
		return dest;
	};

	
	vec3.set = function(vec, dest) {
		dest[0] = vec[0];
		dest[1] = vec[1];
		dest[2] = vec[2];
		
		return dest;
	};

	
	vec3.add = function(vec, vec2, dest) {
		if(!dest || vec == dest) {
			vec[0] += vec2[0];
			vec[1] += vec2[1];
			vec[2] += vec2[2];
			return vec;
		}
		
		dest[0] = vec[0] + vec2[0];
		dest[1] = vec[1] + vec2[1];
		dest[2] = vec[2] + vec2[2];
		return dest;
	};

	
	vec3.subtract = function(vec, vec2, dest) {
		if(!dest || vec == dest) {
			vec[0] -= vec2[0];
			vec[1] -= vec2[1];
			vec[2] -= vec2[2];
			return vec;
		}
		
		dest[0] = vec[0] - vec2[0];
		dest[1] = vec[1] - vec2[1];
		dest[2] = vec[2] - vec2[2];
		return dest;
	};


	vec3.negate = function(vec, dest) {
		if(!dest) { dest = vec; }
		
		dest[0] = -vec[0];
		dest[1] = -vec[1];
		dest[2] = -vec[2];
		return dest;
	};

	
	vec3.scale = function(vec, val, dest) {
		if(!dest || vec == dest) {
			vec[0] *= val;
			vec[1] *= val;
			vec[2] *= val;
			return vec;
		}
		
		dest[0] = vec[0]*val;
		dest[1] = vec[1]*val;
		dest[2] = vec[2]*val;
		return dest;
	};


	vec3.normalize = function(vec, dest) {
		if(!dest) { dest = vec; }
		
		var x = vec[0], y = vec[1], z = vec[2];
		var len = Math.sqrt(x*x + y*y + z*z);
		
		if (!len) {
			dest[0] = 0;
			dest[1] = 0;
			dest[2] = 0;
			return dest;
		} else if (len == 1) {
			dest[0] = x;
			dest[1] = y;
			dest[2] = z;
			return dest;
		}
		
		len = 1 / len;
		dest[0] = x*len;
		dest[1] = y*len;
		dest[2] = z*len;
		return dest;
	};

	
	vec3.cross = function(vec, vec2, dest){
		if(!dest) { dest = vec; }
		
		var x = vec[0], y = vec[1], z = vec[2];
		var x2 = vec2[0], y2 = vec2[1], z2 = vec2[2];
		
		dest[0] = y*z2 - z*y2;
		dest[1] = z*x2 - x*z2;
		dest[2] = x*y2 - y*x2;
		return dest;
	};

	vec3.length = function(vec){
		var x = vec[0], y = vec[1], z = vec[2];
		return Math.sqrt(x*x + y*y + z*z);
	};

	
	vec3.dot = function(vec, vec2){
		return vec[0]*vec2[0] + vec[1]*vec2[1] + vec[2]*vec2[2];
	};

	
	vec3.direction = function(vec, vec2, dest) {
		if(!dest) { dest = vec; }
		
		var x = vec[0] - vec2[0];
		var y = vec[1] - vec2[1];
		var z = vec[2] - vec2[2];
		
		var len = Math.sqrt(x*x + y*y + z*z);
		if (!len) { 
			dest[0] = 0; 
			dest[1] = 0; 
			dest[2] = 0;
			return dest; 
		}
		
		len = 1 / len;
		dest[0] = x * len; 
		dest[1] = y * len; 
		dest[2] = z * len;
		return dest; 
	};

	
	vec3.lerp = function(vec, vec2, lerp, dest){
		if(!dest) { dest = vec; }
		
		dest[0] = vec[0] + lerp * (vec2[0] - vec[0]);
		dest[1] = vec[1] + lerp * (vec2[1] - vec[1]);
		dest[2] = vec[2] + lerp * (vec2[2] - vec[2]);
		
		return dest;
	}


	vec3.str = function(vec) {
		return '[' + vec[0] + ', ' + vec[1] + ', ' + vec[2] + ']'; 
	};

	var mat3 = {};

	mat3.create = function(mat) {
		var dest = new glMatrixArrayType(9);
		
		if(mat) {
			dest[0] = mat[0];
			dest[1] = mat[1];
			dest[2] = mat[2];
			dest[3] = mat[3];
			dest[4] = mat[4];
			dest[5] = mat[5];
			dest[6] = mat[6];
			dest[7] = mat[7];
			dest[8] = mat[8];
		}
		
		return dest;
	};

	mat3.set = function(mat, dest) {
		dest[0] = mat[0];
		dest[1] = mat[1];
		dest[2] = mat[2];
		dest[3] = mat[3];
		dest[4] = mat[4];
		dest[5] = mat[5];
		dest[6] = mat[6];
		dest[7] = mat[7];
		dest[8] = mat[8];
		return dest;
	};


	mat3.identity = function(dest) {
		dest[0] = 1;
		dest[1] = 0;
		dest[2] = 0;
		dest[3] = 0;
		dest[4] = 1;
		dest[5] = 0;
		dest[6] = 0;
		dest[7] = 0;
		dest[8] = 1;
		return dest;
	};
	
	mat3.scale = function( mat, vec, dest ){
		var x = vec[0], y = vec[1];
		
		if(!dest || mat == dest) {
			mat[0] *= x;
			mat[1] *= x;
			mat[2] *= x;
			mat[3] *= y;
			mat[4] *= y;
			mat[5] *= y;
			return mat;
		}
		
		dest[0] = mat[0]*x;
		dest[1] = mat[1]*x;
		dest[2] = mat[2]*x;
		dest[3] = mat[3]*y;
		dest[4] = mat[4]*y;
		dest[5] = mat[5]*y;
		dest[6] = mat[6];
		dest[7] = mat[7];
		dest[8] = mat[8];
		return dest;
	}
	
	mat3.translate = function( mat, vec, dest ){
		var x = vec[0], y = vec[1];
		
		if(!dest || mat == dest) {
			mat[6] = mat[0]*x + mat[3]*y + mat[6];
			mat[7] = mat[1]*x + mat[4]*y + mat[7];
			mat[8] = mat[2]*x + mat[5]*y + mat[8];
			return mat;
		}
		
		var a00 = mat[0], a01 = mat[1], a02 = mat[2];
		var a10 = mat[3], a11 = mat[4], a12 = mat[5];
		var a20 = mat[6], a21 = mat[7], a22 = mat[8];
		
		dest[0] = a00;
		dest[1] = a01;
		dest[2] = a02;
		dest[3] = a10;
		dest[4] = a11;
		dest[5] = a12;
		dest[6] = a20;
		dest[7] = a21;
		dest[8] = a22;
		
		dest[6] = a00*x + a10*y + mat[6];
		dest[7] = a01*x + a11*y + mat[7];
		dest[8] = a02*x + a12*y + mat[8];
		return dest;
	}

	mat3.transpose = function(mat, dest) {
		// If we are transposing ourselves we can skip a few steps but have to cache some values
		if(!dest || mat == dest) { 
			var a01 = mat[1], a02 = mat[2];
			var a12 = mat[5];
			
			mat[1] = mat[3];
			mat[2] = mat[6];
			mat[3] = a01;
			mat[5] = mat[7];
			mat[6] = a02;
			mat[7] = a12;
			return mat;
		}
		
		dest[0] = mat[0];
		dest[1] = mat[3];
		dest[2] = mat[6];
		dest[3] = mat[1];
		dest[4] = mat[4];
		dest[5] = mat[7];
		dest[6] = mat[2];
		dest[7] = mat[5];
		dest[8] = mat[8];
		return dest;
	};
	
	// 這個算式是mat2* mat. 注意順序是倒反的 //
	mat3.multiply = function(mat, mat2, dest) {
		if(!dest) { dest = mat }
		
		// Cache the matrix values (makes for huge speed increases!)
		var a00 = mat[0], a01 = mat[1], a02 = mat[2];
		var a10 = mat[3], a11 = mat[4], a12 = mat[5];
		var a20 = mat[6], a21 = mat[7], a22 = mat[8];
		
		var b00 = mat2[0], b01 = mat2[1], b02 = mat2[2];
		var b10 = mat2[3], b11 = mat2[4], b12 = mat2[5];
		var b20 = mat2[6], b21 = mat2[7], b22 = mat2[8];
		
		dest[0] = b00*a00 + b01*a10 + b02*a20;
		dest[1] = b00*a01 + b01*a11 + b02*a21;
		dest[2] = b00*a02 + b01*a12 + b02*a22;
		
		dest[3] = b10*a00 + b11*a10 + b12*a20;
		dest[4] = b10*a01 + b11*a11 + b12*a21;
		dest[5] = b10*a02 + b11*a12 + b12*a22;
		
		dest[6] = b20*a00 + b21*a10 + b22*a20;
		dest[7] = b20*a01 + b21*a11 + b22*a21;
		dest[8] = b20*a02 + b21*a12 + b22*a22;
		
		return dest;
	};

	mat3.toMat4 = function(mat, dest) {
		if(!dest) { dest = mat4.create(); }
		
		dest[0] = mat[0];
		dest[1] = mat[1];
		dest[2] = mat[2];
		dest[3] = 0;

		dest[4] = mat[3];
		dest[5] = mat[4];
		dest[6] = mat[5];
		dest[7] = 0;

		dest[8] = mat[6];
		dest[9] = mat[7];
		dest[10] = mat[8];
		dest[11] = 0;

		dest[12] = 0;
		dest[13] = 0;
		dest[14] = 0;
		dest[15] = 1;
		
		return dest;
	}
	
	

	mat3.str = function(mat) {
		return '[' + mat[0] + ', ' + mat[1] + ', ' + mat[2] + 
			', ' + mat[3] + ', '+ mat[4] + ', ' + mat[5] + 
			', ' + mat[6] + ', ' + mat[7] + ', '+ mat[8] + ']';
	};

	
	var mat4 = {};

	mat4.create = function(mat) {
		var dest = new glMatrixArrayType(16);
		
		if(mat) {
			dest[0] = mat[0];
			dest[1] = mat[1];
			dest[2] = mat[2];
			dest[3] = mat[3];
			dest[4] = mat[4];
			dest[5] = mat[5];
			dest[6] = mat[6];
			dest[7] = mat[7];
			dest[8] = mat[8];
			dest[9] = mat[9];
			dest[10] = mat[10];
			dest[11] = mat[11];
			dest[12] = mat[12];
			dest[13] = mat[13];
			dest[14] = mat[14];
			dest[15] = mat[15];
		}
		
		return dest;
	};

	mat4.set = function(mat, dest) {
		dest[0] = mat[0];
		dest[1] = mat[1];
		dest[2] = mat[2];
		dest[3] = mat[3];
		dest[4] = mat[4];
		dest[5] = mat[5];
		dest[6] = mat[6];
		dest[7] = mat[7];
		dest[8] = mat[8];
		dest[9] = mat[9];
		dest[10] = mat[10];
		dest[11] = mat[11];
		dest[12] = mat[12];
		dest[13] = mat[13];
		dest[14] = mat[14];
		dest[15] = mat[15];
		return dest;
	};

	mat4.identity = function(dest) {
		dest[0] = 1;
		dest[1] = 0;
		dest[2] = 0;
		dest[3] = 0;
		dest[4] = 0;
		dest[5] = 1;
		dest[6] = 0;
		dest[7] = 0;
		dest[8] = 0;
		dest[9] = 0;
		dest[10] = 1;
		dest[11] = 0;
		dest[12] = 0;
		dest[13] = 0;
		dest[14] = 0;
		dest[15] = 1;
		return dest;
	};


	mat4.transpose = function(mat, dest) {
		// If we are transposing ourselves we can skip a few steps but have to cache some values
		if(!dest || mat == dest) { 
			var a01 = mat[1], a02 = mat[2], a03 = mat[3];
			var a12 = mat[6], a13 = mat[7];
			var a23 = mat[11];
			
			mat[1] = mat[4];
			mat[2] = mat[8];
			mat[3] = mat[12];
			mat[4] = a01;
			mat[6] = mat[9];
			mat[7] = mat[13];
			mat[8] = a02;
			mat[9] = a12;
			mat[11] = mat[14];
			mat[12] = a03;
			mat[13] = a13;
			mat[14] = a23;
			return mat;
		}
		
		dest[0] = mat[0];
		dest[1] = mat[4];
		dest[2] = mat[8];
		dest[3] = mat[12];
		dest[4] = mat[1];
		dest[5] = mat[5];
		dest[6] = mat[9];
		dest[7] = mat[13];
		dest[8] = mat[2];
		dest[9] = mat[6];
		dest[10] = mat[10];
		dest[11] = mat[14];
		dest[12] = mat[3];
		dest[13] = mat[7];
		dest[14] = mat[11];
		dest[15] = mat[15];
		return dest;
	};


	mat4.determinant = function(mat) {
		// Cache the matrix values (makes for huge speed increases!)
		var a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3];
		var a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7];
		var a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11];
		var a30 = mat[12], a31 = mat[13], a32 = mat[14], a33 = mat[15];

		return	a30*a21*a12*a03 - a20*a31*a12*a03 - a30*a11*a22*a03 + a10*a31*a22*a03 +
				a20*a11*a32*a03 - a10*a21*a32*a03 - a30*a21*a02*a13 + a20*a31*a02*a13 +
				a30*a01*a22*a13 - a00*a31*a22*a13 - a20*a01*a32*a13 + a00*a21*a32*a13 +
				a30*a11*a02*a23 - a10*a31*a02*a23 - a30*a01*a12*a23 + a00*a31*a12*a23 +
				a10*a01*a32*a23 - a00*a11*a32*a23 - a20*a11*a02*a33 + a10*a21*a02*a33 +
				a20*a01*a12*a33 - a00*a21*a12*a33 - a10*a01*a22*a33 + a00*a11*a22*a33;
	};


	mat4.inverse = function(mat, dest) {
		if(!dest) { dest = mat; }
		
		// Cache the matrix values (makes for huge speed increases!)
		var a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3];
		var a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7];
		var a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11];
		var a30 = mat[12], a31 = mat[13], a32 = mat[14], a33 = mat[15];
		
		var b00 = a00*a11 - a01*a10;
		var b01 = a00*a12 - a02*a10;
		var b02 = a00*a13 - a03*a10;
		var b03 = a01*a12 - a02*a11;
		var b04 = a01*a13 - a03*a11;
		var b05 = a02*a13 - a03*a12;
		var b06 = a20*a31 - a21*a30;
		var b07 = a20*a32 - a22*a30;
		var b08 = a20*a33 - a23*a30;
		var b09 = a21*a32 - a22*a31;
		var b10 = a21*a33 - a23*a31;
		var b11 = a22*a33 - a23*a32;
		
		// Calculate the determinant (inlined to avoid double-caching)
		var invDet = 1/(b00*b11 - b01*b10 + b02*b09 + b03*b08 - b04*b07 + b05*b06);
		
		dest[0] = (a11*b11 - a12*b10 + a13*b09)*invDet;
		dest[1] = (-a01*b11 + a02*b10 - a03*b09)*invDet;
		dest[2] = (a31*b05 - a32*b04 + a33*b03)*invDet;
		dest[3] = (-a21*b05 + a22*b04 - a23*b03)*invDet;
		dest[4] = (-a10*b11 + a12*b08 - a13*b07)*invDet;
		dest[5] = (a00*b11 - a02*b08 + a03*b07)*invDet;
		dest[6] = (-a30*b05 + a32*b02 - a33*b01)*invDet;
		dest[7] = (a20*b05 - a22*b02 + a23*b01)*invDet;
		dest[8] = (a10*b10 - a11*b08 + a13*b06)*invDet;
		dest[9] = (-a00*b10 + a01*b08 - a03*b06)*invDet;
		dest[10] = (a30*b04 - a31*b02 + a33*b00)*invDet;
		dest[11] = (-a20*b04 + a21*b02 - a23*b00)*invDet;
		dest[12] = (-a10*b09 + a11*b07 - a12*b06)*invDet;
		dest[13] = (a00*b09 - a01*b07 + a02*b06)*invDet;
		dest[14] = (-a30*b03 + a31*b01 - a32*b00)*invDet;
		dest[15] = (a20*b03 - a21*b01 + a22*b00)*invDet;
		
		return dest;
	};


	mat4.toRotationMat = function(mat, dest) {
		if(!dest) { dest = mat4.create(); }
		
		dest[0] = mat[0];
		dest[1] = mat[1];
		dest[2] = mat[2];
		dest[3] = mat[3];
		dest[4] = mat[4];
		dest[5] = mat[5];
		dest[6] = mat[6];
		dest[7] = mat[7];
		dest[8] = mat[8];
		dest[9] = mat[9];
		dest[10] = mat[10];
		dest[11] = mat[11];
		dest[12] = 0;
		dest[13] = 0;
		dest[14] = 0;
		dest[15] = 1;
		
		return dest;
	};


	mat4.toMat3 = function(mat, dest) {
		if(!dest) { dest = mat3.create(); }
		
		dest[0] = mat[0];
		dest[1] = mat[1];
		dest[2] = mat[2];
		dest[3] = mat[4];
		dest[4] = mat[5];
		dest[5] = mat[6];
		dest[6] = mat[8];
		dest[7] = mat[9];
		dest[8] = mat[10];
		
		return dest;
	};


	mat4.toInverseMat3 = function(mat, dest) {
		// Cache the matrix values (makes for huge speed increases!)
		var a00 = mat[0], a01 = mat[1], a02 = mat[2];
		var a10 = mat[4], a11 = mat[5], a12 = mat[6];
		var a20 = mat[8], a21 = mat[9], a22 = mat[10];
		
		var b01 = a22*a11-a12*a21;
		var b11 = -a22*a10+a12*a20;
		var b21 = a21*a10-a11*a20;
			
		var d = a00*b01 + a01*b11 + a02*b21;
		if (!d) { return null; }
		var id = 1/d;
		
		if(!dest) { dest = mat3.create(); }
		
		dest[0] = b01*id;
		dest[1] = (-a22*a01 + a02*a21)*id;
		dest[2] = (a12*a01 - a02*a11)*id;
		dest[3] = b11*id;
		dest[4] = (a22*a00 - a02*a20)*id;
		dest[5] = (-a12*a00 + a02*a10)*id;
		dest[6] = b21*id;
		dest[7] = (-a21*a00 + a01*a20)*id;
		dest[8] = (a11*a00 - a01*a10)*id;
		
		return dest;
	};
	// 這個算式是mat2* mat. 注意順序是倒反的 //
	mat4.multiply = function(mat, mat2, dest) {
		if(!dest) { dest = mat }
		
		// Cache the matrix values (makes for huge speed increases!)
		var a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3];
		var a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7];
		var a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11];
		var a30 = mat[12], a31 = mat[13], a32 = mat[14], a33 = mat[15];
		
		var b00 = mat2[0], b01 = mat2[1], b02 = mat2[2], b03 = mat2[3];
		var b10 = mat2[4], b11 = mat2[5], b12 = mat2[6], b13 = mat2[7];
		var b20 = mat2[8], b21 = mat2[9], b22 = mat2[10], b23 = mat2[11];
		var b30 = mat2[12], b31 = mat2[13], b32 = mat2[14], b33 = mat2[15];
		
		dest[0] = b00*a00 + b01*a10 + b02*a20 + b03*a30;
		dest[1] = b00*a01 + b01*a11 + b02*a21 + b03*a31;
		dest[2] = b00*a02 + b01*a12 + b02*a22 + b03*a32;
		dest[3] = b00*a03 + b01*a13 + b02*a23 + b03*a33;
		dest[4] = b10*a00 + b11*a10 + b12*a20 + b13*a30;
		dest[5] = b10*a01 + b11*a11 + b12*a21 + b13*a31;
		dest[6] = b10*a02 + b11*a12 + b12*a22 + b13*a32;
		dest[7] = b10*a03 + b11*a13 + b12*a23 + b13*a33;
		dest[8] = b20*a00 + b21*a10 + b22*a20 + b23*a30;
		dest[9] = b20*a01 + b21*a11 + b22*a21 + b23*a31;
		dest[10] = b20*a02 + b21*a12 + b22*a22 + b23*a32;
		dest[11] = b20*a03 + b21*a13 + b22*a23 + b23*a33;
		dest[12] = b30*a00 + b31*a10 + b32*a20 + b33*a30;
		dest[13] = b30*a01 + b31*a11 + b32*a21 + b33*a31;
		dest[14] = b30*a02 + b31*a12 + b32*a22 + b33*a32;
		dest[15] = b30*a03 + b31*a13 + b32*a23 + b33*a33;
		
		return dest;
	};

	mat4.multiplyVec3 = function(mat, vec, dest) {
		if(!dest) { dest = vec }
		
		var x = vec[0], y = vec[1], z = vec[2];
		
		dest[0] = mat[0]*x + mat[4]*y + mat[8]*z + mat[12];
		dest[1] = mat[1]*x + mat[5]*y + mat[9]*z + mat[13];
		dest[2] = mat[2]*x + mat[6]*y + mat[10]*z + mat[14];
		
		return dest;
	};

	
	mat4.multiplyVec4 = function(mat, vec, dest) {
		if(!dest) { dest = vec }
		
		var x = vec[0], y = vec[1], z = vec[2], w = vec[3];
		
		dest[0] = mat[0]*x + mat[4]*y + mat[8]*z + mat[12]*w;
		dest[1] = mat[1]*x + mat[5]*y + mat[9]*z + mat[13]*w;
		dest[2] = mat[2]*x + mat[6]*y + mat[10]*z + mat[14]*w;
		dest[3] = mat[3]*x + mat[7]*y + mat[11]*z + mat[15]*w;
		
		return dest;
	};


	mat4.translate = function(mat, vec, dest) {
		var x = vec[0], y = vec[1], z = vec[2];
		
		if(!dest || mat == dest) {
			mat[12] = mat[0]*x + mat[4]*y + mat[8]*z + mat[12];
			mat[13] = mat[1]*x + mat[5]*y + mat[9]*z + mat[13];
			mat[14] = mat[2]*x + mat[6]*y + mat[10]*z + mat[14];
			mat[15] = mat[3]*x + mat[7]*y + mat[11]*z + mat[15];
			return mat;
		}
		
		var a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3];
		var a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7];
		var a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11];
		
		dest[0] = a00;
		dest[1] = a01;
		dest[2] = a02;
		dest[3] = a03;
		dest[4] = a10;
		dest[5] = a11;
		dest[6] = a12;
		dest[7] = a13;
		dest[8] = a20;
		dest[9] = a21;
		dest[10] = a22;
		dest[11] = a23;
		
		dest[12] = a00*x + a10*y + a20*z + mat[12];
		dest[13] = a01*x + a11*y + a21*z + mat[13];
		dest[14] = a02*x + a12*y + a22*z + mat[14];
		dest[15] = a03*x + a13*y + a23*z + mat[15];
		return dest;
	};

	
	mat4.scale = function(mat, vec, dest) {
		var x = vec[0], y = vec[1], z = vec[2];
		
		if(!dest || mat == dest) {
			mat[0] *= x;
			mat[1] *= x;
			mat[2] *= x;
			mat[3] *= x;
			mat[4] *= y;
			mat[5] *= y;
			mat[6] *= y;
			mat[7] *= y;
			mat[8] *= z;
			mat[9] *= z;
			mat[10] *= z;
			mat[11] *= z;
			return mat;
		}
		
		dest[0] = mat[0]*x;
		dest[1] = mat[1]*x;
		dest[2] = mat[2]*x;
		dest[3] = mat[3]*x;
		dest[4] = mat[4]*y;
		dest[5] = mat[5]*y;
		dest[6] = mat[6]*y;
		dest[7] = mat[7]*y;
		dest[8] = mat[8]*z;
		dest[9] = mat[9]*z;
		dest[10] = mat[10]*z;
		dest[11] = mat[11]*z;
		dest[12] = mat[12];
		dest[13] = mat[13];
		dest[14] = mat[14];
		dest[15] = mat[15];
		return dest;
	};

	mat4.rotate = function(mat, angle, axis, dest) {
		var x = axis[0], y = axis[1], z = axis[2];
		var len = Math.sqrt(x*x + y*y + z*z);
		if (!len) { return null; }
		if (len != 1) {
			len = 1 / len;
			x *= len; 
			y *= len; 
			z *= len;
		}
		
		var s = Math.sin(angle);
		var c = Math.cos(angle);
		var t = 1-c;
		
		// Cache the matrix values (makes for huge speed increases!)
		var a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3];
		var a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7];
		var a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11];
		
		// Construct the elements of the rotation matrix
		var b00 = x*x*t + c, b01 = y*x*t + z*s, b02 = z*x*t - y*s;
		var b10 = x*y*t - z*s, b11 = y*y*t + c, b12 = z*y*t + x*s;
		var b20 = x*z*t + y*s, b21 = y*z*t - x*s, b22 = z*z*t + c;
		
		if(!dest) { 
			dest = mat 
		} else if(mat != dest) { // If the source and destination differ, copy the unchanged last row
			dest[12] = mat[12];
			dest[13] = mat[13];
			dest[14] = mat[14];
			dest[15] = mat[15];
		}
		
		// Perform rotation-specific matrix multiplication
		dest[0] = a00*b00 + a10*b01 + a20*b02;
		dest[1] = a01*b00 + a11*b01 + a21*b02;
		dest[2] = a02*b00 + a12*b01 + a22*b02;
		dest[3] = a03*b00 + a13*b01 + a23*b02;
		
		dest[4] = a00*b10 + a10*b11 + a20*b12;
		dest[5] = a01*b10 + a11*b11 + a21*b12;
		dest[6] = a02*b10 + a12*b11 + a22*b12;
		dest[7] = a03*b10 + a13*b11 + a23*b12;
		
		dest[8] = a00*b20 + a10*b21 + a20*b22;
		dest[9] = a01*b20 + a11*b21 + a21*b22;
		dest[10] = a02*b20 + a12*b21 + a22*b22;
		dest[11] = a03*b20 + a13*b21 + a23*b22;
		return dest;
	};


	mat4.rotateX = function(mat, angle, dest) {
		var s = Math.sin(angle);
		var c = Math.cos(angle);
		
		// Cache the matrix values (makes for huge speed increases!)
		var a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7];
		var a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11];

		if(!dest) { 
			dest = mat 
		} else if(mat != dest) { // If the source and destination differ, copy the unchanged rows
			dest[0] = mat[0];
			dest[1] = mat[1];
			dest[2] = mat[2];
			dest[3] = mat[3];
			
			dest[12] = mat[12];
			dest[13] = mat[13];
			dest[14] = mat[14];
			dest[15] = mat[15];
		}
		
		// Perform axis-specific matrix multiplication
		dest[4] = a10*c + a20*s;
		dest[5] = a11*c + a21*s;
		dest[6] = a12*c + a22*s;
		dest[7] = a13*c + a23*s;
		
		dest[8] = a10*-s + a20*c;
		dest[9] = a11*-s + a21*c;
		dest[10] = a12*-s + a22*c;
		dest[11] = a13*-s + a23*c;
		return dest;
	};

	mat4.rotateY = function(mat, angle, dest) {
		var s = Math.sin(angle);
		var c = Math.cos(angle);
		
		// Cache the matrix values (makes for huge speed increases!)
		var a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3];
		var a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11];
		
		if(!dest) { 
			dest = mat 
		} else if(mat != dest) { // If the source and destination differ, copy the unchanged rows
			dest[4] = mat[4];
			dest[5] = mat[5];
			dest[6] = mat[6];
			dest[7] = mat[7];
			
			dest[12] = mat[12];
			dest[13] = mat[13];
			dest[14] = mat[14];
			dest[15] = mat[15];
		}
		
		// Perform axis-specific matrix multiplication
		dest[0] = a00*c + a20*-s;
		dest[1] = a01*c + a21*-s;
		dest[2] = a02*c + a22*-s;
		dest[3] = a03*c + a23*-s;
		
		dest[8] = a00*s + a20*c;
		dest[9] = a01*s + a21*c;
		dest[10] = a02*s + a22*c;
		dest[11] = a03*s + a23*c;
		return dest;
	};


	mat4.rotateZ = function(mat, angle, dest) {
		var s = Math.sin(angle);
		var c = Math.cos(angle);
		
		// Cache the matrix values (makes for huge speed increases!)
		var a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3];
		var a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7];
		
		if(!dest) { 
			dest = mat 
		} else if(mat != dest) { // If the source and destination differ, copy the unchanged last row
			dest[8] = mat[8];
			dest[9] = mat[9];
			dest[10] = mat[10];
			dest[11] = mat[11];
			
			dest[12] = mat[12];
			dest[13] = mat[13];
			dest[14] = mat[14];
			dest[15] = mat[15];
		}
		
		// Perform axis-specific matrix multiplication
		dest[0] = a00*c + a10*s;
		dest[1] = a01*c + a11*s;
		dest[2] = a02*c + a12*s;
		dest[3] = a03*c + a13*s;
		
		dest[4] = a00*-s + a10*c;
		dest[5] = a01*-s + a11*c;
		dest[6] = a02*-s + a12*c;
		dest[7] = a03*-s + a13*c;
		
		return dest;
	};

	
	mat4.frustum = function(left, right, bottom, top, near, far, dest) {
		if(!dest) { dest = mat4.create(); }
		var rl = (right - left);
		var tb = (top - bottom);
		var fn = (far - near);
		dest[0] = (near*2) / rl;
		dest[1] = 0;
		dest[2] = 0;
		dest[3] = 0;
		dest[4] = 0;
		dest[5] = (near*2) / tb;
		dest[6] = 0;
		dest[7] = 0;
		dest[8] = (right + left) / rl;
		dest[9] = (top + bottom) / tb;
		dest[10] = -(far + near) / fn;
		dest[11] = -1;
		dest[12] = 0;
		dest[13] = 0;
		dest[14] = -(far*near*2) / fn;
		dest[15] = 0;
		return dest;
	};


	mat4.perspective = function(fovy, aspect, near, far, dest) {
		var top = near*Math.tan(fovy*Math.PI / 360.0);
		var right = top*aspect;
		return mat4.frustum(-right, right, -top, top, near, far, dest);
	};


	mat4.ortho = function(left, right, bottom, top, near, far, dest) {
		if(!dest) { dest = mat4.create(); }
		var rl = (right - left);
		var tb = (top - bottom);
		var fn = (far - near);
		dest[0] = 2 / rl;
		dest[1] = 0;
		dest[2] = 0;
		dest[3] = 0;
		dest[4] = 0;
		dest[5] = 2 / tb;
		dest[6] = 0;
		dest[7] = 0;
		dest[8] = 0;
		dest[9] = 0;
		dest[10] = -2 / fn;
		dest[11] = 0;
		dest[12] = -(left + right) / rl;
		dest[13] = -(top + bottom) / tb;
		dest[14] = -(far + near) / fn;
		dest[15] = 1;
		return dest;
	};


	mat4.lookAt = function(eye, center, up, dest) {
		if(!dest) { dest = mat4.create(); }
		
		var eyex = eye[0],
			eyey = eye[1],
			eyez = eye[2],
			upx = up[0],
			upy = up[1],
			upz = up[2],
			centerx = center[0],
			centery = center[1],
			centerz = center[2];

		if (eyex == centerx && eyey == centery && eyez == centerz) {
			return mat4.identity(dest);
		}
		
		var z0,z1,z2,x0,x1,x2,y0,y1,y2,len;
		
		//vec3.direction(eye, center, z);
		z0 = eyex - center[0];
		z1 = eyey - center[1];
		z2 = eyez - center[2];
		
		// normalize (no check needed for 0 because of early return)
		len = 1/Math.sqrt(z0*z0 + z1*z1 + z2*z2);
		z0 *= len;
		z1 *= len;
		z2 *= len;
		
		//vec3.normalize(vec3.cross(up, z, x));
		x0 = upy*z2 - upz*z1;
		x1 = upz*z0 - upx*z2;
		x2 = upx*z1 - upy*z0;
		len = Math.sqrt(x0*x0 + x1*x1 + x2*x2);
		if (!len) {
			x0 = 0;
			x1 = 0;
			x2 = 0;
		} else {
			len = 1/len;
			x0 *= len;
			x1 *= len;
			x2 *= len;
		};
		
		//vec3.normalize(vec3.cross(z, x, y));
		y0 = z1*x2 - z2*x1;
		y1 = z2*x0 - z0*x2;
		y2 = z0*x1 - z1*x0;
		
		len = Math.sqrt(y0*y0 + y1*y1 + y2*y2);
		if (!len) {
			y0 = 0;
			y1 = 0;
			y2 = 0;
		} else {
			len = 1/len;
			y0 *= len;
			y1 *= len;
			y2 *= len;
		}
		
		dest[0] = x0;
		dest[1] = y0;
		dest[2] = z0;
		dest[3] = 0;
		dest[4] = x1;
		dest[5] = y1;
		dest[6] = z1;
		dest[7] = 0;
		dest[8] = x2;
		dest[9] = y2;
		dest[10] = z2;
		dest[11] = 0;
		dest[12] = -(x0*eyex + x1*eyey + x2*eyez);
		dest[13] = -(y0*eyex + y1*eyey + y2*eyez);
		dest[14] = -(z0*eyex + z1*eyey + z2*eyez);
		dest[15] = 1;
		
		return dest;
	};

	mat4.str = function(mat) {
		return '[' + mat[0] + ', ' + mat[1] + ', ' + mat[2] + ', ' + mat[3] + 
			', '+ mat[4] + ', ' + mat[5] + ', ' + mat[6] + ', ' + mat[7] + 
			', '+ mat[8] + ', ' + mat[9] + ', ' + mat[10] + ', ' + mat[11] + 
			', '+ mat[12] + ', ' + mat[13] + ', ' + mat[14] + ', ' + mat[15] + ']';
	};

	var quat4 = {};

	quat4.create = function(quat) {
		var dest = new glMatrixArrayType(4);
		
		if(quat) {
			dest[0] = quat[0];
			dest[1] = quat[1];
			dest[2] = quat[2];
			dest[3] = quat[3];
		}
		
		return dest;
	};


	quat4.set = function(quat, dest) {
		dest[0] = quat[0];
		dest[1] = quat[1];
		dest[2] = quat[2];
		dest[3] = quat[3];
		
		return dest;
	};


	quat4.calculateW = function(quat, dest) {
		var x = quat[0], y = quat[1], z = quat[2];

		if(!dest || quat == dest) {
			quat[3] = -Math.sqrt(Math.abs(1.0 - x*x - y*y - z*z));
			return quat;
		}
		dest[0] = x;
		dest[1] = y;
		dest[2] = z;
		dest[3] = -Math.sqrt(Math.abs(1.0 - x*x - y*y - z*z));
		return dest;
	}


	quat4.inverse = function(quat, dest) {
		if(!dest || quat == dest) {
			quat[0] *= -1;
			quat[1] *= -1;
			quat[2] *= -1;
			return quat;
		}
		dest[0] = -quat[0];
		dest[1] = -quat[1];
		dest[2] = -quat[2];
		dest[3] = quat[3];
		return dest;
	}


	quat4.length = function(quat) {
		var x = quat[0], y = quat[1], z = quat[2], w = quat[3];
		return Math.sqrt(x*x + y*y + z*z + w*w);
	}

	
	quat4.normalize = function(quat, dest) {
		if(!dest) { dest = quat; }
		
		var x = quat[0], y = quat[1], z = quat[2], w = quat[3];
		var len = Math.sqrt(x*x + y*y + z*z + w*w);
		if(len == 0) {
			dest[0] = 0;
			dest[1] = 0;
			dest[2] = 0;
			dest[3] = 0;
			return dest;
		}
		len = 1/len;
		dest[0] = x * len;
		dest[1] = y * len;
		dest[2] = z * len;
		dest[3] = w * len;
		
		return dest;
	}


	quat4.multiply = function(quat, quat2, dest) {
		if(!dest) { dest = quat; }
		
		var qax = quat[0], qay = quat[1], qaz = quat[2], qaw = quat[3];
		var qbx = quat2[0], qby = quat2[1], qbz = quat2[2], qbw = quat2[3];
		
		dest[0] = qax*qbw + qaw*qbx + qay*qbz - qaz*qby;
		dest[1] = qay*qbw + qaw*qby + qaz*qbx - qax*qbz;
		dest[2] = qaz*qbw + qaw*qbz + qax*qby - qay*qbx;
		dest[3] = qaw*qbw - qax*qbx - qay*qby - qaz*qbz;
		
		return dest;
	}


	quat4.multiplyVec3 = function(quat, vec, dest) {
		if(!dest) { dest = vec; }
		
		var x = vec[0], y = vec[1], z = vec[2];
		var qx = quat[0], qy = quat[1], qz = quat[2], qw = quat[3];

		// calculate quat * vec
		var ix = qw*x + qy*z - qz*y;
		var iy = qw*y + qz*x - qx*z;
		var iz = qw*z + qx*y - qy*x;
		var iw = -qx*x - qy*y - qz*z;
		
		// calculate result * inverse quat
		dest[0] = ix*qw + iw*-qx + iy*-qz - iz*-qy;
		dest[1] = iy*qw + iw*-qy + iz*-qx - ix*-qz;
		dest[2] = iz*qw + iw*-qz + ix*-qy - iy*-qx;
		
		return dest;
	}

	quat4.toMat3 = function(quat, dest) {
		if(!dest) { dest = mat3.create(); }
		
		var x = quat[0], y = quat[1], z = quat[2], w = quat[3];

		var x2 = x + x;
		var y2 = y + y;
		var z2 = z + z;

		var xx = x*x2;
		var xy = x*y2;
		var xz = x*z2;

		var yy = y*y2;
		var yz = y*z2;
		var zz = z*z2;

		var wx = w*x2;
		var wy = w*y2;
		var wz = w*z2;

		dest[0] = 1 - (yy + zz);
		dest[1] = xy - wz;
		dest[2] = xz + wy;

		dest[3] = xy + wz;
		dest[4] = 1 - (xx + zz);
		dest[5] = yz - wx;

		dest[6] = xz - wy;
		dest[7] = yz + wx;
		dest[8] = 1 - (xx + yy);
		
		return dest;
	}

	quat4.toMat4 = function(quat, dest) {
		if(!dest) { dest = mat4.create(); }
		
		var x = quat[0], y = quat[1], z = quat[2], w = quat[3];

		var x2 = x + x;
		var y2 = y + y;
		var z2 = z + z;

		var xx = x*x2;
		var xy = x*y2;
		var xz = x*z2;

		var yy = y*y2;
		var yz = y*z2;
		var zz = z*z2;

		var wx = w*x2;
		var wy = w*y2;
		var wz = w*z2;

		dest[0] = 1 - (yy + zz);
		dest[1] = xy - wz;
		dest[2] = xz + wy;
		dest[3] = 0;

		dest[4] = xy + wz;
		dest[5] = 1 - (xx + zz);
		dest[6] = yz - wx;
		dest[7] = 0;

		dest[8] = xz - wy;
		dest[9] = yz + wx;
		dest[10] = 1 - (xx + yy);
		dest[11] = 0;

		dest[12] = 0;
		dest[13] = 0;
		dest[14] = 0;
		dest[15] = 1;
		
		return dest;
	}

	quat4.slerp = function(quat, quat2, slerp, dest) {
		if(!dest) { dest = quat; }
		
		var cosHalfTheta =  quat[0]*quat2[0] + quat[1]*quat2[1] + quat[2]*quat2[2] + quat[3]*quat2[3];
		
		if (Math.abs(cosHalfTheta) >= 1.0){
			if(dest != quat) {
				dest[0] = quat[0];
				dest[1] = quat[1];
				dest[2] = quat[2];
				dest[3] = quat[3];
			}
			return dest;
		}
		
		var halfTheta = Math.acos(cosHalfTheta);
		var sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta*cosHalfTheta);

		if (Math.abs(sinHalfTheta) < 0.001){
			dest[0] = (quat[0]*0.5 + quat2[0]*0.5);
			dest[1] = (quat[1]*0.5 + quat2[1]*0.5);
			dest[2] = (quat[2]*0.5 + quat2[2]*0.5);
			dest[3] = (quat[3]*0.5 + quat2[3]*0.5);
			return dest;
		}
		
		var ratioA = Math.sin((1 - slerp)*halfTheta) / sinHalfTheta;
		var ratioB = Math.sin(slerp*halfTheta) / sinHalfTheta; 
		
		dest[0] = (quat[0]*ratioA + quat2[0]*ratioB);
		dest[1] = (quat[1]*ratioA + quat2[1]*ratioB);
		dest[2] = (quat[2]*ratioA + quat2[2]*ratioB);
		dest[3] = (quat[3]*ratioA + quat2[3]*ratioB);
		
		return dest;
	}

	quat4.str = function(quat) {
		return '[' + quat[0] + ', ' + quat[1] + ', ' + quat[2] + ', ' + quat[3] + ']'; 
	}
	
	pack.vec3 = vec3;
	pack.mat3 = mat3;
	pack.mat4 = mat4;
	pack.quat4 = quat4;
	
	
	
	function makeRightMatrix2DProjection( w, h, dest ){
		var tm = mat4.create()
		mat4.identity(tm)
		mat4.translate( tm, [-1, 1, 0 ], tm )
		var sm = mat4.create()
		mat4.identity( sm )
		mat4.scale( sm, [2/w, -2/h, 1], sm )
		mat4.multiply( tm, sm, dest )
        return dest
    }
	mat4.makeRightMatrix2DProjection = makeRightMatrix2DProjection
	
	
	function makeTextureRightMatrixWithSrcRect( w, h, rect, dest ){
		var tm = mat3.create()
		mat3.identity( tm )
		mat3.translate( tm, [rect.x/w, rect.y/h], tm)
		var sm = mat3.create()
		mat3.identity( sm )
		mat3.scale( sm, [rect.width/ w, rect.height/ h], sm)
		mat3.multiply( tm, sm, dest )
        return dest
    }
	mat3.makeTextureRightMatrixWithSrcRect = makeTextureRightMatrixWithSrcRect
	

	mat4.getRow = function( mat, idx, dest ){
		if( !dest )
			dest = vec3.create()
		dest[0] = mat[idx* 4]
		dest[1] = mat[idx* 4+1]
		dest[2] = mat[idx* 4+2]
		return dest
	}
	mat4.makeMatrixIdentity = function(){
		var ret= mat4.create()
		mat4.identity( ret )
		return ret
	}
	mat4.makeRightMatrixTranslation = function( vec ){
		var ret = mat4.makeMatrixIdentity()
		mat4.translate( ret, vec )
		return ret
	}
	
	function toDegree( radian ){
		return radian* 180/ Math.PI
	}
	pack.toDegree = toDegree
	
	function toRadian( degree ){
		return degree* Math.PI/ 180
	}
	pack.toRadian = toRadian
	
	
})()