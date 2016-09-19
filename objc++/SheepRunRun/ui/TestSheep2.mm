//
//  TestSheep2.m
//  testEmpty4
//
//  Created by Rachel on 12/2/3.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import "TestSheep2.h"
#import <iAd/iAd.h>


#define SOUND_PLAY_CLICK [_observer notifyWithEventName:@"playClickButton" group:nil from:self];


namespace Sheep2 {
    shader::image::IPAnimation anim_dog = {
        0, 1920, 240, 0, 0, 120, 120, 16, 12,
    };
    shader::image::IPAnimation anim_sheep = {
        0, 1820, 780, 0, 0, 1820/14, 780/6, 14, 12,
    };
    shader::image::IPAnimation anim_counter_number = {
        0, 440, 40, 0, 0, 40, 40, 11, 11,
    };
};


float TestSheepState::getTotalTime( int levelGroup ){
    float ret = 0;
    for( int i=0; i<12; ++i )
    {
        int idx = levelGroup* 12+ i;
        ret += storeUseTime[idx];
    }
    return ret;
}
NSString *TestSheepState::getPath(NSString *file){
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSString *docD = [paths objectAtIndex:0];
    return [docD stringByAppendingPathComponent:file];
}
void TestSheepState::setStoreUseTime( int level, float time ){
    if( storeUseTime[level] != 0 && storeUseTime[level] < time )
        return;
    storeUseTime[level] = time;
}
void TestSheepState::setLockLevel( int v ){
    if( v < lockLevel )
        return;
    lockLevel = v;
    if( lockLevel > COUNT_LEVEL )
        lockLevel = COUNT_LEVEL;
}
void TestSheepState::init(){
    lockLevel = 1;
    for( int i=0; i<COUNT_LEVEL; ++i )
        storeUseTime[i] = 0;
    for( int i=0; i<COUNT_TUTORIAL_IMAGE; ++i )
        isTutorial[i] = false;
    isMuteMusic = isMuteSound = false;
    save();
}
void TestSheepState::save(){
    NSMutableArray *ary = [[NSMutableArray alloc] init];
    [ary addObject: [NSNumber numberWithInt:lockLevel]];
    for( int i=0; i<COUNT_LEVEL; ++i )
        [ary addObject: [NSNumber numberWithFloat:storeUseTime[i]]];
    for( int i=0; i<COUNT_TUTORIAL_IMAGE; ++i )
        [ary addObject: [NSNumber numberWithBool:isTutorial[i]]];
    [ary addObject: [NSNumber numberWithBool:isMuteMusic]];
    [ary addObject: [NSNumber numberWithBool:isMuteSound]];
    [ary writeToFile:getPath(@"save.dat") atomically:YES];
    [ary release];
}
void TestSheepState::load(){
    NSString *path = getPath(@"save.dat");
    if(![[NSFileManager defaultManager] fileExistsAtPath:path])
        init();
    else
    {
        int curr = 0;
        NSArray *ary = [[NSArray alloc] initWithContentsOfFile:path];
        lockLevel = [[ary objectAtIndex:curr++] intValue];
        for( int i=0; i<COUNT_LEVEL; ++i )
            storeUseTime[i] = [[ary objectAtIndex:curr++] floatValue];
        for( int i=0; i<COUNT_TUTORIAL_IMAGE; ++i )
            isTutorial[i] = [[ary objectAtIndex:curr++] boolValue];
        isMuteMusic = [[ary objectAtIndex:curr++] boolValue];
        isMuteSound = [[ary objectAtIndex:curr++] boolValue];
        [ary release];
    }
}
void TestSheepState::clearRecord(){
    init();
    save();
}

@interface TestSheep2(PrivateMethod)
-(void) toggleMuteIsSound:(BOOL) isSound;
-(void) playSoundWithId:(int) sid;
@end


@implementation TestSheep2

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)didReceiveMemoryWarning
{
    // Releases the view if it doesn't have a superview.
    [super didReceiveMemoryWarning];
    
    // Release any cached data, images, etc that aren't in use.
}

#pragma mark - View lifecycle

/*
// Implement loadView to create a view hierarchy programmatically, without using a nib.
- (void)loadView
{
}
*/

-(void) changePageAnimationEnd;
{
    
}

-(void)
changePage:(int) pageId;
{
    if( _gameState.currpage != pageId )
    {
        [_pages[_gameState.currpage].view removeFromSuperview];
        [_pageLayer addSubview:_pages[pageId].view];
        _gameState.currpage = pageId;
    }
}

-(void) playSoundWithId:(int) sid;
{
    [_aps[sid] play];
}

-(void) playMusicWithId:(int) sid;
{
    for( int i=0; i<SOUND_LENGTH; ++i )
        if( i!= sid && _aps[i].numberOfLoops == -1 && _aps[i].isPlaying )
            [_aps[i] stop];
    if( !_aps[sid].isPlaying )
    {
        if( sid == SOUND_SCORE )
            _aps[sid].currentTime = 0;
        [_aps[sid] play];
    }
}


-(void)
notifyWithEventName:(NSString *)event group:(NSString*) group from:(id)page
{
    if( [event isEqualToString:@"startLoading"] )
    {
        [self.view addSubview:_loadingPanel.v_panel];
    }
    else if( [event isEqualToString:@"endLoading"] )
    {
        [_loadingPanel.v_panel removeFromSuperview];
    }
    else if( [event isEqualToString:@"playClickButton"] )
    {
        [self playSoundWithId:SOUND_BUTTON];
    }
    else if( [event isEqualToString:@"musicPlayScore"] )
    {
        [self playMusicWithId:SOUND_BIG_SUCCESS];
    }
    else if( [event isEqualToString:@"musicPlayPlaying"] )
    {
        [self playMusicWithId:SOUND_PLAYING];
    }
    else if( [event isEqualToString:@"musicPlaySuccess"] )
    {
        [self playMusicWithId:SOUND_SUCCESS];
    }
    else if( [event isEqualToString:@"musicPlayFail"] )
    {
        [self playMusicWithId:SOUND_FAIL];
    }

    if( [group isEqualToString:@"main"] )
    {
        if( [event isEqualToString:@"play"] )
        {
            [self changePage:PAGE_SELECT_LEVEL];
            [self playMusicWithId:SOUND_CHOOSE];
        }
        else if( [event isEqualToString:@"store"] )
        {
            [self changePage:PAGE_STORE];
        }
        else if( [event isEqualToString:@"toggleSound"] )
        {
            [self toggleMuteIsSound:YES];
        }
        else if( [event isEqualToString:@"toggleMusic"] )
        {
            [self toggleMuteIsSound:NO];
        }
    }
    else if( [group isEqualToString:@"selectLevel"] )
    {
        if( [event isEqualToString:@"selectLevel"] )
        {
            [self changePage:PAGE_GAME];
            
        }
        else if( [event isEqualToString:@"back"] )
        {
            [self changePage:PAGE_MAIN];
            [self playMusicWithId:SOUND_TITLE];
        }
    }
    else if( [group isEqualToString:@"game"] )
    {
        if( [event isEqualToString:@"back"] )
        {
            [self changePage:PAGE_SELECT_LEVEL];
            [self playMusicWithId:SOUND_CHOOSE];
        }
    }
    else if( [group isEqualToString:@"store"] )
    {
        if( [event isEqualToString:@"back"] )
        {
            [self changePage:PAGE_MAIN];
            [self playMusicWithId:SOUND_TITLE];
        }
    }
    else if( [group isEqualToString:@"game-sound"] )
    {
        if( [event isEqualToString:@"swim"] )
        {
            [self playSoundWithId:SOUND_SWIM];
        }
        else if( [event isEqualToString:@"sheep"] )
        {
            [self playSoundWithId:SOUND_SHEEP];
        }
        else if( [event isEqualToString:@"dogAttack"] )
        {
            [self playSoundWithId:SOUND_DOG];
        }
        else if( [event isEqualToString:@"doorOpen"] )
        {
            [self playSoundWithId:SOUND_BUTTON];
        }
        else if( [event isEqualToString:@"jump"] )
        {
            [self playSoundWithId:SOUND_JUMP];
        }
        else if( [event isEqualToString:@"lockFood"] )
        {
            [self playSoundWithId:SOUND_SHEEP];
        }
        else if( [event isEqualToString:@"enterGoal"] )
        {
            [self playSoundWithId:SOUND_ENTER_GOAL];
        }
    }
}

-(void) applyMute;
{
    for( int i=0; i<SOUND_LENGTH; ++i )
    {
        if( _aps[i].numberOfLoops == -1 )
            _aps[i].volume = _gameState.isMuteMusic ? 0 : 1;
        else
            _aps[i].volume = _gameState.isMuteSound ? 0 : 1;
    }
}

-(void) toggleMuteIsSound:(bool) isSound;
{
    if( isSound )
        _gameState.isMuteSound = !_gameState.isMuteSound;
    else
        _gameState.isMuteMusic = !_gameState.isMuteMusic;
    _gameState.save();
    [self applyMute];
}

-(void) dealloc
{
    for( int i=0; i<SOUND_LENGTH; ++i )
    {
        [_aps[i] stop];
        [_aps[i] release];
    }
    [_imgs.bg release];
    for( int i=0; i<PAGE_LENGTH; ++i )
    {
        [_pages[i].view removeFromSuperview];
        [_pages[i] release];
    }
    [_timeline endLoop];
    [_timeline release];
    [super dealloc];
}

-(void) onLoop:(ComGameworksObjCTimeline *)timeline;
{
    for( int i=0; i<PAGE_LENGTH; ++i )
    {
        if( [_pages[i] respondsToSelector:@selector(onLoop:)] )
            [_pages[i] onLoop:timeline];
    }
}

-(void) onEndLoop:(ComGameworksObjCTimeline *)timeline;
{}

-(void) onStartLoop:(ComGameworksObjCTimeline *)timeline;
{}

-(void) onInitAll;
{
    [self applyMute];
    
    UIImageView *iv;
    iv = [[UIImageView alloc] initWithImage:_imgs.bg];
    [self.view addSubview:iv];
    [iv release];
    
    _pageLayer = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 1024, 768)];
    [_pageLayer setMultipleTouchEnabled:YES];
    [self.view addSubview:_pageLayer];
    
    [_pageLayer addSubview:_pages[PAGE_MAIN].view];
    //[self notifyWithEventName:@"endLoading" group:nil from:nil];
    [self playMusicWithId:SOUND_TITLE];
    
    _timeline = [[ComGameworksObjCTimeline alloc] init];
    [_timeline addListener:self];
    [_timeline startLoopWithInterval:10];
}

