import { LatLngLiteral } from '@googlemaps/google-maps-services-js';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const setPackages = createAction('SET_PACKAGES');
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
  coords:LatLngLiteral;
  __v: number;
}
const initialState: Package[] = [];

export default createReducer(initialState, (builder) => {
  builder.addCase(setPackages, (state, action) => {
    return action.payload;
  });
});
