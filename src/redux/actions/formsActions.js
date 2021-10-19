import * as TYPES from "./types";
import * as formService from "../../services/forms";

export const contactUs = (payload) => async (dispatch) => {
  dispatch({ type: TYPES.SEND_MSG_REQUEST, payload: null });
  try {
    const response = await formService.contactUs(payload);
    if (response?.status === 200) {
      dispatch({ type: TYPES.SEND_MSG_SUCCESS, payload: null });
    }
  } catch (error) {
    dispatch({ type: TYPES.SEND_MSG_ERROR, payload: error });
  }
};

export const applyForJob = (payload) => async (dispatch) => {
  try {
    await formService.applyForJob(payload);
    alert("Форма отправлена");
  } catch (error) {
    alert("Error");
  }
};
