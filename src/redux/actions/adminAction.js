import * as TYPES from "./types";
import * as adminService from "../../services/admin";

export const changeStatusOfLogosSection = (payload) => {
  return {
    type: TYPES.CHANGE_STATUS_OF_LOGOS_SECTION,
    payload,
  };
};

export const changeStatusOfPeopleSection = (payload) => {
  return {
    type: TYPES.CHANGE_STATUS_OF_PEOPLE_SECTION,
    payload,
  };
};
// User actions
export const getUserList = (payload) => async (dispatch) => {
  dispatch({ type: TYPES.GET_USERS_LIST_REQUEST, payload: null });
  try {
    const response = await adminService.getUserList();
    if (response?.status === 200) {
      dispatch({ type: TYPES.GET_USERS_LIST_SUCCESS, payload: response.data });
    }
  } catch (error) {
    if (error?.response?.status === 404) {
      return dispatch({
        type: TYPES.GET_USERS_LIST_SUCCESS,
        payload: [],
      });
    }
    dispatch({ type: TYPES.GET_USERS_LIST_ERROR, payload: error });
  }
};

export const updateUser = (payload) => async (dispatch, getState) => {
  dispatch({ type: TYPES.UPDATE_USER_REQUEST, payload: null });
  try {
    const token = getState().auth.token;
    await adminService.updateUser({ token, ...payload });
    await dispatch({ type: TYPES.UPDATE_USER_SUCCESS, payload });
  } catch (error) {
    dispatch({ type: TYPES.UPDATE_USER_ERROR, payload: error });
  }
};

export const addUser = (payload) => async (dispatch, getState) => {
  dispatch({ type: TYPES.ADD_USER_REQUEST, payload: null });
  try {
    const token = getState().auth.token;

    const { data } = await adminService.addUser({ token, ...payload });
    await dispatch({ type: TYPES.ADD_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TYPES.ADD_USER_ERROR, payload: error });
  }
};

export const changeUsersOrder = (payload) => {
  return {
    type: TYPES.CHANGE_USERS_ORDER,
    payload,
  };
};

export const saveUsersOrder = (payload) => async (dispatch) => {
  dispatch({ type: TYPES.SAVE_USERS_ORDER_REQUEST, payload: null });
  try {
    const { data } = await adminService.saveUsersOrder(payload);
    await dispatch({ type: TYPES.SAVE_USERS_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TYPES.SAVE_USERS_ORDER_ERROR, payload: error });
  }
};

export const deleteUser = (payload) => async (dispatch, getState) => {
  dispatch({ type: TYPES.DELETE_USER_REQUEST, payload: null });
  try {
    const token = getState().auth.token;
    await adminService.deleteUser(payload, { token });
    await dispatch({ type: TYPES.DELETE_USER_SUCCESS, payload });
  } catch (error) {
    dispatch({ type: TYPES.DELETE_USER_ERROR, payload: error });
  }
};

