import * as Types from "./types";
import axios from "axios";

// @route                   GET /api/v1/surplus
// @desc                    get all surpluses
// @access                  Public
export const getSurpluses =
  (page, limit, sort, businessType, category, keyword, city, setCategory) =>
  async (dispatch) => {
    dispatch(setLoading());
    dispatch({ type: Types.CLEAR_ERRORS });
    try {
      const res = await axios.get(
        `/api/v1/surplus?businessType=${businessType}&category=${category}&keyword=${keyword}&city=${city}&page=${page}&limit=${limit}&sort=${sort}&fields=name,originalPrice,offeredPrice,discount`
      );
      if (res.data) {
        dispatch({
          type: Types.GET_SURPLUSES,
          payload: res.data,
        });
        if (category && category.length > 0) {
          setCategory(category);
        }
        if (category.length === 0) {
          setCategory("");
        }
      }
    } catch (err) {
      dispatch(clearLoading());
      if (err) {
        dispatch({
          type: Types.GET_ERRORS,
          payload: err.response.data,
        });
      }
    }
  };

// @route                   GET /api/v1/surplus/current-user-surplus
// @desc                    get current user surplus
// @access                  Private

export const getSurplusesPrivate = () => async (dispatch) => {
  dispatch(setLoading());
  dispatch({ type: Types.CLEAR_ERRORS });
  try {
    const res = await axios.get(
      `/api/v1/surplus/current-user-surplus?fields=name,category,businessType,originalPrice,offeredPrice,discount,active`
    );
    if (res.data) {
      dispatch({
        type: Types.GET_CURRENT_USER_SURPLUSES,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch(clearLoading());
    if (err) {
      dispatch({
        type: Types.GET_ERRORS,
        payload: err.response.data,
      });
    }
  }
};
// @route                   POST /api/v1/surplus
// @desc                    create new surplus
// @access                  Private
export const createSurplus = (surplus, clearState) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.post("/api/v1/surplus", surplus);
    if (res) {
      dispatch({
        type: Types.CREATE_SURPLUS,
        payload: res.data.surplus,
      });
      clearState();
    }
  } catch (err) {
    dispatch(clearLoading());
    if (err) {
      dispatch({
        type: Types.GET_ERRORS,
        payload: err.response.data,
      });
    }
  }
};

// @route                   GET /api/v1/surplus/:id
// @desc                    get surplus by id
// @access                  Private
export const getSurplusById = (id) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.get(`/api/v1/surplus/${id}`);
    if (res) {
      dispatch({
        type: Types.GET_SURPLUS,
        payload: res.data.surplus,
      });
    }
  } catch (err) {
    dispatch(clearLoading());
    if (err) {
      dispatch({
        type: Types.GET_ERRORS,
        payload: err.response.data,
      });
    }
  }
};

// @route                   PATCH /api/v1/surplus
// @desc                    update surplus by id
// @access                  Private
export const updateSurplus = (data, clearState) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.patch("/api/v1/surplus", data);
    if (res) {
      dispatch({
        type: Types.UPDATE_SURPLUS,
        payload: res.data.surplus,
      });
      clearState();
      dispatch({
        type: Types.GET_SURPLUS,
        payload: {},
      });
    }
  } catch (err) {
    dispatch(clearLoading());
    if (err) {
      dispatch({
        type: Types.GET_ERRORS,
        payload: err.response.data,
      });
    }
  }
};
// @route                   PATCH /api/v1/surplus/activate
// @desc                    activate surplus
// @access                  Private
export const surplusActivate = (data) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.patch("/api/v1/surplus/activate", data);
    if (res) {
      dispatch({
        type: Types.ACTIVATE_SURPLUS,
        payload: res.data.surplus,
      });
    }
  } catch (err) {
    dispatch(clearLoading());
    if (err) {
      dispatch({
        type: Types.GET_ERRORS,
        payload: err.response.data,
      });
    }
  }
};

// @route                   DELETE /api/v1/surplus/:id
// @desc                    delete surplus by id
// @access                  Private
export const deleteSurplus = (id) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.delete(`/api/v1/surplus/${id}`);
    if (res) {
      dispatch({
        type: Types.DELETE_SURPLUS,
        payload: res.data.surplus,
      });
    }
  } catch (err) {
    dispatch(clearLoading());
    if (err) {
      dispatch({
        type: Types.GET_ERRORS,
        payload: err.response.data,
      });
    }
  }
};

// @route                   GET /api/v1/surplus/keyword
// @desc                    get surplus keyword
// @access                  public
// export const getSurplusNames = () => async (dispatch) => {
export const getSurplusKeywords = () => async (dispatch) => {
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.get("/api/v1/surplus/keyword");

    if (res) {
      dispatch({
        type: Types.GET_SURPLUS_KEYWORDS,
        payload: res.data.keywords,
      });
    }
  } catch (err) {
    dispatch({
      type: Types.GET_ERRORS,
      payload: err.response.data,
    });
  }
};

// @route                   CREATE /api/v1/review
// @desc                    create review
// @access                  Private
export const createReview = (review, clearState) => async (dispatch) => {
  try {
    dispatch({
      type: Types.CLEAR_ERRORS,
    });
    const res = await axios.post("/api/v1/review", review);

    if (res) {
      dispatch({
        type: Types.GET_SURPLUS,
        payload: res.data.surplus,
      });
      clearState();
    }
  } catch (err) {
    dispatch({
      type: Types.GET_ERRORS,
      payload: err.response.data,
    });
  }
};

const setLoading = () => {
  return {
    type: Types.SET_SURPLUS_LOADING,
  };
};

const clearLoading = () => {
  return {
    type: Types.CLEAR_SURPLUS_LOADING,
  };
};
