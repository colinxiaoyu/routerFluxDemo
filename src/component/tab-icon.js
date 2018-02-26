import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, Image
} from 'react-native';

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};

const TabIcon = (props) => {
  if (__DEV__) {
    console.log(props);
  }
  return (
    <View style={{flex:1,marginTop:2}}>
      <Text style={{color: props.focused ? 'red' : 'black'}}>
        {props.title}
      </Text>
      <Image source={props.focused ? props.imageCol : props.image}/>
    </View>)
};

TabIcon.propTypes = propTypes;

export default TabIcon;
