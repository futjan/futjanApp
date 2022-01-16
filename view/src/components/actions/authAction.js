import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  SET_USER_LOADING,
  CLEAR_USER_LOADING,
  CLEAR_ERRORS,
} from "./types";

// @route   POST /api/v1/users/signup
// @desc    create new user
// @access  Public
export const registerUser = (userData, file, clearState) => (dispatch) => {
  const formData = new FormData();
  formData.append("fileUpload", file);
  formData.append("user", JSON.stringify(userData));
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  dispatch(setLoading());
  axios
    .post("/api/v1/users/signup", formData, config)
    .then((res) => {
      clearState();
      dispatch({
        type: CLEAR_USER_LOADING,
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
export const loginUser = (userData, history, clearState) => (dispatch) => {
  console.log(userData);
  dispatch({
    type: CLEAR_ERRORS,
  });
  dispatch(setLoading());
  axios
    .post("/api/v1/users/login", userData)
    .then((res) => {
      history.push("/");
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
    })
    .catch((err) => {
      dispatch(clearLoading());
      //   if (err.response.data.message === "jwt expired") {
      //     dispatch(logoutUser());
      //   }
      if (err && err.response) {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        });
      }
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
