//
//  TestSheep2.h
//  testEmpty4
//
//  Created by Rachel on 12/2/3.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <AVFoundation/AVFoundation.h>
#import "SheepConfig.h"
#import "SheepApp.h"
#import "SheepModel.h"
#import "SheepView.h"
#import "com.gameworks.objc.timeline.h"

struct TestSheepState{
    int selectLevel;
    int currpage;
    int lockLevel;
    float usetime;
    float storeUseTime[COUNT_LEVEL];
    bool isTutorial[COUNT_TUTORIAL_IMAGE];
    bool isMuteSound, isMuteMusic;
    
    float getTotalTime( int levelGroup );
    NSString *getPath(NSString *file);
    void setStoreUseTime( int level, float time );
    void setLockLevel( int v );
    void init();
    void save();
    void load();
    void clearRecord();
};

@protocol IPageObserver <NSObject>
-(void)
notifyWithEventName:(NSString*) event
                group:(NSString*) group
                from:(id) page;
@end

@interface TestSheepPage : UIViewController {
    TestSheepState *_gameState;
    id<IPageObserver> _observer;
}
@property (nonatomic) TestSheepState* gameState;
@property (nonatomic, assign) id<IPageObserver> observer;
-(void) onLoop:(ComGameworksObjCTimeline*) timeline;
@end


@interface TestSheep2 : UIViewController<IPageObserver, ComGameworksObjCTimelineObserver>
{
    enum{
        SOUND_TITLE,
        SOUND_BUTTON,
        SOUND_CHOOSE,
        SOUND_PLAYING,
        SOUND_SCORE,
        SOUND_SHEEP,
        SOUND_SWIM,
        SOUND_DOG,
        SOUND_JUMP,
        SOUND_ENTER_GOAL,
        SOUND_SUCCESS,
        SOUND_BIG_SUCCESS,
        SOUND_FAIL,
        SOUND_LENGTH
    };
    AVAudioPlayer *_aps[SOUND_LENGTH];
    
    enum{
        PAGE_MAIN,
        PAGE_SELECT_LEVEL,
        PAGE_GAME,
        PAGE_HELP,
        PAGE_STORE,
        PAGE_LENGTH
    };
    struct{
        UIImage *bg;
    } _imgs;
    TestSheepPage *_pages[PAGE_LENGTH];
    TestSheepState _gameState;
    UIView *_pageLayer;
    struct{
        UIView
            *v_panel;
    } _loadingPanel;
    ComGameworksObjCTimeline *_timeline;
}
@end



@interface TestSheepMainPage : TestSheepPage
{
    struct{
        UIImage
            *img_logo,
            *img_showFrame,
            *img_btn_store,
            *img_btn_sound_open,
            *img_btn_sound_close,
            *img_btn_play,
            *img_btn_music_open,
            *img_btn_music_close,
            *img_btn_bg,
            *img_btn_achieve,
            *img_bg,
            *img_sheep,
            *img_sheep_blue,
            *img_dog;
        UIView
            *v_panel;
    } _mainPanel;
    
    ComGameworksObjCTimelineImageAnimationMovieClip
        *_amc_dog,*_amc_sheep,*_amc_sheep2;
    ComGameworksObjCTimelineTransformView
        *_tv_btn_play;
}
@end






@interface TestSheepSelectLevelPage : TestSheepPage
{
    struct SelectLevelGroupInfo{
        NSArray 
            *ary_number_usertime,
            *ary_number_star_group_get,
            *ary_number_star_group_total;
        
        ComGameworksObjCTimelineTransformView
            *tv_image;
        
        UIView
            *view;
    };
    
    struct{
        UIImage 
            *img_title_chap1,
            *img_title_chap2,
            *img_title_chap3,
            *img_showStar,
            *img_showFrame,
            *img_btn_prev,
            *img_btn_next,
            *img_btn_back,
            *img_btn_play,
            *img_bg,
            *img_showFrame_bg_chap1,
            *img_showFrame_bg_chap2,
            *img_showFrame_bg_chap3;