-(void) initAllOnBackground;
{
    _imgs.bg = com::gameworks::tool::allocUIImage(@"images/selectLevelGroupPanel_bg", @"jpg");
    _gameState.load();
#ifdef MODE_DEBUG
    _gameState.lockLevel = COUNT_LEVEL;
#endif
    _gameState.currpage = PAGE_MAIN;
    _pages[PAGE_MAIN] = [[TestSheepMainPage alloc] init];
    _pages[PAGE_MAIN].gameState = &_gameState;
    _pages[PAGE_MAIN].observer = self;

    _pages[PAGE_SELECT_LEVEL] = [[TestSheepSelectLevelPage alloc] init];
    _pages[PAGE_SELECT_LEVEL].gameState = &_gameState;
    _pages[PAGE_SELECT_LEVEL].observer = self;
    
    _pages[PAGE_GAME] = [[TestSheepGame alloc] init];
    _pages[PAGE_GAME].gameState = &_gameState;
    _pages[PAGE_GAME].observer = self;
    
    _pages[PAGE_HELP] = [[TestSheepHelpPage alloc] init];
    _pages[PAGE_HELP].gameState = &_gameState;
    _pages[PAGE_HELP].observer = self;
    
    _pages[PAGE_STORE] = [[TestSheepStorePage alloc] init];
    _pages[PAGE_STORE].gameState = &_gameState;
    _pages[PAGE_STORE].observer = self;
    
    _aps[SOUND_TITLE] = com::gameworks::tool::allocAudioPlayer(@"sound/playing", @"mp3");
    _aps[SOUND_TITLE].numberOfLoops = -1;
     
    _aps[SOUND_BUTTON] = com::gameworks::tool::allocAudioPlayer(@"sound/button", @"wav");
    _aps[SOUND_BUTTON].numberOfLoops = 0;
    
    _aps[SOUND_CHOOSE] = com::gameworks::tool::allocAudioPlayer(@"sound/playing", @"mp3");
    _aps[SOUND_CHOOSE].numberOfLoops = -1;
    
    _aps[SOUND_PLAYING] = com::gameworks::tool::allocAudioPlayer(@"sound/playing", @"mp3");
    _aps[SOUND_PLAYING].numberOfLoops = -1;
    
    _aps[SOUND_SCORE] = com::gameworks::tool::allocAudioPlayer(@"sound/score", @"mp3");
    _aps[SOUND_SCORE].numberOfLoops = -1;
    
    _aps[SOUND_SHEEP] = com::gameworks::tool::allocAudioPlayer(@"sound/sheep", @"wav");
    _aps[SOUND_SHEEP].numberOfLoops = 0;
    
    _aps[SOUND_SWIM] = com::gameworks::tool::allocAudioPlayer(@"sound/swim", @"wav");
    _aps[SOUND_SWIM].numberOfLoops = 0;
    
    _aps[SOUND_DOG] = com::gameworks::tool::allocAudioPlayer(@"sound/dog", @"wav");
    _aps[SOUND_DOG].numberOfLoops = 0;
    
    _aps[SOUND_JUMP] = com::gameworks::tool::allocAudioPlayer(@"sound/jump", @"wav");
    _aps[SOUND_JUMP].numberOfLoops = 0;
    
    _aps[SOUND_ENTER_GOAL] = com::gameworks::tool::allocAudioPlayer(@"sound/enterGoal", @"wav");
    _aps[SOUND_ENTER_GOAL].numberOfLoops = 0;
    
    _aps[SOUND_SUCCESS] = com::gameworks::tool::allocAudioPlayer(@"sound/Success", @"wav");
    _aps[SOUND_SUCCESS].numberOfLoops = -1;
    
    _aps[SOUND_BIG_SUCCESS] = com::gameworks::tool::allocAudioPlayer(@"sound/BigSuccess", @"wav");
    _aps[SOUND_BIG_SUCCESS].numberOfLoops = -1;
    
    _aps[SOUND_FAIL] = com::gameworks::tool::allocAudioPlayer(@"sound/Fail", @"wav");
    _aps[SOUND_FAIL].numberOfLoops = -1;
    
    [self performSelectorOnMainThread:@selector(onInitAll) withObject:nil waitUntilDone:NO];
}

-(void) afterShowCompanyLogo;
{
    UIView *view = [[UIView alloc] init];
    UIActivityIndicatorView *aiv = [[UIActivityIndicatorView alloc] initWithActivityIndicatorStyle:UIActivityIndicatorViewStyleWhiteLarge];
    aiv.frame = CGRectMake((1024-200)/2, (768-200)/2, 200, 200);
    view.frame = CGRectMake(0, 0, 1024, 768);
    [view addSubview:aiv];
    [aiv startAnimating];
    [aiv release];
    view.backgroundColor = [UIColor grayColor];
    view.alpha = 0.5;
    _loadingPanel.v_panel = view;
    
    //[self notifyWithEventName:@"startLoading" group:nil from:nil];
    [self performSelectorInBackground:@selector(initAllOnBackground) withObject:nil];
}

// Implement viewDidLoad to do additional setup after loading the view, typically from a nib.
- (void)viewDidLoad
{
    [super viewDidLoad];
    [self.view setMultipleTouchEnabled:YES];
    self.view.frame = CGRectMake(0, 0, 1024, 768);
    
    UIImage *img_logo = com::gameworks::tool::allocUIImage(@"start_icon", @"jpg");
    UIImageView *iv_logo = [[UIImageView alloc] initWithFrame:CGRectMake(0, 0, 1024, 768)];
    iv_logo.image = img_logo;
    [img_logo release];
    [self.view addSubview:iv_logo];
    [iv_logo release];
    
    [self performSelector:@selector(afterShowCompanyLogo) withObject:nil afterDelay:3];
}



- (void)viewDidUnload
{
    [super viewDidUnload];
}

-(BOOL) shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)toInterfaceOrientation
{
    return 
    toInterfaceOrientation == UIInterfaceOrientationLandscapeLeft ||
    toInterfaceOrientation == UIInterfaceOrientationLandscapeRight;
}

@end


@implementation TestSheepPage
@synthesize
gameState = _gameState,
observer = _observer;

-(void) onLoop:(ComGameworksObjCTimeline *)timeline;
{
    
}
@end


@implementation TestSheepMainPage

-(void) applySoundImage;
{
    UIButton *btn = (UIButton*)[self.view viewWithTag:101];
    if( _gameState->isMuteMusic )
        [btn setImage:_mainPanel.img_btn_music_close forState:UIControlStateNormal];
    else
        [btn setImage:_mainPanel.img_btn_music_open forState:UIControlStateNormal];
    btn = (UIButton*)[self.view viewWithTag:102];
    if( _gameState->isMuteSound )
        [btn setImage:_mainPanel.img_btn_sound_close forState:UIControlStateNormal];
    else
        [btn setImage:_mainPanel.img_btn_sound_open forState:UIControlStateNormal];
}

-(void)
clickPlay:(UIButton*) btn
{
    SOUND_PLAY_CLICK
    [_observer notifyWithEventName:@"play" group:@"main" from:self];
}

-(void)
clickStore
{
    SOUND_PLAY_CLICK
    [_observer notifyWithEventName:@"playClickButton" group:nil from:self];
    [_observer notifyWithEventName:@"store" group:@"main" from:self];
    NSLog(@"store");
}

-(void)
clickRank
{
    SOUND_PLAY_CLICK
    [_observer notifyWithEventName:@"playClickButton" group:nil from:self];
    NSLog(@"rank");
}

-(void)
clickHelp
{
    SOUND_PLAY_CLICK
    NSLog(@"help");
}

-(void) clickMusic;
{ 
    [_observer notifyWithEventName:@"toggleMusic" group:@"main" from:self];
    [self applySoundImage];
}

-(void) clickSound;
{
    [_observer notifyWithEventName:@"toggleSound" group:@"main" from:self];
    [self applySoundImage];
}

-(void) clickClearRecord;
{
    NSLog(@"clear");
    _gameState->clearRecord();
}

-(void) clickMaxLevel;
{
    _gameState->lockLevel = COUNT_LEVEL;
}

-(void) dealloc
{
    [_mainPanel.img_bg release];
    [_mainPanel.img_btn_achieve release];
    [_mainPanel.img_btn_bg release];
    [_mainPanel.img_btn_music_close release];
    [_mainPanel.img_btn_music_open release];
    [_mainPanel.img_btn_play release];
    [_mainPanel.img_btn_sound_close release];
    [_mainPanel.img_btn_sound_open release];
    [_mainPanel.img_btn_store release];
    [_mainPanel.img_dog release];
    [_mainPanel.img_logo release];
    [_mainPanel.img_sheep release];
    [_mainPanel.img_sheep_blue release];
    [_mainPanel.img_showFrame release];
    [_mainPanel.v_panel release];
    [_amc_sheep release];
    [_amc_dog release];
    [_amc_sheep2 release];
    [super dealloc];
}

-(void) viewWillAppear:(BOOL)animated
{
    [self applySoundImage];
}

-(void) onLoop:(ComGameworksObjCTimeline *)timeline;
{
    [_amc_dog onLoop:timeline];
    [_amc_sheep onLoop:timeline];
    [_amc_sheep2 onLoop:timeline];
    [_tv_btn_play onLoop:timeline];
}

-(void)
viewDidLoad;
{
    _mainPanel.img_logo = com::gameworks::tool::allocUIImage(@"images/menu_logo", @"png");
    _mainPanel.img_bg = com::gameworks::tool::allocUIImage(@"images/menu_bg", @"jpg");
    _mainPanel.img_btn_achieve = com::gameworks::tool::allocUIImage(@"images/menu_btn_achieve", @"png");
    _mainPanel.img_btn_bg = com::gameworks::tool::allocUIImage(@"images/menu_btn_bg", @"png");
    _mainPanel.img_btn_music_close = com::gameworks::tool::allocUIImage(@"images/menu_btn_music_close", @"png");
    _mainPanel.img_btn_music_open = com::gameworks::tool::allocUIImage(@"images/menu_btn_music_open", @"png");
    _mainPanel.img_btn_play = com::gameworks::tool::allocUIImage(@"images/menu_btn_play", @"png");
    _mainPanel.img_btn_sound_close = com::gameworks::tool::allocUIImage(@"images/menu_btn_sound_close", @"png");
    _mainPanel.img_btn_sound_open = com::gameworks::tool::allocUIImage(@"images/menu_btn_sound_open", @"png");
    _mainPanel.img_btn_store = com::gameworks::tool::allocUIImage(@"images/menu_btn_store", @"png");
    _mainPanel.img_showFrame = com::gameworks::tool::allocUIImage(@"images/menu_showFrame", @"png");
    _mainPanel.img_dog = com::gameworks::tool::allocUIImage(@"images/dog_action_all", @"png");
    _mainPanel.img_sheep = com::gameworks::tool::allocUIImage(@"images/Red_sheep_all", @"png");
    _mainPanel.img_sheep_blue = com::gameworks::tool::allocUIImage(@"images/Blue_sheep_all", @"png");
    UIView *view = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 1024, 768)];
    UIImageView *iv;
    UIButton *btn;
    
    iv = [[UIImageView alloc] initWithFrame:CGRectMake(0, 0, 1024, 768)];
    iv.image = _mainPanel.img_bg;
    [view addSubview:iv];
    [iv release];
    
    iv = [[UIImageView alloc] initWithFrame:CGRectMake(122, 26, 776, 493)];
    iv.image = _mainPanel.img_showFrame;
    [view addSubview:iv];
    [iv release];
    
    iv = [[UIImageView alloc] initWithFrame:CGRectMake(178, 61, 685, 352)];
    iv.image = _mainPanel.img_logo;
    [view addSubview:iv];
    [iv release];
    
    iv = [[UIImageView alloc] initWithFrame:CGRectMake(890, 18, 123, 113)];
    iv.image = _mainPanel.img_btn_bg;
    [view addSubview:iv];
    [iv release];
    
    iv = [[UIImageView alloc] initWithFrame:CGRectMake(890, 144, 123, 113)];
    iv.image = _mainPanel.img_btn_bg;
    [view addSubview:iv];
    [iv release];
    
    _amc_dog = [[ComGameworksObjCTimelineImageAnimationMovieClip alloc] initWithFrame:CGRectMake(94, 536, 200, 200)];
    _amc_dog.image = _mainPanel.img_dog;
    _amc_dog.animation = Sheep2::anim_dog;
    [_amc_dog setFrameIndex:0];
    [view addSubview:_amc_dog];
    
    _amc_sheep = [[ComGameworksObjCTimelineImageAnimationMovieClip alloc] initWithFrame:CGRectMake(410, 556, 200, 200)];
    _amc_sheep.image = _mainPanel.img_sheep;
    _amc_sheep.animation = Sheep2::anim_sheep;
    [view addSubview:_amc_sheep];
    
    _amc_sheep2 = [[ComGameworksObjCTimelineImageAnimationMovieClip alloc] initWithFrame:CGRectMake(751, 556, 200, 200)];
    _amc_sheep2.image = _mainPanel.img_sheep_blue;
    _amc_sheep2.animation = Sheep2::anim_sheep;
    [view addSubview:_amc_sheep2];
    
