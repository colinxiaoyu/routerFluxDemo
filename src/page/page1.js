/**
 * Created by puxiang on 2018/2/24.
 */
import React from 'react';
import {View, Text,StyleSheet,TouchableOpacity,TextInput,Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ActionPage1 from '../store/action_page1';
import Toast from '@remobile/react-native-toast';


class Page1 extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={()=>{
            // Actions.page2();
            Actions.reset('main');
          }}>
          <Text>Page1</Text>


        </TouchableOpacity>

        <TextInput
          style={styles.textInput}
          value={this.props.ReducerPage1.text}
          onChangeText={(text)=>{
            const {changeText} = this.props.ActionPage1;
            changeText(text);
          }}
        />
        <Button
          onPress={()=>this.onBtnPress()}
          title="显示"
          color="#841584"/>
      </View>
    )
  }

  onBtnPress=()=>{
    Toast.showLongCenter(this.props.ReducerPage1.text);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  textInput:{
    height:30,
    width:200,
    backgroundColor:'red',
  }
});

const mapStateToProps = (state)=>
  ({
    ReducerPage1: state.ReducerPage1
  });

const mapActionCreators = (dispatch)=>({
  ActionPage1: bindActionCreators(ActionPage1, dispatch),
});


export default connect(mapStateToProps, mapActionCreators)(Page1);