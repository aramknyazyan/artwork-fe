import { getSignedURLActionEnum } from "../action-type";

export const getSignedURLReducer = function (
  state = { data: [], error: null, loading: false },
  action
) {
  switch (action.type) {
    case getSignedURLActionEnum.IS_LOADING_SIGNED_URL:
      return { ...state, loading: true };
    case getSignedURLActionEnum.GET_SIGNED_URL_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case getSignedURLActionEnum.GET_SIGNED_URL_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return { ...state };
  }
};
