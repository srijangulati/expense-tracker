import { createStore } from "redux";

export default function configureStore(initialState) {
  return createStore(
    () => {}, 
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}