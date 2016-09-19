//
//  SheepEntity.h
//  testEmpty4
//
//  Created by Rachel on 12/1/10.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <GLKit/GLKit.h>
#import <vector>
#import <map.h>
#import "SheepAlg.h"
#import "../gameworks/com.gameworks.tool.h"

namespace sheep {
    using namespace com::gameworks::tool;
    
    class ItemEffect{
    public:
        struct Item{
            int type;
            float duration;
            float timer;
        };
    private:
        vector<Item> items;
    public:
        void addItem( Item item );
        int itemCountWithType(int type)const;
        bool hasItemWithType(int type)const;
        void update(float elapsed);
    };
    
    int getSidePointLine( float x, float y, float lx, float ly, float lx2, float ly2, float width );

    class Sheep;
    class Food;
    class Dog;
    class Door;
    class DoorButton;
    class JumpButton;
    
    struct IEnvObserver{
        virtual void onPlaySound(NSString *name)=0;
        virtual void onTimePlus(float time)=0;
    };
    
    struct Env{
        Map *map;
        vector<Sheep> *sheeps;
        vector<Door> doors;
        vector<DoorButton> doorButtons;
        vector<JumpButton> jumpButtons;
        vector<Food> foods;
        vector<Dog> dogs;
        Sheep *getCloseSheep( GLKVector2 pos, int distance );
        Door *findDoor( char group );
        IEnvObserver *ob;
        void playSound( NSString *name ){
            ob->onPlaySound(name);
        }
        void timePlus( float time ){
            ob->onTimePlus(time);
        }
    };
    
    class Entity{
    protected:
        Entity();
        Env *env;
        FSM fsm;
        ItemEffect itemEffect;
    public:
        int oid;
        GLKVector2 pos;
        unsigned int groundColor;
        float timer;
        bool remove;
    public:
        virtual ~Entity(){}
        explicit Entity( Env *env );
        ItemEffect &getItemEffectRef(){ return itemEffect; };
        void updateTimer( float elapsed ){ this->timer += elapsed; }
        virtual void update( float elapsed ){}
    };
    
    class Door: public Entity, public FSM::IObserver{
        NSArray *line, *line2, *line3, *line4;
        Pointi p1, p2, p3, p4;
        float length;
        char group;
    protected:
        FSM fsm;
    public:
        enum{
            STATE_CLOSE,
            STATE_OPEN
        };
        explicit Door( Env *env, char group, Pointi p1, Pointi p2 );
        Door( const Door & );
        ~Door();
        bool hasSheep();
        float getLength()const{ return length; }
        Pointi getP1()const{ return p1;}
        Pointi getP2()const{ return p2;}
        FSM &getFSMRef(){ return fsm; }
        char getGroup()const{ return group; }
        void closeDoor();
        void openDoor();
        void update( float elapsed );
        void onEnter( FSM *fsm );
        void onExit( FSM *fsm );
        void onUpdate( FSM *fsm, float elapsed );
    };
    
    class DoorButton: public Entity, public FSM::IObserver{
        char group;
    protected:
        FSM fsm;
    public:
        enum{
            STATE_RELEASED,
            STATE_PRESSED,
            STATE_WAIT_FOR_SHEEP_GO_AWAY
        };
        int radius;
        DoorButton( Env *env, char group );
        DoorButton( const DoorButton & );
        FSM &getFSMRef(){ return fsm; }
        void release();
        void press();
        void triggerDoorOpen();
        bool triggerDoorClose();
        void update( float elapsed );
        void onEnter( FSM *fsm );
        void onExit( FSM *fsm );
        void onUpdate( FSM *fsm, float elapsed );
    };
    
    class JumpButton: public Entity, public FSM::IObserver{
        GLKVector2 jumpTarget;
    protected:
        FSM fsm;
    public:
        enum{
            STATE_NORMAL,
            STATE_OPEN
        };
        int radius;
        JumpButton( Env *env, GLKVector2 jumpTarget );
        JumpButton( const JumpButton &rhs );
        GLKVector2 getJumpTarget()const{ return jumpTarget; }
        FSM &getFSMRef(){ return fsm; }
        void update( float elapsed );
        void onEnter( FSM *fsm );
        void onExit( FSM *fsm );
        void onUpdate( FSM *fsm, float elapsed );
    };
    
