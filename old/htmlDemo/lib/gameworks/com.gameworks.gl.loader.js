
com.gameworks.gl.loader = com.gameworks.gl.loader || {};

(function(){
	var pack = com.gameworks.gl.loader
	
	function loadWithType( url, type, callback ){
		switch( type ){
		case 'obj':
		{
			jQuery.ajax({
				url: url,
				type: 'get',
				dataType: 'text',
				success: function( data ){
					callback.onLoad( doLoadObj( data ) )
				},
				error: function(e){
					callback.onError(e)
				}
			})
		}
			break;
		}
	}
	pack.loadWithType = loadWithType
	
	function doLoadObj(text){
	    var vertexArray = [ ];
	    var normalArray = [ ];
	    var textureArray = [ ];
	    var indexArray = [ ];

	    var vertex = [ ];
	    var normal = [ ];
	    var texture = [ ];
	    var facemap = { };
	    var index = 0;

	    // This is a map which associates a range of indices with a name
	    // The name comes from the 'g' tag (of the form "g NAME"). Indices
	    // are part of one group until another 'g' tag is seen. If any indices
	    // come before a 'g' tag, it is given the group name "_unnamed"
	    // 'group' is an object whose property names are the group name and
	    // whose value is a 2 element array with [<first index>, <num indices>]
	    var groups = { };
	    var currentGroup = [-1, 0];
	    groups["_unnamed"] = currentGroup;

	    var lines = text.split("\n");
	    for (var lineIndex in lines) {
	        var line = lines[lineIndex].replace(/[ \t]+/g, " ").replace(/\s\s*$/, "");

	        // ignore comments
	        if (line[0] == "#")
	            continue;

	        var array = line.split(" ");
	        if (array[0] == "g") {
	            // new group
	            currentGroup = [indexArray.length, 0];
	            groups[array[1]] = currentGroup;
	        }
	        else if (array[0] == "v") {
	            // vertex
	            vertex.push(parseFloat(array[1]));
	            vertex.push(parseFloat(array[2]));
	            vertex.push(parseFloat(array[3]));
	        }
	        else if (array[0] == "vt") {
	            // normal
	            texture.push(parseFloat(array[1]));
	            texture.push(parseFloat(array[2]));
	        }
	        else if (array[0] == "vn") {
	            // normal
	            normal.push(parseFloat(array[1]));
	            normal.push(parseFloat(array[2]));
	            normal.push(parseFloat(array[3]));
	        }
	        else if (array[0] == "f") {
	            // face
	            if (array.length != 4) {
	                console.log("*** Error: face '"+line+"' not handled");
	                continue;
	            }

	            for (var i = 1; i < 4; ++i) {
	                if (!(array[i] in facemap)) {
	                    // add a new entry to the map and arrays
	                    var f = array[i].split("/");
	                    var vtx, nor, tex;

	                    if (f.length == 1) {
	                        vtx = parseInt(f[0]) - 1;
	                        nor = vtx;
	                        tex = vtx;
	                    }
	                    else if (f.length = 3) {
	                        vtx = parseInt(f[0]) - 1;
	                        tex = parseInt(f[1]) - 1;
	                        nor = parseInt(f[2]) - 1;
	                    }
	                    else {
	                        console.log("*** Error: did not understand face '"+array[i]+"'");
	                        return null;
	                    }

	                    // do the vertices
	                    var x = 0;
	                    var y = 0;
	                    var z = 0;
	                    if (vtx * 3 + 2 < vertex.length) {
	                        x = vertex[vtx*3];
	                        y = vertex[vtx*3+1];
	                        z = vertex[vtx*3+2];
	                    }
	                    vertexArray.push(x);
	                    vertexArray.push(y);
	                    vertexArray.push(z);

	                    // do the textures
	                    x = 0;
	                    y = 0;
	                    if (tex * 2 + 1 < texture.length) {
	                        x = texture[tex*2];
	                        y = texture[tex*2+1];
	                    }
	                    textureArray.push(x);
	                    textureArray.push(y);

	                    // do the normals
	                    x = 0;
	                    y = 0;
	                    z = 1;
	                    if (nor * 3 + 2 < normal.length) {
	                        x = normal[nor*3];
	                        y = normal[nor*3+1];
	                        z = normal[nor*3+2];
	                    }
	                    normalArray.push(x);
	                    normalArray.push(y);
	                    normalArray.push(z);

	                    facemap[array[i]] = index++;
	                }

	                indexArray.push(facemap[array[i]]);
	                currentGroup[1]++;
	            }
	        }
	    }
	    return {
	    	normalArray: normalArray,
	    	textureArray: textureArray,
	    	vertexArray: vertexArray,
	    	indexArray: indexArray,
	    }
	}
	pack.parseObj = doLoadObj
	
})()