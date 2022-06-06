import * as Type from "./types";
import axios from "axios";

// @route                               POST /api/v1/conversations
// @desc                                create conversation
// @access                              private

export const createConversation = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/v1/conversations", data);

    if (res) {
      dispatch({
        type: Type.CREATE_CONVERSATION,
        payload: res.data.conversation,
      });
    }
  } catch (err) {
    dispatch(clearLoading());
    dispatch({
      type: Type.GET_ERRORS,
      payload: err.response.data,
    });
  }
};
// @route                               GET /api/v1/conversations
// @desc                                get conversations
// @access                              private

export const getConversations = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.get(`/api/v1/conversations`);

    if (res) {
      dispatch({
        type: Type.GET_CONVERSATIONS,
        payload: res.data.conversations,
      });
    }
  } catch (err) {
    dispatch(clearLoading());
    dispatch({
      type: Type.GET_ERRORS,
      payload: err.response.data,
    });
  }
};

// set loading
const setLoading = () => {
  return {
    type: Type.SET_CONVERSATION_LOADING,
  };
};
// Clear loading
const clearLoading = () => {
  return {
    type: Type.CLEAR_CONVERSATION_LOADING,
  };
};
