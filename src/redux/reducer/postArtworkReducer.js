import { postArtworkEnum } from "../action-type";

export const postArtworkReducer = function (
  state = { data: [], error: null, loading: false },
  action
) {
  switch (action.type) {
    case postArtworkEnum.IS_LOADING_POST_ARTWORK:
      return { ...state, loading: true };
    case postArtworkEnum.POST_ARTWORK_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case postArtworkEnum.POST_ARTWORK_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return { ...state };
  }
};
