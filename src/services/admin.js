import http from './api';

export function getUserList() {
  return http.get('/user');
}

export function updateUser(query) {
  return http.put('/user', query);
}

export function addUser(query) {
  return http.post('/user', query);
}

export function saveUsersOrder(query) {
  return http.put('/user', query);
}

export function deleteUser(id) {
  return http.delete(`/user/${id}`);
}

export function getPortfoliosList() {
  return http.get('/portfolio');
}

export function updatePortfolio(query) {
  return http.put('/portfolio', query);
}

export function addPortfolio(query) {
  return http.post('/portfolio', query);
}

export function savePortfoliosOrder(query) {
  return http.put('/portfolio', query);
}

export function deletePortfolio(id) {
  return http.delete(`/portfolio/${id}`);
}

export function getClientsList() {
  return http.get('/client ');
}

export function addClient(query) {
  return http.post('/client', query);
}

export function saveClientsOrder(query) {
  return http.put('/client', query);
}

export function updateClient(query) {
  return http.put('/client ', query);
}

export function deleteClient(id) {
  return http.delete(`/client/${id}`);
}
