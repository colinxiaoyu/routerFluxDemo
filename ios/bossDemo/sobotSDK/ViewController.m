//
//  ViewController.m
//  SobotKitFrameworkTest
//
//  Created by zhangxy on 15/11/21.
//  Copyright © 2015年 zhichi. All rights reserved.
//

#import "ViewController.h"

#import <SobotKit/SobotKit.h>
#import "AppDelegate.h"
#import <SobotKit/ZCUIChatController.h>

#define SCREEN_WIDTH [UIScreen mainScreen].bounds.size.width
#define SCREEN_HEIGHT [UIScreen mainScreen].bounds.size.height

@interface ViewController ()<ZCUIChatDelagete>


@end

@implementation ViewController

- (void)viewWillAppear:(BOOL)animated{
  AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
  [app.nav setNavigationBarHidden:NO animated:animated];
  [super viewWillAppear:animated];
}

- (void)viewWillDisappear:(BOOL)animated{
  AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
  [app.nav setNavigationBarHidden:YES animated:animated];
  [super viewWillDisappear:animated];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    self.title = @"智齿SDK_iOS";
  //  初始化配置信息
  ZCLibInitInfo *initInfo = [ZCLibInitInfo new];
  initInfo.appKey = @"d05b795971a04c129dcc5d44b3cdd946";
  initInfo.userId = @"请输入用户的ID";
  //自定义用户参数
  //    [self customUserInformationWith:initInfo];
  
  ZCKitInfo *uiInfo=[ZCKitInfo new];
  // 聊天气泡中的文字
  //    uiInfo.chatFont  = [UIFont systemFontOfSize:22];
  
  // 聊天的背景颜色
  //    uiInfo.backgroundColor = [UIColor redColor];
  
  
  // 之定义商品和留言页面的相关UI
  //    [self customerGoodAndLeavePageWithParameter:uiInfo];
  
  // 未读消息
  //    [self customUnReadNumber:uiInfo];
  
  // ZCLibInitInfo 和 ZCKitInfo 的更多属性配置请在当前类中查看或者查看说明文档
  
  [[ZCLibClient getZCLibClient] setLibInitInfo:initInfo];
  
  
  // 智齿SDK初始化启动事例
  [ZCSobot startZCChatVC:uiInfo
                    with:self
                loaction:self.view.frame
                  target:nil
               pageBlock:^(ZCChatController *object,ZCPageBlockType type){
                 
               } messageLinkClick:nil];
  
  
}


- (void)openLeaveMsgClick:(NSString *)tipMsg{
    NSLog(@"跳转到自定义的留言页面");
}












-(IBAction)buttonCloseSession:(id)sender{
    [ZCLibClient closeAndoutZCServer:YES];
    // 将是否显示转人工按钮的设置回复默认值
    [ZCLibClient getZCLibClient].isShowTurnBtn = NO;
}

// 离线消息
- (void)offLineAction:(UIButton *)btn{
    [[ZCLibClient getZCLibClient] setAutoNotification:YES];

    [ZCLibClient getZCLibClient].receivedBlock = ^(id obj,int unRead,NSDictionary *object){
        NSLog(@"当前消息数：%d \n %@",unRead,obj);
    };
}

// 关闭推送
//-(void)btnClosePush:(UIButton *) btn{
//    [ZCLibClient closeAndoutZCServer:YES];
//}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


