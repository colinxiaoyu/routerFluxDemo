/**
 * Created by puxiang on 2018/2/24.
 */
import * as types from './actionTypes';

export function changeText(text) {
  return {
    type: types.CHANGETEXT,
    text: text,
  }
}