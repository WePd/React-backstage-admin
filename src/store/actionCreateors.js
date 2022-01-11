import { LOGIN } from "./constants"
import { login } from "../services/methods"

const logins = res => ({ type: LOGIN, user: res.user })

export const LoginAction = data => {
	return dispatch => {
		login(data).then(res => {
			console.log(res)
			dispatch(logins)
		})
	}
}
