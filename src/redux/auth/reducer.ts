import { createSlice } from '@reduxjs/toolkit';

const initialState : any = {
  user: {},
  isLoading: false,
};

export const productsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    createUserStart: {
      reducer: (state) => {
        state.isLoading = true;
      },
      prepare: (value: { type: string, number: string }) => ({ payload: value }),
    },
    getUserSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  createUserStart,
  getUserSuccess,
} = productsSlice.actions;

export default productsSlice.reducer;
