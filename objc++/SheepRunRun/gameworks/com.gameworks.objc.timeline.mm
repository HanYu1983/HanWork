//
//  ttt.m
//  SheepRunRun
//
//  Created by Rachel on 12/4/10.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import "com.gameworks.objc.timeline.h"
#import <QuartzCore/QuartzCore.h>


@implementation ComGameworksObjCTimeline

@synthesize
displayLink = _displayLink,
timer = _timer,
elasped = _elapsed,
lasttime = _lasttime,
tick = _tick;

-(double) getDurationWithFrameCount:(int)fc;
{
    return _displayLink.duration* _displayLink.frameInterval* fc;
}

-(void) loop;
{
    [self notifyLoop];
    ++_tick;
    double curr = CFAbsoluteTimeGetCurrent();
    _elapsed = curr - _lasttime;
    _timer += _elapsed;
    _lasttime = curr;
}

-(id) init{
    if( self = [super init] ){
        _displayLink = [CADisplayLink displayLinkWithTarget:self selector:@selector(loop)];
        _obs = [[NSMutableArray alloc] init];
        _timer = 0;
        _elapsed = 0;
        _tick = 0;
    }
    return self;
}

-(void) dealloc;
{
    [self endLoop];
    [_obs release];
    [super dealloc];
}

-(void) addListener:(id<ComGameworksObjCTimelineObserver>) ob;
{
    [_obs addObject:ob];
}

-(void) startLoopWithInterval:(float) interval;
{
    // 不註解掉會bed_access
    //[self endLoop];
    _displayLink.frameInterval = interval;
    _lasttime = CFAbsoluteTimeGetCurrent();
    [_displayLink addToRunLoop:[NSRunLoop currentRunLoop] forMode:NSDefaultRunLoopMode];
    [self notifyStartLoop];
}

-(void) endLoop;
{
    [_displayLink removeFromRunLoop:[NSRunLoop currentRunLoop] forMode:NSDefaultRunLoopMode];
    [self notifyEndLoop];
}


-(void) notifyLoop;
{
    for( id<ComGameworksObjCTimelineObserver> ob in _obs )
        [ob onLoop:self];
}

-(void) notifyEndLoop;
{
    for( id<ComGameworksObjCTimelineObserver> ob in _obs )
        [ob onEndLoop:self];
}

-(void) notifyStartLoop;
{
    for( id<ComGameworksObjCTimelineObserver> ob in _obs )
        [ob onStartLoop:self];
}

@end




@implementation ComGameworksObjCTimelineTransformView

@synthesize 
kf = _kf,
totalFrame = _totalFrame,
transformTransition = _transformTransition;

-(void) onStartLoop:(ComGameworksObjCTimeline *)timeline;
{
    
}

-(void) onEndLoop:(ComGameworksObjCTimeline *)timeline;
{
    
}

-(void) onLoop:(ComGameworksObjCTimeline *)timeline;
{
    int tick = timeline.tick % _totalFrame;
    if( _kf.find(tick) == _kf.end() )
        return;
    ComGameworksObjCTimelineTransformViewKeyFrame kf = _kf[tick];
    [UIView beginAnimations:@"test" context:nil];
    [UIView setAnimationCurve:UIViewAnimationCurveLinear];
    [UIView setAnimationDuration: [timeline getDurationWithFrameCount:kf.frameInterval]];
    if( _transformTransition )
        self.transform = kf.transform;
    [UIView commitAnimations];
}

@end




@implementation ComGameworksObjCTimelineAbstractMovieClip

@synthesize
totalFrame = _totalFrame,
frameIndex = _frameIndex,
stop = _stop,
loop = _loop,
backward = _backward;

-(id) init;
{
    if( self = [super init] )
    {
        _stop = _backward = NO;
        _loop = true;
        _totalFrame = 1;
        _frameIndex = 0;
    }
    return self;
}

-(id) initWithFrame:(CGRect)frame;
{
    if( self = [super initWithFrame:frame] )
    {
        _stop = _backward = NO;
        _loop = true;
        _totalFrame = 1;
        _frameIndex = 0;
    }
    return self;
}
-(void) onStartLoop:(ComGameworksObjCTimeline*) timeline;
{
    
}

-(void) onLoop:(ComGameworksObjCTimeline*) timeline;
{
    if( _stop )
        return;
    if( _backward )
        [self prevFrame];
    else
        [self nextFrame];
    for( int i=0; i<self.subviews.count; ++i )
    {
        id view = [self.subviews objectAtIndex:i];
        if( [view respondsToSelector:@selector(onLoop:)] )
            [view onLoop:timeline];
    }
}

-(void) onEndLoop:(ComGameworksObjCTimeline*) timeline;
{
    
}

