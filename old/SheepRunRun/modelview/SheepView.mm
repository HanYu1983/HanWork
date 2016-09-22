//
//  SheepView.m
//  testEmpty4
//
//  Created by Rachel on 12/1/18.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import "SheepView.h"
#import "SheepConfig.h"

GLuint 
    tex_sheep,
    tex_blue_sheep,
    tex_cake,
    tex_dog,
    tex_dog_chain,
    tex_counter_number,
    tex_particle_star,
    tex_jumpPlatform_action_all,
    tex_jumpPlatformMark,
    tex_door_action_all,
    tex_doorButton,
    tex_door2_action_all,
    tex_box,
    tex_panel_upper,
    tex_panel_lower,
    tex_panel_upper_clock,
    tex_particle_move,
    tex_particle_water_1,
    tex_particle_water_2,
    tex_particle_slow_1,
    tex_particle_slow_2,
    tex_selectLevelPanel_logo_star,
    tex_pig_action_all,
    tex_finger;

shader::image::IPAnimation _anim_sheep_2 = {
    &tex_sheep, 1850, 724, 0, 0, 1850/10, 724/4, 10, 36,
};
shader::image::IPAnimation _anim_sheep = {
    &tex_sheep, 1820, 780, 0, 0, 1820/14, 780/6, 14, 14*5+2,
};
shader::image::IPAnimation _anim_cake = {
    &tex_cake, 100, 100, 0, 0, 100, 100, 1, 1,
};
shader::image::IPAnimation _anim_dog = {
    &tex_dog, 1920, 240, 0, 0, 120, 120, 16, 24,
};
shader::image::IPAnimation _anim_dog_chain = {
    &tex_dog_chain, 80, 40, 0, 0, 40, 40, 2, 2,
};
shader::image::IPAnimation _anim_counter_number = {
    &tex_counter_number, 770, 80, 0, 0, 70, 80, 11, 11,
};

shader::image::IPAnimation _anim_box = {
    &tex_box, 270, 130, 0, 0, 270/3, 130, 3, 3,
};
shader::image::IPActionAnimationFrame _frame_box_normal[] = {
    { &_anim_box, 0, .2f },
};
shader::image::IPActionAnimationFrame _frame_box_move[] = {
    { &_anim_box, 0, .05f },
    { &_anim_box, 1, .05f },
    { &_anim_box, 2, .05f },
};
shader::image::IPActionAnimation _actions_box[] = {
    {_frame_box_normal, 1, 1.0f, YES, NO},
    {_frame_box_move, 3, 3* .05f, YES, NO},
    {_frame_box_move, 3, 3* .05f, YES, NO},
    {_frame_box_move, 3, 3* .05f, YES, NO},
    {_frame_box_move, 3, 3* .05f, YES, NO},
    
    {_frame_box_move, 3, 3* .05f, YES, NO},
    {_frame_box_move, 3, 3* .05f, YES, NO},
    {_frame_box_move, 3, 3* .05f, YES, NO},
    {_frame_box_move, 3, 3* .05f, YES, NO},
    {_frame_box_move, 3, 3* .05f, YES, NO},
    
    {_frame_box_move, 3, 3* .05f, YES, NO},
    {_frame_box_move, 3, 3* .05f, YES, NO},
    {_frame_box_move, 3, 3* .05f, YES, NO},
    {_frame_box_move, 3, 3* .05f, YES, NO},
    {_frame_box_move, 3, 3* .05f, YES, NO},
};
shader::image::IPRoleSkin _role_box = {
    _actions_box, {BOX_SIZE>>1, BOX_SIZE>>1}
};



shader::image::IPAnimation _anim_door2_action_all = {
    &tex_door2_action_all, 960, 180, 0, 0, 960/12, 180, 12, 12,
};

shader::image::IPActionAnimationFrame _frame_door2_open[] = {
    { &_anim_door2_action_all, 11, .05f },
    { &_anim_door2_action_all, 10, .05f },
    { &_anim_door2_action_all, 9, .05f },
    { &_anim_door2_action_all, 8, .05f },
    { &_anim_door2_action_all, 7, .05f },
    { &_anim_door2_action_all, 6, .05f },
    { &_anim_door2_action_all, 5, .05f },
    { &_anim_door2_action_all, 4, .05f },
    { &_anim_door2_action_all, 3, .05f },
    { &_anim_door2_action_all, 2, .05f },
    { &_anim_door2_action_all, 1, .05f },
    { &_anim_door2_action_all, 0, .05f },
};

shader::image::IPActionAnimation _actions_door2[] = {
    {_frame_door2_open, 12, 12* 0.05f, NO, NO},
};

shader::image::IPAnimation _anim_jumpPlatform_action_all = {
    &tex_jumpPlatform_action_all, 1320, 130, 0, 0, 1320/11, 130, 11, 11
};
shader::image::IPAnimation _anim_jumpPlatformMark = {
    &tex_jumpPlatformMark, 200, 100, 0, 0, 100, 100, 2, 2
};


shader::image::IPActionAnimationFrame _frame_jumpPlatform_normal[] = {
    { &_anim_jumpPlatform_action_all, 0, 1 },
};

shader::image::IPActionAnimationFrame _frame_jumpPlatform_open[] = {
    { &_anim_jumpPlatform_action_all, 3, .01f },
    { &_anim_jumpPlatform_action_all, 4, .01f },
    { &_anim_jumpPlatform_action_all, 5, .01f },
    { &_anim_jumpPlatform_action_all, 6, .05f },
    { &_anim_jumpPlatform_action_all, 7, .05f },
    { &_anim_jumpPlatform_action_all, 8, .05f },
    { &_anim_jumpPlatform_action_all, 9, .05f },
    { &_anim_jumpPlatform_action_all, 10, .05f },
};

int jumpPlatformMarkOffset[] = {
    20, 10, 0, -10, -20, -10, 0, 0
};

shader::image::IPActionAnimation _actions_jumpPlatform[] = {
    {_frame_jumpPlatform_normal, 1, 1, NO, NO},
    {_frame_jumpPlatform_open, 8, 1, NO, NO},
};

shader::image::IPAnimation _anim_doorButton = {
    &tex_doorButton, 480, 120, 0, 0, 120, 120, 4, 4
};


shader::image::IPActionAnimationFrame _frame_doorButton_press[] = {
    { &_anim_doorButton, 3, 1 }
};

shader::image::IPActionAnimationFrame _frame_doorButton_release[] = {
    { &_anim_doorButton, 3, 0.05f },
    { &_anim_doorButton, 2, 0.05f },
    { &_anim_doorButton, 1, 0.05f },
    { &_anim_doorButton, 0, 0.05f },
};

shader::image::IPActionAnimation _actions_doorButton[] = {
    { _frame_doorButton_release, 4, 4* 0.05f, NO, NO },
    { _frame_doorButton_press, 1, 1, NO, NO },
    { _frame_doorButton_press, 1, 1, NO, NO }
};

shader::image::IPRoleSkin _role_doorButton = {
    _actions_doorButton, DOOR_BUTTON_SIZE>>1, DOOR_BUTTON_SIZE>>1
};

shader::image::IPAnimation _anim_door_action_all = {
    &tex_door_action_all, 960, 180, 0, 0, 960/12, 180, 13, 13
};

const int DOOR_OFFSET_X = 70;
const int DOOR_OFFSET_Y = -(SHEEP_SIZE>>2);
const int DOOR_DEFAULT_LENGTH = 70;
const int DOOR_DEFAULT_WIDTH = 70;

