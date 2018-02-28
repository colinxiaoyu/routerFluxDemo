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
    yield put({type: types.FETCHING_PERSON_SUCCESS, data1: data});
  } catch (e) {
    yield put({type: types.FETCHING_PERSON_FAILURE});
  }
}

// export function* watchfetchData() {
//   while (true) {
//     yield take(types.FETCHING_DATA);
//     yield fork(fetchData);
//   }
// }
//
// export function* watchfetchData1() {
//   while (true) {
//     yield take(types.FETCHING_DATA1);
//     yield fork(fetchData1);
//   }
// }
//
// function* dataSaga() {
//   yield [fork(watchfetchData), fork(watchfetchData1)];
// }

//另外一种写法，takeEvery是高阶写法，其实内部就是上面的写法
export function* watchfetchData() {
  yield takeEvery(types.FETCHING_DATA, fetchData);
}

export function* watchfetchData1() {
  yield takeEvery(types.FETCHING_DATA1, fetchData1);
}

//加不加all，表达的是一个意思，切记不能将数组分开，不然会产生阻塞现象，
// 第二个action在第一个没有完成前不会触发
// 另外fork是无阻塞的意思
function* dataSaga() {
  yield all([fork(watchfetchData), fork(watchfetchData1)]);
}


export default dataSaga;
