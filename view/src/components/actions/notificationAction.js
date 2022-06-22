import { SET_NOTIFICATION, CLEAR_NOTIFICATION } from "./types";

export const setNotification = (msg, type) => {
  return {
    type: SET_NOTIFICATION,
    payload: { msg, type },
  };
};

export const clearNotification = () => {
  return {
    type: CLEAR_NOTIFICATION,
  };
};
