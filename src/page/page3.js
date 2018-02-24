/**
 * Created by puxiang on 2018/2/24.
 */
import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

export default class Page3 extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Page3</Text>
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