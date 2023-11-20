import { createStore } from "redux";
import { combineReducers } from "redux";
import reducers from "../modules/letters";

const rootReducer = combineReducers({ reducers });
const store = createStore(rootReducer);

export default store;
