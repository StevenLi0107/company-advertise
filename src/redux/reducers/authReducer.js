import * as TYPES from "../actions/types";
import { getValueForKeyInBrowserStorage } from "../../utils/browserStorage";

const initialState = {
  user: null,
  token: getValueForKeyInBrowserStorage("token") || "",
  loading: false,
  success: false,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case TYPES.LOGIN_USER_REQUEST:
    case TYPES.CHECK_TOKEN_VALID_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      };

    case TYPES.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        token: action.payload.token,
      };

    case TYPES.CHECK_TOKEN_VALID_SUCCESS:
      return {
        loading: false,
        error: null,
        success: true,
        token: action.payload.token,
      };

    case TYPES.CHECK_TOKEN_VALID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
        token: null,
      };

    case TYPES.LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
}
