/**
 * Created by puxiang on 2018/2/24.
 */
import React from 'react';
import {View, Text,StyleSheet,ActivityIndicator,AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';



export default class Loading extends React.Component {

  componentDidMount(){
    AsyncStorage.multiGet(['isFirst','isRecruiter']).then(res=>{
      window.isFirst = res[0][1];
      window.isRecruiter = res[1][1];
      if(window.isFirst!=='NO'){
        AsyncStorage.setItem('isFirst','NO');
        Actions.reset('pages')
      }else {
        Actions.reset('main')
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator
          animating = {true}
          color='red'
          size='large'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  }
});