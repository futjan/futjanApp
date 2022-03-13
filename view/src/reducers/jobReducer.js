import * as Types from "../components/actions/types";
const initialState = {
  jobs: [],
  job: {},
  loading: false,
  //   totalDocs: 0,
  //   result: 0,
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
        jobs: action.payload,
        // totalDocs: action.payload.totalDocs,
        // result: action.payload.result,
        loading: false,
      };
    // case Types.GET_CURRENT_USER_JOBS:
    //   return {
    //     ...state,
    //     privateSurpluses: action.payload.surpluses,
    //     totalDocs: action.payload.totalDocs,
    //     result: action.payload.result,
    //     loading: false,
    //   };
    case Types.GET_JOB:
      return {
        ...state,
        job: action.payload,
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
        loading: false,
      };

    default:
      return state;
  }
}