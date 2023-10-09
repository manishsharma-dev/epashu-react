import { redirect } from "react-router-dom";

export function setToken(token) {
  const encodedToken = atob(token);
  setSessionData("_t", encodedToken);
}

export function getToken() {
  const token = getSessionData("_t");
  return token;
}

export function setSessionData(key, value) {
  sessionStorage.setItem(key, value);
}

export function getSessionData(key) {
  const data = sessionStorage.getItem(key);
  return data || null;
}

export function checkAdminAuthLoader() {
  const token = getToken();
  if (!token) {
    return redirect("/login");
  }
  return null;
}
