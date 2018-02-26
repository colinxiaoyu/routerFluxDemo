/**
 * Created by puxiang on 2018/2/24.
 */
import React from 'react';
import {Provider} from 'react-redux';
import Root from './root';
import store from './store/index';


export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    )
  }
}