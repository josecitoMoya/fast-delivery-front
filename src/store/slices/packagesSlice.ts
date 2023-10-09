import { createSlice } from '@reduxjs/toolkit';
import type { PackagesTakedIdType } from '@/types/packageNew';
const initialState: PackagesTakedIdType[] = [];

export const packagesSlice = createSlice({
  name: 'packagesTaked',
  initialState,
  reducers: {
    setAllPackages: (state, action) => {
      state.length = 0; // Limpia el estado actual
      state.push(...action.payload); // Agrega los nuevos datos al estado
    },
  },
});

export const { setAllPackages } = packagesSlice.actions;

export default packagesSlice.reducer;
