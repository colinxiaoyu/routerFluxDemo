/**
 * Created by puxiang on 2018/2/24.
 */
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Loading from './loading/loading';
import Page1 from './page/page1';
import Page2 from './page/page2';
import Page3 from './page/page3';

import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import TabCenter from './tabs/tab-center';
import TabIcon from './component/tab-icon';
import store from './store/index';


import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

// 个人从源码中觉得，wrapBy是一个添加中间件的修饰函数，
// 参照 NavigationStore 中386行，仅仅是对导航器的按钮做修饰
// const wrapBy = params=> {
//   const stores = store;
//   return (state, action) => {
//     return stores(state, action);
//
//   }
// };

const getSceneStyle = () => ({
  backgroundColor: '#F5FCFF',
  shadowOpacity: 1,
  shadowRadius: 3,
});

const prefix = Platform.OS === 'android' ? 'my://my/' : 'my://';

const Root = () => {
  return (
    <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
      <Overlay key="overlay">
        <Modal key="modal">
          <Lightbox key="loading">
            <Scene key="loadingScene" hideNavBar component={Loading}/>
          </Lightbox>

          <Lightbox key="pages">
            <Stack hideNavBar key="root">
              <Scene key="page1" component={Page1} title="page1" initial/>
              <Scene key="page3" component={Page3} title="page3"/>
            </Stack>
          </Lightbox>

          <Lightbox key="main">
            <Scene key="page2" component={Page2} title="page2"/>
          </Lightbox>

          <Tabs key="tabbar" swipeEnabled showLabel={false} tabBarStyle={styles.tabBarStyle} lazy={true}
                 tabBarPosition="bottom">
            <Scene key="tab1" hideNavBar component={Tab1} title="Tab1" image={require('./img/chat.png')}
                   imageCol={require('./img/chat_color.png')} icon={TabIcon} onRight={() => alert('Right button')}
                   type={1}
                   rightTitle="Right"/>
            <Scene key="tabcenter" component={TabCenter} title="Tab2" image={require('./img/explore.png')}
                   imageCol={require('./img/explore_color.png')} icon={TabIcon}
                   type={2}
                  />
            <Scene key="tab2" component={Tab2} title="Tab2" image={require('./img/explore.png')} type={1}
                   imageCol={require('./img/explore_color.png')} icon={TabIcon} onRight={() => alert('Right button')}
                   rightTitle="Right"/>

          </Tabs>
        </Modal>
      </Overlay>
    </Router>)
};

export default Root;