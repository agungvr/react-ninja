import { apiAction } from "../api";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginRequest = () => apiAction({
  label: LOGIN_REQUEST,
  url: "https://api.myjson.com/bins/19dtxc",
  onSuccess: loginSuccess,
  onFailure: loginFailure
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data
});

export const loginFailure = (data) => ({
  type: LOGIN_FAILURE,
  payload: data
});
