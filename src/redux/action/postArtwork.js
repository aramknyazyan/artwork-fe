import { postArtworkEnum } from "../action-type";
import { PostArtwork } from "../service/service";

export const postArtworkAction = (data) => async (dispatch) => {
  dispatch({ type: postArtworkEnum.IS_LOADING_POST_ARTWORK });
  try {
    const response = await PostArtwork(data);

    dispatch({
      type: postArtworkEnum.POST_ARTWORK_SUCCESS,
      payloda: response,
    });
  } catch (error) {
    dispatch({
      type: postArtworkEnum.POST_ARTWORK_ERROR,
      payload: error,
    });
  }
};
