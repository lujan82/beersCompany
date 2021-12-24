import { USER_LOGIN, USER_LOGOUT } from "./userActionTypes"

const initialState = {
  email: "",
  token: ""
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload
    
    case USER_LOGOUT:
      return initialState
      
    default:
      return state
  }
}