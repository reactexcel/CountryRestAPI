import { all, fork } from "redux-saga/effects";

import countrySaga from "./countrySaga";

export function* rootSaga() {
  yield all([fork(countrySaga)]);
}
