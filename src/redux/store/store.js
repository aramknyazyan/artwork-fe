import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import {
  artworkReducer,
  getSignedURLReducer,
  postArtworkReducer,
  putSignedURLReducer,
  artworkByIdReducer,
} from "../reducer";

const rootReducer = combineReducers({
  artworkList: artworkReducer,
  signedURL: getSignedURLReducer,
  postArtwork: postArtworkReducer,
  putSignedURL: putSignedURLReducer,
  artworkById: artworkByIdReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
