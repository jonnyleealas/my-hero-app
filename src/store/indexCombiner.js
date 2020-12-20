import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import charReducer from "./charReducer.js";

const reducers = combineReducers({
  characterCombiner: charReducer
});

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