shader::image::IPActionAnimationFrame _frame_door_open[] = {
    { &_anim_door_action_all, 12, .05f },
    { &_anim_door_action_all, 4, .05f },
    { &_anim_door_action_all, 3, .05f },
    { &_anim_door_action_all, 2, .05f },
    { &_anim_door_action_all, 1, .05f },
    { &_anim_door_action_all, 0, .05f },
};

shader::image::IPActionAnimationFrame _frame_doorBg_open[] = {
    { &_anim_door_action_all, 11, .05f },
    { &_anim_door_action_all, 9, .05f },
    { &_anim_door_action_all, 8, .05f },
    { &_anim_door_action_all, 7, .05f },
    { &_anim_door_action_all, 6, .05f },
    { &_anim_door_action_all, 5, .05f },
};

shader::image::IPActionAnimation _actions_door[] = {
    {_frame_door_open, 6, 6* 0.05f, NO, NO},
};

shader::image::IPActionAnimation _actions_doorBg[] = {
    {_frame_doorBg_open, 6, 6* 0.05f, NO, NO},
};

shader::image::IPActionAnimationFrame _frame_normal_sheep[] = {
    { &_anim_sheep, 0, .05f },
    { &_anim_sheep, 1, .05f },
    { &_anim_sheep, 2, .05f },
    { &_anim_sheep, 3, .05f },
    { &_anim_sheep, 4, .05f },
    { &_anim_sheep, 5, .05f },
    { &_anim_sheep, 6, .05f },
    { &_anim_sheep, 7, .05f },
    { &_anim_sheep, 8, .05f },
    { &_anim_sheep, 9, .05f },
    { &_anim_sheep, 10, .05f },
    { &_anim_sheep, 11, .05f },
};

shader::image::IPActionAnimationFrame _frame_move_sheep[] = {
    { &_anim_sheep, 12, .05f },
    { &_anim_sheep, 13, .05f },
    { &_anim_sheep, 14, .05f },
    { &_anim_sheep, 15, .05f },
    { &_anim_sheep, 16, .05f },
    { &_anim_sheep, 17, .05f },
    { &_anim_sheep, 18, .05f },
    { &_anim_sheep, 19, .05f },
    { &_anim_sheep, 20, .05f },
    { &_anim_sheep, 21, .05f },
    { &_anim_sheep, 22, .05f },
    { &_anim_sheep, 23, .05f },
};

shader::image::IPActionAnimationFrame _frame_scare_sheep[] = {
    { &_anim_sheep, 24, .05f },
    { &_anim_sheep, 25, .05f },
    { &_anim_sheep, 26, .05f },
    { &_anim_sheep, 27, .05f },
    { &_anim_sheep, 28, .05f },
    { &_anim_sheep, 29, .05f },
    { &_anim_sheep, 30, .05f },
    { &_anim_sheep, 31, .05f },
    { &_anim_sheep, 32, .05f },
    { &_anim_sheep, 33, .05f },
    { &_anim_sheep, 34, .05f },
    { &_anim_sheep, 35, .05f },
};

shader::image::IPActionAnimationFrame _frame_swim_sheep[] = {
    { &_anim_sheep, 36, .05f },
    { &_anim_sheep, 37, .05f },
    { &_anim_sheep, 38, .05f },
    { &_anim_sheep, 39, .05f },
    { &_anim_sheep, 40, .05f },
    { &_anim_sheep, 41, .05f },
    { &_anim_sheep, 42, .05f },
    { &_anim_sheep, 43, .05f },
    { &_anim_sheep, 44, .05f },
    { &_anim_sheep, 45, .05f },
    { &_anim_sheep, 46, .05f },
    { &_anim_sheep, 47, .05f },
};

shader::image::IPActionAnimationFrame _frame_water_out_sheep[] = {
    { &_anim_sheep, 48, .05f },
    { &_anim_sheep, 49, .05f },
    { &_anim_sheep, 50, .05f },
    { &_anim_sheep, 51, .05f },
    { &_anim_sheep, 52, .05f },
    { &_anim_sheep, 53, .05f },
    { &_anim_sheep, 54, .05f },
    { &_anim_sheep, 55, .05f },
    { &_anim_sheep, 56, .05f },
    { &_anim_sheep, 57, .05f },
    { &_anim_sheep, 58, .05f },
    { &_anim_sheep, 59, .05f },
};

shader::image::IPActionAnimationFrame _frame_eat_sheep[] = {
    { &_anim_sheep, 60, .05f },
    { &_anim_sheep, 61, .05f },
    { &_anim_sheep, 62, .05f },
    { &_anim_sheep, 63, .05f },
    { &_anim_sheep, 64, .05f },
    { &_anim_sheep, 65, .05f },
    { &_anim_sheep, 66, .05f },
    { &_anim_sheep, 67, .05f },
    { &_anim_sheep, 68, .05f },
    { &_anim_sheep, 69, .05f },
    { &_anim_sheep, 70, .05f },
    { &_anim_sheep, 71, .05f },
};

shader::image::IPActionAnimationFrame _frame_dog_action_normal[] = {
    { &_anim_dog, 14, .55f },
    { &_anim_dog, 15, .35f }
};

shader::image::IPActionAnimationFrame _frame_dog_action_move[] = {
    { &_anim_dog, 12, .05f },
    { &_anim_dog, 13, .05f },
    { &_anim_dog, 14, .05f },
    { &_anim_dog, 15, .05f },
    { &_anim_dog, 16, .05f },
    { &_anim_dog, 17, .05f },
    { &_anim_dog, 18, .05f },
    { &_anim_dog, 19, .05f },
    { &_anim_dog, 20, .05f },
    { &_anim_dog, 21, .05f },
    { &_anim_dog, 22, .05f },
    { &_anim_dog, 23, .05f },
};
shader::image::IPActionAnimationFrame _frame_dog_action_sleep[] = {
    { &_anim_dog, 0, .1f },
    { &_anim_dog, 1, .1f },
    { &_anim_dog, 2, .1f },
    { &_anim_dog, 3, .1f },
    { &_anim_dog, 4, .1f },
    { &_anim_dog, 5, .1f },
    { &_anim_dog, 6, .1f },
    { &_anim_dog, 7, .1f },
    { &_anim_dog, 8, .1f },
    { &_anim_dog, 9, .1f },
    { &_anim_dog, 10, .1f },
    { &_anim_dog, 11, .1f },
};



/*
 STATE_NORMAL,
 STATE_MOVE,
 STATE_JUMP,
 STATE_FELL_INTO_WATER,
 STATE_SWIM,
 STATE_FELL_INTO_RIVER,
 STATE_IN_RIVER,
 STATE_LOCK_ON_FOOD,
 STATE_EAT_FOOD,
 STATE_GET_WATER_OUT,
 STATE_GRAB,
 STATE_HOLD,
 STATE_UNHOLD
 */
shader::image::IPActionAnimation _actions_sheeps[] = {
    {_frame_normal_sheep, 12, 12* .05f, YES, NO},
    {_frame_move_sheep, 12, 12* .05f, YES, NO},
    {_frame_move_sheep, 12, 12* .05f, YES, NO},
    {_frame_swim_sheep, 12, 12* .05f, YES, NO},
    {_frame_swim_sheep, 12, 12* .05f, YES, NO},
    
    {_frame_swim_sheep, 12, 12* .05f, YES, NO},
    {_frame_swim_sheep, 12, 12* .05f, YES, NO},
    {_frame_move_sheep, 12, 12* .05f, YES, NO},
    {_frame_eat_sheep, 12, 12* .05f, YES, NO},
    {_frame_water_out_sheep, 12, 12* .05f, YES, NO},
    
    {_frame_move_sheep, 12, 12* .05f, YES, NO},
    {_frame_move_sheep, 12, 12* .05f, YES, NO},
    {_frame_move_sheep, 12, 12* .05f, YES, NO},
    {_frame_scare_sheep, 12, 12* .05f, YES, NO},
    {_frame_swim_sheep, 12, 12* .05f, YES, NO},
};

