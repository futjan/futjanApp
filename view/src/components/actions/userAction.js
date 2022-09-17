import * as Type from "./types";
import axios from "axios";
import { setNotification, clearNotification } from "./notificationAction";
import { logoutUser } from "./authAction";

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
// @route                   GET /api/v1/user/all-users
// @desc                    get all users
// @access                  admin-only
export const getAllUsers = (page, limit) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.get(
      `/api/v1/users/all-users?page=${page}&limit=${limit}&fields=name,email,blocked`
    );
    if (res) {
      dispatch({
        type: Type.GET_USERS,
        payload: res.data,
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
// @route                   GET /api/v1/user/blocked/:id
// @desc                    blocked user
// @access                  admin-only
export const blockedUser = (id, data) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.patch(`/api/v1/users/blocked/${id}`, data);
    if (res) {
      dispatch({
        type: Type.BLOCKED_USER,
        payload: res.data.user,
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

// @route                   GET /api/v1/user/deleted/:id
// @desc                    deleted user
// @access                  admin-only
export const deletedUser = (id, data) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.patch(`/api/v1/users/deleted/${id}`, data);
    if (res) {
      dispatch({
        type: Type.DELETED_USER,
        payload: res.data.user,
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
// @route                   GET /api/v1/user/:id
// @desc                     user by id
// @access                  admin-only
export const getUser = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.get(`/api/v1/users/${id}`);
    if (res) {
      dispatch({
        type: Type.GET_USER,
        payload: res.data.user,
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
      dispatch(setNotification("Alert saved!", "success"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
    }
  } catch (err) {
    if (err.response.data.message === "jwt expired") {
      dispatch(logoutUser());
    }
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

// @route                   POST /api/v1/users/subscribe
// @desc                    subscribe
// @access                  Public
export const subscribeNewsLetter =
  (email, subscribeFunc) => async (dispatch) => {
    try {
      subscribeFunc(true);
      const res = await axios.post("/api/v1/users/subscribe", email);

      if (res) {
        subscribeFunc(false);
        dispatch(setNotification(res.data.message, "success"));

        setTimeout(() => {
          dispatch(clearNotification());
        }, 5000);
      }
    } catch (err) {
      if (err.response.data.message === "jwt expired") {
        dispatch(logoutUser());
      }
      subscribeFunc(false);
      dispatch(setNotification(err.response.data.message, "error"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
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
