//
//  com.gameworks.h
//  
//
//  Created by Rachel on 12/1/18.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>

namespace com{
    namespace gameworks{
        namespace seqment{
            struct Seqments{
                float *xs,*ys;
                int count, width;
                explicit Seqments( int count, int width );
                ~Seqments();
            };
            void drag( Seqments &seq, float tx, float ty );
            void reach( Seqments &seq, float tx, float ty );
        }
    }
}