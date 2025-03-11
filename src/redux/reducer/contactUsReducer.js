import { contactUsEnum } from "../action-type";

export const contactUsReducer = function (
  state = { data: [], error: null, loading: false },
  action
) {
  switch (action.type) {
    case contactUsEnum.IS_LOADING_CONTACT_US:
      return { ...state, loading: true };
    case contactUsEnum.CONTACT_US_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case contactUsEnum.CONTACT_US_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return { ...state };
  }
};
