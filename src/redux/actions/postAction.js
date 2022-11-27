import { actionType } from "redux/actionType";

export function fetchPost(data) {
  return {
    type: actionType.FETCH_ALL_POST_METHOD,
    payload: data,
  };
}
