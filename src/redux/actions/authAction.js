import * as TYPES from './types';
import * as authService from '../../services/auth';
import { setAuthentication } from '../../AppInitializer';

export const loginUser = (payload) => async (dispatch) => {
  dispatch({ type: TYPES.LOGIN_USER_REQUEST, payload: null });
  try {
    const { data } = await authService.loginUser(payload);
    setAuthentication(data.token);
    dispatch({ type: TYPES.LOGIN_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TYPES.LOGIN_USER_ERROR, payload: null });
  }
};
