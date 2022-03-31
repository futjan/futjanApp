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

// @route                   POST /api/v1/presets
// @desc                    create preset
// @access                  Private
export const savePreset = (preset) => async (dispatch) => {

  try {
    const res = await axios.post("/api/v1/presets", preset);

    if (res) {
      dispatch({
        type: Type.GET_USER_PRESET,
        payload: res.data.preset,
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

// @route                   GET /api/v1/presets
// @desc                    get preset
// @access                  Private
export const getPreset = () => async (dispatch) => {
  console.log("GET PRESET")
  try {
    const res = await axios.get("/api/v1/presets");

    if (res) {
      dispatch({
        type: Type.GET_USER_PRESET,
        payload: res.data.preset,
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
