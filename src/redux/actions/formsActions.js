import * as TYPES from "./types";
import * as formService from "../../services/forms";

export const contactUs = (payload) => async (dispatch) => {
  dispatch({ type: TYPES.SEND_MSG_REQUEST, payload: null });

  console.log("Sending payload:", payload);

  try {
    const response = await formService.contactUs(payload);

    console.log("Sending response:", response);

    if (response?.status === 200) {
      dispatch({ type: TYPES.SEND_MSG_SUCCESS, payload: null });
    }
  } catch (error) {
    console.log("Sending error:", error);

    dispatch({ type: TYPES.SEND_MSG_ERROR, payload: error });
  }
};

export const applyForJob = (payload) => async (dispatch) => {
  try {
    await formService.applyForJob(payload);
    alert("Form sent");
  } catch (error) {
    alert("Error");
  }
};