    class Food: public Entity{
    public:
        int type;
        enum{
            TYPE_SPEED_UP,
            TYPE_TIME_PLUS,
            TYPE_NOT_SCARE_DOG,
            TYPE_NOT_SCARE_SLOW,
            TYPE_NOT_SCARE_RIVER,
            TYPE_NOT_SCARE_ICE,
            TYPE_NOT_SCARE_WATER,
            TYPE_NOT_SCARE_BEAR,
            TYPE_NOT_SCARE_SNAKE
        };
        bool tag;
        //使用removed代替erase，因為使用靜態配置Food，陣列中每個元素的位置不可讓它變動，否則指向元素的指標會全部失效。若要列舉(循訪)，則跳過removed為真的元素//
        bool removed;
        explicit Food( Env *env ):Entity(env), type(TYPE_SPEED_UP), tag(false), removed(false){}
        static ItemEffect::Item getItemWithType(int type);
    };
    
    class Mover: public Entity{
    protected:
        Mover();
        GLKVector2 targetPos, oldPos;
        bool activeTargetPos;
    public:
        GLKVector2 lastValidPos;
        float speed;
        float moveFactor;
    public:
        virtual ~Mover(){}
        explicit Mover( Env *env );
        void updatePos( float elapsed );
        struct UpdatePosOption{
            const char *type;
            const char *type2;
        };
        virtual void updatePos( float elapsed, UpdatePosOption option );
        void forceTargetPos( GLKVector2 pos ){
            targetPos = pos;
            activeTargetPos = true;
        }
        virtual void shouldMoveTo( GLKVector2 pos );
        virtual void update( float elapsed ){}
    };
    
    class Sheep;
    
    class Dog: public Mover, public FSM::IObserver{
        Dog();
    protected:
        FSM fsm;
        Sheep *targetSheep;
    public:
        GLKVector2 lockPos;
        enum{
            STATE_NORMAL,
            STATE_ATTACK,
            STATE_SLEEP,
            STATE_MOVE
        };
        enum{
            TYPE_LOCK_DOG,  // *鎖著的惡狗 //
            TYPE_BEAR, // *熊 //
            TYPE_SNAKE // *蛇 //
        };
        int type;
        explicit Dog( Env *env );
        Dog( const Dog &dog );
        FSM &getFSMRef(){ return fsm; }
        bool isUnlockAnimal()const{
            return type == TYPE_BEAR || type == TYPE_SNAKE;
        }
        void selectNewMovePos();
        bool boundsToLockPos();
        bool getPosToReachTargetSheep();
        bool checkSheepForAttack();
        void update( float elapsed );
        void onEnter( FSM *fsm );
        void onExit( FSM *fsm );
        void onUpdate( FSM *fsm, float elapsed );
    };
    
    
    
    Sheep createControlEntity( int type, Env *env, GLKVector2 pos, int group );
    
