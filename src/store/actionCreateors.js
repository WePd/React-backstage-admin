import { LOGIN } from "./constants";
import { login, profile } from "../services/methods";

//存入redux
const logins = (res) => ({ type: LOGIN, user: res.data });
//登录请求action
export const LoginAction = (params) => {
  return (dispatch) => {
    // console.log(params);
    login(params).then((res) => {
      if (res.code === 10000) {
        dispatch(logins(res));
      }
    });
  };
};

export const ProfileAction = () => {
  return (dispatch) => {
    profile().then((res) => console.log(res));
  };
};
