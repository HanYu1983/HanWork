//
//  SheepAlg.m
//  testEmpty4
//
//  Created by Rachel on 12/1/9.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import "SheepAlg.h"
#import "SheepEntity.h"

SheepMapInfo::SheepMapInfo():
    gateRegion(0),
    waterRegion(0),
    blueRegion(0),
    redRegion(0),
    dogRegion(0),
    pigRegion(0),
    hippoRegion(0){}

SheepMapInfo::~SheepMapInfo(){
    if( gateRegion )
        [gateRegion release];
    if( waterRegion )
        [waterRegion release];
    if( blueRegion )
        [blueRegion release];
    if( redRegion )
        [redRegion release];
    if( dogRegion )
        [dogRegion release];
    if( pigRegion )
        [pigRegion release];
    if( hippoRegion )
        [hippoRegion release];
}

int sheepRegionIdCounter=0;

@implementation SheepAlg

+(void) getARGBComponent:(unsigned int)color result:(unsigned char *)result
{
    result[0] = color >> 24;
    result[1] = (color >> 16) & 0xFF;
    result[2] = (color >> 8 ) & 0xFF;
    result[3] = color & 0xFF;
}

+(BOOL) getJumpPosWithMap:(unsigned int*) map
                    width:(int) width
                   height:(int) height
                       x1:(int) x1
                       y1:(int) y1
                       x2:(int) x2
                       y2:(int) y2
                  stopMap:(NSSet*) stopMap
                   result:(int*) result;
{
    //NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init];
    NSArray *cellLine = [self createCellLineWithX1:x2 y1:y2 x2:x1 y2:y1];
    int collide = [self isCollideBothWithData:map 
                                        width:width
                                       height:height 
                                     cellLine:cellLine
                                      stopMap:stopMap];
    if( collide == 0 )
    {
        cellLine = [self createCellLineWithX1:x1 y1:y1 x2:x2 y2:y2];
        collide = [self isCollideBothWithData:map 
                                        width:width
                                       height:height 
                                     cellLine:cellLine 
                                      stopMap:stopMap];
    }
    else 
    {
        result[0] = x2;
        result[1] = y2;
        //[pool release];
        return YES;
    }
    if( collide != -1 )
    {
        result[0] = [[cellLine objectAtIndex:collide] intValue];
        result[1] = [[cellLine objectAtIndex:collide+1] intValue];
        //[pool release];
        return YES;
    }
    //[pool release];
    return NO;
}

+(void) putLineDataToMapWithMap:(unsigned int*) map
                          width:(int) width
                         height:(int) height
                       cellLine:(NSArray*) cellLine
                          value:(int) value;
{
    for( int i=0; i<cellLine.count; i+=2 )
    {
        int x = [[cellLine objectAtIndex:i] intValue],
            y = [[cellLine objectAtIndex:i+1] intValue];
        map[y* width+ x] = value;
    }
}


+(NSArray*) createCellLineWithX1:(int) x1
                              y1:(int) y1
                              x2:(int) x2 
                              y2:(int) y2;
{
    int xd = x2 - x1, xdd = xd >= 0 ? 1 : -1;
    int yd = y2 - y1, ydd = yd >= 0 ? 1 : -1;
    if( x1 == x2 )
    {
        NSMutableArray *ary = [[NSMutableArray alloc] init];
        for( int s = y1; s!= y2; s+= ydd )
        {
            [ary addObject:[NSNumber numberWithInt:x1]];
            [ary addObject:[NSNumber numberWithInt:s]];
        }
        [ary addObject:[NSNumber numberWithInt:x2]];
        [ary addObject:[NSNumber numberWithInt:y2]];
        return [ary autorelease];
    }
    if( y1 == y2 )
    {
        NSMutableArray *ary = [[NSMutableArray alloc] init];
        for( int s = x1; s!= x2; s+= xdd )
        {
            [ary addObject:[NSNumber numberWithInt:s]];
            [ary addObject:[NSNumber numberWithInt:y1]];
        }
        [ary addObject:[NSNumber numberWithInt:x2]];
        [ary addObject:[NSNumber numberWithInt:y2]];
        return [ary autorelease];
    }
    float factor = fabs( xd/ (float)yd );
    NSMutableArray *ret = [[NSMutableArray alloc] init];
    [ret addObject:[NSNumber numberWithInt:x1]];
    [ret addObject:[NSNumber numberWithInt:y1]];
    float xf = x1;
    for( int i = 0,
        len = abs(yd),
        yf = y1;
        i<len; ++i )
    {
        yf += ydd; xf += factor * xdd;
        [ret addObject:[NSNumber numberWithInt:(int)(xf)]];
        [ret addObject:[NSNumber numberWithInt:yf]];
    }
    if( [ret count] >= 4 )
        for( int i= ret.count-2; i>=2; i-=2 )
        {
            int oldx = [[ret objectAtIndex:i-2] intValue];
            int oldy = [[ret objectAtIndex:i-1] intValue];
            int x = [[ret objectAtIndex:i] intValue];
            int y = [[ret objectAtIndex:i+1] intValue];
            if(( oldx != x ) && (oldy != y ))
                for( int s = oldx,
                    count = 0,
                    d = (x - oldx >= 0 ? 1 : -1);
                    s!=x; s+=d, ++count)
                {
                    [ret insertObject:[NSNumber numberWithInt:y] atIndex:i+count*2];
                    [ret insertObject:[NSNumber numberWithInt:s] atIndex:i+count*2];
                }
        }
    return [ret autorelease];
}

