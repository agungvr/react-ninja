import { takeLatest } from 'redux-saga/effects';
import { LOGIN_SUCCESS } from "../../actions/login";

export function* loginSuccessSaga(actions) {
  yield
}

export default function* loginSaga() {
  yield takeLatest(LOGIN_SUCCESS, loginSuccessSaga);
}
