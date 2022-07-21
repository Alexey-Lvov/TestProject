import { createSlice } from '@reduxjs/toolkit';

const initialState : any = {
  products: [],
  topProducts: [],
  isLoading: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsStart: (state) => {
      state.isLoading = true;
    },
    getProductsSuccess: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    getProductsFail: (state) => {
      state.isLoading = false;
    },
    getTopProductsStart: (state) => {
      state.isLoading = true;
    },
    getTopProductsSuccess: (state, action) => {
      state.topProducts = action.payload;
      state.isLoading = false;
    },
    getTopProductsFail: (state) => {
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFail,
  getTopProductsStart,
  getTopProductsSuccess,
  getTopProductsFail,
} = productsSlice.actions;

export default productsSlice.reducer;
