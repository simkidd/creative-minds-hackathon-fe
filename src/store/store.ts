import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PERSIST_STORE_NAME } from "@/constants/app.constant";
import authReducer from "./features/auth/auth.slice";
import resourceReducer from "./features/resource/resource.slice";

// Configuration for persisting state
const persistConfig = {
  key: PERSIST_STORE_NAME,
  storage,
  whitelist: ["auth", "resource"], // Only persist these slices
};

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  resource: resourceReducer,
});

// Wrap reducers with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }),
});

// Create persistor
export const persistor = persistStore(store);

// Export store
export default store;

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
