//
//  SheepEntity.m
//  testEmpty4
//
//  Created by Rachel on 12/1/10.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import "SheepEntity.h"


namespace sheep{
    
    void ItemEffect::addItem( Item item ){
        item.timer = 0;
        items.push_back(item);
    }
    int ItemEffect::itemCountWithType(int type)const{
        int total = 0;
        for( int i=0; i<items.size(); ++i )
            if( items[i].type == type )
                ++total;
        return total;
    }
    bool ItemEffect::hasItemWithType(int type)const{
        return itemCountWithType(type)>0;
    }
    void ItemEffect::update(float elapsed){
        for( int i=items.size()-1; i>=0; --i )
        {
            Item &item = items[i];
            item.timer += elapsed;
            if( item.timer >= item.duration )
                items.erase(items.begin()+i);
        }
    }
    
    ItemEffect::Item itemNone = {
        -1,0,0
    };
    
    ItemEffect::Item itemSpeedUp = {
        Food::TYPE_SPEED_UP, 10.0f, 0.0f
    };
    
    ItemEffect::Item itemNotScareDog = {
        Food::TYPE_NOT_SCARE_DOG, 10.0f, 0.0f
    };
    
    ItemEffect::Item itemNotScareWater = {
        Food::TYPE_NOT_SCARE_WATER, 10.0f, 0.0f
    };
    
    ItemEffect::Item itemNotScareSlow = {
        Food::TYPE_NOT_SCARE_SLOW, 10.0f, 0.0f
    };
    
    ItemEffect::Item itemNotScareRiver = {
        Food::TYPE_NOT_SCARE_RIVER, 10.0f, 0.0f
    };
    
    ItemEffect::Item itemNotScareIce = {
        Food::TYPE_NOT_SCARE_ICE, 10.0f, 0.0f
    };
    
    ItemEffect::Item itemNotScareBear = {
        Food::TYPE_NOT_SCARE_BEAR, 10.0f, 0.0f
    };
    
    ItemEffect::Item itemNotScareSnake = {
        Food::TYPE_NOT_SCARE_SNAKE, 10.0f, 0.0f
    };
    
    ItemEffect::Item Food::getItemWithType(int type){
        if( type == Food::TYPE_SPEED_UP )
            return itemSpeedUp;
        if( type == Food::TYPE_NOT_SCARE_BEAR )
            return itemNotScareBear;
        if( type == Food::TYPE_NOT_SCARE_DOG )
            return itemNotScareDog;
        if( type == Food::TYPE_NOT_SCARE_ICE )
            return itemNotScareIce;
        if( type == Food::TYPE_NOT_SCARE_RIVER )
            return itemNotScareRiver;
        if( type == Food::TYPE_NOT_SCARE_SLOW )
            return itemNotScareSlow;
        if( type == Food::TYPE_NOT_SCARE_SNAKE )
            return itemNotScareSnake;
        if( type == Food::TYPE_NOT_SCARE_WATER )
            return itemNotScareWater;
        return itemNone;
    }
    
    int getSidePointLine( float x, float y, float lx, float ly, float lx2, float ly2, float width ){
        float 
            dx = x-lx,
            dy = y-ly,
            ldx = lx2 - lx,
            ldy = ly2 - ly,
            lineLen = sqrtf( ldx* ldx+ ldy* ldy ),
            norLineX = ldx/ lineLen,
            norLineY = ldy/ lineLen,
            dot = dx* norLineX+ dy* norLineY;
        if( dot < 0 || dot > lineLen )
            return -1;
        float
            nx = -(ly2 - ly),
            ny = lx2 - lx,
            dot2 = dx* nx+ dy* ny;
        if( dot2 < 0 )
            return -1;
        if( fabs(dot2) > width* width )
            return -1;
        return 1;
    }
    
    Sheep *Env::getCloseSheep( GLKVector2 pos, int distance){
        Sheep *ret = 0;
        int min = 99999999;
        int distanceSq = distance* distance;
        for( int i=0; i<sheeps->size(); ++i )
        {
            Sheep &sheep = (*sheeps)[i];
            GLKVector2 d = GLKVector2Subtract(sheep.pos, pos);
            int disSq = GLKVector2DotProduct(d, d);
            if( distanceSq > 0 && disSq > distanceSq )
                continue;
            if( disSq < min )
            {
                min = disSq;
                ret = &sheep;
            }
        }
        return ret;
    }
    Door *Env::findDoor( char group ){   
        for( int i=0; i<doors.size(); ++i )
        {
            if( doors[i].getGroup() == group )
                return &doors[i];
        }
        return 0;
    }
    
    int idcounter = 0;
    Entity::Entity( Env *env ):
        env(env),
        oid(idcounter++),
        pos(GLKVector2Make(0, 0)),
        groundColor(0),
        timer(0),
        remove(false)
    {}
    
    Door::Door( Env *env, char group, Pointi p1, Pointi p2 ):
        Entity( env ),
        p1(p1),
        p2(p2),
        group(group)
    {
        fsm.changeStage(STATE_CLOSE, false);
        float sc[2], sc2[2];
        [SheepAlg getStageCoordsWithX:p1.x Y:p1.y result:sc];
        [SheepAlg getStageCoordsWithX:p2.x Y:p2.y result:sc2];
        float 
            sdx = sc2[0]-sc[0],
            sdy = sc2[1]-sc[1];
        length = sqrtf(sdx* sdx+ sdy* sdy);
        this->line = [[SheepAlg createCellLineWithX1:p1.x y1:p1.y x2:p2.x y2:p2.y] retain];
        #ifndef USE_SIMPLE_DOOR
        {
            int 
                dx = p2.x- p1.x,
                dy = p2.y - p1.y,
                nx = -dy,
                ny = dx,
                len = sqrtf(dx* dx+ dy* dy);
            int
                nnx = nx* 10/ len,
                nny = ny* 10/ len;
            p4.x = p1.x+ nnx;
            p4.y = p1.y+ nny;
            p3.x = p2.x+ nnx;
            p3.y = p2.y+ nny;
            this->line2 = [[SheepAlg createCellLineWithX1:p2.x y1:p2.y x2:p3.x y2:p3.y] retain];
            this->line3 = [[SheepAlg createCellLineWithX1:p3.x y1:p3.y x2:p4.x y2:p4.y] retain];
            this->line4 = [[SheepAlg createCellLineWithX1:p4.x y1:p4.y x2:p1.x y2:p1.y] retain];
        }
        #endif
    }
    
