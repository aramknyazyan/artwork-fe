import { getArtistsEnum } from "../action-type";

export const getArtistsReducer = function (
  state = { data: [], error: null, loading: false },
  action
) {
  switch (action.type) {
    case getArtistsEnum.IS_LOADING_GET_ARTISTS:
      return { ...state, loading: true };
    case getArtistsEnum.GET_ARTISTS_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case getArtistsEnum.GET_ARTISTS_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return { ...state };
  }
};
