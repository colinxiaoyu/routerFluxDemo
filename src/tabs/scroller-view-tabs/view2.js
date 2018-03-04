/**
 * Created by puxiang on 2018/3/3.
 */
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class View2 extends React.Component{

  render(){
    return(
      <View style = {styles.container}>
        <Text style={styles.text}>view2</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  text:{
    color:'red'
  }
});