    Door::Door( const Door &rhs ):
        Entity( rhs ),
        p1( rhs.p1 ),
        p2( rhs.p2 ),
        p3( rhs.p3 ),
        p4( rhs.p4 ),
        group( rhs.group ),
        line( [rhs.line retain] ),
#ifndef USE_SIMPLE_DOOR
        line2( [rhs.line2 retain] ),
        line3( [rhs.line3 retain] ),
        line4( [rhs.line4 retain] ),
#endif
        length( rhs.length ),
        fsm( rhs.fsm )
    {
        fsm.observer = this;
    }
    
    Door::~Door(){
        [line release];
#ifndef USE_SIMPLE_DOOR
        [line2 release];
        [line3 release];
        [line4 release];
#endif
    }
    bool Door::hasSheep(){
        #ifndef USE_SIMPLE_DOOR
        {
            vector<Sheep> &ss = *env->sheeps;
            int mc[2];
            for( int i=0; i<ss.size(); ++i )
            {
                Sheep &s = ss[i];
                [SheepAlg getDataMapCoordsWithX:s.pos.x Y:s.pos.y result:mc];
                int r1 = getSidePointLine(mc[0], mc[1], p1.x, p1.y, p2.x, p2.y, 10);
                int r2 = getSidePointLine(mc[0], mc[1], p2.x, p2.y, p3.x, p3.y, 10);
                if( r1 != r2 )
                    return true;
                int r3 = getSidePointLine(mc[0], mc[1], p3.x, p3.y, p4.x, p4.y, 10);
                if( r2 != r3 )
                    return true;
                int r4 = getSidePointLine(mc[0], mc[1], p4.x, p4.y, p1.x, p1.y, 10);
                if( r4 != r3 )
                    return true;
            }
            return false;
        }
        #else
        {
            vector<Sheep> &ss = *env->sheeps;
            int mc[2];
            for( int i=0; i<ss.size(); ++i )
            {
                Sheep &s = ss[i];
                [SheepAlg getDataMapCoordsWithX:s.pos.x Y:s.pos.y result:mc];
                int r1 = getSidePointLine(mc[0], mc[1], p1.x, p1.y, p2.x, p2.y, 2);
                if( r1 == 1 )
                    return true;
            }
            return false;
        }
        #endif
    }
    void Door::closeDoor(){
        [SheepAlg putLineDataToMapWithMap:env->map->getDataMap() 
                                    width:env->map->getDataMapWidth() 
                                   height:env->map->getDataMapHeight() 
                                 cellLine:line
                                    value:COLOR_ID_STOP_REGION];
        #ifndef USE_SIMPLE_DOOR
        [SheepAlg putLineDataToMapWithMap:env->map->getDataMap() 
                                    width:env->map->getDataMapWidth() 
                                   height:env->map->getDataMapHeight() 
                                 cellLine:line2
                                    value:COLOR_ID_STOP_REGION];
        [SheepAlg putLineDataToMapWithMap:env->map->getDataMap() 
                                    width:env->map->getDataMapWidth() 
                                   height:env->map->getDataMapHeight() 
                                 cellLine:line3
                                    value:COLOR_ID_STOP_REGION];
        [SheepAlg putLineDataToMapWithMap:env->map->getDataMap() 
                                    width:env->map->getDataMapWidth() 
                                   height:env->map->getDataMapHeight() 
                                 cellLine:line4
                                    value:COLOR_ID_STOP_REGION];
        #endif
        fsm.changeStage(STATE_CLOSE, false);
    }
    void Door::openDoor(){
        env->playSound(@"doorOpen");
        [SheepAlg putLineDataToMapWithMap:env->map->getDataMap() 
                                    width:env->map->getDataMapWidth() 
                                   height:env->map->getDataMapHeight() 
                                 cellLine:line
                                    value:1];
        #ifndef USE_SIMPLE_DOOR
        [SheepAlg putLineDataToMapWithMap:env->map->getDataMap() 
                                    width:env->map->getDataMapWidth() 
                                   height:env->map->getDataMapHeight() 
                                 cellLine:line2
                                    value:1];
        [SheepAlg putLineDataToMapWithMap:env->map->getDataMap() 
                                    width:env->map->getDataMapWidth() 
                                   height:env->map->getDataMapHeight() 
                                 cellLine:line3
                                    value:1];
        [SheepAlg putLineDataToMapWithMap:env->map->getDataMap() 
                                    width:env->map->getDataMapWidth() 
                                   height:env->map->getDataMapHeight() 
                                 cellLine:line4
                                    value:1];
        #endif
        fsm.changeStage(STATE_OPEN, false);
    }
    void Door::update(float elapsed){
        fsm.update(elapsed);
        updateTimer(elapsed);
    }
    void Door::onEnter(FSM *fsm){
        
    }
    void Door::onExit(FSM *fsm){
        
    }
    void Door::onUpdate(FSM *fsm, float elapsed){
        
    }
    
    
    DoorButton::DoorButton( Env *env, char group ):Entity(env), group(group), radius(DOOR_BUTTON_SIZE>>1){
        fsm.changeStage(STATE_RELEASED, false);
    }
    DoorButton::DoorButton( const DoorButton &rhs ):Entity(rhs), group(rhs.group), radius(rhs.radius), fsm( rhs.fsm ){
        fsm.observer = this;
    }
    void DoorButton::press(){
        if( fsm.getState() != STATE_PRESSED )
        {
            fsm.changeStage(STATE_PRESSED, false);
            triggerDoorOpen();
        }
    }
    void DoorButton::release(){
        if( fsm.getState() != STATE_RELEASED )
        {
            if( !triggerDoorClose() )
                fsm.changeStage(STATE_WAIT_FOR_SHEEP_GO_AWAY, false);
            else
                fsm.changeStage(STATE_RELEASED, false);
        }
    }
    void DoorButton::triggerDoorOpen(){
        Door *door = env->findDoor(group);
        if( !door )
        {
            NSLog(@"not found door!! check code please");
            throw "";
        }
        door->openDoor();
    }
    bool DoorButton::triggerDoorClose(){
        Door *door = env->findDoor(group);
        if( !door )
        {
            NSLog(@"not found door!! check code please");
            throw "";
        }
        if( door->hasSheep() )
            return false;
        door->closeDoor();
        return true;
    }
    void DoorButton::update(float elapsed){
        fsm.update(elapsed);
        updateTimer(elapsed);
    }
    void DoorButton::onUpdate(FSM *fsm, float elapsed){
        switch( fsm->getState() ){
            case STATE_WAIT_FOR_SHEEP_GO_AWAY:
            {
                if( triggerDoorClose() )
                    fsm->changeStage(STATE_RELEASED, false);
            }
                break;
            case STATE_RELEASED:
            case STATE_PRESSED:
            {
                vector<Sheep> &sheeps = *env->sheeps;
                bool pressed = false;
                for( int i=0; i<sheeps.size(); ++i )
                {
                    Sheep &sheep = sheeps[i];
                    if( sheep.isEnableDoorButton() )
                    {
                        float dis = GLKVector2Distance(sheep.pos, pos);
                        if( dis < radius )
                        {
                            press();
                            pressed = true;
                            break;
                        }
                    }
                }
                if( !pressed )
                    release();
            }
                break;
        }
    }
    void DoorButton::onEnter(FSM *fsm){
        
    }
    void DoorButton::onExit(FSM *fsm){
        
    }
    
    
    
