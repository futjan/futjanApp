import * as Types from "./types";
import axios from "axios";
import { setNotification, clearNotification } from "./notificationAction";
import { logoutUser } from "./authAction";
import { createDraft, deleteDraft } from "./draftAds";

// @route                   GET /api/v1/jobseekers
// @desc                    get all job
// @access                  Public
export const getJobSeekers =
  (
    page,
    limit,
    sort,
    title,
    salaryType,
    category,
    subCategory,
    country,
    county,
    city
  ) =>
  async (dispatch) => {
    dispatch(setLoading());
    dispatch({ type: Types.CLEAR_ERRORS });
    try {
      const res = await axios.get(
        `/api/v1/jobseekers?title=${title}&category=${category}&subCategory=${subCategory}&salaryType=${salaryType}&country=${country}&county=${county}&city=${city}&page=${page}&limit=${limit}&sort=${sort}&fields=currency,name,title,rate,salaryType,images,skills,city`
        // `/api/v1/jobseekers`
      );
      if (res.data) {
        dispatch({
          type: Types.GET_JOB_SEEKERS,
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
// @route                   GET /api/v1/jobseekers/admin-only
// @desc                    get all job
// @access                  admin only
export const getAdminJobSeekers = (page, limit) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.get(
      `/api/v1/jobseekers/admin-only?&page=${page}&limit=${limit}&fields=name,title,active,photo,skills`
      // `/api/v1/jobseekers`
    );
    if (res.data) {
      dispatch({
        type: Types.GET_ADMIN_JOBSEEKERS,
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

// @route                   PATCH /api/v1/jobseekers/activate
// @desc                    activate jobseeker
// @access                  Private
export const activateJobSeeker = (data) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.patch(`/api/v1/jobseekers/activate`, data);
    if (res.data) {
      dispatch({
        type: Types.ACTIVATE_JOBSEEKER,
        payload: res.data.jobSeeker,
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
// @route                   GET /api/v1/jobseekers/current-user
// @desc                    get all private jobseeker
// @access                  Public
export const getPrivateJobSeeker =
  (page, limit, sort, salaryType, category, subCategory, country) =>
  async (dispatch) => {
    dispatch(setLoading());
    dispatch({ type: Types.CLEAR_ERRORS });
    try {
      const res = await axios.get(
        // `/api/v1/jobseekers/current-user?category=${category}&subCategory=${subCategory}&salaryType=${salaryType}&country=${country}&page=${page}&limit=${limit}&sort=${sort}&fields=name,title,rate,salaryType,photo,skills,country`
        `/api/v1/jobseekers/current-user?fields=name,title, ad_id,active,images,category,subCategory&limit=${limit}&page=${page}`
        // `/api/v1/jobseekers`
      );
      if (res.data) {
        dispatch({
          type: Types.GET_PRIVATE_JOB_SEEKERS,
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
export const createJobSeeker =
  (job, clearState, setSuccessModal) => async (dispatch) => {
    let formDate = new FormData();
    job.files.forEach((file) => formDate.append("photo", file));

    formDate.append("job", JSON.stringify(job));
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
      const res = await axios.post("/api/v1/jobseekers", formDate, config);
      // const res = await axios.post("/api/v1/jobseekers", job);
      if (res) {
        dispatch({
          type: Types.CREATE_JOB_SEEKER,
          payload: res.data.jobSeeker,
        });
        clearState();
        setSuccessModal(
          res.data && res.data.jobSeeker && res.data.jobSeeker.title
        );
        dispatch(setNotification("Ad successfully posted!", "success"));

        setTimeout(() => {
          dispatch(clearNotification());
        }, 5000);
        dispatch(deleteDraft(job.draft_id));
        dispatch({
          type: Types.GET_DRAFT,
          payload: {},
        });
      }
    } catch (err) {
      dispatch(clearLoading());
      if (err) {
        dispatch(createDraft(job));
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

// @route                   GET /api/v1/jobseekers/:id
// @desc                    get surplus by id
// @access                  Public
export const getJobSeekerById = (id) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.get(`/api/v1/jobseekers/${id}`);
    if (res) {
      dispatch({
        type: Types.GET_JOB_SEEKER,
        payload: res.data.jobSeeker,
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

// @route                   PATCH /api/v1/jobseekers/:id
// @desc                    update job by id
// @access                  Private
export const updateJobSeeker = (job, clearState) => async (dispatch) => {
  let formDate = new FormData();

  job.files.forEach((file) => formDate.append("photo", file));

  formDate.append("job", JSON.stringify(job));

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
      `/api/v1/jobseekers/${job.id}`,
      formDate,
      config
    );
    // const res = await axios.patch(`/api/v1/jobseekers/${job.id}`, job);

    dispatch(clearLoading());

    if (res) {
      dispatch({
        type: Types.UPDATE_JOB_SEEKER,
        payload: res.data.jobSeeker,
      });
      clearState();
      //   dispatch({
      //     type: Types.GET_SURPLUS,
      //     payload: {},
      //   });
      dispatch(setNotification("Ad successfully updated!", "success"));

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
// @route                   PATCH /ap1/v1/jobseekers/views
// @desc                    update views
// @access                  Public
export const updateViews = (data) => async (dispatch) => {
  try {
    await axios.patch("/api/v1/jobseekers/views", data);
  } catch (err) {
    if (err) {
      dispatch({
        type: Types.GET_ERRORS,
        payload: err.response.data,
      });
    }
  }
};

// @route                   DELETE /api/v1/jobseekers/:id
// @desc                    delete job by id
// @access                  Private
export const deleteJobSeeker = (id) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.delete(`/api/v1/jobseekers/${id}`);
    if (res) {
      dispatch({
        type: Types.DELETE_JOB_SEEKER,
        payload: res.data.jobSeeker,
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

export const deleteImageFromCloud = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.patch("/api/v1/jobseekers/delete-file", data);
    if (res) {
      dispatch({
        type: Types.UPDATE_JOB_SEEKER,
        payload: res.data.jobSeeker,
      });
      dispatch(setNotification("file successfully Deleted!", "success"));

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
// export const createReview = (review, clearState) => async (dispatch) => {
//   try {
//     dispatch({
//       type: Types.CLEAR_ERRORS,
//     });
//     const res = await axios.post("/api/v1/review", review);

//     if (res) {
//       dispatch({
//         type: Types.GET_SURPLUS,
//         payload: res.data.surplus,
//       });
//       clearState();
//     }
//   } catch (err) {
//     dispatch({
//       type: Types.GET_ERRORS,
//       payload: err.response.data,
//     });
//   }
// };

const setLoading = () => {
  return {
    type: Types.SET_JOB_SEEKER_LOADING,
  };
};

const clearLoading = () => {
  return {
    type: Types.CLEAR_JOB_SEEKER_LOADING,
  };
};
