// ====================================================
// Imports
// Main

import { configureStore } from "@reduxjs/toolkit";
import { API } from "./api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import appReducer from "./reducers/appReducer";
import { combineReducers } from "redux";
import dataSlice from "./components/dataSlice";
// ====================================================
// CombineReducers

let reducers = combineReducers({
  [API.reducerPath]: API.reducer,
  app: appReducer,
  data: dataSlice,
});
// ====================================================
// Store

let store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(API.middleware),
});

// ====================================================
// Exports
setupListeners(store.dispatch);
export default store;
