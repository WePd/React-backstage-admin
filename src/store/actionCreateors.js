import { LOGIN } from "./constants";
import { login } from "../services/methods";

//存入redux
const logins = (res) => ({ type: LOGIN, user: res.data });
//登录请求action
export const LoginAction = (data) => {
  return (dispatch) => {
    console.log(data);
    login(data).then((res) => {
      console.log(res);
      dispatch(logins(res));
    });
  };
};
