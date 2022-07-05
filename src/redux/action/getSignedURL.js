import { getSignedURLActionEnum } from "../action-type";
import { GetSignedURL } from "../service/service";

export const getSignedURL = () => async (dispatch) => {
  try {
    const data = await GetSignedURL();

    dispatch({
      type: getSignedURLActionEnum.GET_SIGNED_URL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: getSignedURLActionEnum.GET_SIGNED_URL_ERROR,
      error: error,
    });
  }
};