+(int) isCollideWithData:(unsigned int *) data
                   width:(int) width
                  height:(int) height
                cellLine:(NSArray*) cellLine
                 stopMap:(NSSet*) stopMap;
{
    BOOL (^isStop)(unsigned int*, NSSet*, int , int ) = 
    ^( unsigned int *data, NSSet *stopMap, int x, int y){
        if( x < 0 || x >= width ||
           y < 0 || y >= height )
            return YES;
        if( !stopMap )
            return NO;
        return [stopMap containsObject:[NSNumber numberWithUnsignedInt:data[y* width+ x]]] ? YES : NO;
    };
    if( [cellLine count] < 2 )
        return -1;
    for( int i=0; i< cellLine.count; i+=2 )
    {
        int x = [[cellLine objectAtIndex:i] intValue];
        int y = [[cellLine objectAtIndex:i+1] intValue];
        if( isStop( data, stopMap, x, y ) )
            return i;
    }
    return -1;
}

+(int) isCollideWithBounds: (NSArray *) cellLine
                     width: (int) width
                    height: (int) height;
{
    for( int i=0; i< cellLine.count; i+=2 )
    {
        int x = [[cellLine objectAtIndex:i] intValue];
        int y = [[cellLine objectAtIndex:i+1] intValue];
        if( x < 0 || x >= width ||
           y < 0 || y >= height )
            return i;
    }
    return -1;
}

+(int) isCollideBothWithData:(unsigned int *) data
                       width:(int) width
                      height:(int) height
                    cellLine:(NSArray*) cellLine
                     stopMap:(NSSet*) stopMap;
{
    int c1 = [self isCollideWithData:data
                               width:width 
                              height:height
                            cellLine:cellLine
                             stopMap:stopMap];
    int c2 = [self isCollideWithBounds:cellLine 
                                 width:width
                                height:height];
    if( c1 != -1 && c2 != -1 )
        return MIN(c1, c2);
    if( c1 != -1 )
        return c1;
    if( c2 != -1 )
        return c2;
    return -1;
}

+(NSString*) getRegionKeyWithX:(int) x
                             Y:(int) y;
{
    return [NSString stringWithFormat:@"%d_%d", x, y ];
}

+(NSString*) getRegionKeyWithPosition:(GLKVector2) pos
{
    int mapcoord[2];
    [self getDataMapCoordsWithX:pos.x Y:pos.y result:mapcoord];
    return [self getRegionKeyWithX:mapcoord[0] Y:mapcoord[1]];
}

+(void) getXYWithRegionKey:(NSString*) key
                        xy:(int*) xy;
{
    unsigned int cut = [key rangeOfString:@"_"].location;
    int x = [[key substringToIndex:cut] intValue];
    int y = [[key substringWithRange:NSMakeRange(cut+1, (key.length-cut-1))] intValue];
    xy[0] = x; 
    xy[1] = y;
}

