import * as Type from "./types";
import axios from "axios";
import { logoutUser } from "./authAction";
import { clearNotification, setNotification } from "./notificationAction";

// @route                               POST /api/v1/messages
// @desc                                create message
// @access                              private

export const createMessage = (data, setNewMessage) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/v1/messages", data);

    if (res) {
      setNewMessage("");
      dispatch({
        type: Type.CREATE_MESSAGE,
        payload: res.data.message,
      });
    }
  } catch (err) {
    dispatch(clearLoading());
    if (err.response.data.message === "jwt expired") {
      dispatch(logoutUser());
    }
    dispatch({
      type: Type.GET_ERRORS,
      payload: err.response.data,
    });
  }
};
// @route                               GET /api/v1/messages
// @desc                                get unseen message count
// @access                              private
export const getUnseenMessaageCount = (isNotify) => async (dispatch) => {
  try {
    const count = await axios.get("/api/v1/messages");
    if (count) {
      dispatch({
        type: Type.GET_UNSEEN_MESSAGE_COUNT,
        payload: count.data.count,
      });
      if (count.data?.count > 0 && isNotify === true) {
        dispatch(
          setNotification(`You receive ${count.data.count} messages`, "success")
        );
        setTimeout(() => {
          dispatch(clearNotification());
        }, 5000);
      }
    }
  } catch (err) {
    dispatch(clearLoading());
    if (err.response.data.message === "jwt expired") {
      dispatch(logoutUser());
    }
    dispatch({
      type: Type.GET_ERRORS,
      payload: err.response.data,
    });
  }
};

// @route                               GET /api/v1/messages/:conversationId
// @desc                                get messages
// @access                              private
export const getMessages = (conversationId) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.get(`/api/v1/messages/${conversationId}`);
    if (res) {
      dispatch({
        type: Type.GET_MESSAGES,
        payload: res.data.messages,
      });
      dispatch(markMessageRead(conversationId));
    }
  } catch (err) {
    dispatch(clearLoading());
    if (err.response.data.message === "jwt expired") {
      dispatch(logoutUser());
    }
    dispatch({
      type: Type.GET_ERRORS,
      payload: err.response.data,
    });
  }
};
// @route                               GET /api/v1/messages/:conversationId
// @desc                                set status of messages to seen
// @access                              private

export const markMessageRead = (conversationId) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.patch(`/api/v1/messages/${conversationId}`);
    if (res) {
      dispatch({
        type: Type.GET_MESSAGES,
        payload: res.data.messages,
      });
      dispatch(getUnseenMessaageCount(false));
    }
  } catch (err) {
    dispatch(clearLoading());
    if (err.response.data.message === "jwt expired") {
      dispatch(logoutUser());
    }
    dispatch({
      type: Type.GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const clearMessages = () => (dispatch) => {
  dispatch({
    type: Type.GET_MESSAGES,
    payload: [],
  });
};
// set loading
const setLoading = () => {
  return {
    type: Type.SET_MESSAGE_LOADING,
  };
};
// Clear loading
const clearLoading = () => {
  return {
    type: Type.CLEAR_MESSAGE_LOADING,
  };
};
