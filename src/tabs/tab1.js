/**
 * Created by puxiang on 2018/2/26.
 */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import VIew1 from './scroller-view-tabs/view1';
import View2 from './scroller-view-tabs/view2';


export default class Tab1 extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Tab1</Text>
        <ScrollableTabView
          renderTabBar={() => <DefaultTabBar />}>
          <VIew1 tabLabel='view1'/>
          <View2 tabLabel='view2'/>

        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  }
});