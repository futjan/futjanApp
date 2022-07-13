import * as Types from "./types";
import axios from "axios";
import { logoutUser } from "./authAction";
import { setNotification, clearNotification } from "./notificationAction";

// @route                               POST /api/v1/favourite
// @desc                                Create favourite
// @access                              Private

export const createFavourite = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/v1/favourite", data);
    if (res) {
      dispatch({
        type: Types.CREATE_FAVOURITE,
        payload: res.data.favourite,
      });
      dispatch(setNotification("Ad added to Favourite!", "success"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
    }
  } catch (err) {
    dispatch(setNotification(err.response.data.message, "error"));

    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);

    dispatch(clearLoading());
    if (err.response.data.message === "jwt expired") {
      dispatch(logoutUser());
    }
    dispatch({
      type: Types.GET_ERRORS,
      payload: err.response.data,
    });
  }
};

// @route                               GET /api/v1/favourite
// @desc                                get favourites
// @access                              Private
export const getFavourites = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/favourite");
    if (res) {
      dispatch({
        type: Types.GET_FAVOURITES,
        payload: res.data.favourites,
      });
    }
  } catch (err) {
    dispatch(setNotification(err.response.data.message, "error"));

    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);

    dispatch(clearLoading());
    if (err.response.data.message === "jwt expired") {
      dispatch(logoutUser());
    }
    dispatch({
      type: Types.GET_ERRORS,
      payload: err.response.data,
    });
  }
};
// @route                               DELETE /api/v1/favourite/:id
// @desc                                delete favourite
// @access                              Private
export const deleteFavourite = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.delete(`/api/v1/favourite/${id}`);
    if (res) {
      dispatch({
        type: Types.DELETE_FAVOURITE,
        payload: res.data.favourite,
      });
    }
  } catch (err) {
    dispatch(setNotification(err.response.data.message, "error"));

    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);

    dispatch(clearLoading());
    if (err.response.data.message === "jwt expired") {
      dispatch(logoutUser());
    }
    dispatch({
      type: Types.GET_ERRORS,
      payload: err.response.data,
    });
  }
};

// set loading
const setLoading = () => {
  return {
    type: Types.SET_FAVOURITE_LOADING,
  };
};
// set loading
const clearLoading = () => {
  return {
    type: Types.CLEAR_FAVOURITE_LOADING,
  };
};
