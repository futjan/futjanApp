import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import { combineReducers } from "redux";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
});
