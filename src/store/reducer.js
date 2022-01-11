import { LOGIN } from "./constants"

const defaultState = {
	user: {}
}

function reducer(state = defaultState, action) {
	switch (action.type) {
		case LOGIN:
			return { ...state, user: action.user }
		default:
			return state
	}
}

export default reducer
