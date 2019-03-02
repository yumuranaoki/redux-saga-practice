import { takeEvery, all, put, call } from 'redux-saga/effects'
import countAPI from '../api/count';

// take here and call other function
export function* buttonClicked() {
  yield takeEvery("INCREMENT", sayHello)
}

// called from other function and dispatch action
export function* sayHello() {
  // yield call(delay, 1000)
  const res = yield call([countAPI, "get"])
  console.log('saga')
  console.log(res)
  yield put({ type: "SUCCESS_INCREMENT"})  
}

export default function* rootSaga() {
  yield all([
    buttonClicked(),
    sayHello(),
  ])
}
