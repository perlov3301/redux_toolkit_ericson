// DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number; 
}
const initialState: CounterState = {
    value: 0,
};
const counterSlice =  createSlice({
    name: 'counter',
    initialState,
    reducers: {
      incremented(state) {
//under the hood 'immer' makes it immutablea
        state.value++;
      },
//second slice: add a specific number
      amountAdded(state, 
          action: PayloadAction<number>) {
        state.value=state.value+action.payload;
      }
        //decrement
     // decremented() {},
        //reset
      //reset() {},
    },
});
export const { incremented,
      amountAdded,
 } = counterSlice.actions;
export default counterSlice.reducer;