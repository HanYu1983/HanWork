//
//  test.m
//  testEmpty4
//
//  Created by Rachel on 12/2/7.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import "com.gameworks.touch.h"
#import <algorithm>

namespace com {
    namespace gameworks{
        namespace touch{
            
            void SimpleTouch::handleTouchBegan(SimpleTouch &st, UIView *view, NSSet *touches){
                SimpleTouch *pst = &st;
                [touches enumerateObjectsUsingBlock:^(id obj, BOOL *stop) {
                    if( [obj phase] == UITouchPhaseBegan )
                    {
                        pst->addTouch([obj locationInView:view]);
                    }
                }];
            }
            
            void SimpleTouch::handleTouchEnded(SimpleTouch &st, UIView *view, NSSet *touches){
                SimpleTouch *pst = &st;
                [touches enumerateObjectsUsingBlock:^(id obj, BOOL *stop) {
                    if( [obj phase] != UITouchPhaseEnded )
                        return;
                    pst->removeTouch([obj locationInView:view]);
                }];
            }
            
            void SimpleTouch::handleTouchMoved(SimpleTouch &st, UIView *view, NSSet *touches){
                SimpleTouch *pst = &st;
                [touches enumerateObjectsUsingBlock:^(id obj, BOOL *stop) {        
                    if(  [obj phase] == UITouchPhaseMoved )
                    {
                        pst->updateTouch([obj locationInView:view]);
                    }
                }];
            }
            
            void SimpleTouch::handleTouchCancelled(SimpleTouch &st, UIView *view, NSSet *touches){
                st.cancelTouch();
            }
            
            int SimpleTouch::getCloseTouch(vector<TouchStore> ts, CGPoint p){
                int min = 9999999;
                int mid = -1;
                CGPoint d;
                for( int i=0; i<ts.size(); ++i )
                {
                    d.x = ts[i].p.x - p.x;
                    d.y = ts[i].p.y - p.y;
                    int disSq = d.x* d.x+ d.y* d.y;
                    if( disSq < min )
                    {
                        min = disSq;
                        mid = i;
                    }
                }
                return mid;
            }
            
            int SimpleTouch::addTouch(CGPoint p){
                TouchStore store;
                store.seq = seqcounter++;
                store.p = p;
                ts.push_back( store );
                return store.seq;
            }
            
            void SimpleTouch::updateTouch(CGPoint p){
                int mid = getCloseTouch(ts, p);
                if( mid!= -1 )
                {
                    ts[mid].p = p;
                }
            }
            
            int SimpleTouch::removeTouch(CGPoint p){
                int mid = getCloseTouch(ts, p);
                if( mid!= -1 )
                {
                    int ret = ts[mid].seq;
                    ts.erase(ts.begin()+mid);
                    return ret;
                }
                return -1;
            }
            
            void SimpleTouch::cancelTouch(){
                ts.clear();
            }

            
            
            void SimpleTouchHelper::update(SimpleTouch &st){
                begans.clear();
                ended.clear();
                vector<int> nold = old;
                old.clear();
                vector<SimpleTouch::TouchStore> now = st.getTouches();
                int nowLen = now.size();
                for( int i=0; i<nold.size(); ++i )
                {
                    int seq = nold[i];
                    int j;
                    for( j=0; j<nowLen; ++j )
                        if( now[j].seq == seq )
                            break;
                    if( j == nowLen )
                        ended.push_back(seq);
                }
                for( int i=0; i<nowLen; ++i )
                {
                    SimpleTouch::TouchStore &s = now[i];
                    vector<int>::iterator it = find(nold.begin(), nold.end(), s.seq);
                    if( it == nold.end() )
                        begans.push_back(s.seq);
                    old.push_back(s.seq);
                }
            }
        }
    }
}