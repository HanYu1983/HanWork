//
//  SheepManager.m
//  testEmpty4
//
//  Created by Rachel on 12/1/13.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import "SheepManager.h"
#import "../gameworks/com.gameworks.opengl.h"

namespace sheep{
    
    SheepManager::SheepManager():env(0){}
    
    void SheepManager::createEntity( GLKVector2 pos, char group ){
        if( !env )
            throw "Error no have env!!";
        std::map<char, int> group2type;
        group2type[GROUP_RED] = Sheep::TYPE_SHEEP;
        group2type[GROUP_BLUE] = Sheep::TYPE_SHEEP;
        group2type[GROUP_DOG] = Sheep::TYPE_DOG;
        group2type[GROUP_PIG] = Sheep::TYPE_PIG;
        group2type[GROUP_HIPPO] = Sheep::TYPE_HIPPO;
        group2type[GROUP_BOX] = Sheep::TYPE_BOX;
        Sheep sheep = createControlEntity(group2type[group], env, pos, group );
        sheeps.push_back(sheep);
        observer->onCreateSheep(*this, sheep);
    }
    
    void SheepManager::createSheep( GLKVector2 pos, char group ){
        if( !env )
            throw "Error no have env!!";
        Sheep sheep = createControlEntity(Sheep::TYPE_SHEEP, env, pos, group );
        sheeps.push_back(sheep);
        observer->onCreateSheep(*this, sheep);
    }
    void SheepManager::createAntelope( GLKVector2 pos, char group ){
        if( !env )
            throw "Error no have env!!";
        Sheep sheep = createControlEntity(Sheep::TYPE_ANTELOPE, env, pos, group );
        sheeps.push_back(sheep);
        observer->onCreateAntelope(*this, sheep);
    }
    void SheepManager::update( float elapsed ){
        for( int i=0; i<sheeps.size(); ++i )
        {
            sheeps[i].update(elapsed);
            sheeps[i].checkTouchGoal();
            observer->onUpdateSheep(*this, sheeps[i]);
        }
        // 羊之中有類型為狗的。使羊逃離牠 //
        for( int i=0; i<sheeps.size(); ++i )
        {
            if( sheeps[i].type == Sheep::TYPE_DOG )
                dogChange(sheeps[i].pos.x, sheeps[i].pos.y);
        }
    }
    void SheepManager::mouseUp(int mid, int x, int y){
        for( int i=0; i<sheeps.size(); ++i )
        {
            Sheep &s = sheeps[i];
            s.unhold(mid, GLKVector2Make(x, y));
        }
    }
    void SheepManager::mouseDown(int mid, int x, int y){
        for( int i=0; i<sheeps.size(); ++i )
        {
            Sheep &s = sheeps[i];
            if( s.type == Sheep::TYPE_ANTELOPE )
            {
                if( s.mid == -1 )
                {
                    float dis = GLKVector2Distance(s.pos, GLKVector2Make(x, y));
                    if( dis < SHEEP_SIZE )
                        s.hold(mid);
                    break;
                }
            }
        } 
    }
    bool SheepManager::mouseChange( int x, int y ){
        bool moved = false;
        for( int i=0; i<sheeps.size(); ++i )
            moved |= sheeps[i].mouseChange(GLKVector2Make(x, y));
        return moved;
    }
    bool SheepManager::dogChange(int x, int y){
        bool moved = false;
        for( int i=0; i<sheeps.size(); ++i )
            if( sheeps[i].type == Sheep::TYPE_SHEEP ||
                sheeps[i].type == Sheep::TYPE_ANTELOPE ||
                sheeps[i].type == Sheep::TYPE_PIG )
            moved |= sheeps[i].dogChange(GLKVector2Make(x, y));
        return moved;
    }
    
    
    
