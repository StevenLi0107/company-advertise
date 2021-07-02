import * as TYPES from './types';

export const changeStatusOfLogosSection = (payload) => {
  return {
    type: TYPES.CHANGE_STATUS_OF_LOGOS_SECTION,
    payload,
  };
};
