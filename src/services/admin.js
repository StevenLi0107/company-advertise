import http from "./api";

export function getUserList() {
  return http.get("/user");
}

export function updateUser(data) {
  return http.put(`/user/${data.id}`, data);
}

export function addUser(data) {
  return http.post("/user", data);
}

export function saveUsersOrder(data) {
  return http.put("/user", data);
}

export function deleteUser(id, token) {
  const data = { data: token };
  return http.delete(`/user/${id}`, data);
}

export function getPortfoliosList() {
  return http.get("/portfolio");
}

export function updatePortfolio(data) {
  return http.put(`/portfolio/${data.id}`, data);
}

export function addPortfolio(data) {
  return http.post("/portfolio", data);
}

export function savePortfoliosOrder(data) {
  return http.put("/portfolio", data);
}

export function deletePortfolio(id, token) {
  const data = { data: token };
  return http.delete(`/portfolio/${id}`, data);
}

export function getClientsList() {
  return http.get("/client ");
}

export function addClient(data) {
  return http.post("/client", data);
}

export function saveClientsOrder(data) {
  return http.put("/client", data);
}

export function updateClient(data) {
  return http.put(`/client/${data.id}`, data);
}

export function deleteClient(id, token) {
  const data = { data: token };
  return http.delete(`/client/${id}`, data);
}
