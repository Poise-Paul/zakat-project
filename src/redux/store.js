import { combineReducers, configureStore } from "@reduxjs/toolkit";
import registerReducer from "./slices/registerSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer, persistStore } from "redux-persist";

// Persist config
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  register: registerReducer,
});

// Wrap your reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // needed for redux-persist
    }),
});

// Create persistor
export const persistor = persistStore(store);
