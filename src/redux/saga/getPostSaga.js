import { put } from "redux-saga/effects";
import { API_ALL_POSTS } from "redux/apiType";
import { actionType } from "redux/actionType";
import apiCall from "redux/apiCall";
import { takeLatest } from "redux-saga/effects";

// ---- Login Watcher ----
export function* watchAllPostSaga() {
  yield takeLatest(actionType.FETCH_ALL_POST_METHOD, postSaga);
}

// ---- Saga ----
function* postSaga(action) {
  try {
    let url = {
      type: API_ALL_POSTS,
      payload: action.payload,
      apiType: "GET",
    };
    const res = yield apiCall(url);
    yield put({ type: actionType.FETCH_ALL_POST_SUCCESS, payload: res });
  } catch (error) {
    yield put({ type: actionType.FETCH_ALL_POST_ERROR, payload: error });
  }
}
