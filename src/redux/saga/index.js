import { all, takeLatest } from "redux-saga/effects";
import { watchAllPostSaga } from "./getPostSaga";

function* rootSaga() {
  yield all([watchAllPostSaga()]);
}

export default rootSaga;
