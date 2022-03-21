import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  SET_USER_LOADING,
  CLEAR_USER_LOADING,
  CLEAR_ERRORS,
  GET_CURRENT_USER,
} from "./types";

// @route   POST /api/v1/users/signup
// @desc    create new user
// @access  Public
export const registerUser = (userData, clearState) => (dispatch) => {
  // const formData = new FormData();
  // formData.append("fileUpload", file);
  // formData.append("user", JSON.stringify(userData));
  // const config = {
  //   headers: {
  //     "content-type": "multipart/form-data",
  //   },
  // };
  dispatch(setLoading());
  axios
    .post("/api/v1/users/signup", userData)
    .then((res) => {
      clearState();
      dispatch(clearLoading());
      dispatch({
        type: CLEAR_ERRORS,
      });
    })
    .catch((err) => {
      if (err.response.data.message === "jwt expired") {
        dispatch(logoutUser());
      }
      dispatch({
        type: CLEAR_USER_LOADING,
      });
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// @route   POST /api/v1/users/login
// @desc    Login in to get token
// @access  Public
export const loginUser = (userData, pushToIndex, clearState) => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
  dispatch(setLoading());
  axios
    .post("/api/v1/users/login", userData)
    .then((res) => {
      clearState();

      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);

      // Set current user
      dispatch(setCurrentUser(decoded));
      dispatch(clearLoading());
      pushToIndex();
    })
    .catch((err) => {
      dispatch(clearLoading());
      if (err.response.data.message === "jwt expired") {
        dispatch(logoutUser());
      }

      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });

      // }
    });
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

// @route   POST /api/v1/users/forgetpassword
// @desc    forget password
// @access  Public
export const forgetPassword = (data, clearState) => (dispatch) => {
  dispatch(setLoading());

  axios
    .post("/api/v1/users/forgetPassword", data)
    .then((res) => {
      clearState();
      dispatch(clearLoading());
      dispatch({
        type: CLEAR_ERRORS,
      });
    })
    .catch((err) => {
      dispatch(clearLoading());
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// @route   POST /api/v1/users/resetPassword/:token
// @desc    reset password
// @access  Public
export const resetPassword = (userData, token, clearState) => (dispatch) => {
  dispatch(setLoading());

  axios
    .post(`/api/v1/users/resetPassword/${token}`, userData)
    .then((res) => {
      clearState();
      dispatch(clearLoading());
      dispatch({
        type: CLEAR_ERRORS,
      });
    })
    .catch((err) => {
      dispatch(clearLoading());
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// @route         GET /api/v1/users/current-user
// @desc          get current or logged in user
// @access        Private
export const getCurrentUser = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.get("/api/v1/users/current-user");

    if (res) {
      dispatch({
        type: GET_CURRENT_USER,
        payload: res.data.data.user,
      });
    }
  } catch (err) {
    dispatch(clearLoading());
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

// @route         POST /api/v1/users/updatePassword
// @desc          change current or logged in user password
// @access        Private
export const changePassword = (data, clearState) => async (dispatch) => {
  console.log("API HIT");
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/v1/users/updatePassword", data);

    if (res) {
      dispatch(logoutUser());
      clearState();
    }
  } catch (err) {
    dispatch(clearLoading());
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

const setLoading = () => {
  return {
    type: SET_USER_LOADING,
  };
};

const clearLoading = () => {
  return {
    type: CLEAR_USER_LOADING,
  };
};
