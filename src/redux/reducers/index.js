import { combineReducers } from "redux";
import postReducer from "./postReducer";

const RootReducer = combineReducers({ postReducer });

export default RootReducer;
