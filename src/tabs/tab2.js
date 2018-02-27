/**
 * Created by puxiang on 2018/2/26.
 */
import React from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native'

import {connect} from 'react-redux';
import * as ActionSaga1 from '../store/action_saga1';
import {bindActionCreators} from 'redux';


class Tab2 extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Redux Saga Examples</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            const {fetchData} = this.props.ActionSaga1;
            fetchData();
          }}>
          <Text style={styles.buttonText}>Load Data</Text>
        </TouchableHighlight>
        <View style={styles.mainContent}>
          {
            this.props.ReducerSaga1.isFetching && <Text>Loading</Text>
          }
          {
            this.props.ReducerSaga1.data.length ? (
              this.props.ReducerSaga1.data.map((person, i) => {
                return (<View key={i}>
                  <Text>Name: {person.name}</Text>
                  <Text>Age: {person.age}</Text>
                </View>)
              })
            ) : null
          }
        </View>
      </View>
    )
  }
}


const mapStateToProps = (state) =>
  ({
    ReducerSaga1: state.ReducerSaga1
  });

const mapActionCreators = (dispatch) => ({
  ActionSaga1: bindActionCreators(ActionSaga1, dispatch),
});


export default connect(mapStateToProps, mapActionCreators)(Tab2);

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  },
  mainContent: {
    margin: 10,
  }
});