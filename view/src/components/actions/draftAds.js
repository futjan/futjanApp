import * as Types from "./types";

// create draft ads into localStorage
export const createDraft = (obj) => (dispatch) => {
  if (localStorage.getItem("drafts")) {
    let drafts = JSON.parse(localStorage.getItem("drafts"));
    if (drafts.filter((draft) => draft.draft_id === obj.draft_id).length > 0) {
      drafts = drafts.map((draft) =>
        draft.draft_id === obj.draft_id ? obj : draft
      );
      localStorage.setItem("drafts", JSON.stringify(drafts));
    } else {
      drafts.push({ ...obj });
      localStorage.setItem("drafts", JSON.stringify(drafts));
    }
    dispatch({
      type: Types.GET_DRAFTS,
      payload: drafts,
    });
  } else {
    const drafts = [{ ...obj }];
    localStorage.setItem("drafts", JSON.stringify(drafts));
    dispatch({
      type: Types.GET_DRAFTS,
      payload: drafts,
    });
  }
};
// get draft ads from localStorage

export const getDrafts = () => (dispatch) => {
  if (localStorage.getItem("drafts")) {
    const draft = JSON.parse(localStorage.getItem("drafts"));
    dispatch({
      type: Types.GET_DRAFTS,
      payload: draft,
    });
  } else {
    dispatch({
      type: Types.GET_DRAFTS,
      payload: [],
    });
  }
};

// get draft ad from localStorage
export const getDraft = (id) => (dispatch) => {
  if (localStorage.getItem("drafts")) {
    let drafts = JSON.parse(localStorage.getItem("drafts"));
    if (drafts.filter((draft) => draft.draft_id === id).length > 0) {
      const draft = drafts.filter((draft) => draft.draft_id === id);
      dispatch({
        type: Types.GET_DRAFT,
        payload: draft[0],
      });
    }
  }
};
// delete draft ads from localStorage
export const deleteDraft = (id) => (dispatch) => {
  if (localStorage.getItem("drafts")) {
    let drafts = JSON.parse(localStorage.getItem("drafts"));
    drafts = drafts.filter((draft) => draft.draft_id !== id);
    localStorage.setItem("drafts", JSON.stringify(drafts));
    dispatch({
      type: Types.GET_DRAFTS,
      payload: drafts,
    });
  }
};
