import { combineReducers } from "redux";
import { shopReducer } from "./shop/shopReducer";
import { userReducer } from "./user/userReducer";

// COMBINED REDUCERS
const rootReducer = {
  user: userReducer,
  cart: shopReducer
}

export default combineReducers(rootReducer)