shader::image::IPActionAnimation _actions_dogs[] = {
    {_frame_dog_action_normal, 2, .9f, YES, NO},
    {_frame_dog_action_move, 12, .05f* 12, YES, NO},
    {_frame_dog_action_sleep, 12, .1f* 12, YES, NO},
    {_frame_dog_action_move, 12, .05f* 12, YES, NO},
};

shader::image::IPRoleSkin _role_sheep = {
    _actions_sheeps, {SHEEP_SIZE>>1, SHEEP_SIZE>>1}
};

shader::image::IPRoleSkin _role_dog = {
    _actions_dogs, {DOG_SIZE>>1, DOG_SIZE>>1}
};

shader::image::IPRoleSkin _role_jumpButton = {
    _actions_jumpPlatform, 130>>1, 120>>1
};

int particleTicker = 0;
int particleEmitDelay = 5;

GLKVector2 emitPositionFilterSheep( GLKVector2 pos ){
    return emitPositionFilterCircle(pos, SHEEP_SIZE>>1 );
}

GLKVector2 emitPositionFilterSheepMoveSpace( GLKVector2 pos){
    return emitPositionFilterCircle(pos, SHEEP_SIZE*5/10 );
}
GLKVector2 emitPositionFilterSheepMoveSlow( GLKVector2 pos){
    return emitPositionFilterCircle(pos, SHEEP_SIZE>>2 );
}

@interface SheepView(privateMethod)
-(void) clearAllEntity;
-(void) handleCreateWithContainer:(map<int, SheepSheepInfo> &)container 
                             info:(SheepSheepInfo&) info;
-(void) handleUpdateWithContainer:(map<int, SheepSheepInfo> &)container                                         
                             info:(SheepSheepInfo &)info;
-(void) handleCreateSheepWithInfo:(SheepSheepInfo&) info;
-(void) handleUpdateSheepWithInfo:(SheepSheepInfo&) info;
-(void) handleCreateDogWithInfo:(SheepSheepInfo&) info;
-(void) handleUpdateDogWithInfo:(SheepSheepInfo&) info;
@end


@implementation SheepView

-(id) init
{
    return nil;
}


-(id) initWithApp:(id<ISheepApp>) app
         callback:(id<ISheepViewCallback>)callback;
{
    if( self = [super init] ){
        _app = app;
        _callback = callback;
        _tex_bg = -1;
        // 設定GLES //
        [self setMultipleTouchEnabled:YES];
        _glkCtr = [createGLK(self) retain];
        _glkCtr.view.frame = CGRectMake(0, 0, 1024, 768);
        [_glkCtr.view setMultipleTouchEnabled:YES];
        [self addSubview:_glkCtr.view];
        glClearColor(0, 1, 0, 1);
        // shader初使化 //
        _sp.init();
        // 粒子系統初使化 //
        SimpleEmitter::Particle p1;
        p1.duration = 1;
        p1.vel = GLKVector2Make(1, 1);
        _emitter.activeGravity = false;
        _emitter.registerParticle( p1 );
        p1.duration = 1;
        p1.speed = 1;
        p1.group = 0;
        _sheep_move_emitter.emitPositionFilter = emitPositionFilterSheep;
        _sheep_move_emitter.activeGravity = false;
        _sheep_move_emitter.registerParticle( p1 );
        p1.group = 1;
        _sheep_move_emitter.registerParticle( p1 );
        
        GLKVector2 (*filters[ME_LENGTH])(GLKVector2) = {
            emitPositionFilterSheepMoveSpace,
            emitPositionFilterSheep,
            emitPositionFilterSheepMoveSlow
        };
        for( int i=0; i<ME_LENGTH; ++i )
        {
            _move_emitters[i].initParticle(20);
            _move_emitters[i].emitPositionFilter = filters[i];
            _move_emitters[i].activeGravity =false;
        }
        _move_emitters[ME_SPACE].registerParticle(p1);
        p1.speed = 6;
        _move_emitters[ME_WATER].registerParticle(p1);
        p1.speed = 8;
        p1.group = 1;
        _move_emitters[ME_WATER].registerParticle(p1);
        _move_emitters[ME_WATER].activeGravity = true;
        _move_emitters[ME_WATER].gravity = GLKVector2Make(0, 1);
        
        p1.group = 0;
        p1.speed = 0;
        _move_emitters[ME_SLOW].registerParticle(p1);
        p1.group = 1;
        p1.speed = 0;
        _move_emitters[ME_SLOW].registerParticle(p1);
        
        p1.speed = 5;
        p1.group = 0;
        _move_emitters[ME_ITEM_SPEED_UP].registerParticle(p1);
        p1.speed = 3;
        p1.group = 1;
        _move_emitters[ME_ITEM_SPEED_UP].registerParticle(p1);
        // 畫圖數字用的字元對應圖片第幾張 //
        _nummap[[@"1" characterAtIndex:0]] = 0;
        _nummap[[@"2" characterAtIndex:0]] = 1;
        _nummap[[@"3" characterAtIndex:0]] = 2;
        _nummap[[@"4" characterAtIndex:0]] = 3;
        _nummap[[@"5" characterAtIndex:0]] = 4;
        _nummap[[@"6" characterAtIndex:0]] = 5;
        _nummap[[@"7" characterAtIndex:0]] = 6;
        _nummap[[@"8" characterAtIndex:0]] = 7;
        _nummap[[@"9" characterAtIndex:0]] = 8;
        _nummap[[@"0" characterAtIndex:0]] = 9;
        _nummap[[@":" characterAtIndex:0]] = 10;
        // 讀取材質 //
        _tex_wave = createTexture(@"images/wave", @"png");
        tex_sheep = createTexture(@"images/Red_sheep_all", @"png");
        tex_blue_sheep = createTexture(@"images/Blue_sheep_all", @"png");
        tex_dog = createTexture(@"images/dog_action_all", @"png");
        tex_dog_chain = createTexture(@"images/dog_chain", @"png");
        tex_counter_number = createTexture(@"images/gamePanel_upper_number", @"png");
        tex_particle_star = createTexture(@"images/particle_star", @"png");
        tex_cake = createTexture(@"images/cake", @"png");
        tex_jumpPlatform_action_all = createTexture(@"images/jumpPerform_action_all", @"png");
        tex_jumpPlatformMark = createTexture(@"images/jumpPerformMark", @"png");
        tex_doorButton = createTexture(@"images/doorButton", @"png");
#ifdef USE_SIMPLE_DOOR
        tex_door2_action_all = createTexture(@"images/door2", @"png");
#else
        tex_door_action_all = createTexture(@"images/door", @"png");
#endif
        tex_box = createTexture(@"images/box", @"png");
        tex_panel_upper = createTexture(@"images/gamePanel_upper", @"png");
        tex_panel_lower = createTexture(@"images/gamePanel_lower", @"png");
        tex_particle_move = createTexture(@"images/particle_move", @"png");
        tex_particle_water_1 = createTexture(@"images/particle_water_1", @"png");
        tex_particle_water_2 = createTexture(@"images/particle_water_2", @"png");
        tex_particle_slow_1 = createTexture(@"images/particle_slow_1", @"png");
        tex_particle_slow_2 = createTexture(@"images/particle_slow_2", @"png");
        tex_selectLevelPanel_logo_star = createTexture(@"images/passPanel_star", @"png");
        tex_panel_upper_clock = createTexture(@"images/gamePanel_upper_clock", @"png");
        tex_pig_action_all = createTexture(@"images/pig_action_all", @"png");
        tex_finger = createTexture(@"images/finger", @"png");
    }
    return self;
}

