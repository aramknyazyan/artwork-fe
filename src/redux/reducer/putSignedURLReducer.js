import { putSignedURLEnum } from "../action-type";

export const putSignedURLReducer = function (
  state = { data: [], error: null, loading: false },
  action
) {
  switch (action.type) {
    case putSignedURLEnum.IS_LOADING_PUT_SIGNED_URL:
      return { ...state, loading: true };
    case putSignedURLEnum.PUT_SIGNED_URL_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case putSignedURLEnum.PUT_SIGNED_URL_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return { ...state };
  }
};
