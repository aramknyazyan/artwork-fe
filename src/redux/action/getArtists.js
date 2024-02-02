import { getArtistsEnum } from "../action-type";
import { GetArtists } from "../service/service";

export const getArtistsAction = (page) => async (dispatch) => {
  dispatch({ type: getArtistsEnum.IS_LOADING_GET_ARTISTS });
  try {
    const data = await GetArtists(page);

    dispatch({
      type: getArtistsEnum.GET_ARTISTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: getArtistsEnum.GET_ARTISTS_ERROR,
      error: error,
    });
  }
};