    GameManager::GameManager():
        currlevel(0),
        currtime(0),
        rgbdata(0),
        grabSheep(0),
        observer(0)
    {
        sheepMgr.observer = this;
        sheepMgr.env = &env;
        env.sheeps = sheepMgr.getSheepsPtr();
        env.map = 0;
        mouse.x=mouse.y=0;
        fsm.changeStage(STATE_NONE, false);
        fsm.observer = this;
        env.ob = this;
    }
    GameManager::~GameManager(){
        if( env.map )
            delete env.map;
    }
    void GameManager::onPlaySound(NSString *name){
        observer->onPlaySound(*this, name);
    }
    void GameManager::onTimePlus(float time){
        currtime -= time;
        if( currtime<0 )
            time = 0;
    }
    void GameManager::onCreateSheep( SheepManager &mgr, Sheep sheep ){
        observer->onCreateSheep(*this, sheep );
    }
    void GameManager::onCreateAntelope( SheepManager &mgr, Sheep sheep ){
        observer->onCreateAntelope(*this, sheep );
    }
    void GameManager::onUpdateSheep( SheepManager &mgr, Sheep sheep ){
        observer->onUpdateSheep(*this, sheep);
    }
    void GameManager::destroy(){
        
    }
    void GameManager::loadResource( int level ){
        sheepMgr.clearAll();
        // 讀取資料地圖 //
        LevelDes levelDes = [SheepConfig single]->level_des[level];
        NSString *path = [NSString stringWithCString:levelDes.datamap
                                            encoding:NSASCIIStringEncoding];
        path = [[NSBundle mainBundle] pathForResource:path ofType:@"png"];
        UIImage *img = [[UIImage alloc] initWithContentsOfFile:path];
        unsigned char data[ levelDes.width* levelDes.height* 4];
        com::gameworks::opengl::getImageData(img.CGImage, levelDes.width, levelDes.height, data);
        // 資源釋放 //
        [img release];
        if( rgbdata )
            delete [] rgbdata;
        rgbdata = new unsigned int[ levelDes.width* levelDes.height ];
        com::gameworks::opengl::getRGBAData(data, levelDes.width, levelDes.height, rgbdata);
        // 建立地圖資訊 //
        SheepMapInfo *mapInfo = [SheepAlg getMapInfoWithMap:rgbdata 
                                                      width:levelDes.width
                                                     height:levelDes.height];
        // 資源釋放 //
        if( env.map )
        {
            delete env.map->getSheepMapInfoPtr();
            delete env.map;
        }
        env.map = new Map( mapInfo );
        // 建立羊 //
        sheepMgr.clearAll();
        map<char, vector<Pointi> > &sheeps = mapInfo->groups;
        float stagecoord[2];
        for( map<char, vector<Pointi> >::iterator it = sheeps.begin();
            it != sheeps.end();
            ++it )
        {
            char group = it->first;
            vector<Pointi> &ary = it->second;
            for( int i=0; i<ary.size(); ++i )
            {
                [SheepAlg getStageCoordsWithX:ary[i].x Y:ary[i].y result:stagecoord];
                sheepMgr.createEntity(GLKVector2Make(stagecoord[0], stagecoord[1]), group);
            }
        }
        // 建立羚羊 //
        sheeps = mapInfo->groupsAntelope;
        for( map<char, vector<Pointi> >::iterator it = sheeps.begin();
            it != sheeps.end();
            ++it )
        {
            char group = it->first;
            vector<Pointi> &ary = it->second;
            for( int i=0; i<ary.size(); ++i )
            {
                [SheepAlg getStageCoordsWithX:ary[i].x Y:ary[i].y result:stagecoord];
                sheepMgr.createAntelope(GLKVector2Make(stagecoord[0], stagecoord[1]), group);
            }
        }
        // 建立食物 //
        env.foods.clear();
        for( int i=0; i<mapInfo->foods.size(); ++i )
        {
            Pointi p = mapInfo->foods[i];
            [SheepAlg getStageCoordsWithX:p.x Y:p.y result:stagecoord];
            Food food(&env);
            food.pos = GLKVector2Make( stagecoord[0], stagecoord[1] );
            env.foods.push_back(food);
            observer->onCreateFood(*this, food);
        }
        // 建立狗 //
        env.dogs.clear();
        for( map<unsigned int, vector<Pointi> >::iterator it = mapInfo->dogs2.begin();
            it != mapInfo->dogs2.end();
            ++it )
        {
            unsigned int color = it->first;
            vector<Pointi> &ary = it->second;
            for( int i=0; i<ary.size(); ++i )
            {
                int type = 0;
                if( color == COLOR_ID_SNAKE )
                    type = Dog::TYPE_SNAKE;
                else if( color == COLOR_ID_BEAR )
                    type = Dog::TYPE_BEAR;
                else
                    type = Dog::TYPE_LOCK_DOG;
                Pointi p = ary[i];
                [SheepAlg getStageCoordsWithX:p.x Y:p.y result:stagecoord];
                Dog dog(&env);
                dog.type = type;
                dog.pos = GLKVector2Make( stagecoord[0], stagecoord[1] );
                dog.lockPos = dog.pos;
                dog.lastValidPos = dog.pos;
                env.dogs.push_back(dog);
                observer->onCreateDog(*this, dog);
            }
        }
        // 建立柵門 //
        env.doors.clear();
        map<char, DoorGroup> doorGroups = [SheepAlg createDoorGroupsWithDoorsInfo:mapInfo->doors doorBtnsInfo:mapInfo->doorButtons];
        for( map<char, DoorGroup>::iterator it = doorGroups.begin();
            it!= doorGroups.end();
            ++it )
        {
            DoorGroup dg = it->second;
            Door door(&env, dg.group, dg.p1, dg.p2 );
            door.closeDoor();
            env.doors.push_back(door);
            observer->onCreateDoor(*this, door );
        }
        env.doorButtons.clear();
        // 建立柵門按鈕 //
        vector<DoorJumpInfo> dbs = mapInfo->doorButtons;
        for( int i=0; i<dbs.size(); ++i )
        {
            DoorJumpInfo &db = dbs[i];
            DoorButton doorBtn( &env, db.group );
            [SheepAlg getStageCoordsWithX:db.pos.x Y:db.pos.y result:stagecoord];
            doorBtn.pos = GLKVector2Make(stagecoord[0], stagecoord[1]);
            env.doorButtons.push_back(doorBtn);
            observer->onCreateDoorButton(*this, doorBtn);
        }
        // 建立跳台 //
        env.jumpButtons.clear();
        map<char, JumpGroup> jumpGroups = [SheepAlg createJumpGroupWithJumpButtons:mapInfo->jumpButtons jumpPos:mapInfo->jumpPos];
        for( map<char, JumpGroup>::iterator it = jumpGroups.begin();
            it!= jumpGroups.end();
            ++it )
        {
            JumpGroup dg = it->second;
            [SheepAlg getStageCoordsWithX:dg.target.x 
                                        Y:dg.target.y 
                                   result:stagecoord];
            JumpButton jb(&env, GLKVector2Make(stagecoord[0], stagecoord[1]));
            [SheepAlg getStageCoordsWithX:dg.pos.x Y:dg.pos.y result:stagecoord];
            jb.pos = GLKVector2Make(stagecoord[0], stagecoord[1]);
            env.jumpButtons.push_back(jb);
            observer->onCreateJumpButton(*this, jb);
        }
        // 初使化來準備讀取關卡 //
        currlevel = level;
        fsm.changeStage(STATE_NONE, false);
        observer->onLoadResource(*this, level);
    }
    void GameManager::onExit(com::gameworks::tool::FSM *fsm){}
    void GameManager::onEnter(com::gameworks::tool::FSM *fsm){}
    void GameManager::onUpdate(FSM *fsm, float elapsed){
        switch( fsm->getState() ){
            case STATE_NONE:
            {
                // 原為手指移動第一隻羊時開始遊戲時間。改為直接開始 //
                /*
                currtime = 0;
                fsm->changeStage(STATE_GAME, false);
                observer->onStartGameTimer(*this);
                */
                // 偵測是否打開教學頁面 //
                LevelDes levelDes = [SheepConfig single]->level_des[ currlevel ];
                if( levelDes.tutorialId!= -1 )
                    observer->onShowTutorial(*this, levelDes.tutorialId);
                // 以下的程式碼為手指移動第一隻羊時開始遊戲時間 //
                bool moved = false;
                for( map<int, Pointi>::iterator it = ms.begin();
                    it!= ms.end();
                    ++it )
                {
                    Pointi m = it->second;
                    moved |= sheepMgr.mouseChange(m.x, m.y);
                }
                if( moved )
                {
                    currtime = 0;
                    fsm->changeStage(STATE_GAME, false);
                    observer->onStartGameTimer(*this);
                }
                sheepMgr.update(elapsed);
            }
                break;
            case STATE_GAME:
            {
                // 更新狗，在更新手指之前。讓手指的影響力比狗優先 //
                for( int i=0; i<env.dogs.size(); ++i )
                {
                    Dog &dog = env.dogs[i];
                    dog.update(elapsed);
                    if( dog.getFSMRef().getState() == Dog::STATE_ATTACK )
                        sheepMgr.dogChange(dog.pos.x, dog.pos.y);
                    observer->onUpdateDog(*this, dog);
                }
                // 更新手指 //
                for( map<int, Pointi>::iterator it = ms.begin();
                    it!= ms.end();
                    ++it )
                {
                    Pointi m = it->second;
                    sheepMgr.mouseChange(m.x, m.y);
                }
                // 更新羊 //
                sheepMgr.update(elapsed);
                // 觸發手指離開螢幕 //
                for( map<int, Pointi>::iterator it = msDown.begin();
                    it != msDown.end();
                    ++it )
                {
                    int mid = it->first;
                    Pointi pos = it->second;
                    sheepMgr.mouseUp(mid, pos.x, pos.y);
                }
                // 觸發手指觸碰螢幕 //
                for( map<int, Pointi>::iterator it = msUp.begin();
                    it != msUp.end();
                    ++it )
                {
                    int mid = it->first;
                    Pointi pos = it->second;
                    sheepMgr.mouseDown(mid, pos.x, pos.y);
                }
                // 更新食物 //
                for( int i=env.foods.size()-1; i>=0; --i )
                {
                    Food &food = env.foods[i];
                    if( food.removed )
                        continue;
                    if( food.remove )
                    {
                        food.removed = true;
                        observer->onRemoveFood(*this, food);
                    }
                }
                // 更新柵門 //
                for( int i=0; i<env.doors.size(); ++i )
                {
                    Door &door = env.doors[i];
                    door.update(elapsed);
                    observer->onUpdateDoor(*this, door);
                }
                // 更新柵門按鈕 //
                for( int i=0; i<env.doorButtons.size(); ++i )
                {
                    DoorButton &db = env.doorButtons[i];
                    db.update(elapsed);
                    observer->onUpdateDoorButton(*this, db);
                }
                // 更新跳台 //
                for( int i=0; i<env.jumpButtons.size(); ++i )
                {
                    JumpButton &db = env.jumpButtons[i];
                    db.update(elapsed);
                    observer->onUpdateJumpButton(*this, db);
                }
                // 偵測是否過關或失敗 //
                LevelDes levelDes = [SheepConfig single]->level_des[ currlevel ];
                if( currtime > levelDes.maxtime+ DEAD_TIME ||
                    env.map->isGoal(levelDes.wincount, *env.sheeps) )
                    observer->onLevelPass(*this, currlevel, currtime);
                observer->onUpdateGameTimer(*this, currtime);
                // 偵測是否打開教學頁面。在每關開始的一秒後 //
                /*
                if( currtime<=0 && currtime+elapsed > 0 )
                {
                    //NSLog(@"!!! %d", levelDes.tutorialId );
                    if( levelDes.tutorialId!= -1 )
                        observer->onShowTutorial(*this, levelDes.tutorialId);
                }
                */
                // 更新遊戲時間 //
                currtime += elapsed;
                msDown.clear();
                msUp.clear();
            }
                break;
        }
    }
    void GameManager::update( float elapsed ){
        fsm.update(elapsed);
    }
    void GameManager::mouseDown(int mid, int x, int y){
        ms[mid].x = x;
        ms[mid].y = y;
        msDown[mid].x = x;
        msDown[mid].y = y;
    }
    void GameManager::mouseUp(int mid){
        if( ms.find(mid) != ms.end() )
        {
            msUp[mid] = ms[mid];
            ms.erase(ms.find(mid));
        }
    }
    void GameManager::mouseChange( int mid, int x, int y ){
        mouse.x = x; mouse.y = y;
        ms[mid].x = x;
        ms[mid].y = y;
    }
    void GameManager::mouseCancelled(){
        ms.clear();
    }
    void GameManager::levelBreak(){
        currlevel = 0;
        sheepMgr.clearAll();
    }
    void GameManager::grabDown(int x, int y){
        grabSheep = env.getCloseSheep(GLKVector2Make(x, y), GRAB_DISTANCE);
        grabSheep->grab();
    }
    void GameManager::grabMove(int x, int y){
        if( grabSheep )
            grabSheep->shouldMoveTo(GLKVector2Make(x, y));
    }
    void GameManager::grabUp(){
        if( grabSheep )
        {
            grabSheep->ungrab();
            grabSheep = 0;
        }
    }
    bool GameManager::testGrabItem(int x, int y){
        vector<Sheep> &sheeps = *env.sheeps;
        LevelDes levelDes = [SheepConfig single]->level_des[ currlevel ];
        int mapcoord[2];
        for( int i=0; i<sheeps.size(); ++i )
        {
            Sheep &sheep = sheeps[i];
            GLKVector2 d = GLKVector2Subtract(sheep.pos, GLKVector2Make(x, y));
            float disSq = GLKVector2DotProduct(d, d);
            if( disSq < GRAB_DISTANCE* GRAB_DISTANCE )
            {
                [SheepAlg getDataMapCoordsWithX:sheep.pos.x Y:sheep.pos.y result:mapcoord];
                int rid = env.map->getCloseWinRegionIdAndMark(sheep.group, mapcoord[0], mapcoord[1], levelDes.wincount);
                if( rid == -1 )
                    break;
                RegionObject *ro = env.map->getRegionObject(rid);
                if( !ro )
                {
                    NSLog(@"imposible at SheepManager.mm");
                    throw "";
                }
                float stagecoord[2];
                [SheepAlg getStageCoordsWithX:ro->cx Y:ro->cy result:stagecoord];
                sheep.forceTargetPos(GLKVector2Make(stagecoord[0], stagecoord[1]));
                return true;
            }
        }
        return false;
    }
}