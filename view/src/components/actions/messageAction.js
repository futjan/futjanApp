import * as Type from "./types";
import axios from "axios";
import { logoutUser } from "./authAction";

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