+(map<int, GLKVector3>) getRegionCenter:(NSDictionary *)region;
{
    map<int, GLKVector3> *ret = new map<int, GLKVector3>;
    int *xy = new int[2];
    [region enumerateKeysAndObjectsUsingBlock:^(id key, id obj, BOOL *stop) {
        [self getXYWithRegionKey:key xy:xy];
        int rid = [obj intValue];
        (*ret)[rid].x += xy[0];
        (*ret)[rid].y += xy[1];
        ++(*ret)[rid].z;
    }];
    delete [] xy;
    map<int, GLKVector3> tmp = *ret;
    for( map<int, GLKVector3>::iterator it = tmp.begin();
        it!= tmp.end();
        ++it)
    {
        GLKVector3 &p = it->second;
        p.x /= p.z;
        p.y /= p.z;
        p.x = (int)p.x;
        p.y = (int)p.y;
    }
    delete ret;
    return tmp;
}

+(NSMutableDictionary*) collectWithMap:(unsigned int*) map
                                 width:(int) width
                                height:(int) height
                              regionId:(int) regionId
                                     x:(int) x
                                     y:(int) y
                                 color:(unsigned int) color
                             resultMap:(NSMutableDictionary*) resultMap
                              closeMap:(NSMutableSet*) closeMap;
{
    if( x<0 || x>= width || y<0 || y>= height )
        return resultMap;
    NSString *key = [self getRegionKeyWithX:x Y:y];
    //NSLog(@"closeMap count %d", closeMap.count);
    if( [closeMap containsObject:key] )
        return resultMap;
    [closeMap addObject:key];
    if( map[y* width+ x] == color )
    {
        [resultMap setObject:[NSNumber numberWithInt:regionId] forKey:key];
        [self collectWithMap:map
                       width:width
                      height:height
                    regionId:regionId
                           x:x+1
                           y:y
                       color:color
                   resultMap:resultMap
                    closeMap:closeMap];
        [self collectWithMap:map
                       width:width
                      height:height
                    regionId:regionId
                           x:x
                           y:y+1
                       color:color
                   resultMap:resultMap
                    closeMap:closeMap];
        [self collectWithMap:map
                       width:width
                      height:height
                    regionId:regionId
                           x:x-1
                           y:y
                       color:color
                   resultMap:resultMap
                    closeMap:closeMap];
        [self collectWithMap:map
                       width:width
                      height:height
                    regionId:regionId
                           x:x
                           y:y-1
                       color:color
                   resultMap:resultMap
                    closeMap:closeMap];
        
    }
    return resultMap;
}


+(void) createRegionWithMap:(unsigned int*) map
                      width:(int) width
                     height:(int) height
                          x:(int) x
                          y:(int) y
                        ref:(NSMutableDictionary*) ref;
{
    NSString *key = [self getRegionKeyWithX:x Y:y];
    if( [ref objectForKey:key] )
        return;
    NSMutableSet *closeMap = [[NSMutableSet alloc] init];
    [self collectWithMap:map 
                   width:width
                  height:height
                regionId:sheepRegionIdCounter++
                       x:x
                       y:y 
                   color:map[y* width +x]
               resultMap:ref 
                closeMap:closeMap];
    [closeMap release];
}

