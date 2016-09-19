//
//  SheepConfig.h
//  testEmpty4
//
//  Created by Rachel on 12/1/9.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#define SHEEP_ARGB(a,r,g,b) (a<<24)|(r<<16)|(g<<8)|b
#define SHEEP_COLOR_A( color ) (color>>24)&0xFF
#define SHEEP_COLOR_R( color ) (color>>16)&0xFF
#define SHEEP_COLOR_G( color ) (color>>8)&0xFF
#define SHEEP_COLOR_B( color ) (color)&0xFF
#define JUMP_PIXEL_DISTANCE 15
#define GET_WATER_OUT_DURATION 1

#define RUN_SCARE_DISTANCE 105

#define RIVER_WIDTH 2
#define SWIMMING_SPEED 3
#define SWIMMING_RIVER_SPEED 1
#define DOG_SLEEP_RATE 5
#define DOG_MOVE_TIMER 3
#define DOG_LOCK_DISTANCE 80
#define DOG_SLEEP_DURATION 3


#define GRAB_DISTANCE 25
#define LOCK_FOOD_RADIUS 25
#define SHEEP_SIZE 130
#define PIG_SIZE_WIDTH 112*0.66
#define PIG_SIZE_HEIGHT 165*0.66
#define DOG_SIZE 120

#define SHEEP_RUN_SPEED 7
#define RUN_DISTANCE 50
#define RUN_AWAY_ATTACK_DISTANCE 100
#define RUN_AWAY_DOG_DISTANCE 100

#define BOX_SIZE 60
#define BOX_RUN_SPEED 6
#define BOX_RUN_DISTANCE 50
#define BOX_RUN_AWAY_ATTACK_DISTANCE 50

#define PIG_RUN_SPEED 6
#define PIG_RUN_DISTANCE 40
#define PIG_RUN_AWAY_ATTACK_DISTANCE 85

#define UNLOCK_DOG_RUN_SPEED 8.5
#define UNLOCK_DOG_RUN_DISTANCE 55
#define UNLOCK_DOG_RUN_AWAY_ATTACK_DISTANCE 65

#define HIPPO_RUN_SPEED 5
#define HIPPO_RUN_DISTANCE 45
#define HIPPO_RUN_AWAY_ATTACK_DISTANCE 85

#define DOOR_BUTTON_SIZE 100
#define JUMP_PLATFORM_SIZE 100
#define FOOD_SIZE 50
#define USE_SIMPLE_DOOR
//#define USE_START_GAME_PANEL
//#define GAME_SHOW_TIMER
#define COUNT_LEVEL_GROUP 3
#define COUNT_LEVEL_IN_ONE_GROUP 12
#define COUNT_LEVEL COUNT_LEVEL_GROUP* COUNT_LEVEL_IN_ONE_GROUP
#define DEAD_TIME 10
#define COUNT_TUTORIAL_IMAGE 7
#define ITEM_TIME_PLUS_TIME 3
//#define MODE_DEBUG

typedef struct _LevelDes{
    char *datamap;
    int width, height;
    int wincount;
    char *view, *view_ext;
    float mintime, maxtime;
    int tutorialId;
} LevelDes;

enum{
    GROUP_RED,
    GROUP_BLUE,
    GROUP_DOG,
    GROUP_HIPPO,
    GROUP_PIG,
    GROUP_BOX
};

enum{
    IS_COLOR_TYPE = 123,
    COLOR_TYPE_DOOR = 150,
    COLOR_TYPE_DOOR_BUTTON = 151,
    COLOR_TYPE_JUMP_BUTTON = 152,
    COLOR_TYPE_JUMP_POS = 153
};

enum{
    // 到位區域 //
    COLOR_ID_STOP_REGION = SHEEP_ARGB(255, 255, 255, 255),
    COLOR_ID_RED_REGION = SHEEP_ARGB(255, 255, 0, 0),
    COLOR_ID_BLUE_REGION = SHEEP_ARGB(255, 0, 0, 255),
    COLOR_ID_DOG_REGION = SHEEP_ARGB(255, 220, 0, 0),
    COLOR_ID_PIG_REGION = SHEEP_ARGB(255, 200, 0, 0),
    COLOR_ID_HIPPO_REGION = SHEEP_ARGB(255, 180, 0, 0),
    // 地型 //
    COLOR_ID_SLOW_REGION = SHEEP_ARGB(255, 0, 166, 81),
    COLOR_ID_WATER_REGION = SHEEP_ARGB(255, 0, 255, 255),
    COLOR_ID_ICE_REGION = SHEEP_ARGB(255, 180, 255, 255),
    COLOR_ID_GATE_REGION = SHEEP_ARGB(255, 117, 76, 36),
    COLOR_ID_RIVER = SHEEP_ARGB(255, 129, 129, 129),
    // 道具 //
    COLOR_ID_FOOD = SHEEP_ARGB(255, 140, 98, 57),
    // 可控生物 //
    COLOR_ID_RED = SHEEP_ARGB(255, 246, 150, 121),
    COLOR_ID_BLUE = SHEEP_ARGB(255, 0, 174, 239),
    COLOR_ID_UNLOCK_DOG= SHEEP_ARGB(255, 246, 150, 122),
    COLOR_ID_PIG = SHEEP_ARGB(255, 246, 150, 123),
    COLOR_ID_BOX = SHEEP_ARGB(255, 246, 150, 124),
    COLOR_ID_HIPPO = SHEEP_ARGB(255, 246, 150, 125),
    // 羚羊，目前不支援 //
    COLOR_ID_RED_ANTELOPE = SHEEP_ARGB(255, 242, 108, 79),
    COLOR_ID_BLUE_ANTELOPE = SHEEP_ARGB(255, 109, 207, 246),
    // 自動生物 //
    COLOR_ID_DOG = SHEEP_ARGB(255, 255, 255, 0),
    COLOR_ID_BEAR = SHEEP_ARGB(255, 255, 255, 1),
    COLOR_ID_SNAKE = SHEEP_ARGB(255, 255, 255, 2)
};

enum{
    SHEEP_TYPE_SHEEP,     //*綿羊
    SHEEP_TYPE_ANTELOPE,  //*羚羊。會跳
    SHEEP_TYPE_BOX,   //*箱子。
    SHEEP_TYPE_PIG,   //*豬。不怕沼澤
    SHEEP_TYPE_DOG,   //*狗。羊會逃離
    SHEEP_TYPE_HIPPO, //*河馬。在池溏裡可控
    SHEEP_TYPE_SHELL  //穿山甲。只能直線移動移到碰壁
};

enum{
    STAGE_X = 0,
    STAGE_Y = 50,
    STAGE_W = 1024,
    STAGE_H = 768-100
};

enum{
    DATAMAP_SIZE_W = 120,
    DATAMAP_SIZE_H = 80
};

typedef struct _Config{
    LevelDes *level_des;
    NSSet *stopMap;
    NSDictionary *colorIdMapGroupId;
    float zoomFactorX, zoomFactorY;
} Config;

@interface SheepConfig : NSObject
+(Config*) single;
+(int) computStarCountWithLevel:(int) level
                        usetime:(float) usetime
                            min:(int) minv
                            max:(int) maxv;
+(void) configurate;
+(void) configurateRelease;
@end
