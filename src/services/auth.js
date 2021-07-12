import http from './api';

export function loginUser(query) {
  return http.post('/auth', query);
}
