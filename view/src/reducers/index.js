import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import surplusReducer from "./surplusReducer";
import jobReducer from "./jobReducer";
import jobSeekerReducer from "./jobSeekerReducer";
import reportReducer from "./reportReducer";
import messageReducer from "./messageReducer";
import conversationReducer from "./conversationReducer";
import notificationReducer from "./notificationReducer";
import userAdsReducer from "./userAdsReducer";
import favouriteReducer from "./favouriteReducer";
import currencyReducer from "./currencyReducer";
import draftAdReducer from "./draftAdsReducer";
import businessReducer from "./businessReducer";
import contactReducer from "./contactReducer";
import { combineReducers } from "redux";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  surplus: surplusReducer,
  business: businessReducer,
  job: jobReducer,
  jobSeeker: jobSeekerReducer,
  report: reportReducer,
  message: messageReducer,
  conversation: conversationReducer,
  notification: notificationReducer,
  userads: userAdsReducer,
  favourite: favouriteReducer,
  currency: currencyReducer,
  draft: draftAdReducer,
  contact: contactReducer,
});
