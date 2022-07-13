import { getArtworkByIdEnum } from "../action-type";

export const artworkByIdReducer = function (
  state = { data: [], error: null, loading: false },
  action
) {
  switch (action.type) {
    case getArtworkByIdEnum.IS_LOADING_ARTWORK_BY_ID:
      return { ...state, loading: true };
    case getArtworkByIdEnum.GET_ARTWORK_BY_ID_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case getArtworkByIdEnum.GET_ARTWORK_BY_ID_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return { ...state };
  }
};
