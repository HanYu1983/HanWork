//
//  SheepView.h
//  testEmpty4
//
//  Created by Rachel on 12/1/18.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <GLKit/GLKit.h>
#import <map>
#import "SheepApp.h"
#import "../gameworks/view.h"
#import "../gameworks/com.gameworks.tool.h"

using namespace std;
using namespace com::gameworks::seqment;
using namespace com::gameworks::touch;
using namespace com::gameworks::particle;
using namespace com::gameworks::opengl;

@protocol ISheepViewCallback <NSObject>
-(void) onLevelPassWithLevel:(int) level
                     usetime:(float) time;
-(void) onPlaySound:(NSString*) name;
-(void) onShowTutorial:(int) tutorialId;
@end

@interface SheepView : UIView<ISheepView, GLKViewDelegate, GLKViewControllerDelegate> {
    id<ISheepApp> _app;
    id<ISheepViewCallback> _callback;
    GLKViewController *_glkCtr;
    GLuint _tex_bg, _tex_wave;
    map<int, SheepSheepInfo> sheeps;
    map<int, SheepSheepInfo> dogs;
    map<int, SheepFoodInfo> foods;
    map<int, Seqments*> seqs;
    map<int, SheepSheepInfo> jumpButtons, doors, doorButtons;
    int _currlevel;
    shader::image::ShaderProgram _sp;
    SimpleTouchHelper _simpleTouchHelper;
    SimpleTouch _simpleTouch;
    SimpleEmitter _emitter, _sheep_move_emitter;
    enum{
        ME_SPACE,
        ME_WATER,
        ME_SLOW,
        ME_ITEM_SPEED_UP,
        ME_LENGTH
    };
    SimpleEmitter _move_emitters[ME_LENGTH];
    map<char, int> _nummap;
    float _gametimer;
    float _mintime, _maxtime;
    bool _isStartGame;
}
-(id) initWithApp:(id<ISheepApp>) app
         callback:(id<ISheepViewCallback>)callback;
@end





