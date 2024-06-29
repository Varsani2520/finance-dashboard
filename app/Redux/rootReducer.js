import { combineReducers } from "redux";
import authReducer from "./Reducer/auth";

export const rootReducer = combineReducers({
  auth: authReducer,
  
});