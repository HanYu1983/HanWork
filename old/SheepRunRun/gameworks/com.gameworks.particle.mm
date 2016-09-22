//
//  aaa.m
//  testEmpty4
//
//  Created by Rachel on 12/2/9.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import "com.gameworks.particle.h"

namespace com {
    namespace gameworks{
        namespace particle{
            
            SimpleEmitter::SimpleEmitter():
                gravity(GLKVector2Make(0, 1)),
                activeGravity(true),
                angle(0),
                angleRange(6.28),
                emitPositionFilter(0)
            {
                this->initParticle(200);
            }
            
            void SimpleEmitter::initParticle(int count){ 
                ps = vector<Particle>(count);
                for( int i=0; i<ps.size(); ++i )
                {
                    ps[i].active = false;
                    ps[i].timer = 0;
                }
            }
            int SimpleEmitter::findInactivePariticle( bool force ){
                if( force )
                    return rand()% ps.size();
                for( int i=0; i<ps.size(); ++i )
                    if( !ps[i].active )
                        return i;
                return -1;
            }
            void SimpleEmitter::emit(){
                for( int i=0; i<proto.size(); ++i ){
                    int inactive = findInactivePariticle(true);
                    if( inactive == -1 )
                        break;
                    GLKVector2 filterPos = pos;
                    if( emitPositionFilter )
                        filterPos = emitPositionFilter( filterPos );
                    ps[inactive].timer = 0;
                    ps[inactive].active = true;
                    ps[inactive].duration = proto[i].duration;
                    ps[inactive].group = proto[i].group;
                    ps[inactive].pos = filterPos;
                    float a = angle + ((rand()% 1000)/1000.0)* angleRange- angleRange/2;
                    ps[inactive].vel.x = cosf(a)* proto[i].speed;
                    ps[inactive].vel.y = sinf(a)* proto[i].speed;
                }
            }
            void SimpleEmitter::update(float elapsed){
                for( int i=ps.size()-1; i>=0; --i )
                {
                    Particle &p = ps[i];
                    if( !p.active )
                        continue;
                    if( p.timer > p.duration )
                    {
                        p.active = false;
                        continue;
                    }
                    p.timer += elapsed;
                    p.pos = GLKVector2Add(p.pos, p.vel);
                    if( activeGravity )
                        p.vel = GLKVector2Add(p.vel, gravity);
                }
            }
            
            GLKVector2 emitPositionFilterCircle( GLKVector2 pos, int radius ){
                float angle = (rand()% 6280)/ 1000;
                float len = (rand()% radius);
                int dx = cosf(angle)* len;
                int dy = sinf(angle)* len;
                return GLKVector2Make(pos.x+dx, pos.y+dy);
            }
        }
    }
}