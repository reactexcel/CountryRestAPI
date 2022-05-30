import { all, fork } from "redux-saga/effects";
import countrySaga from "./countrySaga";
import countrycodeSaga from "./countrycodeSaga";

export function* rootSaga() {
  yield all([fork(countrySaga), fork(countrycodeSaga)]);
}