-(void) dealloc
{
    glDeleteTextures(1, &_tex_bg);
    glDeleteTextures(1, &_tex_wave);
    glDeleteTextures(1, &tex_particle_star);
    glDeleteTextures(1, &tex_counter_number);
    glDeleteTextures(1, &tex_dog);
    glDeleteTextures(1, &tex_dog_chain);
    glDeleteTextures(1, &tex_sheep);
    glDeleteTextures(1, &tex_cake);
    glDeleteTextures(1, &tex_jumpPlatform_action_all);
    glDeleteTextures(1, &tex_jumpPlatformMark);
    glDeleteTextures(1, &tex_door_action_all);
    glDeleteTextures(1, &tex_doorButton);
    glDeleteTextures(1, &tex_door2_action_all);
    glDeleteTextures(1, &tex_panel_upper);
    glDeleteTextures(1, &tex_panel_lower);
    glDeleteTextures(1, &tex_particle_water_1);
    glDeleteTextures(1, &tex_particle_water_2);
    glDeleteTextures(1, &tex_selectLevelPanel_logo_star);
    glDeleteTextures(1, &tex_pig_action_all);
    glDeleteTextures(1, &tex_finger);
    for( map<int, Seqments*>::iterator it = seqs.begin();
        it!= seqs.end();
        ++it)
        delete it->second;
    [_glkCtr release];
    [super dealloc];
}

-(void) touchesBegan:(NSSet *)touches withEvent:(UIEvent *)event
{
    SimpleTouch::handleTouchBegan(_simpleTouch, self, touches);
}

-(void) touchesMoved:(NSSet *)touches withEvent:(UIEvent *)event
{
    SimpleTouch::handleTouchMoved(_simpleTouch, self, touches);
    
}

-(void) touchesEnded:(NSSet *)touches withEvent:(UIEvent *)event
{
    SimpleTouch::handleTouchEnded(_simpleTouch, self, touches);
}

-(void) touchesCancelled:(NSSet *)touches withEvent:(UIEvent *)event
{
    SimpleTouch::handleTouchCancelled(_simpleTouch, self, touches);
    [_app.model mouseCancelled];
}

