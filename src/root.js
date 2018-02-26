/**
 * Created by puxiang on 2018/2/24.
 */
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Loading from './loading/loading';
import Page1 from './page/page1';
import Page2 from './page/page2';
import Page3 from './page/page3';


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

const getSceneStyle = () => ({
  backgroundColor: '#F5FCFF',
  shadowOpacity: 1,
  shadowRadius: 3,
});

const prefix = Platform.OS === 'android' ? 'my://my/' : 'my://';

const Root = () => {
  return (
    <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle} uriPrefix={prefix}>
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

        </Modal>
      </Overlay>
    </Router>)
};

export default Root;