    JumpButton::JumpButton( Env *env, GLKVector2 jumpTarget ):
        Entity( env ),
        jumpTarget(jumpTarget),
        radius(JUMP_PLATFORM_SIZE*3/6)
    {
        fsm.changeStage(STATE_NORMAL, false);
    }
    JumpButton::JumpButton( const JumpButton &rhs ):
        Entity( rhs ),
        jumpTarget( rhs.jumpTarget ),
        fsm( rhs.fsm ),
        radius( rhs.radius )
    {
        fsm.observer = this;
    }
    void JumpButton::update(float elapsed){
        fsm.update(elapsed);
        updateTimer(elapsed);
    }
    void JumpButton::onExit(FSM *fsm){
        
    }
    void JumpButton::onEnter(FSM *fsm){
        
    }
    void JumpButton::onUpdate(FSM *fsm, float elapsed){
        switch (fsm->getState()) {
            case STATE_NORMAL:
            {
                
                vector<Sheep> &sheeps = *env->sheeps;
                bool pressed = false;
                for( int i=0; i<sheeps.size(); ++i )
                {
                    Sheep &sheep = sheeps[i];
                    if( sheep.isEnableJumpButton() )
                    {
                        float dis = GLKVector2Distance(sheep.pos, pos);
                        if( dis < radius )
                        {
                            sheep.jump( jumpTarget );
                            pressed =true;
                        }
                    }
                }
                if( pressed )
                    fsm->changeStage(STATE_OPEN, false);
            }
                break;
            case STATE_OPEN:
            {
                if( fsm->getTimer() > 1 )
                    fsm->changeStage(STATE_NORMAL, false);
            }
                break;
            default:
                break;
        }
    }
    
    
    
    Mover::Mover( Env *env ):
        Entity(env),
        speed(5),
        targetPos(GLKVector2Make(0, 0)),
        moveFactor(0.15f),
        activeTargetPos(false)
    {}
    void Mover::updatePos( float elapsed ){
        UpdatePosOption option;
        option.type = 0;
        option.type2 = 0;
        updatePos( elapsed, option);
    }
    void Mover::updatePos( float elapsed, UpdatePosOption option ){
        if( option.type == 0 )
            option.type = "";
        if( option.type2 == 0 )
            option.type2 = "";
        if( activeTargetPos )
        {
            int posMapCoord[2];
            [SheepAlg getDataMapCoordsWithX:pos.x Y:pos.y result:posMapCoord];
            if( !env->map->isCanNotMove(posMapCoord[0], posMapCoord[1]) )
            {
                lastValidPos = pos;
                groundColor = env->map->getColor(posMapCoord[0], posMapCoord[1]);
            }
            oldPos = pos;
            float spd = speed;
            if( strcmp(option.type2, "itemSpeedUp") == 0 )
                spd *= 1.4;
            if( strcmp(option.type, "jump") == 0 ){
                spd*=2;
            }
            else if( strcmp(option.type, "fromDog") == 0 ){
                spd*=1.5;
                if( env->map->isTouchSlow(posMapCoord[0], posMapCoord[1]) )
                    spd*= .3;
            }
            else if( strcmp(option.type, "noeffect") == 0 ){
                
            }
            else
            {
                if( env->map->isTouchSlow(posMapCoord[0], posMapCoord[1]) )
                    spd*= .3;
            }
            spd = spd*(elapsed/0.03);
            GLKVector2 d = GLKVector2Subtract(targetPos, pos);
            float dis = sqrtf( GLKVector2DotProduct(d, d));
            if( dis > spd )
            {
                pos.x += d.x* spd/ dis;
                pos.y += d.y* spd/ dis;
            }
            else
            {
                pos = targetPos;
                activeTargetPos = false;
            }
        }
    }
    
