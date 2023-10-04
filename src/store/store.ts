import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import allPackagesReducer from "./allPackages";
import packagesSlice from "./slices/packagesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    packages: allPackagesReducer,
    packagesTaked: packagesSlice

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
