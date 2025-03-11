import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import {
  artworkReducer,
  getSignedURLReducer,
  postArtworkReducer,
  putSignedURLReducer,
  artworkByIdReducer,
  artworkHistoryReducer,
  contactUsReducer,
  getArtistsReducer,
} from "../reducer";

const rootReducer = combineReducers({
  artworkList: artworkReducer,
  signedURL: getSignedURLReducer,
  postArtwork: postArtworkReducer,
  putSignedURL: putSignedURLReducer,
  artworkById: artworkByIdReducer,
  artworkHistory: artworkHistoryReducer,
  contactUs: contactUsReducer,
  getArtists: getArtistsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