    void Mover::shouldMoveTo( GLKVector2 pos ){
        int posMapCoord[2], targetMapCoord[2];
        [SheepAlg getDataMapCoordsWithX:this->pos.x Y:this->pos.y result:posMapCoord];
        [SheepAlg getDataMapCoordsWithX:pos.x Y:pos.y result:targetMapCoord];
        TransitionResult result = 
            [SheepAlg computTransitionWithMap:env->map->getDataMap() 
                                        width:env->map->getDataMapWidth() 
                                       height:env->map->getDataMapHeight() 
                                      stopMap:[SheepConfig single]->stopMap 
                                          pos:posMapCoord
                                    targetPos:targetMapCoord];
        float stagecoord[2];
        if( result.isCollide )
            [SheepAlg getStageCoordsWithX:result.pos[0] 
                                        Y:result.pos[1] 
                                   result:stagecoord];
        else if( result.isSpecial )
        {
            stagecoord[0] = lastValidPos.x;
            stagecoord[1] = lastValidPos.y;
        }
        else
            [SheepAlg getStageCoordsWithX:targetMapCoord[0] 
                                        Y:targetMapCoord[1] 
                                   result:stagecoord];
        targetPos.x = stagecoord[0];
        targetPos.y = stagecoord[1];
        activeTargetPos = true;
    }
    
    
    Dog::Dog( Env *env ):Mover(env), type(TYPE_LOCK_DOG), targetSheep(0){
        fsm.observer = this;
        fsm.changeStage(STATE_NORMAL, false);
    }
    Dog::Dog( const Dog &rhs ):Mover(rhs), type(rhs.type), fsm( rhs.fsm ), targetSheep(0), lockPos(rhs.lockPos){
        fsm.observer = this;
    }
    void Dog::selectNewMovePos(){
        float dx = pos.x + (rand()% DOG_LOCK_DISTANCE) - DOG_LOCK_DISTANCE/2;
        float dy = pos.y + (rand()% DOG_LOCK_DISTANCE) - DOG_LOCK_DISTANCE/2;
        /*int mapcoord[2];
        [SheepAlg getDataMapCoordsWithX:dx Y:dy result:mapcoord];
        if( env->map->isTouchWater(mapcoord[0], mapcoord[1]) )
            return;*/
        shouldMoveTo( GLKVector2Make( dx, dy ) );
    }
    bool Dog::boundsToLockPos(){
        GLKVector2 d = GLKVector2Subtract(pos, lockPos);
        float dis = sqrtf(GLKVector2DotProduct(d, d));
        if( dis > DOG_LOCK_DISTANCE )
        {
            pos.x = lockPos.x + d.x* DOG_LOCK_DISTANCE/ dis;
            pos.y = lockPos.y + d.y* DOG_LOCK_DISTANCE/ dis;
            return true;
        }
        return false;
    }
    bool Dog::getPosToReachTargetSheep(){
        if(activeTargetPos)
            return false;
        GLKVector2 d = GLKVector2Subtract(targetSheep->pos, pos);
        if( fsm.getTimer() > DOG_MOVE_TIMER )
        {
            float dis = sqrtf( GLKVector2DotProduct(d, d) );
            if( dis > DOG_LOCK_DISTANCE )
            {
                return true;
            }
        }
        shouldMoveTo( targetSheep->pos );
        return false;
    }
    bool Dog::checkSheepForAttack(){
        vector<Sheep> *sheeps = env->sheeps;
        for( int i=0; i<sheeps->size(); ++i )
        {
            if( (rand() % 100) > 50 )
                continue;
            Sheep &sheep = (*sheeps)[i];
            if( sheep.isNotDogTarget() )
                continue;
            if( GLKVector2Distance(pos, sheep.pos) < DOG_LOCK_DISTANCE<<1 )
            {
                targetSheep = &sheep;
                return true;
            }
        }
        return false;
    }
    void Dog::update( float elapsed ){
        fsm.update(elapsed);
        updateTimer(elapsed);
    }
    void Dog::onEnter( FSM *fsm ){
        
    }
    void Dog::onExit( FSM *fsm ){
        
    }
    void Dog::onUpdate( FSM *fsm, float elapsed ){
        switch( fsm->getState() ){
            case STATE_MOVE:
            {
                updatePos( elapsed );
                if( !activeTargetPos || 
                    ( !this->isUnlockAnimal() && boundsToLockPos() ) )
                {
                    fsm->changeStage(STATE_NORMAL, false);
                }
            }
                break;
            case STATE_SLEEP:
            {
                if( fsm->getTimer() > DOG_SLEEP_DURATION )
                {
                    fsm->changeStage(STATE_NORMAL, false);
                    break;
                }
            }
                break;
            case STATE_NORMAL:
            {
                if( fsm->getTimer() > DOG_MOVE_TIMER )
                {
                    int ran = rand() %100;
                    if( ran < 5 )
                    {
                        fsm->changeStage(STATE_SLEEP, false);
                        break;
                    }
                    selectNewMovePos();
                    if( activeTargetPos )
                    {
                        fsm->changeStage(STATE_MOVE, false);
                        break;
                    }
                }
                if( checkSheepForAttack() )
                {
                    env->playSound(@"dogAttack");
                    fsm->changeStage(STATE_ATTACK, false);
                    break;
                }
            }
                break;
            case STATE_ATTACK:
            {
                if( getPosToReachTargetSheep() )
                {
                    targetSheep = 0;
                    fsm->changeStage(STATE_SLEEP, false);
                    break;
                }
                if( fsm->getTimer() > DOG_MOVE_TIMER )
                {
                    targetSheep = 0;
                    fsm->changeStage(STATE_NORMAL, false);
                    break;
                }
                updatePos(elapsed );
                if( !isUnlockAnimal() )
                    if( boundsToLockPos() )
                        activeTargetPos = false;
            }
                break;
        }
    }
    
    
    
    
    Sheep createControlEntity( int type, Env *env, GLKVector2 pos, int group ){
        switch( type ){
            case Sheep::TYPE_SHEEP:
            {
                Sheep sheep(env);
                sheep.pos = pos;
                sheep.lastValidPos = pos;
                sheep.group = group;
                sheep.canJump = false;
                sheep.type = type;
                sheep.speed = SHEEP_RUN_SPEED;
                return sheep;
            }
            case Sheep::TYPE_ANTELOPE:
            {
                Sheep sheep(env);
                sheep.pos = pos;
                sheep.lastValidPos = pos;
                sheep.group = group;
                sheep.canJump = true;
                sheep.type = type;
                return sheep;
            }
            case Sheep::TYPE_BOX:
            {
                Sheep sheep(env);
                sheep.pos = pos;
                sheep.group = group;
                sheep.canJump = true;
                sheep.type = type;
                sheep.speed = BOX_RUN_SPEED;
                sheep.runDistance = BOX_RUN_DISTANCE;
                sheep.runAwayAttackDistance = BOX_RUN_AWAY_ATTACK_DISTANCE;
                return sheep;
            }
            case Sheep::TYPE_DOG:
            {
                Sheep sheep(env);
                sheep.pos = pos;
                sheep.group = group;
                sheep.canJump = true;
                sheep.type = type;
                sheep.speed = UNLOCK_DOG_RUN_SPEED;
                sheep.runDistance = UNLOCK_DOG_RUN_DISTANCE;
                sheep.runAwayAttackDistance = UNLOCK_DOG_RUN_AWAY_ATTACK_DISTANCE;
                sheep.swimSpeed = UNLOCK_DOG_RUN_SPEED;
                return sheep;
            }
            case Sheep::TYPE_HIPPO:
            {
                Sheep sheep(env);
                sheep.pos = pos;
                sheep.group = group;
                sheep.canJump = true;
                sheep.type = type;
                sheep.speed = HIPPO_RUN_SPEED;
                sheep.runDistance = HIPPO_RUN_DISTANCE;
                sheep.runAwayAttackDistance = HIPPO_RUN_AWAY_ATTACK_DISTANCE;
                sheep.swimSpeed = HIPPO_RUN_SPEED;
                return sheep;
            }
            case Sheep::TYPE_PIG:
            {
                Sheep sheep(env);
                sheep.pos = pos;
                sheep.group = group;
                sheep.canJump = true;
                sheep.type = type;
                sheep.speed = PIG_RUN_SPEED;
                sheep.runDistance = PIG_RUN_DISTANCE;
                sheep.runAwayAttackDistance = PIG_RUN_AWAY_ATTACK_DISTANCE;
                sheep.swimSpeed = HIPPO_RUN_SPEED;
                return sheep;
            }
            default:
                throw "no this sheep type";
        }
    }
    
