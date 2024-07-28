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
        //decrement
      decremented() {},
        //reset
      reset() {},
    },
});
export const { incremented } = counterSlice.actions;
export default counterSlice.reducer;