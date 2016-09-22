com.gameworks.cube.stage = com.gameworks.cube.stage || {};

(function(){
	var pack = com.gameworks.cube.stage
	var copy = com.gameworks.copy
	var vec3 = com.gameworks.math.vec3
	
	function pid2cr( pid, w ){
        return new com.gameworks.cube.CR().init({ c: pid%w, r: pid/w })
    }
	pack.pid2cr = pid2cr
	
	function cr2pid( cr, w ){
        return cr.r* w+ cr.c;
    }
	pack.cr2pid = cr2pid
  

	var downDir = {
		oridnal: 0,
		
		getLocalRowCount: function( w, h ){
			return h
		},
		getLocalColumnCount: function( w, h ){
			return w
		},
		getGlobalCR: function( c, r, w, h ){
			return { c: c, r: r }
		},
		getGlobalOffsetCR: function( c, r ){
			return { c: c, r: r }
		},
		getLocalCR: function( c, r, w, h ){
			return { c: c, r: r }
		}
	}

	var upDir = {
		oridnal: 3,
		
		getLocalRowCount: function( w, h ){
			return h
		},
		getLocalColumnCount: function( w, h ){
			return w
		},
		getGlobalCR: function( c, r, w, h ){
			return { c: (w-1)-c, r: (h-1)-r }
		},
		getGlobalOffsetCR: function( c, r ){
			return { c: -c, r: -r }
		},
		getLocalCR: function( c, r, w, h ){
			return { c: (w-1)-c, r: (h-1)-r }
		}
	}

	var rightDir = {
		oridnal: 1,
			
		getLocalRowCount: function( w, h ){
			return w
		},
		getLocalColumnCount: function( w, h ){
			return h
		},
		getGlobalCR: function( c, r, w, h ){
			return { c: r, r: (h-1)-c }
		},
		getGlobalOffsetCR: function( c, r ){
			return { c: r, r: -c }
		},
		getLocalCR: function( c, r, w, h ){
			return { c: (h-1)-r, r: c }
		}
	}

	var leftDir = {
		oridnal: 2,
			
		getLocalRowCount: function( w, h ){
			return w
		},
		getLocalColumnCount: function( w, h ){
			return h
		},
		getGlobalCR: function( c, r, w, h ){
			return { c: (w-1)-r, r: c }
		},
		getGlobalOffsetCR: function( c, r ){
			return { c: -r, r: c }
		},
		getLocalCR: function( c, r, w, h ){
			return { c: r, r:(w-1)-c }
		}
	}

	// 多方向盤 //
	// 支援CR為負值 。範圍為[-w~w, -h~h]//
	function MultiDirectionalBoard(){}
	MultiDirectionalBoard.prototype = {
		init: function( param ){
			this.w = param.w
			this.h = param.h
			this.mat = []
			for( var i =0; i<this.h*3; ++i )
			{
				var ary = []
				for( var j=0; j<this.w*3; ++j )
					ary.push( 0 )
				this.mat.push( ary )
			}
			return this
		},
		enumDir : {
			up: upDir,
			down: downDir,
			left: leftDir,
			right: rightDir
		},
		getDirRef: function( enumDir ){
			switch( enumDir ){
			case this.enumDir.up:
				return this.enumDir.down
			case this.enumDir.down:
				return this.enumDir.up
			case this.enumDir.left:
				return this.enumDir.right
			case this.enumDir.right:
				return this.enumDir.left
			}
			com.gameworks.debug.assertNow( 'no this dir', 'MultiDirectionalBoard', 'getDirRef')
		},
		// 絶對座標改成方向的區域座標 //
		getLocalCR: function( c, r, enumDir ){
			return enumDir.getLocalCR( c, r, this.w, this.h )
		},
		// 取得區域座標的盤寬度 //
		getLocalColumnCount: function( enumDir ){
			return enumDir.getLocalColumnCount( this.w, this.h )
		},
		// 取得區域座標的盤高度 //
		getLocalRowCount: function( enumDir ){
			return enumDir.getLocalRowCount( this.w, this.h )
		},
		// 區域座標改為絶對座標 //
		getGlobalCR: function( c, r, enumDir ){
			return enumDir.getGlobalCR( c, r, this.w, this.h )
		},
		// 區域座標向量轉為絶對座標向量 //
		getGlobalOffsetCR: function( c, r, enumDir ){
			return enumDir.getGlobalOffsetCR( c, r )
		},
		isValidCR: function( cr ){
			var nc = cr.c+ this.w
			var nr = cr.r+ this.h
			return nc>=0 && nc< this.w && nr >=0 && nr< this.h
		},
		setValue: function( cr, value ){
			this.mat[cr.r+this.h][cr.c+this.w] = value
		},
		setValues: function( crs, value ){
			for( var i in crs )
			{
				var cr = crs[i]
				this.setValue( cr, value )
			}
		},
		getValue: function( cr ){
			return this.mat[cr.r+this.h][cr.c+this.w]
		},
		getAboveCR: function( cr, enumDir ){
			var offset = this.getGlobalOffsetCR( 0, -1, enumDir )
			return { c: cr.c+ offset.c, r: cr.r+ offset.r }
		},
		getBelowCR: function( cr, enumDir ){
			var offset = this.getGlobalOffsetCR( 0, 1, enumDir )
			return { c: cr.c+ offset.c, r: cr.r+ offset.r }
		},
		isAbove: function( cr, cr2, enumDir ){
			var lc1 = this.getLocalCR( cr.c, cr.r, enumDir )
			var lc2 = this.getLocalCR( cr2.c, cr2.r, enumDir )
			return lc2.r - lc1.r
		}
	}
	pack.MultiDirectionalBoard = MultiDirectionalBoard
	
	// 物理盤 //
	// 支援多方向 //
	function PhysicBoard(){}
	PhysicBoard.prototype = copy( new MultiDirectionalBoard, {
		init: function( param ){
			MultiDirectionalBoard.prototype.init.call( this, param )
			return this
		},
		// 塊方類型[empty, box, white] = [空, 阻擋, 未實做] //
		enumType: {
			empty: 0,
			box: 1,
			whiteBox: 2
		},
		// 指定位置是否是阻擋物 //
		// 高度值r為負值的時候，不算Box。允許方塊下落時不被邊界擋到 //
		isBox: function( cr, enumDir ){
			var lcr = this.getLocalCR( cr.c, cr.r, enumDir )
			var lw = this.getLocalColumnCount( enumDir )
			var lh = this.getLocalRowCount( enumDir )
			if( lcr.c< 0 || lcr.c >= lw || lcr.r>= lh )
				return true
			else
				return this.getValue( cr ) == this.enumType.box
			return true
		},
		// 取得絶對座標指定行中最上方的阻擋物的位置 //
		// 如果沒有阻擋物，最下方那格的再下方一格的絶對座標位置 //
		getTopBox: function( cr, enumDir ){
			var ret;
			cr = this.getLocalCR( cr.c, cr.r, enumDir )
			var h = this.getLocalRowCount( enumDir )
			var i;
			for( i=cr.r+1; i<h; ++i )
			{
				var cr2 = this.getGlobalCR( cr.c, i, enumDir )
				if( this.isBox( cr2, enumDir ))
				{
					ret = cr2
					break
				}
			}
			if( i >= h )
				ret = this.getGlobalCR( cr.c, h, enumDir )
			return ret
		}
	})
	pack.PhysicBoard = PhysicBoard
	
	function Cube(){}
	Cube.prototype = {
		init: function( param ){
			this.stage = param.stage
			this.id = param.id
			this.visible = param.visible
			this.cr = new com.gameworks.cube.CR().init({c:0,r:0});
			this.floorCR = new com.gameworks.cube.CR().init({c:0,r:0});
			this.maybeCR = new com.gameworks.cube.CR().init({c:-1,r:-1});
			this.fsm = new com.gameworks.util.SimpleFSM().init({})
			this.fsm.changeState( this.state.newDrop )
			this.pos = vec3.create()
			this.type = 0
			this.plugin = {}
			return this
		},
		state: {
			floor: -1,
			drop: -2,
			newDrop: -3
		},
        reset: function(){
            this.fsm.changeState(this.state.newDrop);
            this.maybeCR.init({c: -1, r:-1 })
            this.plugin = {}
        },
        getSpawnCR: function(){
        	return this.maybeCR
        },
        isCanDirChange: function(){
            return this.isStoreFloorCR();
        },
        isCanGetValueForComput: function(){
            return this.isStoreFloorCR();
        },
        isStoreFloorCR: function(){
            return this.fsm.state == this.state.floor;
        },
        update: function(elapsed){
            this.handleDefaultState(elapsed);
            this.handleDefaultUpdate(elapsed);
        },
        removeFromStage: function(){
            this.stage.deleteCubeWithCube(this);
        },
        setDir: function(dir){
            this.dir = dir;
        },
        notifyEvent: function(sender, msg) {
        	
        },
        applyFloorCR2CR: function(){
        	this.floorCR.init( this.maybeCR )
        	this.cr.init( this.floorCR )
        },
        handleDefaultState: function(elapsed){
            switch( this.fsm.state ){
                case this.state.newDrop:
                case this.state.floor:
                {
                    var 
                        boundCR = this.cr,
                        boxCR = this.stage.physicBoard.getTopBox(boundCR, this.dir),
                        emptyCR = this.stage.physicBoard.getAboveCR(boxCR, this.dir);
                    var isAbove = this.stage.physicBoard.isAbove(boundCR, emptyCR, this.dir);
                    if( isAbove )
                    {
                        this.stage.unpack(this.maybeCR)
                        this.maybeCR.init( emptyCR )
                        this.stage.pack(this.maybeCR)
                        this.fsm.changeState(this.state.drop)
                    }
                }
                    break;
                case this.state.drop:
                {
                    this.stage.unpack(this.maybeCR);
                    var 
                        boundCR = this.maybeCR,
                        boxCR = this.stage.physicBoard.getTopBox(boundCR, this.dir),
                        emptyCR = this.stage.physicBoard.getAboveCR(boxCR, this.dir);
                    this.maybeCR.init( emptyCR )
                    this.stage.pack(this.maybeCR)
                    
                    var floorPos = vec3.create()
					this.stage.storePositionWithCR( this.maybeCR, floorPos )
					var toFloor = vec3.create()
					vec3.subtract( floorPos, this.pos, toFloor )
                    var len = vec3.length( toFloor )
                    var moveDis = this.computMoveDistance( elapsed )
                    if( len<= moveDis )
                    {
                        vec3.set( floorPos, this.pos )
                        this.stage.storeCRWithPosition(this.pos, this.maybeCR);
                        this.applyFloorCR2CR();
                        this.fsm.changeState(this.state.floor);
                        this.stage.pushToNewCubeGroup(this);
                    }
                    else
                    {
                    	toFloor = vec3.scale( toFloor, moveDis/ len )
						//toFloor = vec3.scale( toFloor, elapsed )
						vec3.add( this.pos, toFloor, this.pos )
					}
                }
                    break;
            }
        },
        computMoveDistance: function( elapsed ){
        	return 300* elapsed;
        },
        handleDefaultUpdate: function(elapsed){
            this.stage.storeCRWithPosition(this.pos, this.cr);
            this.fsm.update(elapsed);
        }
    }
	pack.Cube = Cube
	
	// 方塊舞台 //
	function CubeStage(){}
	CubeStage.prototype = {
		init: function( param ){
			if( !param.size )
				throw new Error('must have size')
			this.callback = param.callback
			this.size = param.size
			this.w = param.w
			this.h = param.h
			this.len = this.w* this.h
			this.dir = PhysicBoard.prototype.enumDir.down
			this.speedCubeDrop = param.speedCubeDrop
			this.cubeFactory = param.cubeFactory
			if( !this.cubeFactory )
				this.cubeFactory = this.createDefaultCubeFactory()
			var pool = new com.gameworks.util.ObjectPool().init()
			pool.create( this.len* 2, this.cubeFactory )
			this.cubes = {}
			this.pool = pool
			this.physicBoard = new PhysicBoard().init( {w: this.w, h: this.h} )
			this.newCubeGroups = []
			this.currentCubeGroup = []
			
			this.linkComboCount = 0
			this.linkComboComputDuration = 1000
			this.lastStageTimeComputLinkComboCount = 0
			this.stageTime = 0
			
			this.onAllocate()
			return this
		},
		// 建立舞台對應的方塊 //
		createDefaultCubeFactory: function(){
			return function(i){
				var cube = new Cube().init({
					visible: false,
					id: i
				})
				return cube
			}
		},
		// 舞台初使化時呼叫 //
		onAllocate: function(){
			if( this.callback )
				this.callback.onAllocate( this )
		},
		// 一次方塊下落到定點時呼叫。用來計算方塊連線的時機 //
		onNewCubeGroupOnFloor: function( gs ){
			if( this.callback )
				this.callback.onNewCubeGroupOnFloor( this, gs )
		},
		// 方塊被消除的時候呼叫 //
		onDeleteCube: function( cube ){
			if( this.callback )
				this.callback.onDeleteCube( this, cube )
		},
		onUpdate: function( elapsed ){
			if( this.callback )
				this.callback.onUpdate( this, elapsed )
		},
		// 方塊被更新時呼叫 //
		onUpdateCube: function( cube, elapsed ){
			if( this.callback )
				this.callback.onUpdateCube( this, cube, elapsed )
		},
		onNewCube: function( cube ){
			if( this.callback )
				this.callback.onNewCube( this, cube )
		},
		onDirChange: function(){
			for( var k in this.cubes )
			{
				var cube = this.cubes[k]
				cube.setDir( this.dir )
			}
			if( this.callback )
				this.callback.onDirChange( this )
		},
		onLinkComboCountChange: function(){
			if( this.callback )
				this.callback.onLinkComboCountChange( this )
		},
		// 計算連鎖。每次方塊連線時呼叫 //
		computLinkComboCount: function(){
			var old = this.linkComboCount
			if( this.stageTime - this.lastStageTimeComputLinkComboCount < this.linkComboComputDuration )
				++this.linkComboCount
			else
				this.linkComboCount = 1
			this.lastStageTimeComputLinkComboCount = this.stageTime
			this.onLinkComboCountChange()
		},
		getCubeWithCubeId: function( id ){
			return this.cubes[id]
		},
		isValidCR: function( cr ){
			return this.physicBoard.isValidCR( cr )
		},
		// 指定位置設為阻擋物 //
		pack: function( cr ){
			this.physicBoard.setValue( cr, this.physicBoard.enumType.box )
		},
		// 指定位置設為空 //
		unpack: function( cr ){
			this.physicBoard.setValue( cr, this.physicBoard.enumType.empty )
		},
		findCubeWithRuntimeCR: function( cr ){
			for( var k in this.cubes )
			{	var cube = this.cubes[k]
				var dis = this.computDistanceCRSq( cube.cr, cr )
				if( dis == 0 )
					return cube;
			}
			return 0;
		},
		computDistanceCRSq: function( cr, cr2 ){
			return com.gameworks.cube.CR.prototype.distanceSq.call( cr, cr2 )
		},
		// 清除方塊。預設當方塊isStoreFloorCR為真時呼叫unpack。其它情況由開發者自行呼叫unpack //
		deleteCubeWithCube: function( cube ){
			this.unpack( cube.maybeCR )
			delete this.cubes[ cube.id ]
			this.onDeleteCube( cube )
			this.pool.put( cube )
		},
		deleteCubeWithRuntimeCR: function( cr ){
			var cube = this.findCubeWithRuntimeCR( cr )
			if( cube )
				this.deleteCubeWithCube( cube )
		},
		// 判斷方塊在盤面固定的位置是否合法 //
		isValidFloorCRWithCube: function( cube ){
			return cube.floorCR.c>=0 && cube.floorCR.c < this.w && cube.floorCR.r >=0 && cube.floorCR.r < this.h
		},
		// 取得全部方塊的屬性值。參照Cube.isStoreFloorCR。　// 
		storeAllCubePropertyWithPropertyName: function( mat, propertyName ){
			for( var r=0; r<this.h; ++r )
				for( var c=0; c<this.w; ++c )
					mat[r][c] = -1
			for( var k in this.cubes )
			{
				var cube = this.cubes[k]
				if( cube.isCanGetValueForComput() && this.isValidFloorCRWithCube( cube ) )
					mat[cube.floorCR.r][cube.floorCR.c] = cube[propertyName]
			}
		},
		// 像素座標轉為行列。處理負值狀況　//
		storeCRWithPosition: function( pos, cr ){
			if( pos[0] >= 0 )
				cr.c = Math.floor( pos[0]/ this.size )
			else
				cr.c = Math.ceil( pos[0]/ this.size ) -1
			if( pos[1] >= 0 )
				cr.r = Math.floor( pos[1]/ this.size )
			else
				cr.r = Math.ceil( pos[1]/ this.size ) -1
		},
		// 行列轉為像素座標 //
		storePositionWithCR: function( cr, pos ){
			pos[0] = (cr.c* this.size)+ this.size/2
			pos[1] = (cr.r* this.size)+ this.size/2
		},
		setDir: function( dir ){
			if( dir != this.dir && this.isCanDirChange() )
			{
				this.dir = dir
				this.onDirChange()
			}
		},
		isCanDirChange: function(){
			for( var k in this.cubes )
			{
				var cube = this.cubes[k]
				if( !cube.isCanDirChange() )
					return false
			}
			return true
		},
		// 新方塊計算群組 //
		// 呼叫時會把到目前呼叫pushToNewCubeGroup的方塊加入佇列，每次更新週期都會呼叫一次。用來計算什麼時候盤面需要計算連線 //
		beginNewCubeGroup: function(){
			for( var k in this.currentCubeGroup )
			{
				this.newCubeGroups.push( this.currentCubeGroup )
				this.currentCubeGroup = {}
				break
			}
		},
		// 參照beginNewCubeGroup。方塊下落到固定點時會自動呼叫這個方法 //
		pushToNewCubeGroup: function( cube ){
			this.currentCubeGroup[cube.id] = 1
		},
		// 指定位置建立新方塊。使用filter來修改方塊產生的位置 //
		newCube: function( cr, type, filter ){
			var cube = this.pool.get()
			if( !cube )
				throw new Error('[CubeStage][newCube]方塊物件池用完')
			cube.reset()
			cube.type = type
			cube.setDir( this.dir )
			cube.speedCubeDrop = this.speedCubeDrop
			cube.stage = this
			this.storePositionWithCR( cr, cube.pos )
			if( filter )
				filter( this, cube, cr )
			this.storeCRWithPosition( cube.pos, cube.cr )
			this.cubes[cube.id] = cube
			this.onNewCube( cube )
		},
		notifyNewCubeGroupsOnFloor: function(){
			for( var i = this.newCubeGroups.length-1; i>=0; --i )
			{
				var gs = this.newCubeGroups[i]
				var ok = true
				for( var k in gs )
				{
					var cube = this.cubes[k]
					if( cube && !cube.isStoreFloorCR() )
					{
						ok = false
						break
					}
				}
				if( ok )
				{
					this.onNewCubeGroupOnFloor( gs )
					this.newCubeGroups.splice( i, 1 )
				}
			}
		},
		
		update: function( elapsed ){
			this.onUpdate( elapsed )
			this.beginNewCubeGroup()
			this.iteratorCubes( function( cube ){
				cube.update( elapsed )
			})
			// 執行順序問題。update一定要在所有cube的update處理完才能一併通知 //
			for( var k in this.cubes )
			{
				var cube = this.cubes[k]
				this.onUpdateCube( cube, elapsed )
			}
			this.notifyNewCubeGroupsOnFloor();
			this.stageTime += elapsed
		},
		// 巡訪所有方塊。方塊會依目前設定的方向做排序。解決掉某些方向方塊位移差一次更新週期問題 //
		// 另一個說法是，正確的程式設計本來就會因演算法先後順序有差，這點本來就該考慮 //
		iteratorCubes: function( funcHandle ){
			var ary = []
			for( var k in this.cubes )
				ary.push( this.cubes[k] ) 
			var self = this
			ary.sort(function( left, right ){
				switch( self.dir ){
					case self.physicBoard.enumDir.left:
					{
						var v1 = left.pos[0]
						var v2 = right.pos[0]
						return v1 - v2
					}
					case self.physicBoard.enumDir.right:
					{
						var v1 = left.pos[0]
						var v2 = right.pos[0]
						return v2 - v1
					}
					case self.physicBoard.enumDir.up:
					{
						var v1 = left.pos[1]
						var v2 = right.pos[1]
						return v1 - v2
					}
					case self.physicBoard.enumDir.down:
					default:
					{
						var v1 = left.pos[1]
						var v2 = right.pos[1]
						return v2 - v1
					}
				}
			})
			for( var i in ary )
			{
				var cube = ary[i]
				funcHandle.call( this, cube )
			}
		}
	}
	pack.CubeStage = CubeStage

	
	
	
	function SimpleStageWrapper(){}
	SimpleStageWrapper.prototype = {
		init: function( param ){
			this.stage = param.stage
			this.fsm = new com.gameworks.util.SimpleFSM
			this.fsm.changeState( this.state.play )
			this.stop = false
			return this	
		},
		state: {
			play: 0,
			showCanNotLink: 1,
			frezzy: 2
		},
		setDir: function( enumDir ){
			this.stage.setDir( enumDir )
		},
		showCanNotLink: function(){
			this.fsm.changeState( this.state.showCanNotLink )
		},
		isCanSwapCube: function(){
			return this.fsm.state == this.state.play
		},
		swapCube: function( cr, cr2 ){
			if( this.isCanSwapCube() )
			{
				this.stage.swapWithRuntimeCR( cr, cr2 )
			}
		},
		isCanFrezzy: function(){
			return this.fsm.state == this.state.play
		},
		frezzy: function( duration ){
			if( this.isCanFrezzy() )
			{
				this.frezzyInfo = { duration: duration }
				this.fsm.changeState( this.state.frezzy )
			}
		},
		stop: function(){
			this.stop = true
		},
		play: function(){
			this.stop = false
		},
		update: function( elapsed ){
			if( this.stop )
				return
			switch( this.fsm.state ){
			case this.state.play:
				{
					this.stage.update( elapsed )
				}
				break
			case this.state.showCanNotLink:
				{
					/*if( this.fsm.timer> 2000 )
					{
						this.stage.deleteAllCubes()
						this.fsm.changeState( this.state.play )
					}*/
				}
				break
			case this.state.frezzy:
				{
					if( this.fsm.timer> this.frezzyInfo.duration )
					{
						this.fsm.changeState( this.state.play )
					}
				}
				break
			}
			this.fsm.update( elapsed )
		}
	}
	pack.SimpleStageWrapper = SimpleStageWrapper
	
})()