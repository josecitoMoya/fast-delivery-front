import { createAction, createReducer } from '@reduxjs/toolkit';

export const setUserInfo = createAction('SET_USERINFO');

interface User {
  _id: string;
  email: string;
  password: string;
  name: string;
  last_name: string;
  profile_img: string;
  is_deleted: boolean;
  is_admin: boolean;
  deliveryManInfo: string;
}

const initialState: User[] = [];

export default createReducer(initialState, (builder) => {
  builder.addCase(setUserInfo, (state, action) => {
    return action.payload;
  });
});
