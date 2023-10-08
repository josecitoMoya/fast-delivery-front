import { UserProfileData } from '@/types/user.types';
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'userInfo',
  initialState: [] as UserProfileData[],
  reducers: {
    setUserInfo: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
