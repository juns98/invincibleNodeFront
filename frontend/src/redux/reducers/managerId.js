import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const testId = 2273856;

let initialState = {
  value: 2273856
}

export const managerIdReducer = createSlice({
  name: 'managerId',
  initialState,
  reducers: {
    setId: (state, action) => {
        state.value = action.payload;
    }
  },
});

export const { setId } = managerIdReducer.actions;
export const selectManagerId = (state) => state.managerId.value;    
export default managerIdReducer.reducer;
