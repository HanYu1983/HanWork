//
//  SheepAlg.h
//  testEmpty4
//
//  Created by Rachel on 12/1/9.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <GLKit/GLKit.h>
#import "SheepConfig.h"
#import <map.h>
#import <vector.h>

using namespace std;

struct Pointi{ int x,y; };
struct Riveri{ Pointi pos; unsigned int color; float dx, dy, nx, ny, distance;};
struct DoorJumpInfo{ char group; Pointi pos; int tag; };
struct DoorGroup{ char group; Pointi p1, p2; };
struct JumpGroup{ char group; Pointi pos, target; };

class SheepMapInfo{
public:
    SheepMapInfo();
    ~SheepMapInfo();
    unsigned int *map;
    int width, height;
    std::map<char, std::vector<Pointi> > groups;
    std::map<char, std::vector<Pointi> > groupsAntelope;
    std::map<unsigned int, std::vector<Pointi> > dogs2;
    NSDictionary 
        *gateRegion,
        *waterRegion, 
        *blueRegion, 
        *redRegion,
        *dogRegion,
        *pigRegion,
        *hippoRegion;
    std::vector<Riveri> riverHeads, rivers;
    std::vector<Pointi> foods, dogs;
    std::vector<DoorJumpInfo> doors, doorButtons, jumpPos, jumpButtons;
};
struct TransitionResult{
    int pos[2];
    unsigned int color;
    bool isCollide, isSpecial;
    int collidePos[2];
    float distanceSq;
};

@interface SheepAlg : NSObject

+(map<char, DoorGroup>) createDoorGroupsWithDoorsInfo:(vector<DoorJumpInfo>)doorsInfo
                                         doorBtnsInfo: (vector<DoorJumpInfo>)doorBtnsInfo;
+(map<char, JumpGroup>) createJumpGroupWithJumpButtons:(vector<DoorJumpInfo>) jumpBtns
                                               jumpPos:(vector<DoorJumpInfo>) jumpPos;

+(void) getARGBComponent:(unsigned int) color
                  result:(unsigned char*) result;

+(BOOL) getJumpPosWithMap:(unsigned int*) map
                    width:(int) width
                   height:(int) height
                       x1:(int) x1
                       y1:(int) y1
                       x2:(int) x2
                       y2:(int) y2
                  stopMap:(NSSet*) stopMap
                   result:(int*) result;

+(void) putLineDataToMapWithMap:(unsigned int*) map
                          width:(int) width
                         height:(int) height
                       cellLine:(NSArray*) cellLine
                          value:(int) value;

+(NSArray*) createCellLineWithX1:(int) x1
                              y1:(int) y1
                              x2:(int) x2 
                              y2:(int) y2;

+(int) isCollideWithData:(unsigned int*) data
                   width:(int) width
                  height:(int) height
                cellLine:(NSArray*) cellLine
                 stopMap:(NSSet*) stopMap;

+(int) isCollideWithBounds: (NSArray *) cellLine
                     width: (int) width
                    height: (int) height;

+(int) isCollideBothWithData:(unsigned int *) data
                       width:(int) width
                      height:(int) height
                    cellLine:(NSArray*) cellLine
                     stopMap:(NSSet*) stopMap;

+(NSString*) getRegionKeyWithX:(int) x
                             Y:(int) y;

+(void) getXYWithRegionKey:(NSString*) key
                        xy:(int*) xy;

+(map<int, GLKVector3>) getRegionCenter:(NSDictionary *)region;

+(void) createRegionWithMap:(unsigned int*) map
                      width:(int) width
                     height:(int) height
                          x:(int) x
                          y:(int) y
                        ref:(NSMutableDictionary*) ref;

+(SheepMapInfo*) getMapInfoWithMap:(unsigned int*) map
                             width:(int) width
                            height:(int) height;

+(map<char, vector<Riveri> >) createRiverWithHeads:(vector<Riveri>) heads
                                            rivers:(vector<Riveri>) rivers
                                             width:(int) width;

+(int) distanceToRiverLineWithX:(int) x
                              y:(int) y
                          river:(const vector<Riveri>*) river;

+(TransitionResult) computTransitionWithMap:(unsigned int*) map
                                      width:(int) width
                                     height:(int) height
                                    stopMap:(NSSet*) stopMap
                                        pos:(int*) pos
                                  targetPos:(int*) targetPos;

+(void) getDataMapCoordsWithX:(float) x
                            Y:(float) y
                       result:(int*) result;

+(void) getStageCoordsWithX:(int) x
                          Y:(int) y
                     result:(float*) result;

+(float) computDistanceToRiverHeadWithRiver:(const vector<Riveri>*) river
                                      width:(int) width
                                          x:(int) x
                                          y:(int) y;

+(GLKVector2) getRiverVelocityWithRiver:(vector<Riveri>) river
                               distance:(float) distance
                                 isGoal:(bool*) isGoal;
@end

namespace sheep {
    class Sheep;
    
    struct RegionObject{
        int markcount;
        int cx, cy;
    };
    
    struct RegionObjects{
        NSDictionary *region;
        map<int, RegionObject> map;
    };
    
    // 地圖資訊類。每個關卡初使化時會從SheepMapInfo建立一個新的物件 //
    class Map{
        SheepMapInfo *info;
        map<char, vector<Riveri> > rivers;
        map<char, NSDictionary*> regionMaps;
        map<int, RegionObjects> winRegionObjects;
        vector<RegionObjects*> rosAry;
        Map();
    public:
        explicit Map( SheepMapInfo *info );
        int getRegionId( int x, int y )const;
        const vector<Riveri> *isCloseToRivers( int x, int y, int distance )const;
        bool isGoal(int count, vector<Sheep> sheeps );
        int getCloseWinRegionIdAndMark( char groupId, int x, int y, int wincount );
        RegionObject *getRegionObject( int rid );
        // implicit inline //
        SheepMapInfo *getSheepMapInfoPtr(){ return info; }
        int getDataMapWidth()const{ return info->width; }
        int getDataMapHeight()const{ return info->height; }
        map<char, vector<Riveri> > getRivers()const{ return rivers; }
        bool isValidPos( int x, int y )const{
            return x>=0 && y>=0 && x<getDataMapWidth() && y<getDataMapHeight();
        }
        unsigned int getColor( int x, int y )const{ 
            return info->map[ y* info->width+ x ]; 
        }
        unsigned int *getDataMap()const{
            return info->map;
        }
        bool isTouchWater( int x, int y )const{
            if( !isValidPos(x, y) )
                return false;
            return this->getColor(x, y) == COLOR_ID_WATER_REGION;
        }
        bool isTouchIce( int x, int y )const{
            if( !isValidPos(x, y) )
                return false;
            return this->getColor(x, y) == COLOR_ID_ICE_REGION;
        }
        bool isTouchSlow( int x, int y )const{
            if( !isValidPos(x, y) )
                return false;
            return this->getColor(x, y) == COLOR_ID_SLOW_REGION;
        }
        bool isCanNotMove( int x, int y )const{
            if( !isValidPos(x, y) )
                return true;
            return this->getColor(x, y) == COLOR_ID_STOP_REGION;
        }
        bool isTouchGroupGoal( int x, int y, char group );
    };
    
}
