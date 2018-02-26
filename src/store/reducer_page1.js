/**
 * Created by puxiang on 2018/2/24.
 */
import * as types from './actionTypes';

const initState = {
  text: '',
};

export default function ReducerPage1(state = initState, action) {
  switch (action.type) {
    case types.CHANGETEXT:
      return Object.assign({}, state, {
        text: action.text,
      });
    default:
      return state;
      break;
  }
}
