import { patchArtworkEnum } from "../action-type";
import { PatchArtwork } from "../service/service";

export const patchArtworkAction = (id, data) => async (dispatch) => {
  dispatch({ type: patchArtworkEnum.IS_LOADING_PATCH_ARTWORK });
  try {
    const response = await PatchArtwork(id, data);

    dispatch({
      type: patchArtworkEnum.PATCH_ARTWORK_SUCCESS,
      payloda: response,
    });
  } catch (error) {
    dispatch({
      type: patchArtworkEnum.PATCH_ARTWORK_ERROR,
      payload: error,
    });
  }
};
