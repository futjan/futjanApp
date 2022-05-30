import * as Type from "../components/actions/types";

const initialState = {
  reports: [],
  report: {},
  loading: false,
  totalDocs: 0,
  result: 0,
};
export default function reportReducer(state = initialState, action) {
  switch (action.type) {
    case Type.SET_REPORT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Type.GET_REPORTS:
      return {
        ...state,
        reports: action.payload.reports,
        totalDocs: action.payload.totalDocs,
        result: action.payload.result,
        loading: false,
      };
    case Type.GET_REPORT:
      return {
        ...state,
        report: action.payload,
        loading: false,
      };
    case Type.CREATE_REPORT:
      return {
        ...state,
        reports: [...state.reports, action.payload],
        loading: false,
      };
    default:
      return state;
  }
}