#ifdef MODE_DEBUG
    btn = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    btn.frame = CGRectMake(50, 50, 200, 30);
    [btn setTitle:@"clear record" forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(clickClearRecord) forControlEvents:UIControlEventTouchUpInside];
    [view addSubview:btn];
    
    btn = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    btn.frame = CGRectMake(50, 100, 200, 30);
    [btn setTitle:@"max level" forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(clickMaxLevel) forControlEvents:UIControlEventTouchUpInside];
    [view addSubview:btn];
#endif
    
    btn = [UIButton buttonWithType:UIButtonTypeCustom];
    btn.frame = CGRectMake(112, 537, 253, 124);
    btn.enabled = NO;
    [btn setImage:_mainPanel.img_btn_achieve forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(clickRank) forControlEvents:UIControlEventTouchUpInside];
    [view addSubview:btn];
    
    std::map<int, ComGameworksObjCTimelineTransformViewKeyFrame> kfs;
    kfs[0].frameInterval = 5;
    kfs[0].transform = CGAffineTransformMakeScale(1.02, 1.02);
    kfs[5].frameInterval = 5;
    kfs[5].transform = CGAffineTransformIdentity;
    _tv_btn_play = [[ComGameworksObjCTimelineTransformView alloc] initWithFrame:CGRectMake(384, 527, 253, 124)];
    _tv_btn_play.kf = kfs;
    _tv_btn_play.totalFrame = 10;
    _tv_btn_play.transformTransition = true;
    [view addSubview:_tv_btn_play];
    [_tv_btn_play release];
    
    btn = [UIButton buttonWithType:UIButtonTypeCustom];
    btn.frame = CGRectMake(384, 527, 253, 124);
    [btn setImage:_mainPanel.img_btn_play forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(clickPlay:) forControlEvents:UIControlEventTouchUpInside];
    btn.frame = CGRectMake(0, 0, 253, 124);
    [_tv_btn_play addSubview:btn];

    btn = [UIButton buttonWithType:UIButtonTypeCustom];
    btn.frame = CGRectMake(688, 537, 253, 124);
    btn.enabled = NO;
    [btn setImage:_mainPanel.img_btn_store forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(clickStore) forControlEvents:UIControlEventTouchUpInside];
    [view addSubview:btn];
    
    btn = [UIButton buttonWithType:UIButtonTypeCustom];
    btn.frame = CGRectMake(890+20, 18+20, 82, 72);
    btn.tag = 101;
    [btn setImage:_mainPanel.img_btn_music_open forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(clickMusic) forControlEvents:UIControlEventTouchUpInside];
    [view addSubview:btn];
    
    btn = [UIButton buttonWithType:UIButtonTypeCustom];
    btn.tag = 102;
    btn.frame = CGRectMake(890+20, 144+20, 82, 69);
    [btn setImage:_mainPanel.img_btn_sound_open forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(clickSound) forControlEvents:UIControlEventTouchUpInside];
    [view addSubview:btn];
    
    _mainPanel.v_panel = view;
    self.view.frame = CGRectMake(0, 0, 1024, 768);
    [self.view addSubview:_mainPanel.v_panel];
}

@end




@interface TestSheepSelectLevelPage(PrivateMethod)
-(void) clickPrev;
-(void) clickNext;
-(void) changeSelectGroupPanelLevelWithLevelGroup:(int) level;
-(void) createSelectGroupPanel;
-(void) createSelectLevelPane;
-(void) selectLevelPanelRestoreLevelLogo;
-(void) setNumberFast:(NSArray*) ary
               number:(NSString*) number
         charIndexMap:(map<unsigned short, int>) charIndexMap;
@end


@implementation TestSheepSelectLevelPage

-(void)
clickLevel:(UIButton*) btn
{
    int selectLevel = (btn.tag-1000)+ _selectLevelGroupPanel.selectGroup* 12;
    if( selectLevel >= _gameState->lockLevel )
        return;
    SOUND_PLAY_CLICK
    _gameState->selectLevel = selectLevel;
    [_observer notifyWithEventName:@"selectLevel" group:@"selectLevel" from:self];
}

-(void)clickBack
{
    SOUND_PLAY_CLICK
    [_observer notifyWithEventName:@"back" group:@"selectLevel" from:self];
}

-(void)clickNext;
{
    SOUND_PLAY_CLICK
    UIScrollView *sv = (UIScrollView*)[[_selectLevelGroupPanel.v_panel subviews] objectAtIndex:0];
    int idx = sv.contentOffset.x/ sv.frame.size.width;
    if( idx < COUNT_LEVEL_GROUP-1 )
    {
        idx += 1;
        [sv setContentOffset:CGPointMake(idx* sv.frame.size.width, 0) animated:YES];
    }
}
-(void)clickPrev;
{
    SOUND_PLAY_CLICK
    UIScrollView *sv = (UIScrollView*)[[_selectLevelGroupPanel.v_panel subviews] objectAtIndex:0];
    int idx = sv.contentOffset.x/ sv.frame.size.width;
    if( idx > 0 )
    {
        idx -= 1;
        [sv setContentOffset:CGPointMake(idx* sv.frame.size.width, 0) animated:YES];
    }
}
-(void) clickNextStep:(UIButton*) btn;
{
    SOUND_PLAY_CLICK
    _selectLevelGroupPanel.selectGroup = btn.tag;
    [self selectLevelPanelRestoreLevelLogo];
    _selectLevelPanel.v_panel.frame = CGRectMake(0, -768, 1024, 768);
    [self.view addSubview:_selectLevelPanel.v_panel];
    
    [UIView beginAnimations:@"closeSelectLevelGroup" context:nil];
    [UIView setAnimationCurve:UIViewAnimationCurveEaseOut];
    [UIView setAnimationDuration:.25];
    _selectLevelGroupPanel.v_panel.frame = CGRectMake(0, -768, 1024, 768);
    [UIView commitAnimations];
    
    
    [UIView beginAnimations:@"closeSelectLevelGroup2" context:nil];
    [UIView setAnimationCurve:UIViewAnimationCurveEaseOut];
    [UIView setAnimationDuration:.25];
    [UIView setAnimationDelay:.25];
    _selectLevelPanel.v_panel.frame = CGRectMake(0, 0, 1024, 768);
    [UIView commitAnimations];
}

-(void) clickBackToGroup;
{
    SOUND_PLAY_CLICK
    [UIView beginAnimations:@"openSelectLevelGroup" context:nil];
    [UIView setAnimationCurve:UIViewAnimationCurveEaseOut];
    [UIView setAnimationDuration:.25];
    _selectLevelPanel.v_panel.frame = CGRectMake(0, -768, 1024, 768);
    [UIView commitAnimations];
    

    [UIView beginAnimations:@"openSelectLevelGroup2" context:nil];
    [UIView setAnimationCurve:UIViewAnimationCurveEaseOut];
    [UIView setAnimationDuration:.25];
    [UIView setAnimationDelay:.25];
    _selectLevelGroupPanel.v_panel.frame = CGRectMake(0, 0, 1024, 768);
    [UIView commitAnimations];
}

-(void)dealloc;
{
    [_selectLevelGroupPanel.img_btn_back release];
    [_selectLevelGroupPanel.img_btn_next release];
    [_selectLevelGroupPanel.img_btn_prev release];
    [_selectLevelGroupPanel.img_showFrame release];
    [_selectLevelGroupPanel.img_showStar release];
    [_selectLevelGroupPanel.img_title_chap1 release];
    [_selectLevelGroupPanel.img_title_chap2 release];
    [_selectLevelGroupPanel.img_showFrame_bg_chap1 release];
    [_selectLevelGroupPanel.img_showFrame_bg_chap2 release];
    [_selectLevelGroupPanel.v_panel release];
    
    for( int i=0; i<COUNT_LEVEL_GROUP; ++i )
    {
        [_selectLevelGroupPanel.infos[i].ary_number_usertime release];
        [_selectLevelGroupPanel.infos[i].ary_number_star_group_get release];
        [_selectLevelGroupPanel.infos[i].ary_number_star_group_total release];
    }
    
    [_selectLevelPanel.img_logo_go release];
    [_selectLevelPanel.img_logo_lock release];
    [_selectLevelPanel.img_logo_pass release];
    [_selectLevelPanel.img_logo_star release];
    [_selectLevelPanel.img_logo_star_black release];
    [_selectLevelPanel.v_panel release];
    [_img_counter_number release];
    [_img_lock release];
    [super dealloc];
}

-(void) viewWillAppear:(BOOL)animated
{
    [self selectLevelPanelRestoreLevelLogo];
    for( int i=0; i<COUNT_LEVEL_GROUP; ++i )
        [self changeSelectGroupPanelLevelWithLevelGroup:i];
}

-(void)
viewDidLoad;
{
    _selectLevelGroupPanel.img_title_chap1 = com::gameworks::tool::allocUIImage(@"images/selectLevelGroupPanel_title_chap1", @"png");
    _selectLevelGroupPanel.img_title_chap2 = com::gameworks::tool::allocUIImage(@"images/selectLevelGroupPanel_title_chap2", @"png");
    _selectLevelGroupPanel.img_title_chap3 = com::gameworks::tool::allocUIImage(@"images/selectLevelGroupPanel_title_chap3", @"png");
    
    _selectLevelGroupPanel.img_showStar = com::gameworks::tool::allocUIImage(@"images/selectLevelGroupPanel_showStar", @"png");
    _selectLevelGroupPanel.img_showFrame = com::gameworks::tool::allocUIImage(@"images/selectLevelGroupPanel_showFrame", @"png");
    _selectLevelGroupPanel.img_btn_prev = com::gameworks::tool::allocUIImage(@"images/selectLevelGroupPanel_btn_prev", @"png");
    _selectLevelGroupPanel.img_btn_next = com::gameworks::tool::allocUIImage(@"images/selectLevelGroupPanel_btn_next", @"png");
    _selectLevelGroupPanel.img_btn_back = com::gameworks::tool::allocUIImage(@"images/selectLevelGroupPanel_btn_back", @"png");
    _selectLevelGroupPanel.img_btn_play = com::gameworks::tool::allocUIImage(@"images/selectLevelGroupPanel_btn_play", @"png");
  
    _selectLevelGroupPanel.img_showFrame_bg_chap1 = com::gameworks::tool::allocUIImage(@"images/selectLevelGroupPanel_showFrame_bg_chap1", @"png");
    _selectLevelGroupPanel.img_showFrame_bg_chap2 = com::gameworks::tool::allocUIImage(@"images/selectLevelGroupPanel_showFrame_bg_chap2", @"png");
    _selectLevelGroupPanel.img_showFrame_bg_chap3 = com::gameworks::tool::allocUIImage(@"images/selectLevelGroupPanel_showFrame_bg_chap3", @"png");
    
    _selectLevelPanel.img_logo_go = com::gameworks::tool::allocUIImage(@"images/selectLevelPanel_logo_go", @"png");
    _selectLevelPanel.img_logo_lock = com::gameworks::tool::allocUIImage(@"images/selectLevelPanel_logo_lock", @"png");
    _selectLevelPanel.img_logo_pass = com::gameworks::tool::allocUIImage(@"images/selectLevelPanel_logo_pass", @"png");
    _selectLevelPanel.img_logo_star = com::gameworks::tool::allocUIImage(@"images/selectLevelPanel_logo_star", @"png");
    _selectLevelPanel.img_logo_star_black = com::gameworks::tool::allocUIImage(@"images/selectLevelPanel_logo_star_black", @"png");
    _selectLevelPanel.img_showFrame = com::gameworks::tool::allocUIImage(@"images/selectLevelPanel_showFrame", @"png");
    _selectLevelPanel.img_circle = com::gameworks::tool::allocUIImage(@"images/selectLevelPanel_arrow", @"png");
    
    _img_lock = com::gameworks::tool::allocUIImage(@"images/lock", @"png");
    _img_counter_number = com::gameworks::tool::allocUIImage(@"images/counter_number_border(s)", @"png");
    
    _size_counter_number = CGSizeMake(40, 40);
    _size_show_counter_number = CGSizeMake(25, 40);
    
    // 畫圖數字用的字元對應圖片第幾張 //
    _charIndexMap[[@"1" characterAtIndex:0]] = 0;
    _charIndexMap[[@"2" characterAtIndex:0]] = 1;
    _charIndexMap[[@"3" characterAtIndex:0]] = 2;
    _charIndexMap[[@"4" characterAtIndex:0]] = 3;
    _charIndexMap[[@"5" characterAtIndex:0]] = 4;
    _charIndexMap[[@"6" characterAtIndex:0]] = 5;
    _charIndexMap[[@"7" characterAtIndex:0]] = 6;
    _charIndexMap[[@"8" characterAtIndex:0]] = 7;
    _charIndexMap[[@"9" characterAtIndex:0]] = 8;
    _charIndexMap[[@"0" characterAtIndex:0]] = 9;
    _charIndexMap[[@":" characterAtIndex:0]] = 10;
    
    [self createSelectGroupPanel];
    [self.view addSubview:_selectLevelGroupPanel.v_panel];
    [self createSelectLevelPane];
    self.view.frame = CGRectMake(0, 0, 1024, 768);
}