+(SheepMapInfo*) getMapInfoWithMap:(unsigned int*) map
                             width:(int) width
                            height:(int) height;
{
    SheepMapInfo *info = new SheepMapInfo;
    info->map = map;
    info->width = width;
    info->height = height;
    NSMutableDictionary *gateRegion = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *waterRegion = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *blueRegion = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *redRegion = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *dogRegion = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *pigRegion = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *hippoRegion = [[NSMutableDictionary alloc] init];
    for( int r=0; r<height; ++r )
        for( int c=0; c<width; ++c )
        {
            unsigned int color = map[r* width+ c];
            unsigned char argb[4];
            [self getARGBComponent:color result:argb];
            if( argb[1] == IS_COLOR_TYPE )
            {
                switch( argb[2] ){
                case COLOR_TYPE_DOOR_BUTTON:
                    {
                        // 結構中的任何值都要記得初使化，不然可能出現很難找的錯誤 //
                        DoorJumpInfo dj;
                        dj.group = argb[3];
                        dj.pos.x = c;
                        dj.pos.y = r;
                        dj.tag = 0;
                        info->doorButtons.push_back(dj);
                    }
                        break;
                    case COLOR_TYPE_DOOR:
                    {
                        DoorJumpInfo dj;
                        dj.group = argb[3];
                        dj.pos.x = c;
                        dj.pos.y = r;
                        dj.tag = 0;
                        info->doors.push_back(dj);
                    }
                        break;
                    case COLOR_TYPE_JUMP_BUTTON:
                    {
                        DoorJumpInfo dj;
                        dj.group = argb[3];
                        dj.pos.x = c;
                        dj.pos.y = r;
                        dj.tag = 0;
                        info->jumpButtons.push_back(dj);
                    }
                        break;
                    case COLOR_TYPE_JUMP_POS:
                    {
                        DoorJumpInfo dj;
                        dj.group = argb[3];
                        dj.pos.x = c;
                        dj.pos.y = r;
                        dj.tag = 0;
                        info->jumpPos.push_back(dj);
                    }
                        break;
                }
                continue;
            }
            
            switch( color ){
                case COLOR_ID_PIG:
                case COLOR_ID_HIPPO:
                case COLOR_ID_UNLOCK_DOG:
                case COLOR_ID_RED:
                case COLOR_ID_BLUE:
                case COLOR_ID_BOX:
                {
                    char gid = [[[SheepConfig single]->colorIdMapGroupId objectForKey:[NSNumber numberWithUnsignedInt:color]] intValue];
                    NSLog(@"gid %d", gid);
                    Pointi pos = { c, r };
                    info->groups[gid].push_back(pos);
                }
                    break;
                case COLOR_ID_BLUE_ANTELOPE:
                case COLOR_ID_RED_ANTELOPE:
                {
                    int gid = [[[SheepConfig single]->colorIdMapGroupId objectForKey:[NSNumber numberWithUnsignedInt:color]] intValue];
                    Pointi pos = { c, r };
                    info->groupsAntelope[gid].push_back(pos);
                }
                    break;
                case COLOR_ID_DOG_REGION:
                {
                    [self createRegionWithMap:map 
                                        width:width
                                       height:height 
                                            x:c
                                            y:r
                                          ref:dogRegion];
                }
                    break;
                case COLOR_ID_PIG_REGION:
                {
                    [self createRegionWithMap:map 
                                        width:width
                                       height:height 
                                            x:c
                                            y:r
                                          ref:pigRegion];
                }
                    break;
                case COLOR_ID_HIPPO_REGION:
                {
                    [self createRegionWithMap:map 
                                        width:width
                                       height:height 
                                            x:c
                                            y:r
                                          ref:hippoRegion];
                }
                    break;
                case COLOR_ID_BLUE_REGION:
                    [self createRegionWithMap:map
                                        width:width
                                       height:height
                                            x:c
                                            y:r
                                          ref:blueRegion];
                    break;
                case COLOR_ID_RED_REGION:
                    [self createRegionWithMap:map
                                        width:width
                                       height:height
                                            x:c
                                            y:r
                                          ref:redRegion];
                    break;
                case COLOR_ID_WATER_REGION:
                    /*
                    [self createRegionWithMap:map
                                        width:width
                                       height:height
                                            x:c
                                            y:r
                                          ref:waterRegion];
                    */
                    break;
                case COLOR_ID_GATE_REGION:
                    /*
                    [self createRegionWithMap:map
                                        width:width
                                       height:height
                                            x:c
                                            y:r
                                          ref:gateRegion];
                    */
                    break;
                case COLOR_ID_FOOD:
                {
                    Pointi pos = { c, r };
                    info->foods.push_back(pos);
                }   
                    break;
                case COLOR_ID_DOG:
                case COLOR_ID_BEAR:
                case COLOR_ID_SNAKE:
                {
                    Pointi pos = { c, r };
                    info->dogs.push_back(pos);
                    info->dogs2[color].push_back(pos);
                }       
                    break;
                case COLOR_ID_RIVER:
                {
                    Riveri river = { c, r, color };
                    info->riverHeads.push_back(river);
                }
                    break;
                default:
                {
                    int rc = SHEEP_COLOR_R(color);
                    int gc = SHEEP_COLOR_G(color);
                    int bc = SHEEP_COLOR_B(color);
                    if( rc < 0xFF && ( rc == gc ) && ( gc == bc ) )
                    {
                        Riveri river = { c, r, color };
                        info->rivers.push_back(river);
                    }
                        
                }
                    break;
            }
        }
    info->gateRegion = gateRegion;
    info->waterRegion = waterRegion;
    info->redRegion = redRegion;
    info->blueRegion = blueRegion;
    info->dogRegion = dogRegion;
    info->pigRegion = pigRegion;
    info->hippoRegion = hippoRegion;
    return info;
}

