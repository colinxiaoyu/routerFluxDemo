import * as types from './actionTypes'
import {put, takeEvery} from 'redux-saga/effects'
import getPeople from './api'

function* fetchData(action) {
  try {
    const data = yield getPeople();
    yield put({type: types.FETCHING_DATA_SUCCESS, data});
  } catch (e) {
    yield put({type: types.FETCHING_DATA_FAILURE});
  }
}

function* dataSaga() {
  yield takeEvery(types.FETCHING_DATA, fetchData)
}

export default dataSaga;