-(void) changeSelectGroupPanelLevelWithLevelGroup:(int) level;
{
    
    float totalTime = 0;
    for( int i=0; i<COUNT_LEVEL_IN_ONE_GROUP; ++i )
        totalTime += _gameState->storeUseTime[level* COUNT_LEVEL_IN_ONE_GROUP+i];
    float total = _gameState->getTotalTime(level);
    
    int h, m, s;
    com::gameworks::tool::getHMS(total, &h, &m, &s);
    NSString *hstr = com::gameworks::tool::fullstr([NSString stringWithFormat:@"%d", h], true, 48, 2);
    NSString *mstr = com::gameworks::tool::fullstr([NSString stringWithFormat:@"%d", m], true, 48, 2);
    NSString *sstr = com::gameworks::tool::fullstr([NSString stringWithFormat:@"%d", s], true, 48, 2);
    NSString *timestr = [NSString stringWithFormat:@"%@:%@:%@", hstr, mstr, sstr];
    [TestSheepSelectLevelPage setNumberFast:_selectLevelGroupPanel.infos[level].ary_number_usertime
                 number:timestr
           charIndexMap:_charIndexMap];
    
    int canGetStarTotal = _gameState->lockLevel* 3;    
    int hasGetStarTotal = 0;
    for( int i=0; i<_gameState->lockLevel; ++i )
        hasGetStarTotal += [SheepConfig computStarCountWithLevel:i usetime:_gameState->storeUseTime[i] min:0 max:3];
    int hasGetStarGroupTotal = 0;
    for( int i=0; i<COUNT_LEVEL_IN_ONE_GROUP; ++i )
    {
        int l = level* COUNT_LEVEL_IN_ONE_GROUP+i;
        hasGetStarGroupTotal += [SheepConfig computStarCountWithLevel:l usetime:_gameState->storeUseTime[l] min:0 max:3];
    }
    [TestSheepSelectLevelPage setNumberFast:_selectLevelGroupPanel.ary_number_star_get number:[NSString stringWithFormat:@"%d", hasGetStarTotal] charIndexMap:_charIndexMap];
    [TestSheepSelectLevelPage setNumberFast:_selectLevelGroupPanel.ary_number_star_total number:[NSString stringWithFormat:@"%d", canGetStarTotal] charIndexMap:_charIndexMap];
    [TestSheepSelectLevelPage setNumberFast:_selectLevelGroupPanel.infos[level].ary_number_star_group_get number:[NSString stringWithFormat:@"%d", hasGetStarGroupTotal] charIndexMap:_charIndexMap];
}

-(void) selectLevelPanelRestoreLevelLogo;
{
    for( int i=0; i<COUNT_LEVEL_IN_ONE_GROUP; ++i )
    {
        UIImageView *iv = (UIImageView*)[_selectLevelPanel.v_panel viewWithTag:100+ i];
        int selectLevel = i+ _selectLevelGroupPanel.selectGroup* COUNT_LEVEL_IN_ONE_GROUP;
        if( selectLevel< _gameState->lockLevel )
            if( _gameState->storeUseTime[selectLevel] > 0 )
                iv.image = _selectLevelPanel.img_logo_pass;
            else
                iv.image = _selectLevelPanel.img_logo_go;
        else
            iv.image = _selectLevelPanel.img_logo_lock;
        UIButton *btn = (UIButton*)[_selectLevelPanel.v_panel viewWithTag:1000+i];
        [[[btn subviews] objectAtIndex:0] setHidden:selectLevel< _gameState->lockLevel];
        [[[btn subviews] objectAtIndex:1] setHidden:selectLevel != _gameState->selectLevel];
    }
    for( int i=0; i<COUNT_LEVEL_IN_ONE_GROUP; ++i )
    {
        int selectLevel = i+ _selectLevelGroupPanel.selectGroup* COUNT_LEVEL_IN_ONE_GROUP;
        int count = 0;
        if( selectLevel< _gameState->lockLevel )
            count = [SheepConfig computStarCountWithLevel:selectLevel usetime:_gameState->storeUseTime[selectLevel] min:0 max:3];
        if( _gameState->storeUseTime[selectLevel] == 0 )
            count = 0;
        for( int j=0; j<3; ++j )
        {
            UIImageView *iv = (UIImageView*)[_selectLevelPanel.v_panel viewWithTag:i*100+j+10000];
            if( j< count )
                iv.image = _selectLevelPanel.img_logo_star;
            else
                iv.image = _selectLevelPanel.img_logo_star_black;
            if( selectLevel < _gameState->lockLevel )
                iv.hidden = NO;
            else
                iv.hidden = YES;
        }
    }
    UIImageView *iv = (UIImageView*)[_selectLevelPanel.v_panel viewWithTag:10];
    if( _selectLevelGroupPanel.selectGroup == 0 )
        iv.image = _selectLevelGroupPanel.img_title_chap1;
    else if( _selectLevelGroupPanel.selectGroup == 1 )
        iv.image = _selectLevelGroupPanel.img_title_chap2;
    else
        iv.image = _selectLevelGroupPanel.img_title_chap3;
    int hasGetStarGroupTotal = 0;
    for( int i=0; i<COUNT_LEVEL_IN_ONE_GROUP; ++i )
    {
        int l = _selectLevelGroupPanel.selectGroup* COUNT_LEVEL_IN_ONE_GROUP+i;
        hasGetStarGroupTotal += [SheepConfig computStarCountWithLevel:l usetime:_gameState->storeUseTime[l] min:0 max:3];
    }
    [TestSheepSelectLevelPage setNumberFast:_selectLevelPanel.ary_number_star_group_get number:[NSString stringWithFormat:@"%d", hasGetStarGroupTotal] charIndexMap:_charIndexMap];
}

-(void) createSelectLevelPane;
{
    UIView *view = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 1024, 768)];
    UIImageView *iv;
    UIButton *btn;
    
    iv = [[UIImageView alloc] initWithImage:_selectLevelGroupPanel.img_btn_back];
    btn = [UIButton buttonWithType:UIButtonTypeCustom];
    btn.frame = CGRectMake(30, 37, 166, 149);
    [btn addTarget:self action:@selector(clickBackToGroup) forControlEvents:UIControlEventTouchUpInside];
    [btn addSubview:iv];
    [iv release];
    [view addSubview:btn];
    
    for( int i=0; i<COUNT_LEVEL_IN_ONE_GROUP; ++i )
    {
        iv = [[UIImageView alloc] init];
        iv.frame = CGRectMake(246+(i%4)* 140, 275+(i/4)* 125, 120, 120);
        iv.tag = 100+i;
        [view addSubview:iv];
        [iv release];
    }
    
    
    iv = [[UIImageView alloc] initWithImage:_selectLevelGroupPanel.img_showStar];
    iv.frame = CGRectMake(733, 26, 278, 182);
    [view addSubview:iv];
    [iv release];
    
    iv = [[UIImageView alloc] initWithImage:_selectLevelPanel.img_showFrame];
    iv.frame = CGRectMake(0, 0, 1024, 768);
    [view addSubview:iv];
    [iv release];
    
    for( int i=0; i<COUNT_LEVEL_IN_ONE_GROUP; ++i )
    {
        for( int j=0; j<3; ++j )
        {
            iv = [[UIImageView alloc] initWithFrame:CGRectMake(267+(i%4)*140+j*29, 360+(i/4)* 130, 23, 23)];
            iv.image = _selectLevelPanel.img_logo_star;
            iv.tag = i*100+j+10000;
            [view addSubview:iv];
            [iv release];
        }
    }
    
    for( int i=0; i<COUNT_LEVEL_IN_ONE_GROUP; ++i )
    {
        btn = [UIButton buttonWithType:UIButtonTypeCustom];
        btn.frame = CGRectMake(246+(i%4)* 140, 275+(i/4)* 125, 120, 120);
        btn.tag = 1000+i;
        [btn addTarget:self action:@selector(clickLevel:) forControlEvents:UIControlEventTouchUpInside];
        [view addSubview:btn];
        
        UIImageView *iv = [[UIImageView alloc] initWithFrame:CGRectMake(70, 70, 44, 52)];
        iv.image = _img_lock;
        iv.hidden = YES;
        [btn addSubview:iv];
        [iv release];
        
        iv = [[UIImageView alloc] initWithFrame:CGRectMake(-10, -10, 40, 40)];
        iv.image = _selectLevelPanel.img_circle;
        [btn addSubview:iv];
        [iv release];
    }
    
    iv = [[UIImageView alloc] initWithImage:_selectLevelGroupPanel.img_title_chap1];
    iv.tag = 10;
    iv.frame = CGRectMake(361, 191, 258, 76);
    [view addSubview:iv];
    [iv release];
    
    _selectLevelPanel.ary_number_star_group_get = [TestSheepSelectLevelPage allocNumberArrayWithCount:2 offset:25 image:_img_counter_number sourceSize:_size_counter_number numberSize:CGSizeMake(40, 60) position:CGPointMake(733+100, 26+60) container:view];
    _selectLevelPanel.ary_number_star_group_total = [TestSheepSelectLevelPage allocNumberArrayWithCount:2 offset:25 image:_img_counter_number sourceSize:_size_counter_number numberSize:CGSizeMake(40, 60) position:CGPointMake(733+200, 26+60) container:view];
    
    [TestSheepSelectLevelPage setNumberFast:_selectLevelPanel.ary_number_star_group_total number:@"36" charIndexMap:_charIndexMap];
    
    _selectLevelPanel.v_panel = view;
}