+(map<char, DoorGroup>) createDoorGroupsWithDoorsInfo:(vector<DoorJumpInfo>)doorsInfo
                                         doorBtnsInfo: (vector<DoorJumpInfo>)doorBtnsInfo
{
    map<char, DoorGroup> ret;
    DoorJumpInfo *(^find)(vector<DoorJumpInfo> &, char, int) = 
    ^DoorJumpInfo *(vector<DoorJumpInfo> &doorsInfo, char group, int curr ){
        for( int i=0; i<doorsInfo.size(); ++i )
        {
            if( i == curr )
                continue;
            DoorJumpInfo *d = &doorsInfo[i];
            if( d->tag == 1 )
                continue;
            if( d->group == group )
            {
                d->tag = 1;
                return d;
            }
        }
        return 0;
    };
    for( int i=0; i<doorsInfo.size(); ++i )
    {
        DoorJumpInfo &d1 = doorsInfo[i];
        if( d1.tag == 1 )
            continue;
        d1.tag = 1;
        DoorJumpInfo *d2 = find( doorsInfo, d1.group, i );
        if( !d2 )
            throw "error!!!!";
        DoorGroup dg = {
            .group = d1.group,
            .p1 = d1.pos,
            .p2 = d2->pos
        };
        ret[dg.group] = dg;
    }
    return ret;
}

+(map<char, JumpGroup>) createJumpGroupWithJumpButtons:(vector<DoorJumpInfo>) jumpBtns
                                               jumpPos:(vector<DoorJumpInfo>) jumpPos;
{
    DoorJumpInfo *(^find)(vector<DoorJumpInfo> &, int) = 
    ^DoorJumpInfo *(vector<DoorJumpInfo> &jumpPos, int group ){
        for( int i=0; i<jumpPos.size(); ++i )
        {
            DoorJumpInfo *jp = &jumpPos[i];
            if( jp->tag == 1 )
                continue;
            if( jp->group == group )
            {
                jp->tag = 1;
                return jp;
            }
        }
        return 0;
    };
    map<char, JumpGroup> ret;
    for( int i=0; i<jumpBtns.size(); ++i )
    {
        DoorJumpInfo &jb = jumpBtns[i];
        DoorJumpInfo *jp = find( jumpPos, jb.group );
        if( jp == 0 )
        {
            NSLog(@"[SheepAlg]error in jp group %d not found!!!", jb.group );
            throw "";
        }
        JumpGroup jump = {
            .pos = jb.pos,
            .target = jp->pos,
            .group = jb.group
        };
        ret[ jump.group ] = jump;
    }
    return ret;
}

bool compareRiver( const Riveri &lhs, const Riveri &rhs ){
    return lhs.color < rhs.color;
};

+(map<char, vector<Riveri> >) createRiverWithHeads:(vector<Riveri>) heads
                                            rivers:(vector<Riveri>) rivers
                                             width:(int) width;
{
    std::map<char, std::vector<Riveri> > riverObjs;
    if( heads.empty() )
        return riverObjs;
    for( int i=0; i<heads.size(); ++i )
        riverObjs[(char)i].push_back(heads[i]);
    while( true )
    {
        bool pushed = false;
        for( std::map<char, std::vector<Riveri> >::iterator it = riverObjs.begin();
            it != riverObjs.end(); ++it )
        {
            std::vector<Riveri> &ros = it->second;
            for( int i=0; i<ros.size(); ++i )
            {
                Riveri &ro = ros[i];
                for( int j=rivers.size()-1; j>=0; --j )
                {
                    Riveri &river = rivers[j];
                    float dis = powf(river.pos.x- ro.pos.x, 2) + powf( river.pos.y- ro.pos.y, 2);
                    if( dis < width* width )
                    {
                        ros.push_back( river );
                        rivers.erase( rivers.begin()+ j );
                        pushed =true;
                    }
                }
            }
        }
        if( !pushed )
            break;
    }
    for( std::map<char, std::vector<Riveri> >::iterator it = riverObjs.begin();
        it!= riverObjs.end();
        ++it )
        std::sort(it->second.begin(), it->second.end(), compareRiver);
    for( std::map<char, std::vector<Riveri> >::iterator it = riverObjs.begin();
        it!= riverObjs.end();
        ++it )
    {
        std::vector<Riveri> &riverLine = it->second;
        if( riverLine.size()< 2 )
            continue;
        for( int i=1; i<riverLine.size(); ++i )
        {
            int dx = riverLine[i].pos.x - riverLine[i-1].pos.x;
            int dy = riverLine[i].pos.y - riverLine[i-1].pos.y;
            float dis = sqrtf( powf(dx, 2) + powf(dy, 2) );
            riverLine[i-1].dx = dx/ dis;
            riverLine[i-1].dy = dy/ dis;
            riverLine[i-1].nx = -riverLine[i-1].dy;
            riverLine[i-1].ny = riverLine[i-1].dx;
            riverLine[i-1].distance = dis;
        }
    }
    return riverObjs;

}

