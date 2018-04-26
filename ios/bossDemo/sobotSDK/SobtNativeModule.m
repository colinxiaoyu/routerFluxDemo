//
//  SobtNativeModule.m
//  bossDemo
//
//  Created by Colin on 2018/4/23.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "SobtNativeModule.h"
#import <SobotKit/SobotKit.h>
#import "AppDelegate.h"
#import <SobotKit/ZCUIChatController.h>
//#import "ViewController.h"
#define SCREEN_WIDTH [UIScreen mainScreen].bounds.size.width
#define SCREEN_HEIGHT [UIScreen mainScreen].bounds.size.height

@interface SobtNativeModule ()<ZCUIChatDelagete>


@end
@implementation SobtNativeModule

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(startSobot)
{
  NSLog(@"RN传入原生界面的数据为");
  
  ZCLibInitInfo *initInfo = [ZCLibInitInfo new];
  initInfo.appKey = @"d05b795971a04c129dcc5d44b3cdd946";
  initInfo.userId = @"请输入用户的ID";
  ZCKitInfo *uiInfo=[ZCKitInfo new];
  [[ZCLibClient getZCLibClient] setLibInitInfo:initInfo];
  [ZCSobot startZCChatVC:uiInfo
                    with:nil
                loaction:CGRectMake(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)
                  target:nil
               pageBlock:^(ZCChatController *object,ZCPageBlockType type){

               } messageLinkClick:nil];

//  dispatch_async(dispatch_get_main_queue(), ^{
//    //    ViewController *view = [[ViewController alloc]init];
////     [((UINavigationController *)[UIApplication sharedApplication].keyWindow.rootViewController) pushViewController:view animated:YES] ;
//  });
}

@end