+(NSArray*) allocNumberArrayWithCount:(int) count
                               offset:(int) offset
                                image:(UIImage*) image
                           sourceSize:(CGSize) sourceSize
                           numberSize:(CGSize) numberSize
                             position:(CGPoint) position
                            container:(UIView*) view;
{
    NSMutableArray *ary = [[NSMutableArray alloc] init];
    for( int i=0; i<count; ++i )
    {
        /*
        SimpleAnimationLoopViewController *invc = [[SimpleAnimationLoopViewController alloc] init];
        [invc setAnimImageWithUIImage:image 
                           sourceSize:sourceSize
                             drawSize:numberSize
                            animCount:11 
                          columnCount:11];
        invc.view.frame = CGRectMake(position.x-i *offset, position.y, numberSize.width, numberSize.height);
        [ary addObject:invc];
        [invc release];
        [view addSubview:invc.view];
        */
        ComGameworksObjCTimelineImageAnimationMovieClip *amc = [[ComGameworksObjCTimelineImageAnimationMovieClip alloc] initWithFrame:CGRectMake(position.x-i *offset, position.y, numberSize.width, numberSize.height)];
        amc.image = image;
        amc.animation = Sheep2::anim_counter_number;
        [ary addObject:amc];
        [amc release];
        [view addSubview:amc];
    }
    return ary;
}

+(void) setNumberFast:(NSArray*) ary
               number:(NSString*) number
         charIndexMap:(map<unsigned short, int>) charIndexMap;
{
    for( int i=number.length-1, curr=0; i>=0 || curr< ary.count; --i, ++curr )
    {
        ComGameworksObjCTimelineImageAnimationMovieClip *amc = [ary objectAtIndex:curr];
        if( curr >= number.length )
            amc.hidden = YES;
        else
        {
            amc.hidden = NO;
            unsigned short ch = [number characterAtIndex:i];
            int idx = charIndexMap[ch];
            [amc setFrameIndex:idx];
        }
    }
}

-(void) onLoop:(ComGameworksObjCTimeline *)timeline;
{
    for( int i=0; i<COUNT_LEVEL_GROUP; ++i )
    {
        [_selectLevelGroupPanel.infos[i].tv_image onLoop:timeline];
    }
}

-(void) createSelectGroupPanel;
{
    UIView *root = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 1024* COUNT_LEVEL_GROUP, 768)];
    for( int i=0; i<COUNT_LEVEL_GROUP; ++i )
    {
        UIView *view = [[UIView alloc] initWithFrame:CGRectMake(0+(i* 1024), 0, 1024, 768)];
        UIImageView *iv;
        
        iv = [[UIImageView alloc] initWithImage:_selectLevelGroupPanel.img_showFrame];
        iv.frame = CGRectMake(0, 0, 1024, 768);
        [view addSubview:iv];
        [iv release];
        
        UIImage *img_showFrame_bgs[] = {
            _selectLevelGroupPanel.img_showFrame_bg_chap1,
            _selectLevelGroupPanel.img_showFrame_bg_chap2,
            _selectLevelGroupPanel.img_showFrame_bg_chap3,
            _selectLevelGroupPanel.img_showFrame_bg_chap2
        };
        
        UIButton *btn;
        btn = [UIButton buttonWithType:UIButtonTypeCustom];
        btn.frame = CGRectMake(312,298,383,268);
        btn.tag = i;
        [btn setImage:img_showFrame_bgs[i] forState:UIControlStateNormal];
        [btn addTarget:self action:@selector(clickNextStep:) forControlEvents:UIControlEventTouchUpInside];
        
        std::map<int, ComGameworksObjCTimelineTransformViewKeyFrame> kfs;
        kfs[0].frameInterval = 6;
        kfs[0].transform = CGAffineTransformMakeScale(1.02, 1.02);
        kfs[6].frameInterval = 6;
        kfs[6].transform = CGAffineTransformIdentity;
        
        ComGameworksObjCTimelineTransformView *tv = [[ComGameworksObjCTimelineTransformView alloc] initWithFrame:CGRectMake(312, 298, 383, 268)];
        tv.kf = kfs;
        tv.totalFrame = 12;
        tv.transformTransition = true;
        btn.frame = CGRectMake(0, 0, 383, 268);
        [tv addSubview:btn];
        [view addSubview:tv];
        [tv release];
        _selectLevelGroupPanel.infos[i].tv_image = tv;
        
        
        UIImage *img_titles[] = {
            _selectLevelGroupPanel.img_title_chap1,
            _selectLevelGroupPanel.img_title_chap2,
            _selectLevelGroupPanel.img_title_chap3,
            _selectLevelGroupPanel.img_title_chap2
        };
        
        iv = [[UIImageView alloc] initWithFrame:CGRectMake(361, 211, 258, 76)];
        iv.tag = 100;
        iv.image = img_titles[i];
        [view addSubview:iv];
        [iv release];
        
        btn = [UIButton buttonWithType:UIButtonTypeCustom];
        btn.frame = CGRectMake(125, 350, 233, 210);
        [btn setImage:_selectLevelGroupPanel.img_btn_prev forState:UIControlStateNormal];
        [btn addTarget:self action:@selector(clickPrev) forControlEvents:UIControlEventTouchUpInside];
        if(i ==0 )
            btn.hidden = YES;
        [view addSubview:btn];
        
        btn = [UIButton buttonWithType:UIButtonTypeCustom];
        btn.frame = CGRectMake(650, 350, 233, 210);
        [btn setImage:_selectLevelGroupPanel.img_btn_next forState:UIControlStateNormal];
        [btn addTarget:self action:@selector(clickNext) forControlEvents:UIControlEventTouchUpInside];
        if( i == COUNT_LEVEL_GROUP-1 )
            btn.hidden = YES;
        [view addSubview:btn];
        
        btn = [UIButton buttonWithType:UIButtonTypeCustom];
        btn.frame = CGRectMake(749, 564, 214, 190);
        [btn setImage:_selectLevelGroupPanel.img_btn_play forState:UIControlStateNormal];
        [btn addTarget:self action:@selector(clickNextStep:) forControlEvents:UIControlEventTouchUpInside];
        btn.tag = i;
        [view addSubview:btn];
        
        NSArray *ary_number_usertime = [TestSheepSelectLevelPage allocNumberArrayWithCount:8 offset:17 image:_img_counter_number sourceSize:_size_counter_number numberSize:_size_show_counter_number position:CGPointMake(460+5, 605) container:view];
        NSArray *ary_number_star_group_get = [TestSheepSelectLevelPage allocNumberArrayWithCount:2 offset:20 image:_img_counter_number sourceSize:_size_counter_number numberSize:_size_show_counter_number position:CGPointMake(610, 605) container:view];
        NSArray *ary_number_star_group_total = [TestSheepSelectLevelPage allocNumberArrayWithCount:2 offset:20 image:_img_counter_number sourceSize:_size_counter_number numberSize:_size_show_counter_number position:CGPointMake(690, 605) container:view];
        
        [TestSheepSelectLevelPage setNumberFast:ary_number_usertime
                                         number:@"00:00:00"
                                   charIndexMap:_charIndexMap];
        [TestSheepSelectLevelPage setNumberFast:ary_number_star_group_get
                                         number:@"00"
                                   charIndexMap:_charIndexMap];
        [TestSheepSelectLevelPage setNumberFast:ary_number_star_group_total
                                         number:@"36"
                                   charIndexMap:_charIndexMap];
        
        _selectLevelGroupPanel.infos[i].ary_number_star_group_get = ary_number_star_group_get;
        _selectLevelGroupPanel.infos[i].ary_number_star_group_total = ary_number_star_group_total;
        _selectLevelGroupPanel.infos[i].ary_number_usertime = ary_number_usertime;
        _selectLevelGroupPanel.infos[i].view = view;
        [root addSubview:view];
        [view release];
    }
    
    UIScrollView *scv = [[UIScrollView alloc] initWithFrame:CGRectMake(0, 0, 1024, 768)];
    scv.pagingEnabled = YES;
    scv.contentSize = CGSizeMake(1024* COUNT_LEVEL_GROUP, 768);
    scv.showsHorizontalScrollIndicator = NO;
    scv.showsVerticalScrollIndicator = NO;
    scv.scrollsToTop = NO;
    [scv addSubview:root];
    [root release];
    
    
    UIButton *btn = [UIButton buttonWithType:UIButtonTypeCustom];
    btn.frame = CGRectMake(30, 37, 166, 149);
    [btn setImage:_selectLevelGroupPanel.img_btn_back forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(clickBack) forControlEvents:UIControlEventTouchUpInside];
    
    UIImageView *iv = [[UIImageView alloc] initWithFrame: CGRectMake(733, 26, 278, 182)];
    iv.image = _selectLevelGroupPanel.img_showStar;
    
    UIView *main = [[UIView alloc] initWithFrame:root.frame];
    [main addSubview:scv];
    [main addSubview:btn];
    [main addSubview:iv];
    [iv release];
    
    NSArray *ary_number_star_get = [TestSheepSelectLevelPage allocNumberArrayWithCount:3 offset:25 image:_img_counter_number sourceSize:_size_counter_number numberSize:CGSizeMake(40, 60) position:CGPointMake(110, 60) container:iv];
    NSArray *ary_number_star_total = [TestSheepSelectLevelPage allocNumberArrayWithCount:3 offset:25 image:_img_counter_number sourceSize:_size_counter_number numberSize:CGSizeMake(40, 60) position:CGPointMake(220, 60) container:iv];
    
    _selectLevelGroupPanel.ary_number_star_get = ary_number_star_get;
    _selectLevelGroupPanel.ary_number_star_total = ary_number_star_total;
    _selectLevelGroupPanel.v_panel = main;
    
    for( int i=0; i<COUNT_LEVEL_GROUP; ++i )
        [self changeSelectGroupPanelLevelWithLevelGroup:i];
}

@end


#import "SheepConfig.h"
#import "SheepAlg.h"
#import "SheepModel.h"
#import "SheepView.h"

@interface SheepApp2 : NSObject<ISheepApp> {
    id<ISheepModel> _model;
    id<ISheepView> _view;
}
-(id) initWithCallback:(id<ISheepModelCallback,ISheepViewCallback>) callback;
@end

@implementation SheepApp2

@synthesize
model = _model,
view = _view;

-(id) initWithCallback:(id<ISheepModelCallback,ISheepViewCallback>) callback;
{
    if( self = [super init])
    {
        _model = [[SheepModel alloc] initWithApp:self callback:callback];
        _view = [[SheepView alloc] initWithApp:self callback:callback];
    }
    return self;
}

-(void) dealloc
{
    [_model release];
    [_view release];
    [super dealloc];
}

@end


namespace SheepGame{
    shader::image::IPAnimation anim_goal_sheep = {
        0, 1800, 150, 0, 0, 1800/12, 150, 12, 12,
    };
}



@interface TestSheepGame(PrivateMethod)
-(void)clickBack;
-(void) createStartGamePanel;
-(void) createPassGamePanel;
-(void) restoreTutorialPanel;
-(void) createTutorialPanel;
-(void) createPausePanel:(UIView*) view
                callback:(id<IPausePanel>) callback;
@end


@implementation TestSheepGame

-(void) openMask;
{
    _mask.alpha = 0;
    [self.view addSubview:_mask];
    
    [UIView beginAnimations:@"openMask" context:nil];
    [UIView setAnimationCurve:UIViewAnimationCurveEaseOut];
    [UIView setAnimationDuration:.2];
    _mask.alpha = .3;
    [UIView commitAnimations];
}

-(void) closeMaskAnimationEnd;
{
    [_mask removeFromSuperview];
}

-(void) closeMask;
{
    [UIView beginAnimations:@"closeMask" context:nil];
    [UIView setAnimationCurve:UIViewAnimationCurveEaseOut];
    [UIView setAnimationDuration:.2];
    [self performSelector:@selector(closeMaskAnimationEnd) withObject:nil afterDelay:.2];
    _mask.alpha = 0;
    [UIView commitAnimations];
}

-(void)
clickStartAnimationStop
{
    [_pausePanel removeFromSuperview];
}

-(void) closeTutorialPanelAnimationStop
{
    [_tutorialPanel removeFromSuperview];
}

