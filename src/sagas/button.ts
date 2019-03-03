import { take, all, put, call } from 'redux-saga/effects'
import countAPI from '../api/count';

// take here and call other function
export function* increment() {
  yield take("INCREMENT")
  try {
    const res = yield call([countAPI, "get"])
    console.log(res)
    yield put(successIncrement())
  } catch (error) {
    yield put(failIncrement())
  }
}

const SUCCESS_INCREMENT = "SUCCESS_INCREMENT"
const FAIL_INCREMENT = "FAIL_INCREMENT"

export const successIncrement = () => ({
  type: "SUCCESS_INCREMENT" as typeof SUCCESS_INCREMENT
})

export const failIncrement = () => ({
  type: "FAIL_INCREMENT" as typeof FAIL_INCREMENT
})

export default function* rootSaga() {
  yield all([
    increment(),
  ])
}
