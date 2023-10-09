import { LatLngLiteral } from '@googlemaps/google-maps-services-js';
import { createSlice } from '@reduxjs/toolkit';

interface Package {
  _id: string;
  client: string;
  quantity: number;
  destination: string;
  is_delivered: boolean;
  package_weight: number;
  additional_information: string;
  deadline_date: string;
  creation_date: string;
  coords: LatLngLiteral;
  __v: number;
}

const initialState: Package[] = [];

const packagesSlice = createSlice({
  name: 'packages',
  initialState,
  reducers: {
    setPackages: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPackages } = packagesSlice.actions;
export default packagesSlice.reducer;
