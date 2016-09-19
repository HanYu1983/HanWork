//
//  aaa.m
//  testEmpty4
//
//  Created by Rachel on 12/2/9.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import "com.gameworks.tool.h"

namespace com {
    namespace gameworks{
        namespace tool{

            FSM::FSM():prevState(STATE_NONE),state(STATE_NONE),timer(0),observer(0){}
            void FSM::changeStage(int state, bool force){
                if( force || this->state != state )
                {
                    if( prevState != STATE_NONE )
                        if( observer )
                            observer->onExit(this);
                    this->prevState = this->state;
                    this->state = state;
                    this->timer = 0;
                    if( this->state != STATE_NONE )
                        if( observer )
                            observer->onEnter(this);
                }
            }
            void FSM::update(float elapsed){
                observer->onUpdate(this, elapsed);
                this->timer += elapsed;
            }
            
            
            void getHMS( float time, int *hour, int *minutes, int *seconds ){
                int total = time;
                *hour = (total/ 3600)%60;
                *minutes = (total/ 60)%60;
                *seconds = total%60;
            }
            
            NSString *fullstr( NSString *str, bool front, char c, int len ){
                while( str.length < len )
                    if( front )
                        str = [NSString stringWithFormat:@"%c%@", c, str];
                    else
                        str = [NSString stringWithFormat:@"%@%c", str, c];
                return str;
            }
            
            UIImage *allocUIImage( NSString *filename, NSString *ext ){
                NSString *path = [[NSBundle mainBundle] pathForResource:filename ofType:ext];
                return [[UIImage alloc] initWithContentsOfFile:path];
            }
            
            AVAudioPlayer *allocAudioPlayer( NSString *filename, NSString *ext ){
                filename = [[NSBundle mainBundle] pathForResource:filename ofType:ext];
                NSURL *url = [NSURL fileURLWithPath: filename];
                NSError *error=0;
                AVAudioPlayer *player = [[AVAudioPlayer alloc] initWithContentsOfURL:url error:&error];
                if( error )
                {
                    NSLog(@"[com::gameworks::tool::allocAudioPlayer]error with path %@", filename);
                    throw "";
                }
                return player;
            }
        }
    }
}