    class Sheep: public Mover, public FSM::IObserver{
        Sheep();
    protected:
        FSM fsm;
        const vector<Riveri> *targetRiver;
        Food *targetFood;
        float headInWater;
    public:
        int type, mid;
        bool canJump, isTouchGoal, moveFromDog;
        float swimSpeed;
        int runDistance, runAwayAttackDistance;
        char group;
    public:
        // 這個列舉的順序不能變。SheepView會使用到 //
        enum{
            STATE_NORMAL,
            STATE_MOVE,
            STATE_JUMP,
            STATE_FELL_INTO_WATER,
            STATE_SWIM,
            STATE_FELL_INTO_RIVER,
            STATE_IN_RIVER,
            STATE_LOCK_ON_FOOD,
            STATE_EAT_FOOD,
            STATE_GET_WATER_OUT,
            STATE_GRAB,
            STATE_HOLD,
            STATE_UNHOLD,
            STATE_DOG_MOVE,
            STATE_FALL_INTO_ICE,
        };
        enum{
            TYPE_SHEEP = SHEEP_TYPE_SHEEP,     //*綿羊
            TYPE_ANTELOPE = SHEEP_TYPE_ANTELOPE,  //*羚羊。會跳
            TYPE_BOX = SHEEP_TYPE_BOX,   //*箱子。
            TYPE_PIG = SHEEP_TYPE_PIG,   //*豬。不怕沼澤
            TYPE_DOG = SHEEP_TYPE_DOG,   //*狗。羊會逃離。在冰上為可控
            TYPE_HIPPO = SHEEP_TYPE_HIPPO, //*河馬。在池溏裡可控
        };
        explicit Sheep( Env *env );
        Sheep( const Sheep &rhs );
        FSM &getFSMRef(){ return fsm; }
        bool isNotDogTarget()const{
            return
                itemEffect.hasItemWithType(Food::TYPE_NOT_SCARE_DOG) ||
                type == TYPE_BOX || type == TYPE_DOG || type == TYPE_HIPPO;
        }
        bool isCanTouchMove()const{
            return type != TYPE_BOX;
        }
        bool isEnableJumpButton()const{ 
            return fsm.getState() == STATE_NORMAL || fsm.getState() == STATE_MOVE; 
        }
        bool isEnableDoorButton()const{
            return isEnableJumpButton();
        }
        bool isNotScareDog()const{ 
            return 
                itemEffect.hasItemWithType(Food::TYPE_NOT_SCARE_DOG) ||
                itemEffect.hasItemWithType(Food::TYPE_SPEED_UP) ||
                type == TYPE_BOX || 
                type == TYPE_DOG ||
                type == TYPE_HIPPO;
        }
        bool isNotScareRiver()const{
            return
                itemEffect.hasItemWithType(Food::TYPE_NOT_SCARE_RIVER);
        }
        bool isNotScareWater()const{
            return 
                type == TYPE_HIPPO ||
                itemEffect.hasItemWithType(Food::TYPE_NOT_SCARE_WATER );
        }
        bool isNotScareIce()const{
            return
                type == TYPE_DOG ||
                itemEffect.hasItemWithType(Food::TYPE_NOT_SCARE_ICE);
        }
        bool isNotScareSlow()const{
            return
                type == TYPE_PIG ||
                itemEffect.hasItemWithType(Food::TYPE_NOT_SCARE_SLOW);
        }
        bool isCanEatFood()const{
            return 
                type == TYPE_SHEEP || type == TYPE_ANTELOPE ||
                type == TYPE_PIG || type == TYPE_HIPPO;
        }
        bool isCanChangePositionFromEnv()const{
            if( type == TYPE_HIPPO )
            {
                switch( fsm.getState() )
                {
                    case STATE_MOVE:
                    case STATE_NORMAL:
                    case STATE_FELL_INTO_WATER:
                        return true;
                    default:
                        return false;
                }
            }
            else if( type == TYPE_DOG )
            {
                switch( fsm.getState() )
                {
                    case STATE_MOVE:
                    case STATE_NORMAL:
                    case STATE_FALL_INTO_ICE:
                        return true;
                    default:
                        return false;
                }
            }
            else
                return fsm.getState() == STATE_MOVE || fsm.getState() == STATE_NORMAL;
        }
        void jump( GLKVector2 target );
        bool dogChange( GLKVector2 pos );
        bool mouseChange( GLKVector2 pos );
        void shouldMoveTo( GLKVector2 pos );
        void update( float elapsed );
        bool updatePath( float elapsed );
        void grab();
        void ungrab();
        void hold();
        void unhold();
        void hold( int mid );
        void unhold( int mid, GLKVector2 pos );
        void checkTouchGoal();
        void onEnter( FSM *fsm );
        void onExit( FSM *fsm );
        void onUpdate( FSM *fsm, float elapsed );
    };
    
    
};