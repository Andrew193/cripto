import { combineReducers, createStore } from "redux";
import moneyReducer from "./moneyReducer"
import profileReducer from "./profileReducer"
const store=createStore(combineReducers({
    money:moneyReducer,
    profile:profileReducer,
}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;