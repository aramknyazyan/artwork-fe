import { patchArtworkEnum } from "../action-type";

export const patchArtworkReducer = function (
  state = { data: [], error: null, loading: false },
  action
) {
  switch (action.type) {
    case patchArtworkEnum.IS_LOADING_PATCH_ARTWORK:
      return { ...state, loading: true };
    case patchArtworkEnum.PATCH_ARTWORK_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case patchArtworkEnum.PATCH_ARTWORK_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return { ...state };
  }
};
