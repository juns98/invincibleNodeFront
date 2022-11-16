import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

let initialState = {
  value: 0
}

export const counterReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add : (state,action) => {
        state.value += action.payload;
    },
    subtract : (state) => {
        state.value -= 1;
    }
  },
});

export const { add } = counterReducer.actions;
export const selectCounter = (state) => state.counter.value;

export default counterReducer.reducer;
