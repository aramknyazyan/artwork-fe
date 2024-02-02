import { contactUsEnum } from "../action-type";
import { ContactUs } from "../service/service";

export const contactUsAction = (values) => async (dispatch) => {
  dispatch({ type: contactUsEnum.IS_LOADING_CONTACT_US });
  try {
    const data = await ContactUs(values);

    dispatch({
      type: contactUsEnum.CONTACT_US_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: contactUsEnum.CONTACT_US_ERROR,
      error: error,
    });
  }
};