-(void) restoreWithFrameIndex:(int) index;
{
    
}
-(void) setFrameIndex:(int) index;
{
    if(index<0 || index>=_totalFrame)
        index = ((index% _totalFrame)+_totalFrame) %_totalFrame;
    _frameIndex = index;
    [self restoreWithFrameIndex:_frameIndex];
}
-(void) gotoAndPlay:(int) index;
{
    _stop = NO;
    [self setFrameIndex:index];
}
-(void) gotoAndStop:(int) index;
{
    _stop = YES;
    [self setFrameIndex:index];
}
-(void) nextFrame;
{
    if( ++_frameIndex>= _totalFrame )
        if( _loop )
            _frameIndex = 0;
        else 
            _frameIndex = _totalFrame - 1;
    [self setFrameIndex:_frameIndex];
}
-(void) prevFrame;
{
    if( --_frameIndex<= 0 )
        if( _loop )
            _frameIndex = _totalFrame-1;
        else
            _frameIndex = 0;
    [self setFrameIndex:_frameIndex];
}

@end



@implementation ComGameworksObjCTimelineImageMovieClip

@dynamic
image,
center;

@synthesize
clipView = _clipView;

-(id) init;
{
    if( self = [super init] )
    {
        _animImageView = [[UIImageView alloc] init];
        _clipView = [[UIView alloc] init];
        _clipView.clipsToBounds = YES;
        [_clipView addSubview:_animImageView];
        [self addSubview:_clipView];
    }
    return self;
}

-(id) initWithFrame:(CGRect)frame;
{
    if( self = [super initWithFrame:frame] )
    {
        _animImageView = [[UIImageView alloc] init];
        _clipView = [[UIView alloc] init];
        _clipView.clipsToBounds = YES;
        frame.origin = CGPointMake(0, 0);
        _clipView.frame = frame;
        [_clipView addSubview:_animImageView];
        [self addSubview:_clipView];
    }
    return self;
}

-(void) dealloc;
{
    [_animImageView release];
    [_animImageView removeFromSuperview];
    [super dealloc];
}

-(void) setImage:(UIImage *)image;
{
    _animImageView.image = image;
}

-(void) setCenter:(CGPoint)center;
{
    CGRect frame = self.clipView.frame;
    frame.origin = CGPointMake(-_center.x, -_center.y);
    _clipView.frame = frame;
}

-(void) setSourceRect:(CGRect) rect;
{
    CGRect drawRect = _clipView.frame;
    float
        scalex = drawRect.size.width/ (float)rect.size.width,
        scaley = drawRect.size.height/ (float)rect.size.height,
        dx = rect.origin.x* scalex,
        dy = rect.origin.y* scaley,
        dw = _animImageView.image.size.width* scalex,
        dh = _animImageView.image.size.height* scaley;
    _animImageView.frame = CGRectMake(-dx, -dy, dw, dh);
}

-(void) setSourceRectWithAnimation:(com::gameworks::opengl::shader::image::IPAnimation)anim frame:(int)frame;
{
    frame %= anim.count;
    if( anim.clips )
    {
        float
        sx = anim.clips[frame].x,
        sy = anim.clips[frame].y,
        sw = anim.clips[frame].w,
        sh = anim.clips[frame].h;
        [self setSourceRect:CGRectMake(sx, sy, sw, sh)];
    }
    else
    {
        float
        sw = anim.sw,
        sh = anim.sh,
        sx = anim.sx+ sw* (frame %anim.cc),
        sy = anim.sy+ sh* (frame /anim.cc);
        [self setSourceRect:CGRectMake(sx, sy, sw, sh)];
    }
}

-(void) setSourceRectWithActionAnimation:(com::gameworks::opengl::shader::image::IPActionAnimation)action time:(float)time
{
    using namespace com::gameworks::opengl::shader::image;
    int frame = IPComputFrame(action, time);
    IPActionAnimationFrame af = action.frames[frame];
    [self setSourceRectWithAnimation:*af.anim frame:af.frame];
}

-(void) setSourceRectWithRoleSkin:(com::gameworks::opengl::shader::image::IPRoleSkin)role time:(float)time action:(int)action;
{
    using namespace com::gameworks::opengl::shader::image;
    self.center = CGPointMake(role.center.x, role.center.y);
    IPActionAnimation act = role.actions[action];
    [self setSourceRectWithActionAnimation:act time:time];
}

-(void) restoreWithFrameIndex:(int)index;
{
    
}

@end



@implementation ComGameworksObjCTimelineImageAnimationMovieClip

@dynamic
animation;

-(void) setAnimation:(com::gameworks::opengl::shader::image::IPAnimation)animation;
{
    self.totalFrame = animation.count;
    _animation = animation;
}

-(void) restoreWithFrameIndex:(int)index;
{
    [self setSourceRectWithAnimation:_animation frame:index];
}

@end


@implementation ComGameworksObjCTimelineImageRoleSkinMovieClip

@synthesize
role = _role;

-(com::gameworks::tool::FSM*) getFSMPointer;
{
    return &_fsm;
}

-(void) onLoop:(ComGameworksObjCTimeline *)timeline;
{
    _fsm.update(timeline.elasped);
    [super onLoop:timeline];
}

-(void) restoreWithFrameIndex:(int)index;
{
    [self setSourceRectWithRoleSkin:_role time:_fsm.getTimer() action:_fsm.getState()];
}

@end