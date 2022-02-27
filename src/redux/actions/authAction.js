import * as TYPES from "./types";
import * as authService from "../../services/auth";
import { setAuthentication } from "../../AppInitializer";
import { removeFromBrowserStorage } from "../../utils/browserStorage";

export const loginUser = (payload) => async (dispatch) => {
  dispatch({ type: TYPES.LOGIN_USER_REQUEST, payload: null });
  try {
    const { data } = await authService.loginUser(payload);
    setAuthentication(data.token);

    await dispatch({ type: TYPES.LOGIN_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TYPES.LOGIN_USER_ERROR, payload: null });
  }
};

export const checkTokenValid = (payload) => async (dispatch, getState) => {
  dispatch({ type: TYPES.CHECK_TOKEN_VALID_REQUEST, payload: null });
  try {
    const token = getState().auth.token;
    const { data } = await authService.checkTokenValid({ token });
    if (data === []) {
      await dispatch({
        type: TYPES.CHECK_TOKEN_VALID_SUCCESS,
        payload: { token: token },
      });
    }
  } catch (error) {
    removeFromBrowserStorage("token");
    dispatch({ type: TYPES.CHECK_TOKEN_VALID_ERROR, payload: null });
  }
};