// Portfolio actions
export const getPortfoliosList = (payload) => async (dispatch) => {
  dispatch({ type: TYPES.GET_PORTFOLIOS_LIST_REQUEST, payload: null });
  try {
    const response = await adminService.getPortfoliosList();
    if (response?.status === 200) {
      dispatch({
        type: TYPES.GET_PORTFOLIOS_LIST_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    if (error?.response?.status === 404) {
      return dispatch({
        type: TYPES.GET_PORTFOLIOS_LIST_SUCCESS,
        payload: [],
      });
    }
    dispatch({ type: TYPES.GET_PORTFOLIOS_LIST_ERROR, payload: error });
  }
};

export const updatePortfolio = (payload) => async (dispatch, getState) => {
  dispatch({ type: TYPES.UPDATE_PORTFOLIO_REQUEST, payload: null });
  try {
    const token = getState().auth.token;
    const { data } = await adminService.updatePortfolio({ token, ...payload });

    await dispatch({
      type: TYPES.UPDATE_PORTFOLIO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: TYPES.UPDATE_PORTFOLIO_ERROR, payload: error });
  }
};

export const addPortfolio = (payload) => async (dispatch, getState) => {
  dispatch({ type: TYPES.ADD_PORTFOLIO_REQUEST, payload: null });
  try {
    const token = getState().auth.token;
    const { data } = await adminService.addPortfolio({ token, ...payload });
    await dispatch({ type: TYPES.ADD_PORTFOLIO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TYPES.ADD_PORTFOLIO_ERROR, payload: error });
  }
};

export const changePortfoliosOrder = (payload) => {
  return {
    type: TYPES.CHANGE_PORTFOLIOS_ORDER,
    payload,
  };
};

export const savePortfoliosOrder = (payload) => async (dispatch) => {
  dispatch({ type: TYPES.SAVE_PORTFOLIOS_ORDER_REQUEST, payload: null });
  try {
    const { data } = await adminService.savePortfoliosOrder(payload);
    await dispatch({
      type: TYPES.SAVE_PORTFOLIOS_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: TYPES.SAVE_PORTFOLIOS_ORDER_ERROR, payload: error });
  }
};

export const deletePortfolio = (payload) => async (dispatch, getState) => {
  dispatch({ type: TYPES.DELETE_PORTFOLIO_REQUEST, payload: null });
  try {
    const token = getState().auth.token;
    await adminService.deletePortfolio(payload, { token });
    await dispatch({
      type: TYPES.DELETE_PORTFOLIO_SUCCESS,
      payload,
    });
  } catch (error) {
    dispatch({ type: TYPES.DELETE_PORTFOLIO_ERROR, payload: error });
  }
};

// Clients actions
export const getClientsList = (payload) => async (dispatch) => {
  dispatch({ type: TYPES.GET_CLIENTS_LIST_REQUEST, payload: null });
  try {
    const response = await adminService.getClientsList();
    if (response?.status === 200) {
      dispatch({
        type: TYPES.GET_CLIENTS_LIST_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    if (error?.response?.status === 404) {
      return dispatch({
        type: TYPES.GET_CLIENTS_LIST_SUCCESS,
        payload: [],
      });
    }
    dispatch({ type: TYPES.GET_CLIENTS_LIST_ERROR, payload: error });
  }
};

export const updateClient = (payload) => async (dispatch, getState) => {
  dispatch({ type: TYPES.UPDATE_CLIENT_REQUEST, payload: null });
  try {
    const token = getState().auth.token;
    const { data } = await adminService.updateClient({ token, ...payload });
    await dispatch({
      type: TYPES.UPDATE_CLIENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: TYPES.UPDATE_CLIENT_ERROR, payload: error });
  }
};

export const addClient = (payload) => async (dispatch, getState) => {
  dispatch({ type: TYPES.ADD_CLIENT_REQUEST, payload: null });
  try {
    const token = getState().auth.token;

    const { data } = await adminService.addClient({ token, ...payload });
    await dispatch({ type: TYPES.ADD_CLIENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TYPES.ADD_CLIENT_ERROR, payload: error });
  }
};

export const changeClientsOrder = (payload) => {
  return {
    type: TYPES.CHANGE_CLIENTS_ORDER,
    payload,
  };
};

export const saveClientsOrder = (payload) => async (dispatch) => {
  dispatch({ type: TYPES.SAVE_CLIENTS_ORDER_REQUEST, payload: null });
  try {
    const { data } = await adminService.saveClientsOrder(payload);
    await dispatch({
      type: TYPES.SAVE_CLIENTS_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: TYPES.SAVE_CLIENTS_ORDER_ERROR, payload: error });
  }
};

export const deleteClient = (payload) => async (dispatch, getState) => {
  dispatch({ type: TYPES.DELETE_CLIENT_REQUEST, payload: null });
  try {
    const token = getState().auth.token;
    await adminService.deleteClient(payload, { token });
    await dispatch({
      type: TYPES.DELETE_CLIENT_SUCCESS,
      payload,
    });
  } catch (error) {
    dispatch({ type: TYPES.DELETE_CLIENT_ERROR, payload: error });
  }
};

export const uploadImage = (payload) => async (dispatch, getState) => {
  console.log("uploadImage-payload", payload);
  dispatch({ type: TYPES.UPDATE_PORTFOLIO_REQUEST, payload: null });
  try {
    const token = getState().auth.token;
    const { data } = await adminService.updatePortfolio({
      token,
      ...payload,
    });
    console.log("uploadImagereturnvalue--", payload);
    await dispatch({
      type: TYPES.UPDATE_PORTFOLIO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: TYPES.UPDATE_PORTFOLIO_ERROR, payload: error });
  }
};