+(int) distanceToRiverLineWithX:(int) x
                              y:(int) y
                          river:(const vector<Riveri>*) river;
{
    int min = 99999999;
    for( int i=0; i<river->size(); ++i )
    {
        Riveri seq = (*river)[i];
        int dx = x - seq.pos.x;
        int dy = y - seq.pos.y;
        int dot = seq.dx* dx+ seq.dy* dy;
        if( dot> seq.distance || dot <= 0 )
            continue;
        dot = seq.nx * dx + seq.ny * dy;
        dot = abs(dot);
        if( dot< min )
            min = dot;
    }
    return min;
}
+(TransitionResult) computTransitionWithMap:(unsigned int*) map
                                      width:(int) width
                                     height:(int) height
                                    stopMap:(NSSet*) stopMap
                                        pos:(int*) pos
                                  targetPos:(int*) targetPos;
{
    NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init];
    TransitionResult result;
    result.color = 0;
    result.isSpecial = false;
    result.isCollide = false;
    result.distanceSq = 0;
    NSArray *cellLine = [self createCellLineWithX1:pos[0] 
                                                y1:pos[1] 
                                                x2:targetPos[0] 
                                                y2:targetPos[1]];
    int collide = [self isCollideBothWithData:map
                                        width:width
                                       height:height
                                     cellLine:cellLine
                                      stopMap:stopMap];
    if( collide == -1 ){}
    else if( collide > 1 )
    {
        
        bool (^test)( float, int *, int, int *) = 
        ^( float heading, int *pos, int dis, int *result){
            int dx = pos[0] + cosf(heading)* dis;
            int dy = pos[1] + sinf(heading)* dis;
            NSArray *cellLine = [self createCellLineWithX1:pos[0] 
                                                        y1:pos[1] 
                                                        x2:dx 
                                                        y2:dy];
            int collide = [self isCollideBothWithData:map
                                                width:width
                                               height:height
                                             cellLine:cellLine
                                              stopMap:stopMap];
            if( collide == -1 )
            {
                result[0] = dx;
                result[1] = dy;
                return true;
            }
            return false;
        };
        float 
            dx = targetPos[0] - pos[0],
            dy = targetPos[1] - pos[1],
            heading = atan2f(dy, dx),
            dis = sqrtf( dx* dx+ dy* dy ),
            offset = 3.14159/8;
        int tp[2];
        int i;
        for( i=0; i<16; ++i )
        {
            if( test( heading + i* offset, pos, dis, tp ) )
                break;
            if( test( heading - i* offset, pos, dis, tp ) )
                break;
        }
        if( i != 16 )
        {
            result.isCollide = true;
            result.pos[0] = tp[0];
            result.pos[1] = tp[1];
        }
        else
        {
            GLKVector2 collidePos;
            collidePos.x = [[cellLine objectAtIndex:collide] intValue];
            collidePos.y = [[cellLine objectAtIndex:collide+1] intValue];
            result.color = map[ (int)(collidePos.y* width + collidePos.x) ];
            result.isCollide = true;
            result.collidePos[0] = collidePos.x;
            result.collidePos[1] = collidePos.y;
            result.distanceSq = powf(collidePos.x-pos[0], 2) + powf(collidePos.y-pos[1], 2);
            result.pos[0] = [[cellLine objectAtIndex:collide-2] intValue];
            result.pos[1] = [[cellLine objectAtIndex:collide-1] intValue];
        }
        /*
        GLKVector2 collidePos;
        collidePos.x = [[cellLine objectAtIndex:collide] intValue];
        collidePos.y = [[cellLine objectAtIndex:collide+1] intValue];
        result.color = map[ (int)(collidePos.y* width + collidePos.x) ];
        result.isCollide = true;
        result.collidePos[0] = collidePos.x;
        result.collidePos[1] = collidePos.y;
        result.distanceSq = powf(collidePos.x-pos[0], 2) + powf(collidePos.y-pos[1], 2);
        result.pos[0] = [[cellLine objectAtIndex:collide-2] intValue];
        result.pos[1] = [[cellLine objectAtIndex:collide-1] intValue];
         */
    }
    else
        if( [self isCollideBothWithData:map
                                  width:width
                                 height:height
                               cellLine:[NSArray arrayWithObjects:
                                         [NSNumber numberWithInt:targetPos[0]],
                                         [NSNumber numberWithInt:targetPos[1]]
                                         , nil] 
                                stopMap:stopMap] == -1 ){
            result.isSpecial = true;
        }
        else
        {
            result.isCollide = true;
            result.pos[0] = pos[0];
            result.pos[1] = pos[1];
        }
    [pool release];
    return result;
}
/*
+(void) getDataMapCoordsWithX:(float) x
                            Y:(float) y
                       result:(int*) result;
{
    result[0] = (int)(roundf( (x- STAGE_X )* [SheepConfig single]->zoomFactorX ));
    result[1] = (int)(roundf( (y- STAGE_Y )* [SheepConfig single]->zoomFactorY ));
}
+(void) getStageCoordsWithX:(float) x
                          Y:(float) y
                     result:(float*) result;
{
    result[0] = x/ [SheepConfig single]->zoomFactorX + STAGE_X;
    result[1] = y/ [SheepConfig single]->zoomFactorY + STAGE_Y;
}
*/

