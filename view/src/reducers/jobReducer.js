import * as Types from "../components/actions/types";
const initialState = {
  adminJobs: [],
  jobs: [],
  job: {},
  privateJobs: [],
  loading: false,
  totalDocs: 0,
  result: 0,
};

export default function JobReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_JOB_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Types.CLEAR_JOB_LOADING:
      return {
        ...state,
        loading: false,
      };
    case Types.CREATE_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
        loading: false,
      };
    case Types.GET_JOBS:
      return {
        ...state,
        jobs: action.payload.jobs,
        totalDocs: action.payload.totalDocs,
        result: action.payload.result,
        loading: false,
      };
    case Types.GET_ADMIN_JOBS:
      return {
        ...state,
        adminJobs: action.payload.jobs,
        totalDocs: action.payload.totalDocs,
        result: action.payload.result,
        loading: false,
      };
    case Types.GET_USER_JOBS:
      return {
        ...state,
        privateJobs: action.payload.jobs,
        totalDocs: action.payload.totalDocs,
        result: action.payload.result,
        loading: false,
      };
    case Types.GET_JOB:
      return {
        ...state,
        job: action.payload,
        loading: false,
      };
    case Types.ACTIVATE_JOB:
      return {
        ...state,
        adminJobs: state.adminJobs.map((job) =>
          job._id === action.payload._id ? action.payload : job
        ),
        job: action.payload,
        privateJobs: state.privateJobs.map((job) =>
          job._id === action.payload._id ? action.payload : job
        ),
        loading: false,
      };
    case Types.UPDATE_JOB:
      return {
        ...state,
        jobs: state.jobs.map((job) =>
          job._id === action.payload._id ? action.payload : job
        ),

        loading: false,
      };

    case Types.DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job._id !== action.payload._id),
        privateJobs: state.privateJobs.filter(
          (job) => job._id !== action.payload._id
        ),
        loading: false,
      };

    default:
      return state;
  }
}