-(void) openPausePanel;
{
    [self openMask];
    [self.view addSubview:_pausePanel];
    _pausePanel.frame = CGRectMake(0, -768, 1024, 768);
    
    [UIView beginAnimations:@"openPausePanel" context:nil];
    [UIView setAnimationCurve:UIViewAnimationCurveEaseOut];
    [UIView setAnimationDuration:.2];
    _pausePanel.frame = CGRectMake(0, 0, 1024, 768);
    [UIView commitAnimations];
}

-(void) closePausePanel;
{
    [self closeMask];
    [UIView beginAnimations:@"closePausePanel" context:nil];
    [UIView setAnimationDuration:.2];
    _pausePanel.frame = CGRectMake(0, -768, 1024, 768);
    [self performSelector:@selector(clickStartAnimationStop) withObject:nil afterDelay:.2];
    [UIView commitAnimations]; 
}

-(void) openTutorialPanel;
{
    [self openMask];
    [self.view addSubview:_tutorialPanel];
    _tutorialPanel.frame = CGRectMake(0, -768, 1024, 768);
    
    [UIView beginAnimations:@"openTutorialPanel" context:nil];
    [UIView setAnimationCurve:UIViewAnimationCurveEaseOut];
    [UIView setAnimationDuration:.2];
    _tutorialPanel.frame = CGRectMake(0, 0, 1024, 768);
    [UIView commitAnimations];
}

-(void) closeTutorialPanel;
{
    [self closeMask];
    [UIView beginAnimations:@"closeTutorialPanel" context:nil];
    [UIView setAnimationDuration:.2];
    _tutorialPanel.frame = CGRectMake(0, -768, 1024, 768);
    [self performSelector:@selector(closeTutorialPanelAnimationStop) withObject:nil afterDelay:.2];
    [UIView commitAnimations]; 
}

-(void)
clickStart
{
    SOUND_PLAY_CLICK
    [self closePausePanel];
    [_app.model startGame];
}
-(void)
clickNext
{
    SOUND_PLAY_CLICK
    [self clickStart];
    [_app.model pauseGame];
    if( [_app.model isAllPassed] )
        [self clickBack];
    else
        [_app.model nextLevel];
}


-(void)
clickPause
{
    SOUND_PLAY_CLICK
    [_app.model pauseGame];
    [self openPausePanel];
}

-(void)clickBack
{
    SOUND_PLAY_CLICK
    [_app.model pauseGame];
    [self closePausePanel];
    [_observer notifyWithEventName:@"back" group:@"game" from:self];
}

-(void) clickAgain;
{
    SOUND_PLAY_CLICK
    [_app.model pauseGame];
    [self closePausePanel];
    [_app.model restartLevel];
}

-(void) clickHint;
{
    SOUND_PLAY_CLICK
    [_app.model pauseGame];
    [self openTutorialPanel];
}

-(void) clickTutorialPanelPrev;
{
    SOUND_PLAY_CLICK
    if( --_tutorialPanel_imgs_id < 0 )
        _tutorialPanel_imgs_id = _tutorialPanel_imgs_length-1;
    [self restoreTutorialPanel];
}

-(void) clickTutorialPanelNext;
{
    SOUND_PLAY_CLICK
    if( ++_tutorialPanel_imgs_id >= _tutorialPanel_imgs_length )
        _tutorialPanel_imgs_id = 0;
    [self restoreTutorialPanel];
}

-(void) clickTutorialPanelResume;
{
    [self closeTutorialPanel];
    [_app.model resumeGame];
}

-(void) clickStartGamePanelPlay;
{
    SOUND_PLAY_CLICK
    [UIView beginAnimations:@"closeStartPanel" context:nil];
    [UIView setAnimationDuration:.5];
    _startGamePanel.alpha = 0;
    [UIView commitAnimations];
    [_app.model startGame];
}

-(void) showPassGamePanel{
    
    [self openMask];
    [self.view addSubview:_passGamePanel];
    [UIView beginAnimations:@"passGamePanel" context:nil];
    [UIView setAnimationCurve:UIViewAnimationCurveLinear];
    [UIView setAnimationDuration:.2];
    _passGamePanel.frame = CGRectMake(0, 0, 1024, 768);
    [UIView commitAnimations];
}

-(void) closePassGamePanelAnimationEnd;
{
    [_passGamePanel removeFromSuperview];
}

-(void) closePassGamePanel{
    [self closeMask];
    [UIView beginAnimations:@"passGamePanel" context:nil];
    [UIView setAnimationCurve:UIViewAnimationCurveLinear];
    [UIView setAnimationDuration:.2];
    _passGamePanel.frame = CGRectMake(0, -768, 1024, 768);
    [UIView commitAnimations];
    [self performSelector:@selector(closePassGamePanelAnimationEnd) withObject:nil afterDelay:.2];
}



-(void) clickPassGamePanelRestart;
{
    SOUND_PLAY_CLICK
    [_app.model pauseGame];
    [self closePassGamePanel];
    [_app.model restartLevel];
    
}

-(void) clickPassGamePanelMainMenu;
{
    SOUND_PLAY_CLICK
    [self closePassGamePanel];
    [_observer notifyWithEventName:@"back" group:@"game" from:self];
}

-(void) clickPassGamePanelNextLevel;
{
    SOUND_PLAY_CLICK
    [self closePassGamePanel];
    [_app.model pauseGame];
    if( [_app.model isAllPassed] )
        [self clickBack];
    else
        [_app.model nextLevel];
}

-(void) onPlaySound:(NSString *)name;
{
    [_observer notifyWithEventName:name group:@"game-sound" from:self];
}

-(void) onShowTutorial:(int)tutorialId;
{
    if( _gameState->isTutorial[tutorialId] )
        return;
    _gameState->isTutorial[tutorialId] = true;
    _tutorialPanel_imgs_id = tutorialId;
    [self restoreTutorialPanel];
    [self clickHint];
}

-(void) onLevelPassWithLevel:(int)level usetime:(float)time;
{
    LevelDes leveldes = [SheepConfig single]->level_des[level];
    bool isTimeout = time > (leveldes.maxtime+ DEAD_TIME);
    if( isTimeout ){}
    else
    {
        _gameState->usetime = time;
        _gameState->setStoreUseTime(level, time);
        _gameState->setLockLevel(level+2);
        _gameState->save();
        _gameState->selectLevel = level+1;
    }
    
    if( isTimeout )
    {
        UIImageView *iv = (UIImageView*)[_passGamePanel viewWithTag:100];
        iv.image = _img_passPanel_logo_failed;
        for( int i=0; i<3; ++i )
        {
            UIImageView *iv = (UIImageView*)[_passGamePanel viewWithTag: 10+i];
            iv.image = _img_logo_star_black;
        }
        ComGameworksObjCTimelineImageMovieClip *mc;
        mc = (ComGameworksObjCTimelineImageMovieClip*)[_passGamePanel viewWithTag:101];
        mc.hidden = YES;
        mc = (ComGameworksObjCTimelineImageMovieClip*)[_passGamePanel viewWithTag:102];
        mc.hidden = YES;
        [_observer notifyWithEventName:@"musicPlayFail" group:nil from:nil];
    }
    else
    {
        UIImage *logos[] = {
            _img_passPanel_logo_notbad,
            _img_passPanel_logo_good,
            _img_passPanel_logo_great,
            _img_passPanel_logo_perfect
        };
        int count = [SheepConfig computStarCountWithLevel:level usetime:time min:0 max:3];
        UIImageView *iv = (UIImageView*)[_passGamePanel viewWithTag:100];
        iv.image = logos[count];
        for( int i=0; i<3; ++i )
        {
            UIImageView *iv = (UIImageView*)[_passGamePanel viewWithTag: 10+i];
            iv.hidden = NO;
            if( i<count )
                iv.image = _img_logo_star;
            else
                iv.image = _img_logo_star_black;
        }
        ComGameworksObjCTimelineImageMovieClip *mc;
        mc = (ComGameworksObjCTimelineImageMovieClip*)[_passGamePanel viewWithTag:101];
        mc.hidden = count != 3;
        mc = (ComGameworksObjCTimelineImageMovieClip*)[_passGamePanel viewWithTag:102];
        mc.hidden = count != 3;
        if( count>= 3 )
            [_observer notifyWithEventName:@"musicPlayScore" group:nil from:nil];
        else
            [_observer notifyWithEventName:@"musicPlaySuccess" group:nil from:nil];
    }
    
    bool canNext = level+1 < _gameState->lockLevel;
    UIButton *btn;
    btn = (UIButton*)[_passGamePanel viewWithTag:1000];
    btn.hidden = !canNext;
    UIImageView *iv;
    iv = (UIImageView*)[_passGamePanel viewWithTag:1001];
    iv.hidden = !canNext;
  
    int h, m, s;
    com::gameworks::tool::getHMS(time, &h, &m, &s);
    NSString *hstr = com::gameworks::tool::fullstr([NSString stringWithFormat:@"%d", h], true, 48, 2);
    NSString *mstr = com::gameworks::tool::fullstr([NSString stringWithFormat:@"%d", m], true, 48, 2);
    NSString *sstr = com::gameworks::tool::fullstr([NSString stringWithFormat:@"%d", s], true, 48, 2);
    NSString *timestr = [NSString stringWithFormat:@"%@:%@:%@", hstr, mstr, sstr];
    [TestSheepSelectLevelPage setNumberFast:_ary_number_usetime number:timestr charIndexMap:_charIndexMap];
    
    [self showPassGamePanel];
}

-(void) onloadResourceWithLevel:(int)level
{
    [_observer notifyWithEventName:@"musicPlayPlaying" group:nil from:nil];
#if defined (USE_START_GAME_PANEL)
    [UIView beginAnimations:@"closeStartPanel" context:nil];
    [UIView setAnimationDuration:.5];
    _startGamePanel.alpha = 1;
    [UIView commitAnimations];
#else
    [_app.model startGame];
#endif
}

-(void)
dealloc
{
    [_app.model pauseGame];
    [_app release];
    
    [_img_passGamePanel_btn_back release];
    [_img_passGamePanel_btn_next release];
    [_img_passGamePanel_btn_restart release];

    [_img_passPanel_showFrame release];
    [_img_passPanel_logo_perfect release];
    [_img_passPanel_btn_next release];
    [_img_passPanel_btn_next_bg release];
    [_img_passPanel_btn_back release];
    [_img_passPanel_btn_back_bg release];
    [_img_passPanel_btn_again release];
    [_img_passPanel_btn_again_bg release];
    
    [_img_pausePanel_again_bg release];
    [_img_pausePanel_back_bg release];
    [_img_pausePanel_resume_bg release];
    [_img_pausePanel_btn_again release];
    [_img_pausePanel_btn_back release];
    [_img_pausePanel_btn_resume release];
    [_img_pausePanel_showFrame release];
    
    [_img_start_game_btn release];
    [_img_start_game_logo release];
    
    [_img_logo_star release];
    [_img_logo_star_black release];
    
    [_img_btn_again release];
    [_img_btn_pause release];
    [_pausePanel release];
    [_startGamePanel release];
    [_passGamePanel release];
    for( int i=0; i<_tutorialPanel_imgs_length; ++i )
        [_imgs_tutorialPanel_img[i] release];
    [_img_tutorialPanel_btn_prev release];
    [_img_tutorialPanel_btn_next release];
    [_img_tutorialPanel_btn_resume release];
    [super dealloc];
}

