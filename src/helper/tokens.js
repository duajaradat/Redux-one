import jwt_decode from "jwt-decode";
const getTokenData = () => {
  const token = localStorage.getItem("jwt") || "";
  if (!token) {
    return {};
  }
  return jwt_decode(token);
};

export const isValidToken = () => {
  const decoded = getTokenData();
  if (!decoded.exp) {
    return false;
  }
  return new Date(decoded.exp * 1000).getTime() > new Date().getTime();
};

export const getToken = () => {
  return localStorage.getItem("jwt");
};
export const removeToken = () => {
  localStorage.removeItem("jwt");
};
export const setToken = (val) => {
  localStorage.setItem("jwt", val);
};
export const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