-(void) glkView:(GLKView *)view drawInRect:(CGRect)rect
{
    //glClear(GL_COLOR_BUFFER_BIT);
    _sp.reset();
    _sp.canvasSize = GLKVector2Make(1024, 768);
    _sp.color = GLKVector4Make(0, 0, 0, 0);
    _sp.centerPosition = GLKVector2Make(0, 0);
    // 地圖 //
    _sp.imageSize = GLKVector2Make(STAGE_W, STAGE_H);
    _sp.tex = _tex_bg;
    _sp.transform = GLKMatrix4MakeTranslation(STAGE_X, STAGE_Y, 0);
    _sp.bind();
    _sp.draw();
    // 羊跑的粒子 //
    glBlendFunc(GL_ONE, GL_ONE);
    glEnable(GL_BLEND);
    vector<SimpleEmitter::Particle> &ps2 = _sheep_move_emitter.getParticlesRef();
    for( int i=ps2.size()-1; i>=0; --i )
    {
        SimpleEmitter::Particle p = ps2[i];
        if( !p.active )
            continue;
        _sp.tex = tex_particle_star;
        int w = 20;
        int h = 20;
        _sp.centerPosition = GLKVector2Make(w/2, h/2);
        _sp.imageSize = GLKVector2Make(w, h);
        _sp.transform = GLKMatrix4MakeTranslation(p.pos.x,p.pos.y, 0);
        float sq = p.timer;
        if( p.group == 0 )
            _sp.color = GLKVector4Make(-sq-.2, -sq/2, -sq/3, -p.timer);
        else 
            _sp.color = GLKVector4Make(-sq/4, -sq/1.2, -sq, -p.timer);
        _sp.bind();
        _sp.draw();
    }
    glDisable(GL_BLEND);
    //
    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
    for( int i=0; i<ME_LENGTH; ++i )
    {
        vector<SimpleEmitter::Particle> *ps = &_move_emitters[i].getParticlesRef();
        for( int j=0; j<ps->size(); ++j )
        {
            SimpleEmitter::Particle p = (*ps)[j];
            if( !p.active )
                continue;
            
            int w = 20;
            int h = 20;
            _sp.centerPosition = GLKVector2Make(w/2, h/2);
            _sp.imageSize = GLKVector2Make(w, h);
            _sp.transform = GLKMatrix4MakeTranslation(p.pos.x, p.pos.y, 0);
            
            switch(i){
                case ME_SPACE:
                {
                    _sp.tex = tex_particle_move;
                    _sp.transform = GLKMatrix4Rotate(_sp.transform, p.timer* 10, 0, 0, 1);
                    _sp.color = GLKVector4Make(0,0,0, -p.timer/2);
                }
                    break;
                case ME_WATER:
                {
                    /*
                    if( p.group == 1 )
                    {
                        _sp.tex = tex_particle_water_2;
                        _sp.transform = GLKMatrix4Rotate(_sp.transform, 3.14159+atan2f(p.vel.y, p.vel.x), 0, 0, 1);
                    }
                    else
                        */
                    {
                        _sp.tex = tex_particle_water_2;
                        _sp.transform = GLKMatrix4Rotate(_sp.transform, atan2f(p.vel.y, p.vel.x), 0, 0, 1);
                    }
                    _sp.color = GLKVector4Make(0,0,0, -p.timer);
                }
                    break;
                case ME_SLOW:
                {
                    if( p.group == 1 )
                    {
                        _sp.tex = tex_particle_slow_1;
                        _sp.transform = GLKMatrix4Rotate(_sp.transform, 3.14159+atan2f(p.vel.y, p.vel.x), 0, 0, 1);
                    }
                    else
                    {
                        _sp.tex = tex_particle_slow_2;
                        _sp.transform = GLKMatrix4Rotate(_sp.transform, atan2f(p.vel.y, p.vel.x), 0, 0, 1);
                    }
                    _sp.color = GLKVector4Make(0,0,0, -p.timer/3);
                }
                    break;   
                case ME_ITEM_SPEED_UP:
                {
                    _sp.tex = _tex_wave;
                    int w = 30;
                    int h = 30;
                    _sp.centerPosition = GLKVector2Make(w/2, h/2);
                    _sp.imageSize = GLKVector2Make(w, h);
                    if( p.group == 0 )
                        _sp.color = GLKVector4Make( 1, 1, 0, -p.timer);
                    else 
                        _sp.color = GLKVector4Make( 0 ,1, 1, -p.timer);
                }
                    break;
                default:
                {
                    _sp.tex = tex_particle_star;
                    float sq = p.timer;
                    if( p.group == 0 )
                        _sp.color = GLKVector4Make(-sq-.2, -sq/2, -sq/3, -p.timer);
                    else 
                        _sp.color = GLKVector4Make(-sq/4, -sq/1.2, -sq, -p.timer);
                }
                    break;
            }
            
            _sp.bind();
            _sp.draw();
        }
    }
    glEnable(GL_BLEND);
    // 狗的鍊子 //
    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
    _sp.imageSize = GLKVector2Make(40, 40);
    _sp.centerPosition = GLKVector2Make(20, 10);
    _sp.color = GLKVector4Make(0,0,0,0);
    for( map<int, Seqments*>::iterator it = seqs.begin();
        it!= seqs.end();
        ++it)
    {
        Seqments &seq = *it->second;
        reach( seq, dogs[it->first].pos.x, dogs[it->first].pos.y );
        for( int i=0; i<seq.count-1; i+=2 )
        {
            int x1 = seq.xs[i],
            y1 = seq.ys[i],
            x2 = seq.xs[i+1],
            y2 = seq.ys[i+1];
            float angle = atan2f(x2-x1, y2-y1);
            _sp.transform = GLKMatrix4MakeTranslation( x1, y1, 0);
            _sp.transform = GLKMatrix4Rotate(_sp.transform, -angle, 0, 0, 1);
            _sp.set( _anim_dog_chain, 0 );
            _sp.bind();
            _sp.draw();
        }
        for( int i=1; i<seq.count-1; i+=2 )
        {
            int x1 = seq.xs[i],
            y1 = seq.ys[i],
            x2 = seq.xs[i+1],
            y2 = seq.ys[i+1];
            float angle = atan2f(x2-x1, y2-y1);
            _sp.transform = GLKMatrix4MakeTranslation( x1, y1, 0);
            _sp.transform = GLKMatrix4Rotate(_sp.transform, -angle, 0, 0, 1);
            _sp.set( _anim_dog_chain, 1 );
            _sp.bind();
            _sp.draw();
        }
    }
    glDisable(GL_BLEND);
    // 跳台 //
    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
    _sp.color = GLKVector4Make(0,0,0,0);
    for( map<int, SheepSheepInfo>::iterator it = jumpButtons.begin();
        it!= jumpButtons.end();
        ++it )
    {
        SheepSheepInfo &jb = it->second;
        // 平台 //
        _sp.imageSize = GLKVector2Make(JUMP_PLATFORM_SIZE, JUMP_PLATFORM_SIZE );
        _sp.centerPosition = GLKVector2Make(JUMP_PLATFORM_SIZE>>1, (JUMP_PLATFORM_SIZE>>1));
        _sp.transform = GLKMatrix4MakeTranslation(jb.pos.x, jb.pos.y, 0);
        _sp.set( _role_jumpButton, jb.timer, jb.states );
        _sp.bind();
        _sp.draw();
        // 方向指標 //
        int offset = 0;
        if( jb.states == 1 )
        {
            int frame = shader::image::IPComputFrame(_actions_jumpPlatform[1], jb.timer);
            offset = jumpPlatformMarkOffset[frame];
        }
        int arrowSize = JUMP_PLATFORM_SIZE*2/3;
        _sp.imageSize = GLKVector2Make(arrowSize, arrowSize);
        _sp.centerPosition = GLKVector2Make((arrowSize>>1), (arrowSize>>1));
        _sp.transform = GLKMatrix4MakeTranslation(jb.pos.x-15, jb.pos.y+offset-10, 0);
        float angle = atan2f(jb.pos2.y-jb.pos.y, jb.pos2.x-jb.pos.x);
        _sp.transform = GLKMatrix4Rotate(_sp.transform, angle+3.14159/2, 0, 0, 1);
        _sp.set( _anim_jumpPlatformMark, 0 );
        _sp.bind();
        _sp.draw();
        // 著地標示 //
        _sp.transform = GLKMatrix4MakeTranslation(jb.pos2.x, jb.pos2.y, 0);
        _sp.set( _anim_jumpPlatformMark, 1 );
        _sp.bind();
        _sp.draw();
    }
    glEnable(GL_BLEND);
    // 柵門地板 //
#ifndef USE_SIMPLE_DOOR
    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
    _sp.color = GLKVector4Make(0,0,0,0);
    for( map<int, SheepSheepInfo>::iterator it = doors.begin();
        it!= doors.end();
        ++it )
    {
        SheepSheepInfo &jb = it->second;
        _sp.imageSize = GLKVector2Make(DOOR_DEFAULT_WIDTH, jb.length-SHEEP_SIZE/2);
        _sp.centerPosition = GLKVector2Make(DOOR_OFFSET_X, DOOR_OFFSET_Y);
        _sp.transform = GLKMatrix4MakeTranslation(jb.pos.x, jb.pos.y, 0);
        float angle = atan2f(jb.pos2.y-jb.pos.y, jb.pos2.x-jb.pos.x);
        _sp.transform = GLKMatrix4Rotate(_sp.transform, angle-3.14159/2, 0, 0, 1);
        _sp.set( _anim_door_action_all, 10 );
        _sp.bind();
        _sp.draw();
    }
    glEnable(GL_BLEND);
    // 柵門下半部 //
    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
    _sp.color = GLKVector4Make(0,0,0,0);
    for( map<int, SheepSheepInfo>::iterator it = doors.begin();
        it!= doors.end();
        ++it )
    {
        SheepSheepInfo &jb = it->second;
        _sp.imageSize = GLKVector2Make(DOOR_DEFAULT_WIDTH,  jb.length-SHEEP_SIZE/2);
        _sp.centerPosition = GLKVector2Make(DOOR_OFFSET_X, DOOR_OFFSET_Y);
        _sp.transform = GLKMatrix4MakeTranslation(jb.pos.x, jb.pos.y, 0);
        float angle = atan2f(jb.pos2.y-jb.pos.y, jb.pos2.x-jb.pos.x);
        _sp.transform = GLKMatrix4Rotate(_sp.transform, angle-3.14159/2, 0, 0, 1);
        if( jb.states == 0 )
            _sp.set( _actions_doorBg[0], jb.timer );
        else
            _sp.set( _actions_doorBg[0], 0.36-jb.timer );
        _sp.bind();
        _sp.draw();
    }
    glEnable(GL_BLEND);
#endif
    // 柵門（簡易版） //
#ifdef USE_SIMPLE_DOOR
    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
    _sp.color = GLKVector4Make(0,0,0,0);
    for( map<int, SheepSheepInfo>::iterator it = doors.begin();
        it!= doors.end();
        ++it )
    {
        SheepSheepInfo &jb = it->second;
        _sp.imageSize = GLKVector2Make(DOOR_DEFAULT_WIDTH,  jb.length+15);
        _sp.centerPosition = GLKVector2Make(40, 5);
        _sp.transform = GLKMatrix4MakeTranslation(jb.pos.x, jb.pos.y, 0);
        float angle = atan2f(jb.pos2.y-jb.pos.y, jb.pos2.x-jb.pos.x);
        _sp.transform = GLKMatrix4Rotate(_sp.transform, angle-3.14159/2, 0, 0, 1);
        if( jb.states == 0 )
            _sp.set( _actions_door2[0], jb.timer );
        else
            _sp.set( _actions_door2[0], 0.55-jb.timer );
        _sp.bind();
        _sp.draw();
    }
    glEnable(GL_BLEND);
#endif
    // 柵門按鈕 //
    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
    _sp.imageSize = GLKVector2Make(DOOR_BUTTON_SIZE, DOOR_BUTTON_SIZE);
    _sp.color = GLKVector4Make(0,0,0,0);
    for( map<int, SheepSheepInfo>::iterator it = doorButtons.begin();
        it!= doorButtons.end();
        ++it )
    {
        SheepSheepInfo &jb = it->second;
        _sp.transform = GLKMatrix4MakeTranslation(jb.pos.x, jb.pos.y, 0);
        _sp.set( _role_doorButton, jb.timer, jb.states );
        _sp.bind();
        _sp.draw();
    }
    glEnable(GL_BLEND);
    // 飼料袋 //
    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
    _sp.texTransform = GLKMatrix3Identity;
    _sp.imageSize = GLKVector2Make(FOOD_SIZE, FOOD_SIZE);
    _sp.centerPosition = GLKVector2Make(FOOD_SIZE>>1, FOOD_SIZE>>1);
    for( map<int, SheepFoodInfo>::iterator it = foods.begin();
        it!= foods.end();
        ++it )
    {
        SheepFoodInfo &food = it->second;
        _sp.transform = GLKMatrix4MakeTranslation(food.pos.x, food.pos.y, 0);
        float factor = cosf(_gametimer*10+food.oid*170);
        _sp.transform = GLKMatrix4Scale(_sp.transform, 1+factor/100, 1+factor/100, 1);
        _sp.set( _anim_cake, 0 );
        _sp.bind();
        _sp.draw();
    }
    glDisable(GL_BLEND);
    // 狗 //
    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
    _sp.imageSize = GLKVector2Make(DOG_SIZE, DOG_SIZE);
    _sp.color = GLKVector4Make(0,0,0,0);
    for( map<int, SheepSheepInfo>::iterator it = dogs.begin();
        it!= dogs.end();
        ++it )
    {
        SheepSheepInfo &dog = it->second;
        _sp.transform = GLKMatrix4MakeTranslation(dog.pos.x, dog.pos.y, 0);
        _sp.transform = GLKMatrix4Rotate(_sp.transform, dog.angleFilter-3.14159/2, 0, 0, 1);
        _sp.set( _role_dog, dog.timer, dog.states);
        _sp.bind();
        _sp.draw();
    }
    glDisable(GL_BLEND);
    // 羊 //
    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
    _sp.color = GLKVector4Make(0, 0, 0, 0);
    
    for( map<int, SheepSheepInfo>::iterator it = sheeps.begin();
        it!= sheeps.end();
        ++it )
    {
        SheepSheepInfo &sheep = it->second;
        _sp.transform = GLKMatrix4MakeTranslation(sheep.pos.x, sheep.pos.y, 0);
        _sp.color = GLKVector4Make(0, 0, 0, 0);
        if( sheep.isTouchGoal )
        {
            _sheep_move_emitter.pos = sheep.pos;
            _sheep_move_emitter.emit();
        }
        switch( sheep.type ){
            case SHEEP_TYPE_BOX:
            {
                _sp.imageSize = GLKVector2Make(BOX_SIZE, BOX_SIZE);
                _sp.centerPosition = GLKVector2Make(BOX_SIZE>>1, BOX_SIZE>>1);
                _sp.transform = GLKMatrix4Rotate(_sp.transform, sheep.angleFilter, 0, 0, 1);
                _sp.set( _role_box, sheep.timer, sheep.states);
            }
                break;
            default:
            {
                _sp.imageSize = GLKVector2Make(SHEEP_SIZE, SHEEP_SIZE);
                _sp.centerPosition = GLKVector2Make(SHEEP_SIZE>>1, SHEEP_SIZE>>1);
                _sp.transform = GLKMatrix4Rotate(_sp.transform, sheep.angleFilter-3.14159/2, 0, 0, 1);
                
                _sp.set( _role_sheep, sheep.timer, sheep.states);
                if( sheep.group == GROUP_BLUE )
                    _sp.tex = tex_blue_sheep;
                else if( sheep.group == GROUP_RED )
                    _sp.tex = tex_sheep;
                else if( sheep.type == SHEEP_TYPE_PIG )
                    _sp.tex = tex_pig_action_all;
                if( sheep.isItemSpeedUp )
                {
                    _sp.color = GLKVector4Make(.3, .3, 0, 0);
                    if( particleTicker % 3 == 0 )
                    {
                        _move_emitters[ME_ITEM_SPEED_UP].pos = sheep.pos;
                        _move_emitters[ME_ITEM_SPEED_UP].emit();
                    }
                }
                else
                    _sp.color = GLKVector4Make(0, 0, 0, 0);
            }
                break;
        }
        _sp.bind();
        _sp.draw();
    }
    // 羊上方的手指 //
    if( !_isStartGame )
    {
        for( map<int, SheepSheepInfo>::iterator it = sheeps.begin();
            it!= sheeps.end();
            ++it )
        {
            SheepSheepInfo &sheep = it->second;
            
            _sp.tex = tex_finger;
            _sp.imageSize = GLKVector2Make(112>>1, 163>>1);
            _sp.centerPosition = GLKVector2Make(0, 0);
            _sp.color = GLKVector4Make(0, 0, 0, -fabs(sinf(particleTicker*0.1)));
            _sp.texTransform = GLKMatrix3Identity;
            _sp.transform = GLKMatrix4MakeTranslation(sheep.pos.x, sheep.pos.y, 0);
            _sp.transform = GLKMatrix4Rotate(_sp.transform, sheep.angleFilter-3.14159/2, 0, 0, 1);
            _sp.transform = GLKMatrix4Translate(_sp.transform, 0, -45+10* cosf(particleTicker*0.2), 0);
            _sp.transform = GLKMatrix4Rotate(_sp.transform, 3.14159f, 0, 0, 1);
            _sp.bind();
            _sp.draw();
            
        }
    }
    glDisable(GL_BLEND);
    // 柵門上半部，要蓋住羊，所以在畫羊的後面 //
#ifndef USE_SIMPLE_DOOR
    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
    _sp.color = GLKVector4Make(0,0,0,0);
    for( map<int, SheepSheepInfo>::iterator it = doors.begin();
        it!= doors.end();
        ++it )
    {
        SheepSheepInfo &jb = it->second;
        _sp.imageSize = GLKVector2Make(DOOR_DEFAULT_WIDTH,  jb.length-SHEEP_SIZE/2);
        _sp.centerPosition = GLKVector2Make(DOOR_OFFSET_X, DOOR_OFFSET_Y);
        _sp.transform = GLKMatrix4MakeTranslation(jb.pos.x, jb.pos.y, 0);
        float angle = atan2f(jb.pos2.y-jb.pos.y, jb.pos2.x-jb.pos.x);
        _sp.transform = GLKMatrix4Rotate(_sp.transform, angle-3.14159/2, 0, 0, 1);
        if( jb.states == 0 )
            _sp.set( _actions_door[0], jb.timer );
        else
            _sp.set( _actions_door[0], 0.36-jb.timer );
        _sp.bind();
        _sp.draw();
    }
    glEnable(GL_BLEND);
#endif
    // 觸碰螢幕的特效 //
    _sp.texTransform = GLKMatrix3Identity;
    glBlendFunc(GL_ONE, GL_ONE);
    glEnable(GL_BLEND);
    vector<SimpleEmitter::Particle> &ps = _emitter.getParticlesRef();
    for( int i=ps.size()-1; i>=0; --i )
    {
        SimpleEmitter::Particle p = ps[i];
        if( !p.active )
            continue;
        _sp.tex = _tex_wave;
        int w = 200* p.timer+50;
        int h = 200* p.timer+50;
        _sp.centerPosition = GLKVector2Make(w/2, h/2);
        _sp.imageSize = GLKVector2Make(w, h);
        _sp.transform = GLKMatrix4MakeTranslation( p.pos.x, p.pos.y, 0);
        float sq = sqrtf(p.timer);
        _sp.color = GLKVector4Make(-sq, -sq, -sq, -p.timer);
        _sp.bind();
        _sp.draw();
    }
    glDisable(GL_BLEND);
    // 時間條 //
    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
    int barSize = 395;
    float range = (_maxtime- _mintime);
    float ranges[] = {
        _mintime, range/2, range/2, DEAD_TIME
    };
    int rangesLen = 4;
    int rid = 0;
    float currV = _gametimer;
    for( rid=0; rid<rangesLen; ++rid )
        if( (currV -= ranges[rid]) < 0 )
        {
            currV += ranges[rid];
            break;
        }
    if( rid == rangesLen ){
        _sp.centerPosition = GLKVector2Make(0, 0);
        _sp.texTransform = GLKMatrix3Identity;
        _sp.imageSize = GLKVector2Make(barSize, 50);
        _sp.transform = GLKMatrix4MakeTranslation(614, 0, 0);
        _sp.tex = -1;
        _sp.color = GLKVector4Make(45/255.0, 25/255.0, 4/255.0, 1);
        _sp.bind();
        _sp.draw();
    }
    else
    {
        float currPos = currV/ ranges[rid];
        if( currPos > 1 )
            currPos = 1;
        
        if( rid == rangesLen-1 )
        {
            _sp.centerPosition = GLKVector2Make(0, 0);
            _sp.texTransform = GLKMatrix3Identity;
            _sp.imageSize = GLKVector2Make(barSize, 50);
            _sp.transform = GLKMatrix4MakeTranslation(614, 0, 0);
            _sp.tex = -1;
            _sp.color = GLKVector4Make(45/255.0, 25/255.0, 4/255.0, 1);
            _sp.bind();
            _sp.draw();
        }
        else
        {
            float inter = (rid+1.0)/rangesLen;
            _sp.centerPosition = GLKVector2Make(0, 0);
            _sp.texTransform = GLKMatrix3Identity;
            _sp.imageSize = GLKVector2Make(barSize, 50);
            _sp.transform = GLKMatrix4MakeTranslation(614, 0, 0);
            _sp.tex = -1;
            _sp.color = GLKVector4Make(0+(1-0)*inter, 1+(0-1)*inter, 0.0, 1);
            _sp.bind();
            _sp.draw();
        }
        float inter = (float)rid/rangesLen;
        _sp.color = GLKVector4Make(0+(1-0)*inter, 1+(0-1)*inter, 0.0, 1);
        _sp.imageSize = GLKVector2Make(barSize, 50);
        _sp.transform = GLKMatrix4MakeTranslation(614+barSize* currPos, 0, 0);
        _sp.bind();
        _sp.draw();
        
        int starBarSize = barSize>>1,
            offset = (barSize- starBarSize)>>1,
            starOffset = starBarSize/((3-rid)+1);
        for( int i=0; i<(3-rid); ++i )
        {
            _sp.tex = tex_selectLevelPanel_logo_star;
            _sp.color = GLKVector4Make(0, 0, 0, 0);
            _sp.centerPosition = GLKVector2Make(15, 0);
            _sp.imageSize = GLKVector2Make(30, 30);
            _sp.transform = GLKMatrix4MakeTranslation(614+offset+starOffset*(i+1), 10, 0);
            _sp.bind();
            _sp.draw();
        }
    }
    
    glDisable(GL_BLEND);
    // 上面板 //
    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
    _sp.transform = GLKMatrix4MakeTranslation(0, 0, 0);
    _sp.imageSize = GLKVector2Make(STAGE_W, 50);
    _sp.color = GLKVector4Make(0, 0, 0, 0);
    _sp.texTransform = GLKMatrix3Identity;
    _sp.tex = tex_panel_upper;
    _sp.centerPosition = GLKVector2Make(0, 0);
    _sp.bind();
    _sp.draw();
    glDisable(GL_BLEND);
    // clock //
    bool isTimeout = _gametimer > _maxtime;
    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
    if( isTimeout )
        _sp.transform = GLKMatrix4MakeTranslation(550-sinf(_gametimer*15)*2, 5, 0);
    else
        _sp.transform = GLKMatrix4MakeTranslation(550, 5, 0);
    _sp.imageSize = GLKVector2Make(37, 42);
    _sp.color = GLKVector4Make(0, 0, 0, 0);
    _sp.texTransform = GLKMatrix3Identity;
    _sp.tex = tex_panel_upper_clock;
    _sp.centerPosition = GLKVector2Make(0, 0);
    _sp.bind();
    _sp.draw();
    glDisable(GL_BLEND);
    // 下面板 //
    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
    _sp.transform = GLKMatrix4MakeTranslation(0, 768-50, 0);
    _sp.imageSize = GLKVector2Make(STAGE_W, 50);
    _sp.color = GLKVector4Make(0, 0, 0, 0);
    _sp.texTransform = GLKMatrix3Identity;
    _sp.tex = tex_panel_lower;
    _sp.centerPosition = GLKVector2Make(0, 0);
    _sp.bind();
    _sp.draw();
    glDisable(GL_BLEND);
#ifdef GAME_SHOW_TIMER
    // 計時器數字 //
    int h, m, s;
    com::gameworks::tool::getHMS(_gametimer, &h, &m, &s);
    NSString *hstr = com::gameworks::tool::fullstr([NSString stringWithFormat:@"%d", h], true, 48, 2);
    NSString *mstr = com::gameworks::tool::fullstr([NSString stringWithFormat:@"%d", m], true, 48, 2);
    NSString *sstr = com::gameworks::tool::fullstr([NSString stringWithFormat:@"%d", s], true, 48, 2);
    NSString *timestr = [NSString stringWithFormat:@"%@:%@:%@", hstr, mstr, sstr];
    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
    _sp.imageSize = GLKVector2Make(48, 48);
    _sp.centerPosition = GLKVector2Make(0, 0);
    _sp.color = GLKVector4Make(0, 0, 0, 0);
    shader::image::drawImageNumber(_sp, [timestr cStringUsingEncoding:NSASCIIStringEncoding], _anim_counter_number, 48, 48, 1024-10, 48, _nummap);
#endif
    // 關卡數字 //
    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
    int lg = _currlevel/ COUNT_LEVEL_IN_ONE_GROUP;
    int ll = _currlevel% COUNT_LEVEL_IN_ONE_GROUP;
    NSString *lgstr = [NSString stringWithFormat:@"%d", lg+1];
    NSString *llstr = [NSString stringWithFormat:@"%d", ll+1];
    _sp.imageSize = GLKVector2Make(36, 48);
    _sp.centerPosition = GLKVector2Make(0, 0);
    shader::image::drawImageNumber(_sp, [lgstr cStringUsingEncoding:NSASCIIStringEncoding], _anim_counter_number, 24, 48, 13+40, 48, _nummap);
    shader::image::drawImageNumber(_sp, [llstr cStringUsingEncoding:NSASCIIStringEncoding], _anim_counter_number, 24, 48, 89+48, 48, _nummap);
    glDisable(GL_BLEND);
}

