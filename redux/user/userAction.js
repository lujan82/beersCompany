import * as types from "./userActionTypes"

export const userLogin = user => {
	return dispatch => {
		dispatch({
			type: types.USER_LOGIN,
			payload: user,
		})
	}
}

export const userLogout = () => {
	return dispatch => {
		dispatch({
			type: types.USER_LOGOUT,
		})
	}
}
