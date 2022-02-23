import * as TYPES from "../actions/types";

const initialState = {
  isActiveLogosSection: true,
  isActivePeopleSection: true,
  usersList: [],
  clientsList: [],
  portfoliosList: [],
  loading: false,
  failed: false,
  error: null,
  sendSuccess: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  // console.log("Redux : action type: ", action.type);
  // console.log("Redux : payload", action.payload);

  switch (action.type) {
    case TYPES.GET_USERS_LIST_REQUEST:
    case TYPES.UPDATE_USER_REQUEST:
    case TYPES.DELETE_USER_REQUEST:
    case TYPES.GET_PORTFOLIOS_LIST_REQUEST:
    case TYPES.UPDATE_PORTFOLIO_REQUEST:
    case TYPES.DELETE_PORTFOLIO_REQUEST:
    case TYPES.GET_CLIENTS_LIST_REQUEST:
    case TYPES.UPDATE_CLIENT_REQUEST:
    case TYPES.DELETE_CLIENT_REQUEST:
    case TYPES.ADD_USER_REQUEST:
    case TYPES.SAVE_USERS_ORDER_REQUEST:
    case TYPES.ADD_PORTFOLIO_REQUEST:
    case TYPES.SAVE_PORTFOLIOS_ORDER_REQUEST:
    case TYPES.ADD_CLIENT_REQUEST:
    case TYPES.SAVE_CLIENTS_ORDER_REQUEST:
    case TYPES.SEND_MSG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        failed: false,
        sendSuccess: false,
      };

    case TYPES.CHANGE_STATUS_OF_LOGOS_SECTION:
      return {
        ...state,
        loading: false,
        error: null,
        failed: false,
        isActiveLogosSection: action.payload,
      };

    case TYPES.CHANGE_STATUS_OF_PEOPLE_SECTION:
      return {
        ...state,
        loading: false,
        error: null,
        failed: false,
        isActivePeopleSection: action.payload,
      };

    case TYPES.GET_USERS_LIST_SUCCESS:
      const userLists = [...action.payload];

      // console.log("Redux: userLists", userLists);

      userLists.sort((a, b) => a.id - b.id);
      return {
        ...state,
        loading: false,
        error: null,
        failed: false,
        usersList: userLists,
      };
    case TYPES.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        failed: false,
        usersList: state.usersList.map((user) => {
          if (user.id === action.payload.id) {
            return action.payload;
          }
          return user;
        }),
      };
    case TYPES.CHANGE_USERS_ORDER:
      return {
        ...state,
        loading: false,
        error: null,
        failed: false,
        usersList: action.payload,
      };
    case TYPES.ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        failed: false,
        usersList: [...state.usersList, action.payload],
      };
    case TYPES.SAVE_USERS_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        failed: false,
        usersList: action.payload,
      };
    case TYPES.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        failed: false,
        usersList: state.usersList.filter((user) => user.id !== action.payload),
      };

    case TYPES.GET_PORTFOLIOS_LIST_SUCCESS:
      const portfolioLists = [...action.payload];
      portfolioLists.sort((a, b) => a.id - b.id);
      return {
        ...state,
        loading: false,
        error: null,
        failed: false,
        portfoliosList: portfolioLists,
      };
    case TYPES.UPDATE_PORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        failed: false,
        portfoliosList: state.portfoliosList.map((portfolio) => {
          if (portfolio.id === action.payload.id) {
            return action.payload;
          }
          return portfolio;
        }),
      };
    case TYPES.ADD_PORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        failed: false,
        portfoliosList: [...state.portfoliosList, action.payload],
      };
    case TYPES.CHANGE_PORTFOLIOS_ORDER:
      return {
        ...state,
        loading: false,
        error: null,
        failed: false,
        portfoliosList: action.payload,
      };
    case TYPES.SAVE_PORTFOLIOS_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        failed: false,
        portfoliosList: action.payload,
      };
    case TYPES.DELETE_PORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        failed: false,
        portfoliosList: state.portfoliosList.filter(
          (portfolio) => portfolio.id !== action.payload
        ),
      };
    case TYPES.GET_CLIENTS_LIST_SUCCESS:
      const clientLists = [...action.payload];
      clientLists.sort((a, b) => a.id - b.id);
      return {
        ...state,
        loading: false,
        error: null,
        failed: false,
        clientsList: clientLists,
      };
    case TYPES.UPDATE_CLIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        failed: false,
        clientsList: state.clientsList.map((client) => {
          if (client.id === action.payload.id) {
            return action.payload;
          }
          return client;
        }),
      };
    case TYPES.ADD_CLIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        failed: false,
        clientsList: [...state.clientsList, action.payload],
      };
    case TYPES.CHANGE_CLIENTS_ORDER:
      return {
        ...state,
        loading: false,
        error: null,
        failed: false,
        clientsList: action.payload,
      };
    case TYPES.SAVE_CLIENTS_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        failed: false,
        clientsList: action.payload,
      };
    case TYPES.DELETE_CLIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        failed: false,
        clientsList: state.clientsList.filter(
          (user) => user.id !== action.payload
        ),
      };
    case TYPES.SEND_MSG_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        failed: false,
        sendSuccess: true,
      };

    case TYPES.GET_USERS_LIST_ERROR:
    case TYPES.UPDATE_USER_ERROR:
    case TYPES.DELETE_USER_ERROR:
    case TYPES.GET_PORTFOLIOS_LIST_ERROR:
    case TYPES.UPDATE_PORTFOLIO_ERROR:
    case TYPES.DELETE_PORTFOLIO_ERROR:
    case TYPES.GET_CLIENTS_LIST_ERROR:
    case TYPES.UPDATE_CLIENT_ERROR:
    case TYPES.DELETE_CLIENT_ERROR:
    case TYPES.ADD_USER_ERROR:
    case TYPES.SAVE_USERS_ORDER_ERROR:
    case TYPES.ADD_PORTFOLIO_ERROR:
    case TYPES.SAVE_PORTFOLIOS_ORDER_ERROR:
    case TYPES.ADD_CLIENT_ERROR:
    case TYPES.SAVE_CLIENTS_ORDER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        failed: false,
        sendSuccess: false,
      };
    case TYPES.SEND_MSG_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        failed: true,
        sendSuccess: false,
      };

    default:
      return state;
  }
}
