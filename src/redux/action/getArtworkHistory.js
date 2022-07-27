import { getArtworkHistoryEnum } from "../action-type";
import { GetArtworkHistory } from "../service/service";

export const getArtworkHistoryAction = (id) => async (dispatch) => {
  dispatch({ type: getArtworkHistoryEnum.IS_LOADING_ARTWORK_HISTORY });
  try {
    const data = await GetArtworkHistory(id);

    dispatch({
      type: getArtworkHistoryEnum.GET_ARTWORK_HISTORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: getArtworkHistoryEnum.GET_ARTWORK_HISTORY_ERROR,
      error: error,
    });
  }
};
