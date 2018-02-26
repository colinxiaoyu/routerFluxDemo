/**
 * Created by puxiang on 2018/2/26.
 */
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class Tab2 extends React.Component{

  render(){
    return(
      <View style={styles.container}>
        <Text>Tab2</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red'
  }
});