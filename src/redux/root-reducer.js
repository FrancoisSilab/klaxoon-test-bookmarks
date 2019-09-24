import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import linkReducer from './links/links.reducer.js'

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  link: linkReducer
});

export default persistReducer(persistConfig, rootReducer);
