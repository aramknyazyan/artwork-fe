import { getArtworkEnum } from "../action-type";

export const artworkReducer = function (
  state = { data: [], error: null, loading: false },
  action
) {
  switch (action.type) {
    case getArtworkEnum.IS_LOADING_ARTWORK:
      return { ...state, loading: true };
    case getArtworkEnum.GET_ARTWORK_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case getArtworkEnum.GET_ARTWORK_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return { ...state };
  }
};