    Sheep::Sheep( Env *env ):Mover(env), targetRiver(0), isTouchGoal(false), moveFromDog(false),type(0), mid(-1),
        runDistance(RUN_DISTANCE),
        runAwayAttackDistance(RUN_AWAY_ATTACK_DISTANCE),
        swimSpeed(SWIMMING_SPEED)
    {
        fsm.observer = this;
        fsm.changeStage(STATE_NORMAL, false);
    }
    Sheep::Sheep( const Sheep &rhs ):
        Mover(rhs), 
        fsm(rhs.fsm),
        targetRiver(0), 
        group(rhs.group), 
        isTouchGoal(rhs.isTouchGoal), 
        moveFromDog(false),
        type(rhs.type),
        mid( rhs.mid ),
        runDistance(rhs.runDistance),
        runAwayAttackDistance(rhs.runAwayAttackDistance),
        swimSpeed(rhs.swimSpeed)
    {
        fsm.observer = this;
    }
    void Sheep::jump( GLKVector2 target ){
        if( isCanChangePositionFromEnv() )
        {
            env->playSound(@"jump");
            fsm.changeStage(STATE_JUMP, false);
            targetPos = target;
            activeTargetPos = true;
        }
    }
    bool Sheep::dogChange( GLKVector2 pos ){
        if( isNotScareDog() )
            return false;
        if( !isCanChangePositionFromEnv() )
            return false;
        GLKVector2 d = GLKVector2Subtract(this->pos, pos);
        float dis = sqrtf( GLKVector2DotProduct(d, d) );
        if( dis< RUN_AWAY_DOG_DISTANCE )
        {
            GLKVector2 nd = GLKVector2Normalize(d);
            GLKVector2 run = GLKVector2MultiplyScalar(nd, RUN_SCARE_DISTANCE);
            moveFromDog = true;
            shouldMoveTo(GLKVector2Add(this->pos, run));
            return true;
        }
        return false;
    }
    bool Sheep::mouseChange( GLKVector2 pos ){
        if( !isCanTouchMove() )
            return false;
        if( !isCanChangePositionFromEnv() )
            return false;
        GLKVector2 d = GLKVector2Subtract(this->pos, pos);
        float dis = sqrtf( GLKVector2DotProduct(d, d) );
        if( dis< runAwayAttackDistance )
        {
            GLKVector2 nd = GLKVector2Normalize(d);
            GLKVector2 run = GLKVector2MultiplyScalar(nd, runDistance);
            shouldMoveTo(GLKVector2Add(this->pos, run));
            return true;
        }
        return false;
    }
    bool Sheep::updatePath( float elapsed ){
        int posMapCoord[2];
        [SheepAlg getDataMapCoordsWithX:pos.x Y:pos.y result:posMapCoord];
        float dot = [SheepAlg computDistanceToRiverHeadWithRiver:targetRiver
                                                           width:RIVER_WIDTH 
                                                               x:posMapCoord[0] 
                                                               y:posMapCoord[1]];
        bool isGoal;
        GLKVector2 dir = [SheepAlg getRiverVelocityWithRiver:*targetRiver 
                                                    distance:dot 
                                                      isGoal:&isGoal];
        if( !isGoal )
        {
            float speed = SWIMMING_RIVER_SPEED;
            speed = speed* (elapsed/ 0.03);
            GLKVector2 targetStageCoord = GLKVector2Make(pos.x+dir.x* speed, pos.y+dir.y* speed);
            pos = targetStageCoord;
        }
        else
            activeTargetPos = false;
        return isGoal;
    }   
    void Sheep::shouldMoveTo( GLKVector2 pos ){
        if( activeTargetPos )
            return;
        int posMapCoord[2], targetMapCoord[2];
        [SheepAlg getDataMapCoordsWithX:this->pos.x Y:this->pos.y result:posMapCoord];
        [SheepAlg getDataMapCoordsWithX:pos.x Y:pos.y result:targetMapCoord];
        TransitionResult result = 
        [SheepAlg computTransitionWithMap:env->map->getDataMap() 
                                    width:env->map->getDataMapWidth() 
                                   height:env->map->getDataMapHeight() 
                                  stopMap:[SheepConfig single]->stopMap 
                                      pos:posMapCoord
                                targetPos:targetMapCoord];
        float stagecoord[2];
        if( result.isCollide )
        {
            if( canJump && (result.color == COLOR_ID_GATE_REGION ) )
            {
                GLKVector2 d = GLKVector2Subtract(this->pos, oldPos);
                d= GLKVector2MultiplyScalar(d, 25);
                GLKVector2 to = GLKVector2Add(this->pos, d);
                int toMapCoord[2];
                [SheepAlg getDataMapCoordsWithX:to.x Y:to.y result:toMapCoord];
                int jumpPos[2];
                if(
                [SheepAlg getJumpPosWithMap:env->map->getDataMap() 
                                      width:env->map->getDataMapWidth() 
                                     height:env->map->getDataMapHeight() 
                                         x1:posMapCoord[0]
                                         y1:posMapCoord[1]
                                         x2:toMapCoord[0]
                                         y2:toMapCoord[1]
                                    stopMap:[SheepConfig single]->stopMap 
                                     result:jumpPos] == YES)
                {
                    [SheepAlg getStageCoordsWithX:jumpPos[0] Y:jumpPos[1] result:stagecoord];
                    this->jump( GLKVector2Make(stagecoord[0], stagecoord[1] ));
                    return;
                }
            }
            else
                [SheepAlg getStageCoordsWithX:result.pos[0] Y:result.pos[1] result:stagecoord];
        }
        else if( result.isSpecial )
        {
            stagecoord[0] = lastValidPos.x;
            stagecoord[1] = lastValidPos.y;
        }
        else
            [SheepAlg getStageCoordsWithX:targetMapCoord[0] 
                                        Y:targetMapCoord[1] 
                                   result:stagecoord];
        targetPos.x = stagecoord[0];
        targetPos.y = stagecoord[1];
        activeTargetPos = true;
    }
    void Sheep::update( float elapsed ){
        fsm.update(elapsed);
        itemEffect.update(elapsed);
        updateTimer(elapsed);
    }
    void Sheep::grab(){
        fsm.changeStage(STATE_GRAB, false);
    }
    void Sheep::ungrab(){
        fsm.changeStage(STATE_MOVE, true);
    }
    void Sheep::hold(){
        fsm.changeStage(STATE_HOLD, false);
    }
    void Sheep::unhold(){
        fsm.changeStage(STATE_UNHOLD, true);
    }
    void Sheep::hold( int mid ){
        this->mid = mid;
    }
    void Sheep::unhold( int mid, GLKVector2 pos ){
        if( this->mid == mid )
        {
            this->mid = -1;
            if( type == TYPE_ANTELOPE )
            {
                //this->jump(GLKVector2 target);
            }
        }
    }
    void Sheep::checkTouchGoal(){
        if( fsm.getState() == STATE_NORMAL || fsm.getState() == STATE_MOVE )
        {
            int posMapCoord[2];
            [SheepAlg getDataMapCoordsWithX:pos.x Y:pos.y result:posMapCoord];
            if( env->map->isTouchGroupGoal(posMapCoord[0], posMapCoord[1], group) )
            {
                if( !isTouchGoal )
                    env->playSound(@"enterGoal");
                isTouchGoal = true;
            }
            else
                isTouchGoal = false;
        }
        else
            isTouchGoal = false;
    }
    void Sheep::onEnter( FSM *fsm ){
        switch( fsm->getState() ){
            case STATE_NORMAL:
                activeTargetPos = false;
                break;
            case STATE_FELL_INTO_WATER:
            case STATE_FALL_INTO_ICE:
            {
                headInWater = atan2f(pos.y-oldPos.y, pos.x-oldPos.x);
                activeTargetPos = false;
            }
                break;
        }
    }
    void Sheep::onExit( FSM *fsm ){
        
    }
    void Sheep::onUpdate( FSM *fsm, float elapsed ){
        switch( fsm->getState() ){
            case STATE_NORMAL:
            {
                if( activeTargetPos )
                {
                    if( rand()%5< 1 )
                        if( type == TYPE_SHEEP )
                            env->playSound(@"sheep");
                        else if( type == TYPE_DOG )
                            env->playSound(@"dog");
                        else if( type == TYPE_PIG )
                            env->playSound(@"pig");
                        else if( type == TYPE_HIPPO )
                            env->playSound(@"hippo");
                    fsm->changeStage( moveFromDog ? STATE_DOG_MOVE : STATE_MOVE, false);
                    break;
                }
                else
                {
                    // 分開生物行為 //
                    vector<Sheep> &sheeps = *env->sheeps;
                    for( int i=0; i<sheeps.size(); ++i )
                    {
                        Sheep &sheep = sheeps[i];
                        if( &sheep == this )
                            continue;
                        if( sheep.type == TYPE_BOX )
                            continue;
                        GLKVector2 d = GLKVector2Subtract(pos, sheep.pos);
                        int disSq = GLKVector2DotProduct(d, d);
                        if( disSq == 0 )
                        {
                            d.x = SHEEP_SIZE>>2;
                            d.y = 0;
                            shouldMoveTo(GLKVector2Add(pos, d));
                        }
                        else if( disSq < powf(SHEEP_SIZE>>1, 2) )
                        {
                            float dis = sqrtf(disSq);
                            d.x = d.x* (SHEEP_SIZE>>2)/ dis;
                            d.y = d.y* (SHEEP_SIZE>>2)/ dis;
                            shouldMoveTo(GLKVector2Add(pos, d));
                            break;
                        }
                    }
                    float distance = SHEEP_SIZE;
                    if( isNotScareDog() )
                        distance = SHEEP_SIZE>>2;
                    vector<Dog> dogs = env->dogs;
                    for( int i=0; i<dogs.size(); ++i )
                    {
                        Dog &dog = dogs[i];
                        GLKVector2 d = GLKVector2Subtract(pos, dog.pos);
                        int disSq = GLKVector2DotProduct(d, d);
                        // 要注意距離為零的 //
                        if( disSq == 0 )
                        {
                            d.x = distance;
                            d.y = 0;
                            shouldMoveTo(GLKVector2Add(pos, d));
                        }
                        else if( disSq < powf(distance, 2) )
                        {
                            float dis = sqrtf(disSq);
                            d.x = d.x* (distance)/ dis;
                            d.y = d.y* (distance)/ dis;
                            shouldMoveTo(GLKVector2Add(pos, d));
                            break;
                        }
                    }
                }
            }
                break;
            case STATE_MOVE:
            case STATE_DOG_MOVE:
            {
                fsm->setState( moveFromDog ? STATE_DOG_MOVE : STATE_MOVE );
                
                if( !activeTargetPos )
                {
                    fsm->changeStage(STATE_NORMAL, false);
                    moveFromDog = false;
                    break;
                }
                // 共同行為 //
                // 進入池溏，河流 //
                int posMapCoord[2];
                [SheepAlg getDataMapCoordsWithX:pos.x Y:pos.y result:posMapCoord];
                if( env->map->isTouchWater(posMapCoord[0], posMapCoord[1]) )
                {
                    env->playSound(@"swim");
                    fsm->changeStage(STATE_FELL_INTO_WATER, false);
                    break;
                }
                if( env->map->isTouchIce(posMapCoord[0], posMapCoord[1]) )
                {
                    env->playSound(@"touchIce");
                    fsm->changeStage(STATE_FALL_INTO_ICE, false);
                    break;
                }
                
                if( !isNotScareRiver() )
                {
                    const vector<Riveri> *river = env->map->isCloseToRivers(posMapCoord[0], posMapCoord[1], RIVER_WIDTH);
                    if( river )
                    {
                        targetRiver = river;
                        env->playSound(@"swim");
                        fsm->changeStage(STATE_FELL_INTO_RIVER, false);
                        break;
                    }
                }
                
                // 吃食物行為 //
                //if( type == TYPE_SHEEP || type == TYPE_ANTELOPE || type == TYPE_PIG || type == TYPE_HIPPO )
                if( isCanEatFood() )
                {
                    vector<Food> &foods = env->foods;
                    for( int i=0; i<foods.size(); ++i )
                    {
                        Food &food = foods[i];
                        if( itemEffect.hasItemWithType(food.type) )
                            continue;
                        if( food.remove )
                            continue;
                        if( food.tag )
                            continue;
                        if( GLKVector2Distance(food.pos, pos) < LOCK_FOOD_RADIUS )
                        {
                            food.tag = true;
                            targetFood = &food;
                            env->playSound(@"lockFood");
                            fsm->changeStage(STATE_LOCK_ON_FOOD, false);
                            break;
                        }
                    }
                }
                UpdatePosOption op;
                op.type = op.type2 = 0;
                bool isItemSpeedUp = false;
                if( itemEffect.hasItemWithType(Food::TYPE_SPEED_UP) )
                    isItemSpeedUp = true;
                if( isItemSpeedUp )
                    op.type2 = "itemSpeedUp";
                // 怕狗行為 //
                //if( type == TYPE_SHEEP || type == TYPE_ANTELOPE || type == TYPE_PIG )
                if( !isNotScareDog() )
                {
                    if( moveFromDog )
                        op.type = "fromDog";
                    //else if( type == TYPE_PIG )
                    else if( isNotScareSlow() )
                        op.type = "noeffect";
                    else
                        op.type = 0;
                }
                updatePos( elapsed, op );
            }
                break;
            case STATE_LOCK_ON_FOOD:
            {
                GLKVector2 d = GLKVector2Subtract(targetFood->pos, pos);
                float dis = sqrtf( GLKVector2DotProduct(d, d) );
                if( dis< 25 )
                {
                    targetPos = targetFood->pos;
                    fsm->changeStage(STATE_EAT_FOOD, false);
                    break;
                }
                d.x = d.x* speed/ dis;
                d.y = d.y* speed/ dis;
                pos = GLKVector2Add(pos, d);
            }
                break;
            case STATE_EAT_FOOD:
            {
                if( fsm->getTimer() > 1 )
                {
                    int itemType = targetFood->type;
                    if( itemType == Food::TYPE_TIME_PLUS )
                        env->timePlus(ITEM_TIME_PLUS_TIME);
                    else
                        itemEffect.addItem(Food::getItemWithType(itemType));
                    targetFood->remove = true;
                    targetFood = 0;
                    fsm->changeStage(STATE_MOVE, false);
                    break;
                }
                Mover::updatePos( elapsed );
            }
                break;
            case STATE_JUMP:
            {
                UpdatePosOption op;
                op.type = "jump";
                op.type2 = 0;
                Mover::updatePos(elapsed ,op);
                groundColor = 0;
                if( !activeTargetPos )
                    fsm->changeStage(STATE_NORMAL, false);
            }
                break;
            case STATE_FELL_INTO_WATER:
            case STATE_FALL_INTO_ICE:
            {
                if( fsm->getState() == STATE_FELL_INTO_WATER )
                    groundColor = COLOR_ID_WATER_REGION;
                else
                    groundColor = COLOR_ID_ICE_REGION;
                // 河馬在池溏為可控 狗在冰上為可控 //
                //if( (fsm->getState() == STATE_FELL_INTO_WATER && type == TYPE_HIPPO) ||(fsm->getState() == STATE_FALL_INTO_ICE && type == TYPE_DOG ) )
                if( (fsm->getState() == STATE_FELL_INTO_WATER && isNotScareWater()) ||(fsm->getState() == STATE_FALL_INTO_ICE && isNotScareIce()) )
                {
                    updatePos( elapsed );
                    int mapcoord[2];
                    [SheepAlg getDataMapCoordsWithX:pos.x Y:pos.y result:mapcoord];
                    //if( fsm->getState() == STATE_FELL_INTO_WATER && type == TYPE_HIPPO)
                    if( fsm->getState() == STATE_FELL_INTO_WATER )
                    {
                        if( !env->map->isTouchWater( mapcoord[0], mapcoord[1]) )
                        {
                            activeTargetPos = false;
                            fsm->changeStage(STATE_GET_WATER_OUT, false);
                            break;
                        }
                    }
                    //else if( fsm->getState() == STATE_FALL_INTO_ICE && type == TYPE_DOG)
                    else if( fsm->getState() == STATE_FALL_INTO_ICE )
                    {
                        if( !env->map->isTouchIce( mapcoord[0], mapcoord[1]) )
                        {
                            groundColor = 0;
                            activeTargetPos = false;
                            fsm->changeStage(STATE_NORMAL, false);
                            break;
                        }
                    }
                }
                else
                {
                    GLKVector2 d = GLKVector2Make(cosf(headInWater), sinf(headInWater));
                    GLKVector2 n = GLKVector2Add( pos, GLKVector2MultiplyScalar( d, swimSpeed* (elapsed/0.03) ) );
                    int mapcoord[2];
                    [SheepAlg getDataMapCoordsWithX:n.x Y:n.y result:mapcoord];
                    
                    bool (Map::*checkFun)(int,int)const=0;
                    if(  fsm->getState() == STATE_FELL_INTO_WATER )
                        checkFun = &Map::isTouchWater;
                    else 
                        checkFun = &Map::isTouchIce;
                    if( !(env->map->*checkFun)(mapcoord[0],mapcoord[1]) )
                        if( env->map->isCanNotMove(mapcoord[0], mapcoord[1]))
                        {
                            float range = 3.14159/ 8;
                            float nh = headInWater+ range;
                            int counter = 0;
                            while( true )
                            {
                                if( env->map->isCanNotMove(mapcoord[0], mapcoord[1]) )
                                {
                                    if( counter %2 == 1 )
                                        range += 3.14159/ 8;
                                    nh = headInWater+ (range* (counter% 2 == 1 ? 1 : -1 ));
                                    d.x = cosf(nh);
                                    d.y = sinf(nh);
                                    n.x = pos.x+ d.x* swimSpeed;
                                    n.y = pos.y+ d.y* swimSpeed;
                                }
                                else
                                {
                                    headInWater = nh;
                                    break;
                                }
                                [SheepAlg getDataMapCoordsWithX:n.x Y:n.y result:mapcoord];
                                ++counter;
                            }
                        }
                        else
                        {
                            pos = n;
                            activeTargetPos = false;
                            if( fsm->getState() == STATE_FELL_INTO_WATER )
                                fsm->changeStage(STATE_GET_WATER_OUT, false);
                            else if( fsm->getState() == STATE_FALL_INTO_ICE )
                            {
                                activeTargetPos = false;
                                fsm->changeStage(STATE_NORMAL, false);
                            }
                        }
                    else
                    {
                        pos = n;
                    }
                }
                
                int mapcoord[2];
                [SheepAlg getDataMapCoordsWithX:pos.x Y:pos.y result:mapcoord];
                const vector<Riveri> *river = env->map->isCloseToRivers(mapcoord[0], mapcoord[1], RIVER_WIDTH);
                if( river )
                {
                    targetRiver = river;
                    env->playSound(@"swim");
                    fsm->changeStage(STATE_FELL_INTO_RIVER, false);
                    break;
                }
            }
                break;
            case STATE_GET_WATER_OUT:
            {
                groundColor = 0;
                if( type == TYPE_BOX )
                {
                    activeTargetPos = false;
                    fsm->changeStage(STATE_NORMAL, false);
                    break;
                }
                else
                {
                    if( fsm->getTimer() > GET_WATER_OUT_DURATION )
                    {
                        activeTargetPos = false;
                        fsm->changeStage(STATE_NORMAL, false);
                        break;
                    }
                }
            }
                break;
            case STATE_FELL_INTO_RIVER:
                fsm->changeStage(STATE_IN_RIVER, false);
                break;
            case STATE_IN_RIVER:
            {
                if( updatePath( elapsed ) )
                    fsm->changeStage(STATE_GET_WATER_OUT, false);
                else
                    groundColor = COLOR_ID_RIVER;
            }
                break;
            case STATE_HOLD:
                // not thing to do //
                break;
            case STATE_UNHOLD:
            {
                Mover::updatePos( elapsed );
                if( !activeTargetPos )
                    fsm->changeStage(STATE_NORMAL, true);
            }
                break;
            case STATE_GRAB:
                Mover::updatePos( elapsed );
                break;
        }
    }
}