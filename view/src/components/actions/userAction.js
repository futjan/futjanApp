import * as Type from "./types";
import axios from "axios";

// @route                   PATCH /api/v1/users/current-user
// @desc                    update current or logged in user
// @access                  Private
export const updateCurrentUser = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const res = await axios.patch("/api/v1/users/current-user", data);

    if (res) {
      dispatch({
        type: Type.UPDATE_CURRENT_USER,
        payload: res.data.data.user,
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

const setLoading = () => {
  return {
    type: Type.SET_USER_LOADING,
  };
};

const clearLoading = () => {
  return {
    type: Type.CLEAR_USER_LOADING,
  };
};
