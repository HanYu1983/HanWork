com.gameworks.cube.stage.ext = com.gameworks.cube.stage.ext || {};
com.gameworks.cube.stage.ext.swapbomb = com.gameworks.cube.stage.ext.swapbomb || {};

(function(){
	var pack = com.gameworks.cube.stage.ext.swapbomb
	var copy = com.gameworks.copy
	var Cube = com.gameworks.cube.stage.Cube
	var CubeStage = com.gameworks.cube.stage.CubeStage
	var vec3 = com.gameworks.math.vec3
	
	function SwapBombCube(){}
	SwapBombCube.prototype = copy( new Cube, {
		swapState: {
			swapTo: -4,
			swapWait: -5,
			swapBack: -6,
			swapBackWhenTo: -7,
			bomb: -8
		},
		init: function( param ){
			Cube.prototype.init.call( this, param )
			this.swapItem = 0;
			this.bombInfo = {
				available: false,
				duration: 0	
			};
			this.isLock = false;
			return this
		},
        reset: function(){
        	Cube.prototype.reset.call( this )
        	this.swapItem = 0;
			this.bombInfo.available = false
			this.isLock = false;
        },
        swapTo: function(swapItem){
            switch (this.fsm.state) {
                case this.state.floor:
                {
                    if( this.swapItem )
                    {
                        throw new Error("[com.gameworks.cube.stage.ext.swapbomb.SwapbombCube][swapTo]swapItem在這時不可能存在");
                    }
                    this.swapItem = swapItem;
                    this.maybeCR.init( swapItem.getTargetFloorCR(this) );
                    this.fsm.changeState(this.swapState.swapTo);
                }
                break;
            }
        },
        removeFromStage: function(){
            this.bomb( 0 );
        },
        bomb: function( duration ){
        	if( typeof duration != 'number')
        		duration = 0
            if( this.isCanBomb() )
            {
                this.defaultHandleBombInfo( duration );
                this.fsm.changeState(this.swapState.bomb);
                this.stage.onBombCube(this);
                return true;
            }
        	return false
        },
        defaultHandleBombInfo: function( duration ){
            if( this.fsm.State == this.swapState.swapWait )
            {
                throw new Error("[com.gameworks.cube.stage.ext.swapbomb.SwapBombCube][defaultHandleBombInfo]爆炸時方塊不可能處於this.swapState.swapWait狀態");
            }
            this.bombInfo.available = true;
            this.bombInfo.duration = duration;
            if( this.swapItem )
            {
            	this.swapItem.notifyBomb(this);
            	this.swapItem.applySwapEnd(this);
            	this.swapItem = 0;
            }
        },
        isCanNotSwap: function(){ 
        	return this.isLock;
        },
        notifyEvent: function( sender, msg){
            switch(msg){
                case "swapTargetBomb":
                    {
                        //nothing to do
                    }
                    break;
                case "canNotChange":
                    {
                        if( this.fsm.state == this.swapState.swapTo )
                        {
                            this.maybeCR.init( swapItem.getOriginFloorCR(this) );
                            this.fsm.changeState(this.swapState.swapBackWhenTo);
                        }
                        else
                            throw new Error("[com.gameworks.cube.stage.ext.swapbomb.SwapBombCube][notifyEvent]收到canNotChange時，狀態必定為this.swapState.swapTo");
                    }
                    break;
                case "swapLose":
                    {
                        if( this.fsm.state == this.swapState.swapWait )
                        {
                            this.maybeCR.init( this.swapItem.getOriginFloorCR(this) );
                            this.fsm.changeState(this.swapState.swapBack);
                        }
                        else
                        {
                            throw new Error("[com.gameworks.cube.stage.ext.swapbomb.SwapBombCube][notifyEvent]收到swapLose時，狀態必定為this.swapState.swapWait");
                        }
                    }
                    break;
                case "swapOk":
                    {
                        if( this.fsm.state == this.swapState.swapWait )
                        {
                            this.swapItem.applySwapEnd(this);
                            this.swapItem=0;
                            this.fsm.changeState(this.state.floor);
                        }
                        else
                            throw new Error("[com.gameworks.cube.stage.ext.swapbomb.SwapBombCube][notifyEvent]收到swapOk時，狀態必定為this.swapState.swapWait");
                    }
                    break;
            }
        },
    
        handleSwapState: function( elapsed){
            switch (this.fsm.state) {
                case this.swapState.bomb:
                {
                    if( this.bombInfo.available )
                    {
                        if( this.fsm.timer> this.bombInfo.duration )
                            this.stage.deleteCubeWithCube(this);
                    }
                    else
                    {
                        throw new Error("com.gameworks.cube.stage.ext.swapbomb.SwapBombCube][handleSwapState]");
                    }
                }
                    break;
                case this.swapState.swapTo:
                {
                    if( this.isCanNotSwap() )
                    {
                        this.fsm.changeState(this.swapState.swapBack);
                        this.swapItem.applySwap(this, false);
                    }
                    else
                    {
                        var targetPos = vec3.create()
                        this.stage.storePositionWithCR(this.swapItem.getTargetFloorCR(this), targetPos);
                        var toTarget = vec3.create()
                        vec3.subtract( targetPos, this.pos, toTarget )
                        var len = vec3.length( toTarget )
                        var moveDis = this.computMoveDistance( elapsed )
                        if( len <= moveDis )
                        {
                            vec3.set( targetPos, this.pos )
                            this.stage.storeCRWithPosition(this.pos, this.cr);
                            this.applyFloorCR2CR();
                            if( this.swapItem.isTargetBomb(this) )
                            {
                            	this.swapItem.applySwapEnd(this);
                            	this.swapItem = 0;
                                this.fsm.changeState(this.state.floor);
                            }
                            else
                            {
                                this.fsm.changeState(this.swapState.swapWait);
                                // 以下這行為立刻將狀態改為this.state.floor或this.swapState.swapBack //
                                // 所以在遊戲的更新週期中cube的狀態不可能是this.swapState.swapWait //
                                this.stage.pushToNewCubeGroup(this);
                                this.swapItem.applySwap( this, true );
                            }
                        }
                        else
                        {
                        	toTarget = vec3.scale( toTarget, moveDis/ len )
                        	//toTarget = vec3.scale( toTarget, elapsed )
    						vec3.add( this.pos, toTarget, this.pos )
                        }
                    }
                }
                    break;
                case this.swapState.swapBackWhenTo:
                case this.swapState.swapBack:
                {
                	var targetPos = vec3.create()
                    this.stage.storePositionWithCR(this.swapItem.getOriginFloorCR(this), targetPos);
                	var toTarget = vec3.create()
                    vec3.subtract( targetPos, this.pos, toTarget )
                    var len = vec3.length( toTarget )
                    var moveDis = this.computMoveDistance( elapsed )
                    if( len <= moveDis )
                    {
                        vec3.set( targetPos, this.pos )
                        this.stage.storeCRWithPosition(this.pos, this.cr);
                        this.applyFloorCR2CR();
                        this.stage.pushToNewCubeGroup(this);
                        this.fsm.changeState(this.state.floor);
                        this.swapItem.applySwapEnd(this);
                        this.swapItem = 0;
                    }
                    else
                    {
                    	toTarget = vec3.scale( toTarget, moveDis/ len )
                    	//toTarget = vec3.scale( toTarget, elapsed )
						vec3.add( this.pos, toTarget, this.pos )
                    }
                }
                    break;
                default:
                {
                    this.handleDefaultState(elapsed);
                }
                    break;
            }
        },
        update: function( elapsed ){
            this.handleSwapState(elapsed);
            if( this.isSwapNow() )
                this.fsm.update(elapsed);
            else
                this.handleDefaultUpdate(elapsed);
        },
        isSwapNow: function(){
            switch (this.fsm.State) {
                case this.swapState.swapBack:
                case this.swapState.swapBackWhenTo:
                case this.swapState.swapTo:
                case this.swapState.swapWait:
                    return true;
                default:
                    return false;
            }
        },
        isCanDirChange: function(){
            switch( this.fsm.State ){
                case this.swapState.swapTo:
                case this.swapState.swapWait:
                case this.swapState.swapBack:
                case this.swapState.swapBackWhenTo:
                case this.swapState.bomb:
                    return true;
            }
            return Cube.prototype.isCanDirChange.call(this);
        },
        // 覆寫。交換到定位的方塊必須取值 //
        isStoreFloorCR:function(){
            return Cube.prototype.isStoreFloorCR.call(this) || this.fsm.state == this.swapState.swapWait;
        },
        isCanBomb:function(){ 
            return this.fsm.State != this.swapState.bomb; 
        }
    })
    pack.SwapBombCube = SwapBombCube
    
	// 交換方塊仲介者 //
	function SwapItem(){}
	SwapItem.prototype = {
		init: function( param ){
			this.cube1 = param.cube1
			this.cube2 = param.cube2
			this.stage = param.stage
			this.targetCR1 = { c: this.cube1.floorCR.c, r: this.cube1.floorCR.r }
			this.targetCR2 = { c: this.cube2.floorCR.c, r: this.cube2.floorCR.r }
			this.c1ok = false
			this.c2ok = false
			this.c1d = false
			this.c2d = false
			this.bomb = [ false, false ]
			return this
		},
		isTargetBomb: function( cube ){
            return cube == this.cube1 ? this.bomb[1] : this.bomb[0];
        },
		// 取得自己方塊交換前的位置 //
		getOriginFloorCR: function( cube ){
			if( cube == this.cube1 )
				return this.targetCR1
			return this.targetCR2
		},
		// 取得交換對象方塊的位置 //
		getTargetFloorCR: function( cube ){
			if( cube == this.cube1 )
				return this.targetCR2
			return this.targetCR1
		},
		// 通知交換對象方塊自己爆了 //
		notifyBomb: function( cube ){
			// 其中一個爆破的話，就不通知了，因為通知的對象一定不存在了 //
            if( this.bomb[0] || this.bomb[1] )
                return;
			if( this.cube1 == cube )
			{
				this.bomb[0] = true;
				this.cube2.notifyEvent( this, 'swapTargetBomb' )
			}
			else
			{
				this.bomb[1] = true;
				this.cube1.notifyEvent( this, 'swapTargetBomb' )
			}
		},
		// 通知交換對象自己不能被交換 //
		notifyCanNotChange: function( cube ){
			if( this.cube1 == cube )
				this.cube2.notifyEvent( this, 'canNotChange' )
			else
				this.cube1.notifyEvent( this, 'canNotChange' )
		},
		// 通知交換對象自己已到達定位或是無法到達定位 //
		// 若其中一方無法到達定位，立刻通知雙方這次交換無法執行[canNotChange] //
		// 若這次交換沒有造成連線，則會通知雙方這次交換失敗[swapLose]。參照CubeStage.isCanLink //
		// 若這次交換都到了定位，則會通知雙方這次交換成功[swapOk] //
		applySwap: function( cube, value ){
			if( !value )
			{
				this.notifyCanNotChange( cube )
				return
			}
			if( cube == this.cube1 )
				this.c1ok = value
			else
				this.c2ok = value
			if( this.c1ok && this.c2ok )
			{
				if( !this.stage.isCanLink( this.cube1, this.cube2 ) )
				{
					this.cube1.notifyEvent( this, 'swapLose' )
					this.cube2.notifyEvent( this, 'swapLose' )
				}
				else
				{
					this.cube1.notifyEvent( this, 'swapOk' )
					this.cube2.notifyEvent( this, 'swapOk' )
				}
			}
		},
		// 雙方都結束了仲介者的需求。c可以依此通知來釋放記憶體 //
		applySwapEnd: function( cube ){
			if( this.cube1 == cube )
				this.c1d = true
			else
				this.c2d = true
			if( this.c1d && this.c2d )
			{
				
			}
		}
	}
	
	
	// 可交換可爆破的方塊盤 //
	function SwapBombCubeStage(){}
	SwapBombCubeStage.prototype = copy( new CubeStage, {
		init: function( param ){
			CubeStage.prototype.init.call( this, param )
			this.bombDuration = param.bombDuration
			return this
		},
		onBombCube: function( cube ){
			if( this.callback )
				this.callback.onBombCube( this, cube )
		},
		createDefaultCubeFactory: function(){
			return function(i){
				var cube = new SwapBombCube().init({
					visible: false,
					id: i
				})
				return cube
			}
		},
		// 交換方塊後是否能造成連線。若不行的話，方塊會換回來 //
		isCanLink: function( cube1, cube2 ){
			if( this.callback )
				return this.callback.onCheckCanLinkOrNot( this, cube1, cube2 )
			return true
		},
		// 交換指定的方塊。回傳是否交換到方塊 //
		swapWithCube: function( c1, c2 ){
			if( !c1.isStoreFloorCR() || !c2.isStoreFloorCR() )
				return false
			var swapItem = new SwapItem().init({ stage: this, cube1: c1, cube2: c2 })
			c1.swapTo( swapItem )
			c2.swapTo( swapItem )
			return true
		},
		// 交換指定位置的方塊，那個位置上不一定有方塊。回傳是否交換到方塊 //
		swapWithRuntimeCR: function( cr, cr2 ){
			var c1 = this.findCubeWithRuntimeCR( cr )
			var c2 = this.findCubeWithRuntimeCR( cr2 )
			if( c1 == c2 )
				return false
			if( c1 && c2 )
				return this.swapWithCube( c1, c2 )
			return false
		}
	})
	pack.SwapBombCubeStage = SwapBombCubeStage
	
	
	function SwapBombCubeStageCallback(){}
	SwapBombCubeStageCallback.prototype = copy( new com.gameworks.cube.alg.SimpleStageCallback, {
        onBombCube: function(stage,cube) {
        	
        },
        onCheckCanLinkOrNot: function( stage, cube1, cube2){
        	stage.storeAllCubePropertyWithPropertyName( this.types, 'type')
            var cubes= [ cube1, cube2 ];
            for( var i=0; i<cubes.length; ++i )
            {
            	var cube = cubes[i]
                var sts = com.gameworks.cube.alg.getSameType(this.types, cube.cr, 1);
                if( sts.length >= this.linkCount )
                    return true;
                sts = com.gameworks.cube.alg.getSameType(this.types, cube.cr, 2);
                if( sts.length >= this.linkCount )
                    return true;
            }
            return false;
        }
    })
    pack.SwapBombCubeStageCallback = SwapBombCubeStageCallback
	
})()