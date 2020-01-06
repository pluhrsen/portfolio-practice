import { combineReducers } from "redux";
import franchiseReducer from "./franchises";

const appReducer = combineReducers({ franchises: franchiseReducer });

export default appReducer;
