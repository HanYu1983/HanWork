//
//  aaa.h
//  testEmpty4
//
//  Created by Rachel on 12/2/9.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <AVFoundation/AVFoundation.h>

namespace com {
    namespace gameworks{
        namespace tool{
            
            class FSM{
            public:
                class IObserver{
                public:
                    virtual ~IObserver(){}
                    virtual void onEnter( FSM *fsm )=0;
                    virtual void onExit( FSM *fsm )=0;
                    virtual void onUpdate( FSM *fsm, float elapsed )=0;
                };
            private:
                int prevState;
                int state;
                float timer;
            public:
                enum{
                    STATE_NONE = -999999
                };
                IObserver *observer;
                FSM();
                void changeStage( int state, bool force );
                void setState( int state ){ this->state = state; }
                int getPrevState()const{ return prevState; }
                int getState()const{ return state; }
                float getTimer()const{ return timer; }
                void update( float elapsed );
            };
            
            void getHMS( float time, int *hour, int *minutes, int *seconds );
            NSString *fullstr( NSString *str, bool front, char c, int len );
            UIImage *allocUIImage( NSString *filename, NSString *ext );
            AVAudioPlayer *allocAudioPlayer( NSString *filename, NSString *ext );
        }
    }
}