-(void) glkViewControllerUpdate:(GLKViewController *)controller
{
    
    _emitter.update(.03);
    _sheep_move_emitter.update( .03 );
    for( int i=0; i<ME_LENGTH; ++i )
        _move_emitters[i].update(.03);
    // 處理手指正確的發出began, move, end事件 // 
    _simpleTouchHelper.update(_simpleTouch);
    vector<SimpleTouch::TouchStore> ts = _simpleTouch.getTouches();
    vector<int> begans = _simpleTouchHelper.getBegans();
    for( int i=0; i<begans.size(); ++i )
    {
        SimpleTouch::TouchStore t = _simpleTouch.getTouch(begans[i]);
        _emitter.pos.x = t.p.x;
        _emitter.pos.y = t.p.y;
        _emitter.emit();
        [_app.model mouseDownWithID:t.seq X:t.p.x Y:t.p.y];
    }
    for( int i=0; i<ts.size(); ++i )
    {
        SimpleTouch::TouchStore t = ts[i];
        _emitter.pos.x = t.p.x;
        _emitter.pos.y = t.p.y;
        if( particleTicker % particleEmitDelay == 0 )
            _emitter.emit();
        [_app.model mouseChangeWithID:t.seq X:t.p.x Y:t.p.y];
    }
    
    vector<int> ended = _simpleTouchHelper.getEnded();
    for( int i=0; i<ended.size(); ++i )
    {
        [_app.model mouseUpWithID:ended[i]];
    }
    ++particleTicker;
}

