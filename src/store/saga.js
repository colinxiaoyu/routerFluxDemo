import * as types from './actionTypes'
import {put, takeEvery, fork, all, take} from 'redux-saga/effects'
import {getPeople, getOnePerson}from './api'

function* fetchData(action) {
  try {
    const data = yield getPeople();
    yield put({type: types.FETCHING_DATA_SUCCESS, data});
  } catch (e) {
    yield put({type: types.FETCHING_DATA_FAILURE});
  }
}

function* fetchData1() {
  try {
    const data = yield getOnePerson();
    yield put({type: types.FETCHING_PERSON_SUCCESS, data1:data});
  } catch (e) {
    yield put({type: types.FETCHING_PERSON_FAILURE});
  }
}

export function* watchfetchData() {
  while (true) {
    yield take(types.FETCHING_DATA);
    yield fork(fetchData);
  }
}

export function* watchfetchData1() {
  while (true) {
    yield take(types.FETCHING_DATA1);
    yield fork(fetchData1);
  }
}

function* dataSaga() {
  yield [fork(watchfetchData), fork(watchfetchData1)];
}

// fork(takeEvery(types.FETCHING_DATA1, fetchData1)),

export default dataSaga;
