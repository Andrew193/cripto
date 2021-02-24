import { combineReducers, createStore } from "redux";
import moneyReducer from "./moneyReducer"
import profileReducer from "./profileReducer"
const store=createStore(combineReducers({
    money:moneyReducer,
    profile:profileReducer,
}))
export default store;