-(void) playSound:(NSString *)name;
{
    [_callback onPlaySound:name];
}

-(void) showTutorial:(int)tutorialId;
{
    [_callback onShowTutorial:tutorialId];
}

-(void) loadResourceWithLevel:(int) level
{
    [self clearAllEntity];
    _currlevel = level;
    _gametimer=0;
    _isStartGame = false;
    // 讀背景圖 //
    LevelDes levelDes = [SheepConfig single]->level_des[ level ];
    _mintime = levelDes.mintime;
    _maxtime = levelDes.maxtime;
    NSString *path = [NSString stringWithCString:levelDes.view encoding:NSASCIIStringEncoding];
    NSString *ext = [NSString stringWithCString:levelDes.view_ext encoding:NSASCIIStringEncoding];
    if( _tex_bg != -1 )
        glDeleteTextures(1, &_tex_bg);
    _tex_bg = createTexture(path, ext);
}
-(void) createSheepWithInfo:(SheepSheepInfo) info
{
    [self handleCreateSheepWithInfo:info];
}
-(void) createFoodWithInfo:(SheepFoodInfo) info;
{
    foods[info.oid] = info;
}
-(void) createDogWithInfo:(SheepSheepInfo) info;
{
    [self handleCreateDogWithInfo:info];
}
-(void) createJumpButtonWithInfo:(SheepSheepInfo) info;
{
    jumpButtons[info.oid] = info;
}
-(void) createDoorWithInfo:(SheepSheepInfo) info;
{
    doors[info.oid] = info;
}
-(void) createDoorButtonWithInfo:(SheepSheepInfo) info;
{
    doorButtons[info.oid] = info;
}
-(void) updateDogWithInfo:(SheepSheepInfo) info;
{
    [self handleUpdateDogWithInfo:info];
}

