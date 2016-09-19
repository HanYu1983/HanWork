//
//  ttt.h
//  SheepRunRun
//
//  Created by Rachel on 12/4/10.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "com.gameworks.opengl.shader.image.h"
#import "com.gameworks.tool.h"

@protocol ComGameworksObjCTimelineObserver;

@interface ComGameworksObjCTimeline : NSObject {
    CADisplayLink *_displayLink;
    NSMutableArray *_obs;
    double _timer, _elapsed, _lasttime;
    int _tick;
}
@property (readonly) CADisplayLink *displayLink;
@property (readonly) double timer, elasped, lasttime;
@property (readonly) int tick;

-(double) getDurationWithFrameCount:(int) fc;

-(void) notifyLoop;
-(void) notifyEndLoop;
-(void) notifyStartLoop;

-(void) startLoopWithInterval:(float) interval;
-(void) endLoop;

-(void) addListener:(id<ComGameworksObjCTimelineObserver>) ob;
@end


@protocol ComGameworksObjCTimelineObserver <NSObject>
-(void) onStartLoop:(ComGameworksObjCTimeline*) timeline;
-(void) onLoop:(ComGameworksObjCTimeline*) timeline;
-(void) onEndLoop:(ComGameworksObjCTimeline*) timeline;
@end



struct ComGameworksObjCTimelineTransformViewKeyFrame{
    int frameInterval;
    UIViewAnimationCurve curve;
    CGAffineTransform transform;
};
@interface ComGameworksObjCTimelineTransformView : UIView<ComGameworksObjCTimelineObserver> {
    bool _transformTransition;
    int _totalFrame;
    std::map<int, ComGameworksObjCTimelineTransformViewKeyFrame> _kf;
}
@property (nonatomic, assign) int totalFrame;
@property (nonatomic) bool transformTransition;
@property (nonatomic) std::map<int, ComGameworksObjCTimelineTransformViewKeyFrame> kf;
@end



@protocol ComGameworksObjCTimelineAnimation <NSObject>
-(void) restoreWithFrameIndex:(int) index;
@end

@protocol ComGameworksObjCTimelineIMovieClip <ComGameworksObjCTimelineAnimation,ComGameworksObjCTimelineObserver>
-(void) setFrameIndex:(int) index;
-(void) gotoAndPlay:(int) index;
-(void) gotoAndStop:(int) index;
-(void) nextFrame;
-(void) prevFrame;
@end


@interface ComGameworksObjCTimelineAbstractMovieClip : UIView<ComGameworksObjCTimelineIMovieClip>{
    int _frameIndex;
    int _totalFrame;
    BOOL _stop;
    BOOL _loop;
    BOOL _backward;
}
@property (nonatomic) int totalFrame;
@property (nonatomic) BOOL stop, loop, backward;
@property (nonatomic, readonly) int frameIndex;
@end


@interface ComGameworksObjCTimelineImageMovieClip : ComGameworksObjCTimelineAbstractMovieClip {
    UIView *_clipView;
    UIImageView *_animImageView;
    CGPoint _center;
}

@property (nonatomic, assign) UIImage *image;
@property (nonatomic, readonly) UIView *clipView;
@property (nonatomic, assign) CGPoint center;
-(void) setSourceRect:(CGRect) rect;
-(void) setSourceRectWithAnimation:(com::gameworks::opengl::shader::image::IPAnimation) animation
                             frame:(int) frame;
-(void) setSourceRectWithActionAnimation:(com::gameworks::opengl::shader::image::IPActionAnimation) action
                                    time:(float) time;
-(void) setSourceRectWithRoleSkin:(com::gameworks::opengl::shader::image::IPRoleSkin) role
                             time:(float) time
                           action:(int) action;
@end

@interface ComGameworksObjCTimelineImageAnimationMovieClip : ComGameworksObjCTimelineImageMovieClip {
    com::gameworks::opengl::shader::image::IPAnimation _animation;
}
@property (nonatomic, assign) com::gameworks::opengl::shader::image::IPAnimation animation;
@end


@interface ComGameworksObjCTimelineImageRoleSkinMovieClip : ComGameworksObjCTimelineImageMovieClip {
    com::gameworks::tool::FSM _fsm;
    com::gameworks::opengl::shader::image::IPRoleSkin _role;
}
@property (nonatomic, assign) com::gameworks::opengl::shader::image::IPRoleSkin role;
-(com::gameworks::tool::FSM*) getFSMPointer;
@end
