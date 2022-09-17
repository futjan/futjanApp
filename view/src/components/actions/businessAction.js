import * as Types from "./types";
import { setNotification, clearNotification } from "./notificationAction";
import { createDraft, deleteDraft } from "./draftAds";
import axios from "axios";

import { logoutUser } from "./authAction";
// @route                   GET /api/v1/business
// @desc                    get all buesinesses
// @access                  Public
export const getBusinesses =
  (page, limit, sort, title, businessType, country, county, city) =>
  async (dispatch) => {
    dispatch(setLoading());
    dispatch({ type: Types.CLEAR_ERRORS });
    try {
      const res = await axios.get(
        `/api/v1/business?title=${title}&businessType=${businessType}&county=${county}&country=${country}&city=${city}&page=${page}&limit=${limit}&sort=${sort},-promoteType&fields=title,businessType,city,images,offeredPrice,discount,promoteType,currency`
      );
      if (res.data) {
        dispatch({
          type: Types.GET_BUSINESSES,
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

// @route                   GET /api/v1/business/admin-only
// @desc                    get all business
// access                   only admin
export const getAdminBusinesses = (page, limit) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.get(
      `/api/v1/business/admin-only?page=${page}&limit=${limit}&fields=title,active,images,businessType,deleted`
    );
    if (res.data) {
      dispatch({
        type: Types.GET_ADMIN_BUSINESSES,
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

// @route                   GET /api/v1/business/current-user-business
// @desc                    get current user business
// @access                  Private

export const getBusinessesPrivate = (page, limit) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({ type: Types.CLEAR_ERRORS });
  try {
    const res = await axios.get(
      `/api/v1/business/current-user-business?fields=title,category,businessType,ad_id,offeredPrice,active,currency,images&page=${page}&limit=${limit}`
    );
    if (res.data) {
      dispatch({
        type: Types.GET_CURRENT_USER_BUSINESSES,
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
// @route                   POST /api/v1/business
// @desc                    create new business
// @access                  Private
export const createBusiness =
  (business, clearState, setSuccess, saveDrafts) => async (dispatch) => {
    let formDate = new FormData();
    business.files.forEach((file) => formDate.append("photo", file));

    formDate.append("business", JSON.stringify(business));
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
      const res = await axios.post("/api/v1/business", formDate, config);
      if (res) {
        dispatch({
          type: Types.CREATE_BUSINESS,
          payload: res.data.business,
        });
        clearState();
        setSuccess(
          res.data.business && res.data.business.title,
          res.data.business && res.data.business.ad_id
        );
        dispatch(setNotification("Ad successfully posted!", "success"));

        setTimeout(() => {
          dispatch(clearNotification());
        }, 5000);
        dispatch(deleteDraft(business.draft_id));
        dispatch({
          type: Types.GET_DRAFT,
          payload: {},
        });
      }
    } catch (err) {
      dispatch(clearLoading());
      if (err) {
        dispatch(createDraft(business));
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

// @route                   GET /api/v1/business/:id
// @desc                    get business by id
// @access                  Private
export const getBusinessById = (id) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.get(`/api/v1/business/${id}`);
    if (res) {
      dispatch({
        type: Types.GET_BUSINESS,
        payload: res.data.business,
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

// @route                   PATCH /api/v1/business
// @desc                    update business by id
// @access                  Private
export const updateBusiness = (data, clearState) => async (dispatch) => {
  let formDate = new FormData();
  data.files.forEach((file) => formDate.append("photo", file));

  formDate.append("business", JSON.stringify(data.business));

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
      `/api/v1/business/${data.id}`,
      formDate,
      config
    );

    dispatch(clearLoading());

    if (res) {
      dispatch({
        type: Types.UPDATE_BUSINESS,
        payload: res.data.business,
      });
      clearState();
      dispatch({
        type: Types.GET_BUSINESS,
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

// @route                   PATCH /ap1/v1/business/views
// @desc                    update views
// @access                  Public
export const updateViews = (data) => async (dispatch) => {
  try {
    await axios.patch("/api/v1/business/views", data);
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
    const res = await axios.patch("/api/v1/business/delete-file", data);
    if (res) {
      dispatch({
        type: Types.GET_BUSINESS,
        payload: res.data.business,
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
// @route                   PATCH /api/v1/business/activate
// @desc                    activate business
// @access                  Private
export const businessActivate = (data) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const res = await axios.patch("/api/v1/business/activate", data);
    if (res) {
      dispatch({
        type: Types.ACTIVATE_BUSINESS,
        payload: res.data.business,
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

// @route                   DELETE /api/v1/business/:id
// @desc                    delete business by id
// @access                  Private
export const deleteBusiness = (id) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.delete(`/api/v1/business/${id}`);
    if (res) {
      dispatch({
        type: Types.DELETE_BUSINESS,
        payload: res.data.business,
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
        type: Types.GET_BUSINESS,
        payload: res.data.business,
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
    type: Types.SET_BUSINESS_LOADING,
  };
};

const clearLoading = () => {
  return {
    type: Types.CLEAR_BUSINESS_LOADING,
  };
};
