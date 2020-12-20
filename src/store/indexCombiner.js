import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import characterReducer from './charReducer';

const reducers = combineReducers({
  characterCombiner: characterReducer
});

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