//// 自定义用户信息参数
//- (void)customUserInformationWith:(ZCLibInitInfo*)initInfo{
//    initInfo.userId         = _userIdTF.text;
//    //    initInfo.customInfo = @{@"标题1":@"自定义1",@"内容1":@"我是一个自定义字段。",@"标题2":@"自定义字段2",@"内容2":@"我是一个自定义字段，我是一个自定义字段，我是一个自定义字段，我是一个自定义字段。",@"标题3":@"自定义字段字段3",@"内容3":@"<a href=\"www.baidu.com\" target=\"_blank\">www.baidu.com</a>",@"标题4":@"自定义4",@"内容4":@"我是一个自定义字段 https://www.sobot.com/chat/pc/index.html?sysNum=9379837c87d2475dadd953940f0c3bc8&partnerId=112"};
//
//    NSUserDefaults *user  = [NSUserDefaults standardUserDefaults];
//    initInfo.email        = [user valueForKey:@"email"];
//    initInfo.avatarUrl    = [user valueForKey:@"avatarUrl"];
//    initInfo.sourceURL    = [user valueForKey:@"sourceURL"];
//    initInfo.sourceTitle  = [user valueForKey:@"sourceTitle"];
//    initInfo.serviceMode  = _type;
//
//    // 以下字段为方便测试使用，上线打包时注掉
//    initInfo.phone       = [user valueForKey:@"phone"];
//    initInfo.nickName    = [user valueForKey:@"nickName"];
//    // 微信，微博，用户的真实昵称，生日，备注性别 QQ号
//    // 生日字段用户传入的格式，例：20170323，如果不是这个格式，初始化接口会给过滤掉
//
//    initInfo.qqNumber = [user valueForKey:@"qqNumber"];
//    initInfo.userSex = [user valueForKey:@"userSex"];
//    initInfo.realName = [user valueForKey:@"useName"];
//    initInfo.weiBo = [user valueForKey:@"weiBo"];
//    initInfo.weChat = [user valueForKey:@"weChat"];
//    initInfo.userBirthday = [user valueForKey:@"userBirthday"];
//    initInfo.userRemark = [user valueForKey:@"userRemark"];
//
//
//    //    NSDictionary * dict = [NSDictionary dictionaryWithObjectsAndKeys:initInfo.phone,@"tel",useName,@"realname",initInfo.email,@"email",initInfo.nickName,@"uname" ,weChat,@"weixin",weibo,@"weibo",sex,@"sex",userBirthday,@"birthday",userRemark,@"remark",initInfo.avatarUrl,@"face",qq,@"qq",initInfo.sourceURL,@"visitUrl",initInfo.sourceTitle,@"visitTitle",@"自定义1",@"标题1",@"<a href=\"www.baidu.com\" target=\"_blank\">www.baidu.com</a>",@"内容3",nil];
//    //    initInfo.customInfo = dict;
//    initInfo.customInfo = @{
//
//                            @"标题1":@"自定义1",
//                            @"内容1":@"我是一个自定义字段。",
//                            @"标题2":@"自定义字段2",
//                            @"内容2":@"我是一个自定义字段，我是一个自定义字段，我是一个自定义字段，我是一个自定义字段。",
//                            @"标题3":@"自定义字段字段3",
//                            @"内容3":@"<a href=\"www.baidu.com\" target=\"_blank\">www.baidu.com</a>",
//                            @"标题4":@"自定义4",
//                            @"内容4":@"我是一个自定义字段 https://www.sobot.com/chat/pc/index.html?sysNum=9379837c87d2475dadd953940f0c3bc8&partnerId=112"
//                            };
//
//}


// 自定义参数 商品信息相关
//- (void)customerGoodAndLeavePageWithParameter:(ZCKitInfo *)uiInfo{

    // 商品信息自定义
//    if (_isShowGoodsSwitch.on) {
//        ZCProductInfo *productInfo = [ZCProductInfo new];
//        productInfo.thumbUrl = _goodsImgTF.text;
//        productInfo.title = _goodsTitleTF.text;
//        productInfo.desc = _goodsSummaryTF.text;
//        productInfo.label = _goodTagTF.text;
//        productInfo.link = _goodsSendTF.text;
//
//        [[NSUserDefaults standardUserDefaults] setObject:productInfo.thumbUrl forKey:@"goods_IMG"];
//        [[NSUserDefaults standardUserDefaults] setObject:productInfo.title forKey:@"goods_Title"];
//        [[NSUserDefaults standardUserDefaults] setObject:productInfo.desc forKey:@"goods_SENDMGS"];
//        [[NSUserDefaults standardUserDefaults] setObject:productInfo.label forKey:@"glabel_Text"];
//        [[NSUserDefaults standardUserDefaults] setObject:productInfo.link forKey:@"gPageUrl_Text"];
//        uiInfo.productInfo = productInfo;
//    }
//
//    // 设置电话号和昵称（留言界面的显示）
//    uiInfo.isAddNickName = _isAddNickSwitch.on;
//    uiInfo.isShowNickName = _isShowNickSwitch.on;
    
//}


// 未读消息数
//- (void)customUnReadNumber:(ZCKitInfo *)uiInfo{
//    // 未读消息
//    [ZCLibClient getZCLibClient].receivedBlock = ^(id obj,int unRead,NSDictionary *object){
//        NSLog(@"当前消息数：%d \n %@",unRead,obj);
//    };
//
//}





@end
