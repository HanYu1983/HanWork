//
//  aaa.h
//  testEmpty4
//
//  Created by Rachel on 12/2/9.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <GLKit/GLKit.h>
#import <map>
#import <vector>

namespace com {
    namespace gameworks{
        namespace particle{
            using namespace std;
            
            class SimpleEmitter{
            public:
                struct Particle{
                    int group;
                    GLKVector2 pos, vel;
                    float timer, duration, speed;
                    bool active;
                };
            private:
                vector<Particle> proto;
                vector<Particle> ps;
                int findInactivePariticle( bool force = false );
            public:
                bool activeGravity;
                GLKVector2 pos,gravity;
                float angle, angleRange;
                GLKVector2 (*emitPositionFilter)( GLKVector2 pos );
                SimpleEmitter();
                void registerParticle( Particle p ){
                    proto.push_back(p);
                }
                vector<Particle> &getParticlesRef(){ return ps; }
                void initParticle(int count);
                void emit();
                void update( float elapsed );
            };
            
            GLKVector2 emitPositionFilterCircle( GLKVector2 pos, int radius );
        }
    }
}