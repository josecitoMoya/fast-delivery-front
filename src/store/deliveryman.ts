import { createAction, createReducer } from '@reduxjs/toolkit';
import { DeliverymanType } from '@/types/deliveryMan.type';
export const setDeliveryman = createAction('SET_DELIVERYMAN');

const initialState: DeliverymanType[] = [];

export default createReducer(initialState, (builder) => {
  builder.addCase(setDeliveryman, (state, action) => {
    return action.payload;
  });
});
