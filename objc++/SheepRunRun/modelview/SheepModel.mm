//
//  SheepModel.m
//  testEmpty4
//
//  Created by Rachel on 12/1/13.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import "SheepModel.h"




@implementation SheepModel

@synthesize
status = _status;

-(id) init{
    return nil;
}

-(void) onGameLoop{
    double curr = CFAbsoluteTimeGetCurrent();
    double elapsed = curr - _status.lasttime;
    _status.lasttime = curr;
    if( _status.loop )
    {
        _mgr.update(elapsed);
    }
}

-(id) initWithApp:(id<ISheepApp>)app
         callback:(id<ISheepModelCallback>)callback;
{
    if( self = [super init] ){
        _callback = callback;
        _status.app = [app retain];
        _status.loop = false;
        _mgrObserver = new sheep::DefaultGameManagerObserver(&_status);
        _mgr.observer = _mgrObserver;
        _theTimer = [CADisplayLink displayLinkWithTarget:self selector:@selector(onGameLoop)];
        _theTimer.frameInterval = 1;
        [_theTimer addToRunLoop:[NSRunLoop currentRunLoop] forMode:NSDefaultRunLoopMode];
    }
    return self;
}

-(void) dealloc
{
    delete _mgrObserver;
    [_status.app release];
    [_theTimer release];
    [super dealloc];
}

-(bool) isGame;
{
    return _status.loop;
}

-(void) onloadResource{
    [_callback onloadResourceWithLevel:_status.level];
    
    _status.loadResourceLock = false;
}

-(void) loadResourceWithBackground{
    _mgr.loadResource(_status.level);
    // 使用背景執行緒以下這行就無效，實在不知道原因 //
    //[_status.app.view loadResourceWithLevel:_status.level];
    [self performSelectorOnMainThread:@selector(onloadResource) 
                           withObject:nil
                        waitUntilDone:NO];
}

-(void) loadResourceWithLevel:(int) level;
{
    if( _status.loadResourceLock )
        throw "can not load!!";
    _status.loadResourceLock = true;
    _status.level = level;
    [_status.app.view loadResourceWithLevel:_status.level];
    [self performSelectorInBackground:@selector(loadResourceWithBackground) 
                           withObject:nil];
}
-(bool) isAllPassed;
{
    //NSLog(@"level %d  total%d", _mgr.getCurrLevel(), COUNT_LEVEL);
    return _mgr.getCurrLevel() >= COUNT_LEVEL-1;
}
-(void) nextLevel;
{
    [self loadResourceWithLevel:_mgr.getCurrLevel()+1];
}
-(void) restartLevel;
{
    [self loadResourceWithLevel:_mgr.getCurrLevel()];
}
-(void) startGame;
{
    _status.lasttime = CFAbsoluteTimeGetCurrent();
    _status.loop = true;
}
-(void) pauseGame;
{
    _status.loop = false;
}
-(void) resumeGame;
{
    _status.loop = true;
}
-(void) mouseChangeWithID:(int) mouseId
                        X:(int) x
                        Y:(int) y;
{
    _mgr.mouseChange(mouseId, x, y);
}
-(void) mouseDownWithID:(int) mouseId
                      X:(int) x
                      Y:(int) y;
{
    _mgr.mouseDown(mouseId, x, y);
}
-(void) mouseUpWithID:(int) mouseID;
{
    _mgr.mouseUp(mouseID);
}

-(void) mouseCancelled
{
    _mgr.mouseCancelled();
    [_status.app.view mouseCancelled];
    
}
-(void) destory
{
    [self mouseCancelled];
    _mgr.destroy();
    [_status.app.view destory];
}
@end