-(void) notify:(NSNotification*) notification;
{
    if( [notification.name isEqualToString:@"UIApplicationWillResignActiveNotification"] )
    {
        if( [_app.model isGame] )
            [self clickPause];
    }
}
-(void) viewDidLoad
{
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(notify:) name:nil object:nil];
    _app = [[SheepApp2 alloc] initWithCallback:self];
    UIView *view = (UIView*)_app.view;
    view.frame = CGRectMake(0, 0, 1024, 768);
    self.view.frame = CGRectMake(0, 0, 1024, 768);
    [self.view addSubview:view];
    [view setMultipleTouchEnabled:YES];
    [self.view setMultipleTouchEnabled:YES];
    
    _img_start_game_logo = com::gameworks::tool::allocUIImage(@"images/LOGO_Ver01", @"png");
    _img_start_game_btn = com::gameworks::tool::allocUIImage(@"images/PLAY", @"png");
    
    _img_passGamePanel_btn_back = com::gameworks::tool::allocUIImage(@"images/passLevelPanel_btn_back", @"png");
    _img_passGamePanel_btn_next = com::gameworks::tool::allocUIImage(@"images/passLevelPanel_btn_next", @"png");
    _img_passGamePanel_btn_restart = com::gameworks::tool::allocUIImage(@"images/passLevelPanel_btn_restart", @"png");
    _img_passPanel_showFrame = com::gameworks::tool::allocUIImage(@"images/passPanel_showFrame", @"png");
    _img_passPanel_logo_perfect = com::gameworks::tool::allocUIImage(@"images/passPanel_logo_perfect", @"png");
    _img_passPanel_logo_good = com::gameworks::tool::allocUIImage(@"images/passPanel_logo_good", @"png");
    _img_passPanel_logo_notbad = com::gameworks::tool::allocUIImage(@"images/passPanel_logo_notbad", @"png");
    _img_passPanel_logo_great = com::gameworks::tool::allocUIImage(@"images/passPanel_logo_great", @"png");
    _img_passPanel_logo_timeout = com::gameworks::tool::allocUIImage(@"images/passPanel_logo_timeout", @"png");
    _img_passPanel_logo_failed = com::gameworks::tool::allocUIImage(@"images/passPanel_logo_failed", @"png");
    
    _img_passPanel_btn_again_bg = com::gameworks::tool::allocUIImage(@"images/passPanel_btn_again_bg", @"png");
    _img_passPanel_btn_back_bg = com::gameworks::tool::allocUIImage(@"images/passPanel_btn_back_bg", @"png");
    _img_passPanel_btn_next_bg = com::gameworks::tool::allocUIImage(@"images/passPanel_btn_next_bg", @"png");
    _img_passPanel_anim_sheep = com::gameworks::tool::allocUIImage(@"images/passPanel_anim_sheep", @"png");
    /*
    _img_passGamePanel_treepanel = com::gameworks::tool::allocUIImage(@"images/passLevelPanel_treepanel", @"png");
    */
    _img_pausePanel_back_bg = com::gameworks::tool::allocUIImage(@"images/pausePanel_back_bg", @"png");
    _img_pausePanel_again_bg = com::gameworks::tool::allocUIImage(@"images/pausePanel_again_bg", @"png");
    _img_pausePanel_resume_bg = com::gameworks::tool::allocUIImage(@"images/pausePanel_resume_bg", @"png");
    _img_pausePanel_btn_again = com::gameworks::tool::allocUIImage(@"images/pausePanel_btn_again", @"png");
    _img_pausePanel_btn_back = com::gameworks::tool::allocUIImage(@"images/pausePanel_btn_back", @"png");
    _img_pausePanel_btn_resume = com::gameworks::tool::allocUIImage(@"images/pausePanel_btn_resume", @"png");
    _img_pausePanel_showFrame = com::gameworks::tool::allocUIImage(@"images/pausePanel_showFrame", @"png");
    
    _img_btn_again = com::gameworks::tool::allocUIImage(@"images/gamePanel_btn_again", @"png");
    _img_btn_pause = com::gameworks::tool::allocUIImage(@"images/gamePanel_btn_pause", @"png");
    _img_btn_hint = com::gameworks::tool::allocUIImage(@"images/gamePanel_btn_hint", @"png");
    
    
    _img_counter_number = com::gameworks::tool::allocUIImage(@"images/counter_number_border(s)", @"png");
    
    _img_logo_star = com::gameworks::tool::allocUIImage(@"images/passPanel_star", @"png");
    _img_logo_star_black = com::gameworks::tool::allocUIImage(@"images/passPanel_star_black", @"png");
    
    _img_tutorialPanel_showFrame = com::gameworks::tool::allocUIImage(@"images/tutorialPanel_showFrame", @"png");
    _tutorialPanel_imgs_length = COUNT_TUTORIAL_IMAGE;
    _imgs_tutorialPanel_img = new UIImage*[ _tutorialPanel_imgs_length ];
    for( int i=0; i<_tutorialPanel_imgs_length; ++i )
    {
        NSString *fn = [NSString stringWithFormat:@"images/tutorialPanel_img_%d", i+1];
        _imgs_tutorialPanel_img[i] = com::gameworks::tool::allocUIImage(fn, @"jpg");
    }
    _img_tutorialPanel_btn_next = com::gameworks::tool::allocUIImage(@"images/tutorialPanel_btn_next", @"png");
    _img_tutorialPanel_btn_prev = com::gameworks::tool::allocUIImage(@"images/tutorialPanel_btn_prev", @"png");
    _img_tutorialPanel_btn_resume = com::gameworks::tool::allocUIImage(@"images/tutorialPanel_btn_play", @"png");
    
    
    // 畫圖數字用的字元對應圖片第幾張 //
    _charIndexMap[[@"1" characterAtIndex:0]] = 0;
    _charIndexMap[[@"2" characterAtIndex:0]] = 1;
    _charIndexMap[[@"3" characterAtIndex:0]] = 2;
    _charIndexMap[[@"4" characterAtIndex:0]] = 3;
    _charIndexMap[[@"5" characterAtIndex:0]] = 4;
    _charIndexMap[[@"6" characterAtIndex:0]] = 5;
    _charIndexMap[[@"7" characterAtIndex:0]] = 6;
    _charIndexMap[[@"8" characterAtIndex:0]] = 7;
    _charIndexMap[[@"9" characterAtIndex:0]] = 8;
    _charIndexMap[[@"0" characterAtIndex:0]] = 9;
    _charIndexMap[[@":" characterAtIndex:0]] = 10;
    
    UIButton *btn = [UIButton buttonWithType:UIButtonTypeCustom];
    [btn setImage:_img_btn_pause forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(clickPause) forControlEvents:UIControlEventTouchUpInside];
    btn.frame = CGRectMake(180, 1, 58, 48);
    [self.view addSubview:btn];
    
    btn = [UIButton buttonWithType:UIButtonTypeCustom];
    [btn setImage:_img_btn_again forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(clickAgain) forControlEvents:UIControlEventTouchUpInside];
    btn.frame = CGRectMake(242, 1, 58, 48);
    [self.view addSubview:btn];
    
    btn = [UIButton buttonWithType:UIButtonTypeCustom];
    [btn setImage:_img_btn_hint forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(clickHint) forControlEvents:UIControlEventTouchUpInside];
    btn.frame = CGRectMake(302, 1, 58, 48);
    [self.view addSubview:btn];
    
    _mask = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 1024, 768-50)];
    _mask.backgroundColor = [UIColor grayColor];
    
    _pausePanel = [[UIView alloc] initWithFrame:CGRectMake(0, -768, 1024, 768)];
    [self createPausePanel:_pausePanel callback:self];
    
#if defined (USE_START_GAME_PANEL)
    [self createStartGamePanel];
#endif
    [self.view addSubview:_startGamePanel];
    [self createPassGamePanel];
    [self createTutorialPanel];
    
    
    ADBannerView *ad = [[ADBannerView alloc] initWithFrame:CGRectMake(0, 768-50, 1024, 50)];
    ad.requiredContentSizeIdentifiers = [NSSet setWithObjects:ADBannerContentSizeIdentifierLandscape, nil];
    ad.currentContentSizeIdentifier = ADBannerContentSizeIdentifierLandscape;
    ad.userInteractionEnabled = NO;
    ad.backgroundColor = [UIColor colorWithRed:0 green:0 blue:0 alpha:0];
    [self.view addSubview:ad];
    [ad release];
     
}

-(void)
viewWillAppear:(BOOL)animated
{
    [_app.model loadResourceWithLevel: _gameState->selectLevel];
    
}

-(void)
viewWillDisappear:(BOOL)animated
{
    [_app.model destory];
}

#if defined (USE_START_GAME_PANEL)
-(void) createStartGamePanel;
{
    _startGamePanel = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 1024, 768)];
    UIView *bg = [[UIView alloc] initWithFrame:_startGamePanel.frame];
    bg.backgroundColor = [UIColor grayColor];
    bg.alpha = .5;
    
    UIImageView *iv = [[UIImageView alloc] initWithImage:_img_start_game_logo];
    iv.frame = CGRectMake(73, 25, 865, 440);
    
    UIImageView *iv_start_game_button = [[UIImageView alloc] initWithImage:_img_start_game_btn];
    iv_start_game_button.frame = CGRectMake(0, 0, 388, 276);
    
    
    UIButton *btn_start_game_button = [UIButton buttonWithType:UIButtonTypeCustom];
    [btn_start_game_button addSubview:iv_start_game_button];
    btn_start_game_button.frame = CGRectMake(0, 0, 388, 276);
    [btn_start_game_button addTarget:self action:@selector(clickStartGamePanelPlay) forControlEvents:UIControlEventTouchUpInside];
    
    DefaultLoopViewController *_lc_start_game_button = [[DefaultLoopViewController alloc] init];
    _lc_start_game_button.view.frame = CGRectMake(325, 475, 388, 276);
    [_lc_start_game_button.view addSubview:btn_start_game_button];
    
    std::map<int, DefaultLoopViewKeyFrame> kfs;
    kfs[25].frameInterval = 3;
    kfs[25].transform = CGAffineTransformMakeScale(1.05, 1.05);
    kfs[30].frameInterval = 3;
    kfs[30].transform = CGAffineTransformIdentity;
    _lc_start_game_button.loopViewKeyFrame = kfs;
    _lc_start_game_button.totalFrame = 31;
    _lc_start_game_button.loop = true;
    _lc_start_game_button.transformTransition = true;
    [_lc_start_game_button startLoopWithInterval:3];
    
    [_startGamePanel addSubview:bg];
    [_startGamePanel addSubview:iv];
    [_startGamePanel addSubview:_lc_start_game_button.view];
}
#endif

-(void) onLoop:(ComGameworksObjCTimeline *)timeline;
{
    if( _passGamePanel )
    {
        ComGameworksObjCTimelineImageMovieClip *mc;
        mc = (ComGameworksObjCTimelineImageMovieClip*)[_passGamePanel viewWithTag:101];
        [mc setSourceRectWithAnimation:SheepGame::anim_goal_sheep frame:timeline.tick];
        /*
        com::gameworks::opengl::shader::image::tool::set( mc, SheepGame::anim_goal_sheep, timeline.tick);
        */
        mc = (ComGameworksObjCTimelineImageMovieClip*)[_passGamePanel viewWithTag:102];
        [mc setSourceRectWithAnimation:SheepGame::anim_goal_sheep frame:timeline.tick];
        /*
        com::gameworks::opengl::shader::image::tool::set( mc, SheepGame::anim_goal_sheep, timeline.tick);
         */
    }
}

