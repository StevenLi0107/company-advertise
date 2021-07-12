import { storeInBrowserStorage } from './utils/browserStorage';
import { setAuthToken } from './utils/setAuthToken';

export const setAuthentication = (token) => {
  let _token = '';

  if (localStorage.token) {
    _token = localStorage.token;
  } else {
    storeInBrowserStorage('token', token || _token);
  }

  if (_token || token) {
    setAuthToken(token || _token);
  }
};
