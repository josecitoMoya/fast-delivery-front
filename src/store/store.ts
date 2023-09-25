import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import allPackagesReducer from "./allPackages";
export const store = configureStore({
  reducer: {
    user: userReducer,
    packages: allPackagesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