-(void) updateSheepWithInfo:(SheepSheepInfo) info;
{
    [self handleUpdateSheepWithInfo:info];
}

-(void) updateJumpButtonWithInfo:(SheepSheepInfo) info;
{
    jumpButtons[info.oid] = info;
}

-(void) updateDoorButtonWithInfo:(SheepSheepInfo)info;
{
    doorButtons[info.oid] = info;
}

-(void) updateDoorWithInfo:(SheepSheepInfo)info;
{
    doors[info.oid] = info;
    //doors[info.oid].timer = info.timer;
    //doors[info.oid].states = info.states;
}

-(void) removeFoodWithInfo:(SheepFoodInfo) info;
{
    foods.erase(foods.find(info.oid));
}
-(void) levelPassWithLevel:(int) level
                   usetime:(float) usetime;
{
    [_callback onLevelPassWithLevel:level usetime:usetime];
}
-(void) startGameTimer;
{
    _isStartGame = true;
}
-(void) updateGameTimer:(float)timer;
{
    _gametimer = timer;
}
-(void) levelBreak;
{
    NSLog(@"levelBreak");
}

-(void) mouseCancelled
{
    _simpleTouch.cancelTouch();
}

-(void) destory
{
    _simpleTouch.cancelTouch();
}


-(void) clearAllEntity
{
    sheeps.clear();
    dogs.clear();
    foods.clear();
    seqs.clear();
    jumpButtons.clear();
    doors.clear();
    doorButtons.clear();
}

-(void) handleCreateWithContainer:(map<int, SheepSheepInfo> &)container 
                             info:(SheepSheepInfo&) info;
{
    if( container.find(info.oid) != container.end() )
    {
        NSLog(@"entity %d is exist!!!", info.oid);
        throw "";
    }
    container[info.oid] = info;
    container[info.oid].angle = atan2f(rand()-rand(), rand()-rand());
    container[info.oid].angleFilter = container[info.oid].angle;
    container[info.oid].isItemSpeedUp = false;
}

-(void) handleUpdateWithContainer:(map<int, SheepSheepInfo> &)container                                         
                             info:(SheepSheepInfo &)info;
{
    if( container.find(info.oid) == container.end() )
    {
        NSLog(@"no sheep %d at SheepView.mm!!!", info.oid);
        throw "";
    }
    SheepSheepInfo &sheep = container[info.oid];
    sheep.oldpos = sheep.pos;
    sheep.pos = info.pos;
    sheep.timer = info.timer;
    sheep.type = info.type;
    sheep.states = info.states;
    sheep.isTouchGoal = info.isTouchGoal;
    sheep.isItemSpeedUp = info.isItemSpeedUp;
    if( sheep.oldpos.x != sheep.pos.x || sheep.oldpos.y != sheep.pos.y )
    {
        GLKVector2 d = GLKVector2Subtract(sheep.pos, sheep.oldpos);
        sheep.angle = atan2f(d.y, d.x);
    }
    sheep.angleFilter += (sheep.angle - sheep.angleFilter)* .1;
}

-(void) handleCreateSheepWithInfo:(SheepSheepInfo&) info;
{
    [self handleCreateWithContainer:sheeps info:info];
}

-(void) handleUpdateSheepWithInfo:(SheepSheepInfo&) info;
{
    [self handleUpdateWithContainer:sheeps info:info];
    if( particleTicker % 5 == 0 )
    {
        if( info.states == 1 )
        {
            if( info.groundId == COLOR_ID_SLOW_REGION )
            {
                _move_emitters[ME_SLOW].pos = info.pos;
                _move_emitters[ME_SLOW].emit();
            }
            else
            {
                _move_emitters[ME_SPACE].pos = info.pos;
                _move_emitters[ME_SPACE].emit();
            }
        }
        else if( info.states == 12 )
        {
            _move_emitters[ME_SPACE].pos = info.pos;
            _move_emitters[ME_SPACE].emit();
        }
        else
        {
            if( info.groundId == COLOR_ID_WATER_REGION ||
               info.groundId == COLOR_ID_RIVER )
            {
                _move_emitters[ME_WATER].pos = info.pos;
                _move_emitters[ME_WATER].emit();
            }
        }
    }
    
}

-(void) handleCreateDogWithInfo:(SheepSheepInfo&) info;
{
    [self handleCreateWithContainer:dogs info:info];
    seqs[info.oid] = new Seqments(8, 15);
    seqs[info.oid]->xs[7] = info.lockPos.x;
    seqs[info.oid]->ys[7] = info.lockPos.y;
}

-(void) handleUpdateDogWithInfo:(SheepSheepInfo&) info;
{
    [self handleUpdateWithContainer:dogs info:info];
    if( particleTicker % 5 == 0 )
    {
        if( info.states == 1 || info.states == 3 )
        {
            if( info.groundId == COLOR_ID_SLOW_REGION )
            {
                _move_emitters[ME_SLOW].pos = info.pos;
                _move_emitters[ME_SLOW].emit();
            }
            else
            {
                _move_emitters[ME_SPACE].pos = info.pos;
                _move_emitters[ME_SPACE].emit();
            }
        }
    }
}

@end
