import { actionType } from "redux/actionType";

const initialState = {
  loading: false,
  error: "",
  res: "",
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.FETCH_ALL_POST_METHOD:
      return { ...state, loading: true, error: "" };

    case actionType.FETCH_ALL_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        res: action.payload,
        error: "",
      };

    case actionType.FETCH_ALL_POST_ERROR:
      let terror = action.payload;
      return {
        ...state,
        loading: false,
        error: terror,
      };

    case actionType.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return initialState;
  }
}
