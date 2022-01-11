import request from "./request"

export const login = data => {
	return request({
		url: "api/sys/login",
		method: "POST",
		withCredentials: false,
		responseType: "json",
		headers: { "Content-Type": "application/json;charset=utf-8" },
		data: { data }
	})
}