        NSArray 
            *ary_number_star_get,
            *ary_number_star_total;
        
        SelectLevelGroupInfo
            infos[COUNT_LEVEL_GROUP];
        
        UIView
            *v_panel;
        int selectGroup;
    } _selectLevelGroupPanel;
    
    struct{
        UIImage 
            *img_showFrame,
            *img_logo_go,
            *img_logo_lock,
            *img_logo_pass,
            *img_logo_star,
            *img_logo_star_black,
            *img_circle;
        NSArray 
            *ary_number_star_group_get,
            *ary_number_star_group_total;
        UIView 
            *v_panel;
    } _selectLevelPanel;
    
    UIImage 
        *_img_counter_number,
        *_img_lock;
    CGSize 
        _size_counter_number,
        _size_show_counter_number;

    std::map<unsigned short, int> _charIndexMap;
}
+(NSArray*) allocNumberArrayWithCount:(int) count
                               offset:(int) offset
                                image:(UIImage*) image
                           sourceSize:(CGSize) sourceSize
                           numberSize:(CGSize) numberSize
                             position:(CGPoint) position
                            container:(UIView*) view;
+(void) setNumberFast:(NSArray*) ary
               number:(NSString*) number
         charIndexMap:(map<unsigned short, int>) charIndexMap;
@end
@protocol IPausePanel <NSObject>
-(void) clickStart;
-(void) clickNext;
@end
@interface TestSheepGame : TestSheepPage<IPausePanel, ISheepModelCallback, ISheepViewCallback>
{
    id<ISheepApp> _app;
    UIImage 
        *_img_start_game_logo, 
        *_img_start_game_btn,
        *_img_passGamePanel_btn_next,
        *_img_passGamePanel_btn_back,
        *_img_passGamePanel_btn_restart,
    
        *_img_passPanel_showFrame,
        *_img_passPanel_logo_perfect,
        *_img_passPanel_logo_notbad,
        *_img_passPanel_logo_great,
        *_img_passPanel_logo_good,
        *_img_passPanel_logo_timeout,
        *_img_passPanel_logo_failed,
    
        *_img_passPanel_btn_next,
        *_img_passPanel_btn_next_bg,
        *_img_passPanel_btn_back,
        *_img_passPanel_btn_back_bg,
        *_img_passPanel_btn_again,
        *_img_passPanel_btn_again_bg,
        *_img_passPanel_anim_sheep,
    
        *_img_pausePanel_again_bg,
        *_img_pausePanel_back_bg,
        *_img_pausePanel_resume_bg,
        *_img_pausePanel_btn_again,
        *_img_pausePanel_btn_back,
        *_img_pausePanel_btn_resume,
        *_img_pausePanel_showFrame,
    
        *_img_btn_pause,
        *_img_btn_again,
        *_img_btn_hint,
    
        *_img_counter_number,
    
        *_img_logo_star,
        *_img_logo_star_black,
    
        *_img_tutorialPanel_showFrame,
        **_imgs_tutorialPanel_img,
        *_img_tutorialPanel_btn_next,
        *_img_tutorialPanel_btn_prev,
        *_img_tutorialPanel_btn_resume;
    
    int _tutorialPanel_imgs_length;
    int _tutorialPanel_imgs_id;
    
    UIView 
        *_pausePanel, 
        *_startGamePanel, 
        *_passGamePanel,
        *_tutorialPanel,
        *_mask;
    NSArray 
        *_ary_number_usetime,
        *_ary_number_tutorial_index,
        *_ary_number_tutorial_total;
    std::map<unsigned short, int> _charIndexMap;
}
@end
@interface TestSheepHelpPage : TestSheepPage
@end
@interface TestSheepStorePage : TestSheepPage
{
    struct{
        UIView *view;
    } _itemMenu;
}
@end




@interface ImageNumberView : UIView
@end
