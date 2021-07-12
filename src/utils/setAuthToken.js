import http from '../services/api';

export const setAuthToken = (token) => {
  if (token) {
    // Apply authorization token to every request if logged in
    http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  } else {
    // Delete auth header
    delete http.defaults.headers.common['Authorization'];
  }
};
