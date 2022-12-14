import * as Types from "./types";
import { setNotification, clearNotification } from "./notificationAction";
import { createDraft, deleteDraft } from "./draftAds";
import axios from "axios";

import { logoutUser } from "./authAction";
// @route                   GET /api/v1/surplus
// @desc                    get all surpluses
// @access                  Public
export const getSurpluses =
  (
    page,
    limit,
    sort,
    title,
    businessType,
    category,
    keyword,
    country,
    county,
    city
  ) =>
  async (dispatch) => {
    dispatch(setLoading());
    dispatch({ type: Types.CLEAR_ERRORS });
    try {
      const res = await axios.get(
        `/api/v1/surplus?title=${title}&businessType=${businessType}&category=${category}&keyword=${keyword}&county=${county}&country=${country}&city=${city}&page=${page}&limit=${limit}&sort=${sort},-promoteType&fields=title,category,city,images,originalPrice,offeredPrice,discount,promoteType,currency`
      );
      if (res.data) {
        dispatch({
          type: Types.GET_SURPLUSES,
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

// @route                   GET /api/v1/surplus/admin-only
// @desc                    get all surplus
// access                   only admin
export const getAdminSurplus = (page, limit) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.get(
      `/api/v1/surplus/admin-only?page=${page}&limit=${limit}&fields=title,active,images,category,deleted`
    );
    if (res.data) {
      dispatch({
        type: Types.GET_ADMIN_SURPLUSES,
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

// @route                   GET /api/v1/surplus/current-user-surplus
// @desc                    get current user surplus
// @access                  Private

export const getSurplusesPrivate = (page, limit) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({ type: Types.CLEAR_ERRORS });
  try {
    const res = await axios.get(
      `/api/v1/surplus/current-user-surplus?fields=title,category,businessType,ad_id,originalPrice,offeredPrice,discount,active,currency,images&page=${page}&limit=${limit}`
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
      if (err.response.data.message === "jwt expired") {
        dispatch(logoutUser());
      }
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
export const createSurplus =
  (surplus, clearState, setSuccess, saveDrafts) => async (dispatch) => {
    let formDate = new FormData();
    surplus.files.forEach((file) => formDate.append("photo", file));

    formDate.append("surplus", JSON.stringify(surplus));
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    dispatch(setLoading());
    dispatch({
      type: Types.CLEAR_ERRORS,
    });
    try {
      const res = await axios.post("/api/v1/surplus", formDate, config);
      if (res) {
        dispatch({
          type: Types.CREATE_SURPLUS,
          payload: res.data.surplus,
        });
        clearState();
        setSuccess(
          res.data.surplus && res.data.surplus.title,
          res.data.surplus && res.data.surplus.ad_id
        );
        dispatch(setNotification("Ad successfully posted!", "success"));

        setTimeout(() => {
          dispatch(clearNotification());
        }, 5000);
        dispatch(deleteDraft(surplus.draft_id));
        dispatch({
          type: Types.GET_DRAFT,
          payload: {},
        });
      }
    } catch (err) {
      dispatch(clearLoading());
      if (err) {
        dispatch(createDraft(surplus));
        dispatch(setNotification(err.response.data.message, "error"));

        setTimeout(() => {
          dispatch(clearNotification());
        }, 5000);

        if (err.response.data.message === "jwt expired") {
          dispatch(logoutUser());
        }

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
  let formDate = new FormData();
  data.files.forEach((file) => formDate.append("photo", file));

  formDate.append("surplus", JSON.stringify(data.surplus));

  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  dispatch(setLoading());
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.patch(
      `/api/v1/surplus/${data.id}`,
      formDate,
      config
    );

    dispatch(clearLoading());

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
      dispatch(setNotification("Ad successfully update!", "success"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
    }
  } catch (err) {
    dispatch(clearLoading());
    if (err) {
      dispatch(setNotification(err.response.data.message, "error"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);

      if (err.response.data.message === "jwt expired") {
        dispatch(logoutUser());
      }

      dispatch({
        type: Types.GET_ERRORS,
        payload: err.response.data,
      });
    }
  }
};

// @route                   PATCH /ap1/v1/surplus/views
// @desc                    update views
// @access                  Public
export const updateViews = (data) => async (dispatch) => {
  try {
    await axios.patch("/api/v1/surplus/views", data);
  } catch (err) {
    if (err) {
      dispatch({
        type: Types.GET_ERRORS,
        payload: err.response.data,
      });
    }
  }
};

export const deleteImageFromCloud = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.patch("/api/v1/surplus/delete-file", data);
    if (res) {
      dispatch({
        type: Types.GET_SURPLUS,
        payload: res.data.surplus,
      });
      dispatch(setNotification("Image successfully Deleted!", "success"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
    }
  } catch (err) {
    dispatch(clearLoading());
    if (err) {
      dispatch(setNotification(err.response.data.message, "error"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);

      if (err.response.data.message === "jwt expired") {
        dispatch(logoutUser());
      }

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

  try {
    const res = await axios.patch("/api/v1/surplus/activate", data);
    if (res) {
      dispatch({
        type: Types.ACTIVATE_SURPLUS,
        payload: res.data.surplus,
      });
      dispatch(setNotification("Ad activation completed!", "success"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
    }
  } catch (err) {
    dispatch(clearLoading());
    if (err) {
      dispatch(setNotification(err.response.data.message, "error"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);

      if (err.response.data.message === "jwt expired") {
        dispatch(logoutUser());
      }

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
      dispatch(setNotification("Ad successfully deleted!", "success"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
    }
  } catch (err) {
    dispatch(clearLoading());
    if (err) {
      dispatch(setNotification(err.response.data.message, "error"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);

      if (err.response.data.message === "jwt expired") {
        dispatch(logoutUser());
      }

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
      dispatch(setNotification("Review successfullty added to ad!", "success"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
    }
  } catch (err) {
    dispatch(setNotification(err.response.data.message, "error"));

    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);

    if (err.response.data.message === "jwt expired") {
      dispatch(logoutUser());
    }

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
