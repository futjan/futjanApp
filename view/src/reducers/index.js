import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import surplusReducer from "./surplusReducer";
import jobReducer from "./jobReducer";
import jobSeekerReducer from "./jobSeekerReducer";
import { combineReducers } from "redux";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  surplus: surplusReducer,
  job: jobReducer,
  jobSeeker: jobSeekerReducer,
});
