import http from './api';

export function contactUs(query) {
  return http.post('/contactUs', query);
}

export function applyForJob(query) {
  return http.post('/apply', query);
}