-(void) createPassGamePanel;
{
    _passGamePanel = [[UIView alloc] initWithFrame:CGRectMake(0, -768, 1024, 768)];
    
    UIImageView *iv;
    iv = [[UIImageView alloc] initWithFrame:CGRectMake(91, 0, 856, 617)];
    iv.image = _img_passPanel_showFrame;
    [_passGamePanel addSubview:iv];
    [iv release];
    
    iv = [[UIImageView alloc] initWithFrame:CGRectMake(221, 196, 603, 114)];
    iv.image = _img_passPanel_logo_perfect;
    iv.tag = 100;
    [_passGamePanel addSubview:iv];
    [iv release];
    
    iv = [[UIImageView alloc] initWithFrame:CGRectMake(98, 468, 229, 211)];
    iv.image = _img_passPanel_btn_again_bg;
    [_passGamePanel addSubview:iv];
    [iv release];
    
    iv = [[UIImageView alloc] initWithFrame:CGRectMake(374, 499, 237, 212)];
    iv.image = _img_passPanel_btn_back_bg;
    [_passGamePanel addSubview:iv];
    [iv release];
    
    iv = [[UIImageView alloc] initWithFrame:CGRectMake(654, 450, 282, 252)];
    iv.image = _img_passPanel_btn_next_bg;
    iv.tag = 1001;
    [_passGamePanel addSubview:iv];
    [iv release];
    
    for( int i=0; i<3; ++i )
    {
        iv = [[UIImageView alloc] initWithFrame:CGRectMake(350+ i* 100, 310, 92, 88)];
        iv.tag = 10+i;
        iv.image = _img_logo_star_black;
        [_passGamePanel addSubview:iv];
        [iv release];
    }
    
    ComGameworksObjCTimelineImageMovieClip *mc;
    mc = [[ComGameworksObjCTimelineImageMovieClip alloc] initWithFrame:CGRectMake(197-20, 322, 150, 150-20)];
    mc.tag = 101;
    mc.image = _img_passPanel_anim_sheep;
    [mc setSourceRect:CGRectMake(0, 0, 150, 150)];
    [_passGamePanel addSubview:mc];
    [mc release];
    
    mc = [[ComGameworksObjCTimelineImageMovieClip alloc] initWithFrame:CGRectMake(721-20, 322, 150, 150-30)];
    mc.tag = 102;
    mc.image = _img_passPanel_anim_sheep;
    [mc setSourceRect:CGRectMake(0, 0, 150, 150)];
    [_passGamePanel addSubview:mc];
    [mc release];
    
    UIButton *btn_restart = [UIButton buttonWithType:UIButtonTypeCustom];
    btn_restart.frame = CGRectMake(164, 529, 92, 94);
    [btn_restart setImage:_img_passGamePanel_btn_restart forState:UIControlStateNormal];
    [btn_restart addTarget:self action:@selector(clickPassGamePanelRestart) forControlEvents:UIControlEventTouchUpInside];
    [_passGamePanel addSubview:btn_restart];
    
    UIButton *btn_main_menu = [UIButton buttonWithType:UIButtonTypeCustom];
    btn_main_menu.frame = CGRectMake(436, 546, 114, 100);
    [btn_main_menu setImage:_img_passGamePanel_btn_back forState:UIControlStateNormal];
    [btn_main_menu addTarget:self action:@selector(clickPassGamePanelMainMenu) forControlEvents:UIControlEventTouchUpInside];
    [_passGamePanel addSubview:btn_main_menu];
    
    UIButton *btn_next_level = [UIButton buttonWithType:UIButtonTypeCustom];
    btn_next_level.frame = CGRectMake(716, 502, 168, 128);
    [btn_next_level setImage:_img_passGamePanel_btn_next forState:UIControlStateNormal];
    [btn_next_level addTarget:self action:@selector(clickPassGamePanelNextLevel) forControlEvents:UIControlEventTouchUpInside];
    btn_next_level.tag = 1000;
    [_passGamePanel addSubview:btn_next_level];
    
    _ary_number_usetime = [TestSheepSelectLevelPage allocNumberArrayWithCount:8 offset:25 image:_img_counter_number sourceSize:CGSizeMake(40, 40) numberSize:CGSizeMake(30, 40) position:CGPointMake(443+165, 433+10) container:_passGamePanel];
    
    [TestSheepSelectLevelPage setNumberFast:_ary_number_usetime number:@"00:00:00" charIndexMap:_charIndexMap];
}



-(void) createPausePanel:(UIView*) view
                callback:(id<IPausePanel>) callback;
{
    view.frame = CGRectMake(0, 0, 1024, 768);
    
    UIImageView *iv;
    UIButton *btn;
    iv = [[UIImageView alloc] initWithFrame:CGRectMake(208, 1, 605, 556)];
    iv.image = _img_pausePanel_showFrame;
    [view addSubview:iv];
    [iv release];
    
    iv = [[UIImageView alloc] initWithFrame:CGRectMake(108, 434, 240, 221)];
    iv.image = _img_pausePanel_again_bg;
    //[view addSubview:iv];
    [iv release];
    
    //iv = [[UIImageView alloc] initWithFrame:CGRectMake(677, 426, 256, 229)];
    iv = [[UIImageView alloc] initWithFrame:CGRectMake(221, 450, 256, 229)];
    iv.image = _img_pausePanel_back_bg;
    [view addSubview:iv];
    [iv release];
    
    //iv = [[UIImageView alloc] initWithFrame:CGRectMake(377, 463, 246, 221)];
    iv = [[UIImageView alloc] initWithFrame:CGRectMake(550, 457, 246, 221)];
    iv.image = _img_pausePanel_resume_bg;
    [view addSubview:iv];
    [iv release];
    
    btn = [UIButton buttonWithType:UIButtonTypeCustom];
    [btn setImage:_img_pausePanel_btn_again forState:UIControlStateNormal];
    btn.frame = CGRectMake(108, 434, 240, 221);
    [btn addTarget:self action:@selector(clickAgain) forControlEvents:UIControlEventTouchUpInside];
    //[view addSubview:btn];
    
    btn = [UIButton buttonWithType:UIButtonTypeCustom];
    [btn setImage:_img_pausePanel_btn_back forState:UIControlStateNormal];
    //btn.frame = CGRectMake(680, 412, 256, 229);
    btn.frame = CGRectMake(215, 447, 256, 229);
    [btn addTarget:self action:@selector(clickBack) forControlEvents:UIControlEventTouchUpInside];
    [view addSubview:btn];
    
    btn = [UIButton buttonWithType:UIButtonTypeCustom];
    [btn setImage:_img_pausePanel_btn_resume forState:UIControlStateNormal];
    //btn.frame = CGRectMake(385, 450, 246, 221);
    btn.frame = CGRectMake(559, 447, 246, 221);
    [btn addTarget:self action:@selector(clickStart) forControlEvents:UIControlEventTouchUpInside];
    [view addSubview:btn];
}


-(void) restoreTutorialPanel;
{
    UIImageView *iv;
    iv = (UIImageView*)[_tutorialPanel viewWithTag:100];
    iv.image = _imgs_tutorialPanel_img[_tutorialPanel_imgs_id];
    [TestSheepSelectLevelPage setNumberFast:_ary_number_tutorial_index number:[NSString stringWithFormat:@"%d", _tutorialPanel_imgs_id+1]  charIndexMap:_charIndexMap];
    [TestSheepSelectLevelPage setNumberFast:_ary_number_tutorial_total number:[NSString stringWithFormat:@"%d", _tutorialPanel_imgs_length] charIndexMap:_charIndexMap];
}

-(void) createTutorialPanel;
{
    
    
    UIView *view = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 1024, 768)];
    UIImageView *iv;
    /*
    UIScrollView *scv = [[UIScrollView alloc] initWithFrame:CGRectMake(256, 178, 509, 428)];
    scv.pagingEnabled = YES;
    scv.contentSize = CGSizeMake(509* _tutorialPanel_imgs_length, 428);
    scv.showsHorizontalScrollIndicator = NO;
    scv.showsVerticalScrollIndicator = NO;
    scv.scrollsToTop = NO;
    scv.backgroundColor = [UIColor grayColor];
    for( int i=0; i<_tutorialPanel_imgs_length; ++i )
    {
        iv = [[UIImageView alloc] initWithFrame:CGRectMake(0+i* 509, 0, 509, 428)];
        iv.image = _imgs_tutorialPanel_img[i];
        [scv addSubview:iv];
        [iv release];
    }
    [view addSubview:scv];
    [scv release];
    */
    
    iv = [[UIImageView alloc] initWithFrame:CGRectMake(256, 178+50, 509, 428-50)];
    iv.image = _imgs_tutorialPanel_img[0];
    iv.tag = 100;
    [view addSubview:iv];
    [iv release];
    
    iv = [[UIImageView alloc] initWithFrame:CGRectMake(130, 0, 762, 712)];
    iv.image = _img_tutorialPanel_showFrame;
    [view addSubview:iv];
    [iv release];
    
    _ary_number_tutorial_index = [TestSheepSelectLevelPage allocNumberArrayWithCount:2 offset:25 image:_img_counter_number sourceSize:CGSizeMake(40, 40) numberSize:CGSizeMake(40, 40) position:CGPointMake(390+30, 613) container:view];
    _ary_number_tutorial_total = [TestSheepSelectLevelPage allocNumberArrayWithCount:2 offset:25 image:_img_counter_number sourceSize:CGSizeMake(40, 40) numberSize:CGSizeMake(40, 40) position:CGPointMake(546, 613) container:view];
    
    [TestSheepSelectLevelPage setNumberFast:_ary_number_tutorial_index number:[NSString stringWithFormat:@"%d", _tutorialPanel_imgs_id+1]  charIndexMap:_charIndexMap];
    [TestSheepSelectLevelPage setNumberFast:_ary_number_tutorial_total number:[NSString stringWithFormat:@"%d", _tutorialPanel_imgs_length] charIndexMap:_charIndexMap];
    
    UIButton *btn;
    btn = [UIButton buttonWithType:UIButtonTypeCustom];
    btn.frame = CGRectMake(37, 520, 233, 210);
    [btn setImage:_img_tutorialPanel_btn_prev forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(clickTutorialPanelPrev) forControlEvents:UIControlEventTouchUpInside];
    [view addSubview:btn];
    
    btn = [UIButton buttonWithType:UIButtonTypeCustom];
    btn.frame = CGRectMake(760, 520, 232, 209);
    [btn setImage:_img_tutorialPanel_btn_next forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(clickTutorialPanelNext) forControlEvents:UIControlEventTouchUpInside];
    [view addSubview:btn];
    
    btn = [UIButton buttonWithType:UIButtonTypeCustom];
    btn.frame = CGRectMake(791, 20, 204, 191);
    [btn setImage:_img_tutorialPanel_btn_resume forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(clickTutorialPanelResume) forControlEvents:UIControlEventTouchUpInside];
    [view addSubview:btn];
    _tutorialPanel = view;
}
@end


@implementation TestSheepHelpPage

@end


@implementation TestSheepStorePage

-(void) clickItem:(UIButton*) btn
{
    int tag = btn.tag;
    NSLog(@"buy %d", tag);
    
}

-(void) clickBack;
{
    [_observer notifyWithEventName:@"back" group:@"store" from:self];
}


-(void) createItemMenuView;
{
    UIView *view = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 1024, 768)];
    UIButton *btn;
    btn = [UIButton buttonWithType:UIButtonTypeCustom];
    [btn setTitle:@"ad" forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(clickItem:) forControlEvents:UIControlEventTouchUpInside];
    btn.tag = 101;
    btn.frame = CGRectMake(0, 50, 300, 30);
    [view addSubview:btn];
    _itemMenu.view = view;
    
    btn = [UIButton buttonWithType:UIButtonTypeCustom];
    [btn setTitle:@"back" forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(clickBack) forControlEvents:UIControlEventTouchUpInside];
    btn.tag = 101;
    btn.frame = CGRectMake(0, 0, 300, 30);
    [view addSubview:btn];
}

-(void) viewDidLoad
{
    [self createItemMenuView];
    [self.view addSubview:_itemMenu.view];
}

@end