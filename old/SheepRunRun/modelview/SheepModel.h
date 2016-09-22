//
//  SheepModel.h
//  testEmpty4
//
//  Created by Rachel on 12/1/13.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "SheepApp.h"
#import "SheepManager.h"
#import <QuartzCore/QuartzCore.h>

@protocol ISheepModelCallback <NSObject>
-(void) onloadResourceWithLevel:(int) level;
@end

typedef struct _SheepModelStatus{
    id<ISheepApp> app;
    int level;
    bool loadResourceLock;
    bool loop;
    double lasttime;
} SheepModelStatus;

@interface SheepModel : NSObject<ISheepModel> {
    id<ISheepModelCallback> _callback;
    sheep::GameManager::IObserver *_mgrObserver;
    sheep::GameManager _mgr;
    SheepModelStatus _status;
    CADisplayLink *_theTimer;
}
@property (nonatomic, assign) SheepModelStatus status;
-(id) initWithApp:(id<ISheepApp>) app
         callback:(id<ISheepModelCallback>) callback;
@end



namespace sheep {    
    class DefaultGameManagerObserver: public GameManager::IObserver{
        SheepModelStatus *status;
    public:
        DefaultGameManagerObserver( SheepModelStatus *status );
        void onShowTutorial( GameManager &mgr, int tutorialId );
        void onPlaySound( GameManager &mgr, NSString *name );
        void onLoadResource( GameManager &mgr, int level );
        void onCreateSheep( GameManager &mgr, Sheep sheep );
        void onCreateAntelope( GameManager &mgr, Sheep sheep );
        void onCreateDoor( GameManager &mgr, Door door );
        void onCreateDoorButton( GameManager &mgr, DoorButton doorButton );
        void onCreateJumpButton( GameManager &mgr, JumpButton jumpButton );
        void onUpdateDoor( GameManager &mgr, Door door );
        void onUpdateDoorButton( GameManager &mgr, DoorButton doorButton );
        void onUpdateJumpButton( GameManager &mgr, JumpButton jumpButton );
        void onUpdateSheep( GameManager &mgr, Sheep sheep );
        void onStartGameTimer( GameManager &mgr );
        void onUpdateGameTimer( GameManager &mgr, float timer );
        void onCreateFood( GameManager &mgr, Food food );
        void onCreateDog( GameManager &mgr, Dog dog );
        void onUpdateDog( GameManager &mgr, Dog dog );
        void onRemoveFood( GameManager &mgr, Food food );
        void onLevelPass( GameManager &mgr, int level, float usetime );
    };
}
