import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import allPackagesReducer from './allPackages';
import deliverymanReducer from './deliveryman';
import userInfoReducer from './userInfo';
import packagesSlice from "./slices/packagesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    packages: allPackagesReducer,
    deliverymanInfo: deliverymanReducer,
    userInfo: userInfoReducer,
    packagesTaked: packagesSlice

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
