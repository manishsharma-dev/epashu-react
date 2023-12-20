import { redirect } from "react-router-dom";

export function setToken(token) {
  const encodedToken = btoa(token);
  setSessionData("_t", encodedToken);
}

export function getToken() {
  const _t = getSessionData("_t")
  const token = _t ? atob(_t) : null;
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

export function saveAuthData(token, expirationDate, userData, refresh_token) {
  setToken(token);
  if (expirationDate) {
    sessionStorage.setItem('expiration', expirationDate.toISOString());
  }
  sessionStorage.setItem('user', JSON.stringify(userData));
  sessionStorage.setItem('refreshToken', refresh_token);
}