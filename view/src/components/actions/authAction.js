import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setNotification, clearNotification } from "./notificationAction";

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
  dispatch(setLoading());
  axios
    .post("/api/v1/users/signup", userData)
    .then((res) => {
      dispatch(setNotification("User successfully registered!", "success"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
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
// @route   POST /api/v1/users/signup-with-google
// @desc    create new user with google sign up
// @access  Public
export const registerUserWithGoogle = (userData, clearState) => (dispatch) => {
  dispatch(setLoading());
  axios
    .post("/api/v1/users/signup-with-google", userData)
    .then((res) => {
      dispatch(setNotification("User successfully registered!", "success"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
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
      dispatch(setNotification("User login!", "success"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
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

// @route                   POST /api/v1/users/login-with-google
// @desc                    login with google
// @access                  Public

export const loginWithGoogle = (data, pushToIndex) => async (dispatch) => {
  try {
    const res = await axios.post("/api/v1/users/login-with-google", data);

    if (res) {
      console.log(res);
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
      dispatch(setNotification("User login!", "success"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
    }
  } catch (err) {
    if (err) {
      dispatch(clearLoading());
      console.log(err);
      // if (err.response.data.message === "jwt expired") {
      //   dispatch(logoutUser());
      // }

      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    }
  }
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
  dispatch(setNotification("User logout!", "success"));

  setTimeout(() => {
    dispatch(clearNotification());
  }, 5000);
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
