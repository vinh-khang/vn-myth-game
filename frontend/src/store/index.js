// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userReducer from "./userSlice";
import matchReducer from "./matchSlice";
import thunk from "redux-thunk";

const reducers = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "user",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
