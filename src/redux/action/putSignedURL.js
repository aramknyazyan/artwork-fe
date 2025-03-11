import { putSignedURLEnum } from "../action-type";
import { PutSignedURL } from "../service/service";

export const putSignedURLAction = (url, data, type) => async (dispatch) => {
  dispatch({ type: putSignedURLEnum.IS_LOADING_PUT_SIGNED_URL });
  try {
    const response = await PutSignedURL(url, data, type);

    dispatch({
      type: putSignedURLEnum.PUT_SIGNED_URL_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: putSignedURLEnum.PUT_SIGNED_URL_ERROR,
      payload: error,
    });
  }
};
