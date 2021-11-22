import { combineReducers, createStore } from "redux";
import { getCounterReducer } from "./reducers/counterReducer";

const reducer = combineReducers({
  counter: getCounterReducer
});

const store = createStore(reducer);

export default store;
