import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { artworkReducer } from "../reducer/getArtworkReducer";

const rootReducer = combineReducers({
  artworkList: artworkReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
