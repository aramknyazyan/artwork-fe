import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import {
  artworkReducer,
  getSignedURLReducer,
  postArtworkReducer,
  putSignedURLReducer,
  artworkByIdReducer,
  artworkHistoryReducer,
} from "../reducer";

const rootReducer = combineReducers({
  artworkList: artworkReducer,
  signedURL: getSignedURLReducer,
  postArtwork: postArtworkReducer,
  putSignedURL: putSignedURLReducer,
  artworkById: artworkByIdReducer,
  artworkHistory: artworkHistoryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
