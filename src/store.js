import { combineReducers, createStore } from "redux";
import expenseReducer from "./reducers/expenseReducer";

export default function configureStore(initialState) {
  return createStore(
    combineReducers({expense: expenseReducer}), 
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}