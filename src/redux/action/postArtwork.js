import { postArtworkEnum } from "../action-type";
import { PostArtwork } from "../service/service";

export const postArtworkAction = (data, callback) => async (dispatch) => {
  dispatch({ type: postArtworkEnum.IS_LOADING_POST_ARTWORK });
  try {
    const response = await PostArtwork(data);

    dispatch({
      type: postArtworkEnum.POST_ARTWORK_SUCCESS,
      payloda: response,
    });
    callback({ type: "success" });
  } catch (error) {
    dispatch({
      type: postArtworkEnum.POST_ARTWORK_ERROR,
      payload: error,
    });
    callback({ type: "faild" });
  }
};
