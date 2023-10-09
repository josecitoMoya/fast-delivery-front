import { Deliveryman } from '@/types/deliveryman.types';
import { createSlice } from '@reduxjs/toolkit';

const deliverymanSlice = createSlice({
  name: 'deliveryman',
  initialState: null as Deliveryman | null,
  reducers: {
    setDeliveryman: (state, action) => {
      return action.payload;
    },
  },
});

export const { setDeliveryman } = deliverymanSlice.actions;
export default deliverymanSlice.reducer;
