import { Deliveryman } from '@/types/deliveryman.types';
import { createSlice } from '@reduxjs/toolkit';

const deliverymansSlice = createSlice({
  name: 'deliveryman',
  initialState: [] as Deliveryman[] | null,
  reducers: {
    setDeliverymans: (state, action) => {
      return action.payload;
    },
  },
});

export const { setDeliverymans } = deliverymansSlice.actions;
export default deliverymansSlice.reducer;
