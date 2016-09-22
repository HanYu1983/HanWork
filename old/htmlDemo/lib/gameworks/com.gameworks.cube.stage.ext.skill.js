com.gameworks.cube.stage.ext = com.gameworks.cube.stage.ext || {};
com.gameworks.cube.stage.ext.skill = com.gameworks.cube.stage.ext.skill || {};

(function(){
	var pack = com.gameworks.cube.stage.ext.skill
	var copy = com.gameworks.copy
	var console = com.gameworks.debug.console
	
	var Cube = com.gameworks.cube.stage.ext.swapbomb.SwapBombCube
	function SkillCube(){}
	SkillCube.prototype = copy( new Cube, {
		init: function( param ){
			Cube.prototype.init.call( this, param )
			this.combineCount = 0
			return this
		},
		reset: function(){
			Cube.prototype.reset.call( this )
			this.combineCount = 0
		},
        combine: function(cubes){
            this.combineCount = cubes.length
            this.stage.onCombine(this, cubes);
        },
        triggerSkill: function(){
            this.stage.onTriggerSkill(this);
        }
    })
    pack.SkillCube = SkillCube
	// 技能方塊盤 //
	function SkillCubeStage(){}
	SkillCubeStage.prototype = copy( new com.gameworks.cube.stage.ext.swapbomb.SwapBombCubeStage, {
		createDefaultCubeFactory: function(){
			return function(i){
				var cube = new SkillCube().init({
					visible: false,
					id: i
				})
				return cube
			}
		},
		onTriggerSkill: function( cube ){
			if( this.callback )
				this.callback.onTriggerSkill( this, cube )
		},
        onCombine: function(cube, cubes){
            if (this.callback)
            	this.callback.onCombine(this, cube, cubes);
        }
	})
	pack.SkillCubeStage = SkillCubeStage

	// 處理方塊結合，招式觸發的處理者 //
	function SkillCubeStageCallback(){}
	SkillCubeStageCallback.prototype = copy( new com.gameworks.cube.stage.ext.swapbomb.SwapBombCubeStageCallback, {
		onLink: function( stage, cube, cubes){
            if (cubes.length >= this.linkCount)
            {
                for (var i = 0, len = cubes.length; i < len; ++i)
                {
                    var bomb = cubes[i];
                    if (bomb == cube)
                    {
                        if (bomb.combineCount > 0)
                            bomb.triggerSkill();
                        if (bomb.isCanBomb())
                        {
                            bomb.combine(cubes);
                        }
                    }
                    else
                    {
                        if (bomb.combineCount > 0)
                            bomb.triggerSkill();
                        bomb.removeFromStage();
                    }
                }
            }
            else
            	com.gameworks.cube.stage.ext.swapbomb.SwapBombCubeStageCallback.prototype.onLink(stage, cube, cubes);
        },
        onCombine: function( stage, cube, cubes ){
        
        },
        onTriggerSkill: function( stage, cube){

        }
	})
	pack.SkillCubeStageCallback = SkillCubeStageCallback
	
})()