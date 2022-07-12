import { putSignedURLEnum } from "../action-type";
import { PutSignedURL } from "../service/service";

export const putSignedURLAction = (url, data) => async (dispatch) => {
  dispatch({ type: putSignedURLEnum.IS_LOADING_PUT_SIGNED_URL });
  try {
    const response = await PutSignedURL(url, data);

    dispatch({
      type: putSignedURLEnum.PUT_SIGNED_URL_SUCCESS,
      payloda: response,
    });
  } catch (error) {
    dispatch({
      type: putSignedURLEnum.PUT_SIGNED_URL_ERROR,
      payload: error,
    });
  }
};
