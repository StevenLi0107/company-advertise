import http from "./api";

export function loginUser(data) {
  return http.post("/auth", data);
}

export function checkTokenValid(data) {
  return http.post("/checkToken", data);
}
