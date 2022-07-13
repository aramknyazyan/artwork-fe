import { getArtworkEnum } from "../action-type";
import { GetArtwork } from "../service/service";

export const getArtworkAction = () => async (dispatch) => {
  dispatch({ type: getArtworkEnum.IS_LOADING_ARTWORK });
  try {
    const data = await GetArtwork();

    dispatch({
      type: getArtworkEnum.GET_ARTWORK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: getArtworkEnum.GET_ARTWORK_ERROR,
      error: error,
    });
  }
};
