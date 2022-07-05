import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import {
  artworkReducer,
  getSignedURLReducer,
  postArtworkReducer,
} from "../reducer";

const rootReducer = combineReducers({
  artworkList: artworkReducer,
  signedURL: getSignedURLReducer,
  postArtwork: postArtworkReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
