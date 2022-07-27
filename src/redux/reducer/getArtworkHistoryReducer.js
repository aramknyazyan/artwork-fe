import { getArtworkHistoryEnum } from "../action-type";

export const artworkHistoryReducer = function (
  state = { data: [], error: null, loading: false },
  action
) {
  switch (action.type) {
    case getArtworkHistoryEnum.IS_LOADING_ARTWORK_HISTORY:
      return { ...state, loading: true };
    case getArtworkHistoryEnum.GET_ARTWORK_HISTORY_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case getArtworkHistoryEnum.GET_ARTWORK_HISTORY_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return { ...state };
  }
};