+(void) getDataMapCoordsWithX:(float) x
                            Y:(float) y
                       result:(int*) result;
{
    result[0] = (int)( (x- STAGE_X )* [SheepConfig single]->zoomFactorX );
    result[1] = (int)( (y- STAGE_Y )* [SheepConfig single]->zoomFactorY );
}
+(void) getStageCoordsWithX:(int) x
                          Y:(int) y
                     result:(float*) result;
{
    result[0] = x/ [SheepConfig single]->zoomFactorX + STAGE_X;
    result[1] = y/ [SheepConfig single]->zoomFactorY + STAGE_Y;
}

+(float) computDistanceToRiverHeadWithRiver:(const vector<Riveri>*) river
                                      width:(int) width
                                          x:(int) x
                                          y:(int) y;
{
    float tmp=0;
    for( int i=0; i<river->size(); ++i )
    {
        Riveri seq = (*river)[i];
        int dx = x - seq.pos.x;
        int dy = y - seq.pos.y;
        //因為seq.dx, seq.dy是單位向量，所以可以使用內積算距離
        int dot = seq.dx* dx+ seq.dy* dy;
        //dot = abs( dot );
        if( dot > seq.distance )
        {
            tmp += seq.distance;
            continue;
        }
        else
            return dot+ tmp;
    }
    return tmp;
}


+(GLKVector2) getRiverVelocityWithRiver:(vector<Riveri>) river
                               distance:(float) distance
                                 isGoal:(bool*) isGoal;
{
    *isGoal = false;
    float temp = 0;
    int i=0;
    for( ; i<river.size()-1; ++i )
    {
        Riveri seq = river[i];
        if( temp + seq.distance > distance )
            break;
        temp += seq.distance;
    }
    if( i == river.size()-1 )
    {
        i-=1;
        *isGoal = true;
    }
    return GLKVector2Make(river[i].dx/ [SheepConfig single]->zoomFactorX, 
                          river[i].dy/ [SheepConfig single]->zoomFactorY);
}

@end


namespace sheep{
    
    RegionObjects createRegionObjects( NSDictionary *region ){
        RegionObjects ret;
        map<int, GLKVector3> centers = [SheepAlg getRegionCenter:region];
        for( map<int, GLKVector3>::iterator it = centers.begin();
            it != centers.end();
            ++it )
        {
            int rid = it->first;
            RegionObject ro;
            ro.markcount = 0;
            ro.cx = it->second.x;
            ro.cy = it->second.y;
            ret.map[rid] = ro;
        }
        ret.region = region;
        return ret;
    }
    
