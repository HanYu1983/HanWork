//
//  SheepApp.h
//  testEmpty4
//
//  Created by Rachel on 12/1/13.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <GLKit/GLKit.h>

enum{
    SHEEP_ACTION_NORMAL,
    SHEEP_ACTION_MOVE
};

struct SheepFood{
    int oid;
    float timer;
    GLKVector2 pos;
};

struct SheepSheepInfo{
    int oid;
    int type;
    int states;
    int groundId;
    char group;
    float timer;
    GLKVector2 pos, oldpos, lockPos;
    GLKVector2 pos2;
    float length;
    float angle;
    float angleFilter;
    bool isTouchGoal;
    bool isItemSpeedUp;
};

struct SheepFoodInfo{
    int oid;
    GLKVector2 pos;
};

@protocol ISheepModel <NSObject>
-(bool) isGame;
-(void) loadResourceWithLevel:(int) level;
-(void) nextLevel;
-(void) restartLevel;
-(void) startGame;
-(void) pauseGame;
-(void) resumeGame;
-(void) mouseChangeWithID:(int) mouseId
                        X:(int) x
                        Y:(int) y;
-(void) mouseDownWithID:(int) mouseId
                      X:(int) x
                      Y:(int) y;
-(void) mouseUpWithID:(int) mouseID;
-(void) mouseCancelled;
-(void) destory;
-(bool) isAllPassed;
@end


@protocol ISheepView <NSObject>
-(void) loadResourceWithLevel:(int) level;
-(void) createSheepWithInfo:(SheepSheepInfo) info;
-(void) createFoodWithInfo:(SheepFoodInfo) info;
-(void) removeFoodWithInfo:(SheepFoodInfo) info;
-(void) createJumpButtonWithInfo:(SheepSheepInfo) info;
-(void) createDoorWithInfo:(SheepSheepInfo) info;
-(void) createDoorButtonWithInfo:(SheepSheepInfo) info;
-(void) createDogWithInfo:(SheepSheepInfo) info;
-(void) updateJumpButtonWithInfo:(SheepSheepInfo) info;
-(void) updateDoorButtonWithInfo:(SheepSheepInfo) info;
-(void) updateDoorWithInfo:(SheepSheepInfo) info;
-(void) updateDogWithInfo:(SheepSheepInfo) info;
-(void) updateSheepWithInfo:(SheepSheepInfo) info;
-(void) updateGameTimer:(float) timer;
-(void) levelPassWithLevel:(int) level
                   usetime:(float) usetime;
-(void) startGameTimer;
-(void) levelBreak;
-(void) mouseCancelled;
-(void) destory;
-(void) playSound:(NSString*) name;
-(void) showTutorial:(int) tutorialId;
@end


@protocol ISheepApp <NSObject>
@property (nonatomic, readonly) id<ISheepModel> model;
@property (nonatomic, readonly) id<ISheepView> view;
@end