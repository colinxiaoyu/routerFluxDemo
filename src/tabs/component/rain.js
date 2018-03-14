import React from 'react';
import {Dimensions, ImageBackground, TouchableHighlight, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import erlich from './assets/erlich.png';
import moneyFront from './assets/money-front.png';
import moneyBack from './assets/money-back.png';

const MONEY_DIMENSIONS = {width: 49, height: 26};
const SCREEN_DIMENSIONS = Dimensions.get('window');
const WIGGLE_ROOM = 50;

const FlippingImage = ({back = false, delay, duration = 1000, source, style = {}}) => {
  return (
    <Animatable.Image
      animation={{
        from: {rotateX: back ? '0deg' : '180deg', rotate: !back ? '180deg' : '0deg'},
        to: {rotateX: back ? '360deg' : '-180deg', rotate: !back ? '180deg' : '0deg'},
      }}
      duration={duration}
      delay={delay}
      easing="linear"
      iterationCount="infinite"
      useNativeDriver
      source={source}
      style={{
        ...style,
        backfaceVisibility: 'hidden',
      }}
    />

  );
}


class Swinging extends React.Component {

  state = {
    hasClick: false,
  };

  static defaultProps = {
    rotation: 7,
    duration: 700
  };


  render() {
    const {swIndex, amplitude, rotation, delay, duration} = this.props;
    return (
      this.state.hasClick ?
        <Animatable.Image
          ref={(image) => this.image = image}
          anmation="zoomOut"
          useNativeDriver
          delay={50}
          resizeMode="stretch"
          style={{width: 100, height: 100}}
          source={require('./assets/fire.jpg')}/> :
        <TouchableHighlight
          onPress={() => {
            this.setState({
                hasClick: true,
              }, () => {
                if (this.image) {
                  this.image["zoomOut"](1000);
                }
              }
            );
            console.log('hasClick', this.state.hasClick + swIndex);
          }}
        >
          <Animatable.View
            animation={{
              0: {
                translateX: -amplitude,
                translateY: -amplitude * 0.8,
                rotate: `${rotation}deg`,
              },
              0.5: {
                translateX: 0,
                translateY: 0,
                rotate: '0deg',
              },
              1: {
                translateX: amplitude,
                translateY: -amplitude * 0.8,
                rotate: `${-rotation}deg`,
              },
            }}
            delay={delay}
            duration={duration}
            direction="alternate"
            easing="ease-in-out"
            iterationCount="infinite"
            useNativeDriver
          >
            <FlippingImage source={moneyFront} delay={delay}/>

            <FlippingImage
              source={moneyBack}
              delay={delay}
              back
              style={{position: 'absolute'}}
            />
          </Animatable.View>
        </TouchableHighlight>
    );
  }
}

const Falling = ({duration, delay, style, children}) => {

  return (
    <Animatable.View
      animation={{
        from: {translateY: -MONEY_DIMENSIONS.height - WIGGLE_ROOM},
        to: {translateY: SCREEN_DIMENSIONS.height + WIGGLE_ROOM},
      }}
      duration={duration}
      delay={delay}
      easing={t => Math.pow(t, 1.7)}
      iterationCount={2}
      useNativeDriver
      style={style}
      onAnimationEnd={state => endAnimatable(state)}
    >
      {children}
    </Animatable.View>
  );
};

const endAnimatable = (state) => {
  console.log(state)
};

const ErlichBachman = ({children}) => (
  <ImageBackground source={erlich} style={{flex: 1}}>
    {children}
  </ImageBackground>
);

const randomize = max => Math.random() * max;

const array = [];
const range = count => {

  for (let i = 0; i < count; i++) {
    array.push(i);
  }
  return array;
};

const MakeItRain = ({count = 15, duration = 3000}) => (
  <ErlichBachman>
    {range(count)
      .map(i => {
        return randomize(1000) //掉落时的延迟时间
      })
      .map((flipDelay, i) => {
        console.log('flipDelay:', flipDelay, 'i:', i);
        return (
          <Falling
            key={i}
            duration={duration}
            delay={i * (duration / count)}
            style={{
              position: 'absolute',
              paddingHorizontal: WIGGLE_ROOM,
              left: randomize(SCREEN_DIMENSIONS.width - MONEY_DIMENSIONS.width) - WIGGLE_ROOM,
            }}
          >
            <Swinging swIndex={i} amplitude={MONEY_DIMENSIONS.width / 5} delay={randomize(duration)}>


            </Swinging>

          </Falling>
        )
      })}
  </ErlichBachman>

);

export default MakeItRain;
