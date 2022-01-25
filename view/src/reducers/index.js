import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import surplusReducer from "./surplusReducer";
import { combineReducers } from "redux";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  surplus: surplusReducer,
});
