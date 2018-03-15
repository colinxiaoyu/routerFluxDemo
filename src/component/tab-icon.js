import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, Image, StyleSheet
} from 'react-native';
import {Image as AnimateImg} from 'react-native-animatable';


const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.number,
};

const TabIcon = (props) => {
  if (__DEV__) {
    console.log(props);
  }
  if (props.type === 1) {
    return (
      <View style={{flex: 1, marginTop: 2}}>
        <Text style={{color: props.focused ? 'red' : 'black'}}>
          {props.title}
        </Text>
        <Image
          source={props.focused ? props.imageCol : props.image}
          />
      </View>)
  }
  else if (props.type === 2) {
    return (
      <View style={{flex: 1, marginTop: 2}}>
        <AnimateImg
          transition={['width', 'height', ]}
          style={props.focused ? styles.toggledOn : styles.toggle}
          source={props.focused ? props.imageCol : props.image}/>
      </View>)
  }
};

TabIcon.propTypes = propTypes;

export default TabIcon;

const styles = StyleSheet.create({
  toggle: {
    width: 20,
    height:20,
    backgroundColor: '#333',
    borderRadius: 3,
    padding: 5,
    alignSelf: 'center',
    margin: 10,
  },
  toggledOn: {
    width:40,
    height:40,
  },
})
