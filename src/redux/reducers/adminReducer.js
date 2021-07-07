import * as TYPES from '../actions/types';

const initialState = {
  isActiveLogosSection: true,
  usersList: [
    {
      id: 1,
      name: 'John Doe',
      role: 'admin',
      url:
        'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
    },
    {
      id: 2,
      name: 'Michael Jordan',
      role: 'admin',
    },
    {
      id: 3,
      name: 'Joe Biden',
      role: 'admin',
      url:
        'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
    },
  ],
  clientsList: [
    {
      id: 1,
      name: 'Roshen',
      url: false,
    },
    {
      id: 2,
      name: 'MTC',
      url: false,
    },
    {
      id: 3,
      name: 'Nokia',
      url:
        'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
    },
  ],
  portfoliosList: [],
  loading: false,
  success: false,
  error: null,
};

export default function (state = initialState, action) {
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
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      };

    case TYPES.CHANGE_STATUS_OF_LOGOS_SECTION:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        isActiveLogosSection: action.payload,
      };

    case TYPES.GET_USERS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        usersList: action.payload,
      };
    case TYPES.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        usersList: action.payload,
      };
    case TYPES.CHANGE_USERS_ORDER:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        usersList: action.payload,
      };
    case TYPES.ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        usersList: action.payload,
      };
    case TYPES.SAVE_USERS_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        usersList: action.payload,
      };
    case TYPES.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        usersList: action.payload,
      };

    case TYPES.GET_PORTFOLIOS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        portfoliosList: action.payload,
      };
    case TYPES.UPDATE_PORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        portfoliosList: action.payload,
      };
    case TYPES.ADD_PORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        portfoliosList: action.payload,
      };
    case TYPES.CHANGE_PORTFOLIOS_ORDER:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        portfoliosList: action.payload,
      };
    case TYPES.SAVE_PORTFOLIOS_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        portfoliosList: action.payload,
      };
    case TYPES.DELETE_PORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        portfoliosList: action.payload,
      };

    case TYPES.GET_CLIENTS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        clientsList: action.payload,
      };
    case TYPES.UPDATE_CLIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        clientsList: action.payload,
      };
    case TYPES.ADD_CLIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        clientsList: action.payload,
      };
    case TYPES.CHANGE_CLIENTS_ORDER:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        clientsList: action.payload,
      };
    case TYPES.SAVE_CLIENTS_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        clientsList: action.payload,
      };
    case TYPES.DELETE_CLIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        clientsList: action.payload,
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
        success: false,
      };
    default:
      return state;
  }
}
