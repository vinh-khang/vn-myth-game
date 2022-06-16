// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userReducer from "./userSlice";
import matchReducer from "./matchSlice";
import playersReducer from "./playersSlice";

const reducers = combineReducers({
  user: userReducer,
  match: matchReducer,
  players: playersReducer,
});

const persistConfig = {
  key: "user",
  storage,
  blacklist: ["match", "players"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