namespace sheep {
    DefaultGameManagerObserver::DefaultGameManagerObserver(SheepModelStatus *status):status(status)
    {}
    void DefaultGameManagerObserver::onShowTutorial(sheep::GameManager &mgr, int tutorialId){
        [status->app.view showTutorial:tutorialId];
    }
    void DefaultGameManagerObserver::onPlaySound(sheep::GameManager &mgr, NSString *name){
        [status->app.view playSound:name];
    }
    void DefaultGameManagerObserver::onLoadResource( GameManager &mgr, int level ){
        
    }
    void DefaultGameManagerObserver::onCreateSheep( GameManager &mgr, Sheep sheep ){
        SheepSheepInfo info;
        info.oid = sheep.oid;
        info.pos = sheep.pos;
        info.type = sheep.type;
        info.timer = sheep.getFSMRef().getTimer();
        info.group = sheep.group;
        info.states = sheep.getFSMRef().getState();
        [status->app.view createSheepWithInfo:info];
    }
    void DefaultGameManagerObserver::onCreateAntelope( GameManager &mgr, Sheep sheep ){
        SheepSheepInfo info;
        info.oid = sheep.oid;
        info.pos = sheep.pos;
        info.type = sheep.type;
        info.group = sheep.group;
        info.isTouchGoal = sheep.isTouchGoal;
        info.timer = sheep.getFSMRef().getTimer();
        info.states = sheep.getFSMRef().getState();
        [status->app.view createSheepWithInfo:info];
    }
    void DefaultGameManagerObserver::onUpdateSheep( GameManager &mgr, Sheep sheep ){
        SheepSheepInfo info;
        info.oid = sheep.oid;
        info.group = sheep.group;
        info.pos = sheep.pos;
        info.type = sheep.type;
        info.isTouchGoal = sheep.isTouchGoal;
        info.timer = sheep.getFSMRef().getTimer();
        info.states = sheep.getFSMRef().getState();
        info.groundId = sheep.groundColor;
        info.isItemSpeedUp = sheep.getItemEffectRef().hasItemWithType(Food::TYPE_SPEED_UP);
        [status->app.view updateSheepWithInfo:info];
    }
    void DefaultGameManagerObserver::onCreateDoor(sheep::GameManager &mgr, sheep::Door door){
        float stagecoords[2], stagecoords2[2];
        [SheepAlg getStageCoordsWithX:door.getP1().x Y:door.getP1().y result:stagecoords];
        [SheepAlg getStageCoordsWithX:door.getP2().x Y:door.getP2().y result:stagecoords2];
        SheepSheepInfo info;
        info.oid = door.oid;
        info.pos = GLKVector2Make(stagecoords[0], stagecoords[1]);
        info.pos2 = GLKVector2Make(stagecoords2[0], stagecoords2[1]);
        info.length = door.getLength();
        info.timer = door.getFSMRef().getTimer();
        info.states = door.getFSMRef().getState();
        [status->app.view createDoorWithInfo:info];
    }
    void DefaultGameManagerObserver::onCreateDoorButton(sheep::GameManager &mgr, sheep::DoorButton doorButton){
        SheepSheepInfo info;
        info.oid = doorButton.oid;
        info.pos = doorButton.pos;
        info.timer = doorButton.getFSMRef().getTimer();
        info.states = doorButton.getFSMRef().getState();
        [status->app.view createDoorButtonWithInfo:info];
    }
    void DefaultGameManagerObserver::onCreateJumpButton(sheep::GameManager &mgr, JumpButton jumpButton){
        SheepSheepInfo info;
        info.oid = jumpButton.oid;
        info.pos = jumpButton.pos;
        info.pos2 = jumpButton.getJumpTarget();
        info.timer = jumpButton.getFSMRef().getTimer();
        info.states = jumpButton.getFSMRef().getState();
        [status->app.view createJumpButtonWithInfo:info];
    }
    void DefaultGameManagerObserver::onUpdateJumpButton(sheep::GameManager &mgr, sheep::JumpButton jumpButton){
        SheepSheepInfo info;
        info.oid = jumpButton.oid;
        info.pos = jumpButton.pos;
        info.pos2 = jumpButton.getJumpTarget();
        info.timer = jumpButton.getFSMRef().getTimer();
        info.states = jumpButton.getFSMRef().getState();
        [status->app.view updateJumpButtonWithInfo:info];
    }
    void DefaultGameManagerObserver::onUpdateDoor(sheep::GameManager &mgr, sheep::Door door){
        SheepSheepInfo info;
        
        float stagecoords[2], stagecoords2[2];
        [SheepAlg getStageCoordsWithX:door.getP1().x Y:door.getP1().y result:stagecoords];
        [SheepAlg getStageCoordsWithX:door.getP2().x Y:door.getP2().y result:stagecoords2];
        info.oid = door.oid;
        info.pos = GLKVector2Make(stagecoords[0], stagecoords[1]);
        info.pos2 = GLKVector2Make(stagecoords2[0], stagecoords2[1]);
        info.length = door.getLength();
        
        info.timer = door.getFSMRef().getTimer();
        info.states = door.getFSMRef().getState();
        [status->app.view updateDoorWithInfo:info];
    }
    void DefaultGameManagerObserver::onUpdateDoorButton(sheep::GameManager &mgr, sheep::DoorButton doorButton){
        SheepSheepInfo info;
        info.oid = doorButton.oid;
        info.pos = doorButton.pos;
        info.timer = doorButton.getFSMRef().getTimer();
        info.states = doorButton.getFSMRef().getState();
        [status->app.view updateDoorButtonWithInfo:info];
    }
    void DefaultGameManagerObserver::onStartGameTimer( GameManager &mgr ){
        [status->app.view startGameTimer];
    }
    void DefaultGameManagerObserver::onUpdateGameTimer( GameManager &mgr, float timer ){
        [status->app.view updateGameTimer: timer];
    }
    void DefaultGameManagerObserver::onCreateFood( GameManager &mgr, Food food ){
        SheepFoodInfo info;
        info.oid = food.oid;
        info.pos = food.pos;
        [status->app.view createFoodWithInfo:info];
    }
    void DefaultGameManagerObserver::onCreateDog( GameManager &mgr, Dog dog ){
        SheepSheepInfo info;
        info.oid = dog.oid;
        info.pos = dog.pos;
        info.lockPos = dog.lockPos;
        info.timer = dog.getFSMRef().getTimer();
        info.states = dog.getFSMRef().getState();
        [status->app.view createDogWithInfo:info];
    }
    void DefaultGameManagerObserver::onUpdateDog( GameManager &mgr, Dog dog ){
        SheepSheepInfo info;
        info.oid = dog.oid;
        info.pos = dog.pos;
        info.timer = dog.getFSMRef().getTimer();
        info.states = dog.getFSMRef().getState();
        info.groundId = dog.groundColor;
        [status->app.view updateDogWithInfo:info];
    }
    void DefaultGameManagerObserver::onRemoveFood( GameManager &mgr, Food food ){
        SheepFoodInfo info;
        info.oid = food.oid;
        info.pos = food.pos;
        [status->app.view removeFoodWithInfo:info];
    }
    void DefaultGameManagerObserver::onLevelPass(sheep::GameManager &mgr, int level, float currtime ){
        status->loop = false;
        [status->app.view levelPassWithLevel:level usetime: currtime];
    }
}
