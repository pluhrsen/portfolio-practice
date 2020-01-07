import { combineReducers } from "redux";
import franchiseReducer from "./franchises";
import singleFranchiseReducer from "./singleFranchise";

const appReducer = combineReducers({
  franchises: franchiseReducer,
  movies: singleFranchiseReducer
});

export default appReducer;