    Map::Map(SheepMapInfo *info):info(info){
        rivers = [SheepAlg createRiverWithHeads:info->riverHeads
                                         rivers:info->rivers
                                          width:10];
        regionMaps[GROUP_RED] = info->redRegion;
        regionMaps[GROUP_BLUE] = info->blueRegion;
        regionMaps[GROUP_DOG] = info->dogRegion;
        regionMaps[GROUP_PIG] = info->pigRegion;
        regionMaps[GROUP_HIPPO] = info->hippoRegion;
        
        RegionObjects redRegionObjects = createRegionObjects(info->redRegion);
        RegionObjects blueRegionObjects = createRegionObjects(info->blueRegion);
        RegionObjects dogRegionObjects = createRegionObjects(info->dogRegion);
        RegionObjects pigRegionObjects = createRegionObjects(info->pigRegion);
        RegionObjects hippoRegionObjects = createRegionObjects(info->hippoRegion);
        
        winRegionObjects[GROUP_RED] = redRegionObjects;
        winRegionObjects[GROUP_BLUE] = blueRegionObjects;
        winRegionObjects[GROUP_DOG] = dogRegionObjects;
        winRegionObjects[GROUP_PIG] = pigRegionObjects;
        winRegionObjects[GROUP_HIPPO] = hippoRegionObjects;
        
        rosAry.push_back( &winRegionObjects[GROUP_RED] );
        rosAry.push_back( &winRegionObjects[GROUP_BLUE] );
        rosAry.push_back( &winRegionObjects[GROUP_DOG] );
        rosAry.push_back( &winRegionObjects[GROUP_PIG] );
        rosAry.push_back( &winRegionObjects[GROUP_HIPPO] );
    }
    bool Map::isTouchGroupGoal( int x, int y, char group ){
        if( !isValidPos(x, y) )
            return false;
        NSDictionary *region = regionMaps[ group ];
        NSString *regionKey = [SheepAlg getRegionKeyWithX:x Y:y];
        NSNumber *regionId = [region objectForKey:regionKey];
        return regionId != nil;
    }
    bool Map::isGoal( int count, vector<Sheep> sheeps ){
        map<int, int> onlyone;
        for( int i=0; i<sheeps.size(); ++i )
        {
            Sheep &sheep = sheeps[i];
            if( sheep.type == Sheep::TYPE_BOX )
                continue;
            if( sheep.getFSMRef().getState() != Sheep::STATE_NORMAL )
                return false;
            NSDictionary *region = regionMaps[ sheep.group ];
            NSString *regionKey = [SheepAlg getRegionKeyWithPosition: sheep.pos];
            NSNumber *regionId = [region objectForKey:regionKey];
            if( regionId == nil )
            {
                return false;
            }
            int rid = [regionId intValue];
            onlyone[rid]+=1;
        }
        for( map<int, int>::iterator it = onlyone.begin();
            it!= onlyone.end();
            ++it )
        {
            if( it->second < count || it->second > count )
                return false;
        }
        return true;
    }
    const vector<Riveri> *Map::isCloseToRivers(int x, int y, int distance)const{
        for( map<char, vector<Riveri> >::const_iterator it = rivers.begin();
            it != rivers.end();
            ++it )
        {
            const vector<Riveri> &river = it->second;
            if( [SheepAlg distanceToRiverLineWithX:x y:y river:&river] < distance )
                return &river;
        }
        return 0;
    }
    int Map::getRegionId( int x, int y )const{
        NSDictionary *regions[] = { 
            info->waterRegion, 
            info->gateRegion, 
            info->redRegion, 
            info->blueRegion
        };
        NSString *key = [SheepAlg getRegionKeyWithX:x Y:y];
        for( int i=0; i<4; ++i )
        {
            NSDictionary *region = regions[i];
            if( [region objectForKey:key] )
                return [[region objectForKey:key] intValue];
        }
        return -1;
    }
    int Map::getCloseWinRegionIdAndMark(char groupId, int x, int y, int wincount){
        RegionObjects &regionObjects = winRegionObjects[groupId];
        int min = 999999999;
        int minRid = -1;
        for( map<int, RegionObjects>::iterator it = winRegionObjects.begin();
            it != winRegionObjects.end();
            ++it )
        {
            int rid = it->first;
            RegionObject &ro = regionObjects.map[rid];
            if( ro.markcount == wincount )
                continue;
            int dx = x- ro.cx;
            int dy = y- ro.cy;
            int disSq = dx* dx+ dy* dy;
            if( min> disSq )
            {
                min = disSq;
                minRid = rid;
            }
        }
        if( minRid != -1 )
            ++regionObjects.map[ minRid ].markcount;
        return minRid;
    }
    RegionObject *Map::getRegionObject(int rid){
        for( int i=0; i<rosAry.size(); ++i )
        {
            RegionObjects *ros = rosAry[i];
            if( ros->map.find(rid) != ros->map.end() )
                return &ros->map[rid];
        }
        return 0;
    }
}