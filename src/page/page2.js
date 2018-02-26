/**
 * Created by puxiang on 2018/2/24.
 */
import React from 'react';
import {View, Text,StyleSheet,TouchableOpacity,Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import store from '../store/index';
import {changeText} from '../store/action_page1';

export default class Page2 extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={()=>{
            Actions.reset('pages');
          }}>
          <Text>Page2</Text>
        </TouchableOpacity>
        <Button
          onPress={()=>this.onBtnPress()}
          title="page2改变page1的值，就是不关联组件间通信"
          color="#841584"/>
      </View>
    )
  }

  onBtnPress=()=>{
    store.dispatch(changeText('你看，我就这样改变了'));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  }
});