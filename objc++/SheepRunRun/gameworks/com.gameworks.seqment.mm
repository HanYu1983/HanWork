//
//  com.gameworks.seqment
//  
//
//  Created by Rachel on 12/1/18.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import "com.gameworks.seqment.h"

namespace com{
    namespace gameworks{
        namespace seqment{
            Seqments::Seqments(int count, int width):count(count), width(width){
                xs = new float[count];
                ys = new float[count];
                for( int i=0; i<count; ++i )
                {
                    xs[i] = i* width;
                    ys[i] = 0;
                }
            }
            Seqments::~Seqments(){
                delete [] xs;
                delete [] ys;
            }
            
            void drag( Seqments &seq, float tx, float ty ){
                for( int i=0; i<seq.count; ++i )
                {
                    if( i ==0 )
                    {
                        seq.xs[i] = tx;
                        seq.ys[i] = ty;
                    }
                    else
                    {
                        float
                            x1 = seq.xs[i-1],
                            y1 = seq.ys[i-1],
                            x2 = seq.xs[i],
                            y2 = seq.ys[i],
                            dx = x2 - x1,
                            dy = y2 - y1,
                            len = sqrtf( dx* dx + dy* dy );
                        x2 = x1 + dx* seq.width/ len;
                        y2 = y1 + dy* seq.width/ len;
                        seq.xs[i] = x2;
                        seq.ys[i] = y2;
                    }
                }
            }
            
            void reach( Seqments &seq, float tx, float ty ){
                float angles[seq.count-1];
                for( int i=1; i<seq.count; ++i )
                {
                    float 
                        x1 = tx,
                        y1 = ty,
                        x2 = seq.xs[i],
                        y2 = seq.ys[i],
                        dx = x2 - x1,
                        dy = y2 - y1,
                        len = sqrtf( dx* dx+ dy* dy );
                    tx = tx+ dx* seq.width/ len;
                    ty = ty+ dy* seq.width/ len;
                    angles[i-1] = atan2f(-dy, -dx);
                }
                for( int i=seq.count-2; i>=0; --i )
                {
                    seq.xs[i] = seq.xs[i+1]+ cosf( angles[i] )* seq.width;
                    seq.ys[i] = seq.ys[i+1]+ sinf( angles[i] )* seq.width;
                }
            }
        }
    }
}