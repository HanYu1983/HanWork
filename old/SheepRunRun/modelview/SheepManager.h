//
//  SheepManager.h
//  testEmpty4
//
//  Created by Rachel on 12/1/13.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <vector>
#import <set>
#import "SheepEntity.h"

namespace sheep{
    using namespace std;
    
    class SheepManager{
    public:
        class IObserver{
        public:
            virtual ~IObserver(){}
            virtual void onCreateSheep( SheepManager &mgr, Sheep sheep )=0;
            virtual void onCreateAntelope( SheepManager &mgr, Sheep sheep )=0;
            virtual void onUpdateSheep( SheepManager &mgr, Sheep sheep )=0;
        };
    private:
        vector<Sheep> sheeps;
    public:
        IObserver *observer;
        Env *env;
    public:
        SheepManager();
        void clearAll(){ sheeps.clear(); }
        void createEntity( GLKVector2 pos, char group );
        void createSheep( GLKVector2 pos, char group );
        void createAntelope( GLKVector2 pos, char group );
        void update( float elapsed );
        void mouseUp( int mid, int x, int y );
        void mouseDown( int mid, int x, int y );
        bool mouseChange( int x, int y );
        bool dogChange( int x, int y );
        vector<Sheep> *getSheepsPtr(){ return &sheeps; }
    };
    
    class GameManager:public SheepManager::IObserver, public FSM::IObserver, public IEnvObserver{
    public:
        class IObserver{
        public:
            ~IObserver(){}
            virtual void onShowTutorial( GameManager &mgr, int tutorialId )=0;
            virtual void onPlaySound( GameManager &mgr, NSString *name)=0;
            virtual void onLoadResource( GameManager &mgr, int level )=0;
            virtual void onCreateSheep( GameManager &mgr, Sheep sheep )=0;
            virtual void onCreateAntelope( GameManager &mgr, Sheep sheep )=0;
            virtual void onCreateFood( GameManager &mgr, Food food )=0;
            virtual void onCreateDog( GameManager &mgr, Dog dog )=0;
            virtual void onCreateDoor( GameManager &mgr, Door door )=0;
            virtual void onCreateDoorButton( GameManager &mgr, DoorButton doorButton )=0;
            virtual void onCreateJumpButton( GameManager &mgr, JumpButton jumpButton )=0;
            virtual void onUpdateJumpButton( GameManager &mgr, JumpButton jumpButton )=0;
            virtual void onUpdateDoorButton( GameManager &mgr, DoorButton doorButton )=0;
            virtual void onUpdateDoor( GameManager &mgr, Door door )=0;
            virtual void onUpdateSheep( GameManager &mgr, Sheep sheep )=0;
            virtual void onUpdateDog( GameManager &mgr, Dog dog )=0;
            virtual void onRemoveFood( GameManager &mgr, Food food )=0;
            virtual void onStartGameTimer( GameManager &mgr ) =0;
            virtual void onUpdateGameTimer( GameManager &mgr, float timer )=0;
            virtual void onLevelPass( GameManager &mgr, int level, float usetime )=0;
        };
    private:
        int currlevel;
        //bool waitForMoved;
        Env env;
        float currtime;
        SheepManager sheepMgr;
        unsigned int *rgbdata;
        Sheep *grabSheep;
        FSM fsm;
        map<int, Pointi> ms, msUp, msDown;
    public:
        enum{
            STATE_NONE,
            STATE_GAME
        };
        IObserver *observer;
        Pointi mouse;
        GameManager();
        ~GameManager();
        void onPlaySound(NSString *name);
        void onTimePlus(float time);
        void loadResource( int level );
        void update( float elapsed );
        void mouseDown( int mid, int x, int y );
        void mouseUp( int mid );
        void mouseChange( int mid, int x, int y );
        void mouseCancelled();
        void levelBreak();
        void grabDown( int x, int y );
        void grabMove( int x, int y );
        void grabUp();
        void grabItemStart();
        void grabItemEnd();
        void destroy();
        bool testGrabItem( int x, int y );
        int getCurrLevel()const{ return currlevel; }
        void onUpdateSheep( SheepManager &mgr, Sheep sheep );
        void onCreateSheep( SheepManager &mgr, Sheep sheep );
        void onCreateAntelope( SheepManager &mgr, Sheep sheep );
        void onEnter( FSM *fsm );
        void onExit( FSM *fsm );
        void onUpdate( FSM *fsm, float elapsed );
    };
}