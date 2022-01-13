import request from "./request";
import { getToken } from "../utils/getToken";

export const login = (data) => {
  return request({
    url: "api/sys/login",
    method: "POST",
    withCredentials: false,
    responseType: "json",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    data,
  });
};

export const profile = () => {
  return request({
    url: "api/sys/profile",
    method: "POST",
    withCredentials: false,
    headers: {
      Authorization: "Bearer " + getToken(),
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};
