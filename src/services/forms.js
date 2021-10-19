import http from "./api";

export function contactUs(data) {
  return http.post("/contactUs", data);
}

export function applyForJob(data) {
  return http.post("/apply", data);
}
