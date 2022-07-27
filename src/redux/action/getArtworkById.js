import { getArtworkByIdEnum } from "../action-type";
import { GetArtworkById } from "../service/service";

export const getArtworkByIdAction = (id) => async (dispatch) => {
  dispatch({ type: getArtworkByIdEnum.IS_LOADING_ARTWORK_BY_ID });
  try {
    const data = await GetArtworkById(id);

    dispatch({
      type: getArtworkByIdEnum.GET_ARTWORK_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: getArtworkByIdEnum.GET_ARTWORK_BY_ID_ERROR,
      error: error,
    });
  }
};
