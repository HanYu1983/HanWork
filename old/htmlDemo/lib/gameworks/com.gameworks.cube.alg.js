com.gameworks.cube.alg = com.gameworks.cube.alg || {};

(function(){
	var pack = com.gameworks.cube.alg
	var console = com.gameworks.debug.console
	
	function getType( mat, type ){
		var ret = []
		for( var i=0; i<mat.length; ++i )
			for( var j=0; j<mat[0].length; ++j )
			{
				var t = mat[i][j]
				if ( t == type )
					ret.push({c: j, r:i })
			}
		return ret
	}
	pack.getType = getType
	
	// findType: 1=>水平, 2=>垂直, 3=>雙向 //
	function getSameType( mat, cr, findType ){
		var type = mat[cr.r][cr.c]
		function find( mat, c, r, type, mark, result ){
			if( c<0 || c >= mat[0].length || r<0 || r >= mat.length )
				return result
			var id = r* 1000+c
			if( mark[id] )
				return result
			mark[id] = true
			var tt = mat[r][c]
			if( type == tt )
			{
				result.push( {c: c, r: r} )
				if( findType & 1 )
				{
					arguments.callee( mat, c+1, r, type, mark, result )
					arguments.callee( mat, c-1, r, type, mark, result )
				}
				if( findType & 2 )
				{
					arguments.callee( mat, c, r-1, type, mark, result )
					arguments.callee( mat, c, r+1, type, mark, result )
				}
			}
			return result
		}
		return find( mat, cr.c, cr.r, type, {}, [])
	}
	pack.getSameType = getSameType
	
	// 產生新方塊位置的演算法。放在stage.newCube()中的filter //
	function simpleNewCubeFilter( stage, cube, cr ){
		//先計算出邊緣的格子
		var local = stage.physicBoard.getLocalCR( cr.c, cr.r, stage.dir )
		var offset = stage.physicBoard.getGlobalOffsetCR( -local.c-1, -local.r-1, stage.dir )
		switch( stage.dir ){
		case stage.physicBoard.enumDir.up:
		case stage.physicBoard.enumDir.down:
			cr.r += offset.r
			break
		case stage.physicBoard.enumDir.left:
		case stage.physicBoard.enumDir.right:
			cr.c += offset.c
			break
		}
		// 再後退盤列數的距離 //
		for( var i=0; i<stage.physicBoard.getLocalRowCount( stage.dir ); ++i )
			cr = stage.physicBoard.getAboveCR( cr, stage.dir )
		var c = stage.findCubeWithRuntimeCR( cr )
		// 計算出離盤面最遠的方塊 //
		while( !c )
		{
			cr = stage.physicBoard.getBelowCR( cr, stage.dir )
			c = stage.findCubeWithRuntimeCR( cr )
			// 一進入有效的盤面就退出 //
			if( stage.dir == stage.physicBoard.enumDir.up )
			{
				if( cr.r == stage.h )
					break;
			}
			else if( stage.dir == stage.physicBoard.enumDir.down )
			{
				if( cr.r == -1 )
					break
			}
			else if( stage.dir == stage.physicBoard.enumDir.left )
			{
				if( cr.c == stage.w )
					break
			}
			else if( stage.dir == stage.physicBoard.enumDir.right )
			{
				if( cr.c == -1 )
					break
			}
		}
		stage.storePositionWithCR( cr, cube.pos )
		// 修正誤差。二個方塊有可能判斷在同一格，因為位移的距離在一格以內 //
		if( c )
		{
			switch( stage.dir ){
			case stage.physicBoard.enumDir.up:
				cube.pos[1] = c.pos[1]+ stage.size
				break
			case stage.physicBoard.enumDir.down:
				cube.pos[1] = c.pos[1]- stage.size
				break
			case stage.physicBoard.enumDir.left:
				cube.pos[0] = c.pos[0]+ stage.size
				break
			case stage.physicBoard.enumDir.right:
				cube.pos[0] = c.pos[0]- stage.size
				break
			}
		}
	}
	pack.simpleNewCubeFilter = simpleNewCubeFilter
	
	// 簡易方塊遊戲展示用的處理者 //
	function SimpleStageCallback(){}
	SimpleStageCallback.prototype = {
		init: function( param ){
			this.autoDropWhenInit = param.autoDropWhenInit
			this.autoDrop = param.autoDrop
			this.linkCount = param.linkCount
			this.newCubeList = param.newCubeList
			this.newCubeId = 0;
			this.newCubeFilter = param.newCubeFilter
			if ( typeof this.newCubeFilter != 'function' )
				this.newCubeFilter = simpleNewCubeFilter
			if( typeof this.linkCount != 'number')
				this.linkCount = 3
			return this
		},
		onAllocate: function( stage ){
			this.newCRS = []
			var types =[]
			for( var i=0; i<stage.h; ++i )
				types.push([])
			this.types = types
			if( this.autoDropWhenInit )
			{
				for( var j=0; j<stage.h; ++j )
					for( var i=0; i<stage.w; ++i )
						stage.newCube( { c: i, r: -j }, this.getNextCubeType() )
			}
		},
		onLink: function(stage, cube, cubes){
            for (var i = 0, len = cubes.length; i < len; ++i)
                cubes[i].removeFromStage();
            cube.removeFromStage();
        },
		onNewCubeGroupOnFloor: function( stage, gs ){
			stage.storeAllCubePropertyWithPropertyName( this.types, 'type')
            var mark = {}
			for( var i in gs )
			{
				var cid = parseInt(i)
                var cube = stage.getCubeWithCubeId( cid )
                if( cube && cube.isStoreFloorCR() )
                {
                    var sts = []
                    var l1 = getSameType(this.types, cube.cr, 1);
                    if (l1.length < this.linkCount)
                        l1 = []
                    var l2 = getSameType(this.types, cube.cr, 2);
                    if (l2.length < this.linkCount)
                        l2 = []
                    sts = sts.concat(l1)
                    sts = sts.concat(l2)
                    sts = filterRepeatCR(sts)
                    if (sts.length)
                    {
                        var bombCubes = []
                        for (var i in sts)
                        {
                        	var cr = sts[i]
                            var pid = com.gameworks.cube.stage.cr2pid(cr, stage.w);
                            if (mark[pid])
                                continue;
                            var bomb = stage.findCubeWithRuntimeCR(cr);
                            if (bomb != cube)
                            {
                                mark[pid] = true;
                                bombCubes.push(bomb);
                            }
                        }
                        if (bombCubes.length )
                        {
                            stage.computLinkComboCount();
                            this.onLink(stage, cube, bombCubes);
                        }
                    }
                }
            }
		},
		onLinkComboCountChange: function( stage ){
			
		},
		onDirChange: function( stage ){
			
		},
		onDeleteCube: function( stage, cube ) {
			if (this.autoDrop)
                stage.newCube(cube.getSpawnCR(), this.getNextCubeType(), this.newCubeFilter);
		},
		onUpdateCube: function( stage, cube, elapsed ){
			
		},
		onNewCube: function( stage, cube ){
			
		},
		onUpdate: function( stage, elapsed ){

		},
		setNewCubeList: function( ary ) {
			this.newCubeList = ary.slice()
			this.newCubeId = 0
		},
		getNextCubeType: function(){
			var type = 0;
			if( this.newCubeList )
			{
				type = this.newCubeList[ this.newCubeId ]
				if( ++this.newCubeId >= this.newCubeList.length )
					this.newCubeId = 0
			}
			else
				type = Math.floor(Math.random()* 6);
			return type
		}
	}
	pack.SimpleStageCallback = SimpleStageCallback
	
	
	function isCanSwapWithCR( cr, cr2 ){
		if( cr.c == cr2.c )
			return Math.abs( cr.r- cr2.r ) == 1
		else if( cr.r == cr2.r )
			return Math.abs( cr.c- cr2.c ) == 1
		return false
	}
	pack.isCanSwapWithCR = isCanSwapWithCR
	

	function filterRepeatCR( crs ){
		var ret= []
		var mark = {}
		for( var i in crs )
		{
			var cr = crs[i]
			var cid = cr.r* 1000+ cr.c
			if( mark[cid] )
				continue;
			mark[cid] = true
			ret.push( cr )
		}
		return ret
	}
	pack.filterRepeatCR = filterRepeatCR
			
})()