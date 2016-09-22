//
//  test.h
//  testEmpty4
//
//  Created by Rachel on 12/2/7.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <vector>

namespace com {
    namespace gameworks{
        namespace touch{
            using namespace std;
            
            
            class SimpleTouch{
            public:
                struct TouchStore{
                    int seq;
                    CGPoint p;
                };
            private:
                int seqcounter;
                vector<TouchStore> ts;
                static int getCloseTouch( vector<TouchStore> ts, CGPoint p );
            public:
                static void handleTouchBegan( SimpleTouch &st, UIView *view, NSSet *touches );
                static void handleTouchEnded( SimpleTouch &st, UIView *view, NSSet *touches );
                static void handleTouchMoved( SimpleTouch &st, UIView *view, NSSet *touches );
                static void handleTouchCancelled( SimpleTouch &st, UIView *view, NSSet *touches );
                vector<TouchStore> getTouches()const{ return ts; }
                TouchStore getTouch(int seq)const{ 
                    for( int i=0; i<ts.size(); ++i )
                        if( ts[i].seq == seq )
                            return ts[i];
                    throw "SimpleTouch -> impossible";
                }
                void cancelTouch();
                int addTouch( CGPoint p );
                int removeTouch( CGPoint p );
                void updateTouch( CGPoint p );
            };


            class SimpleTouchHelper{
                vector<int> begans;
                vector<int> ended;
                vector<int> old;
            public:
                vector<int> getBegans()const{ return begans; }
                vector<int> getEnded()const{ return ended; }
                void update( SimpleTouch &st );
            };
        }
    }
}