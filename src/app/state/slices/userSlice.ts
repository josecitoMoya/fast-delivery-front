import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  users: [],
  isLoading: true,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUsers: (state, action) => {
      state.users + action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, setUsers, setIsLoading, setError } = userSlice.actions;

export default userSlice.reducer;
