import { createAction, createReducer } from '@reduxjs/toolkit';

export const setDeliveryman = createAction('SET_DELIVERYMAN');

interface Deliveryman {
  _id: string;
  current_deliveries: number;
  active: boolean;
  drinked_alcohol: boolean;
  taked_drugs: boolean;
  sleeped_well: boolean;
  packages: string[];
}

const initialState: Deliveryman[] = [];

export default createReducer(initialState, (builder) => {
  builder.addCase(setDeliveryman, (state, action) => {
    return action.payload;
  });
});
