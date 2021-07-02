import * as TYPES from '../actions/types';

const initialState = {
  isActiveLogosSection: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPES.CHANGE_STATUS_OF_LOGOS_SECTION:
      return {
        ...state,
        isActiveLogosSection: action.payload,
      };
    default:
      return state;
  }
}
