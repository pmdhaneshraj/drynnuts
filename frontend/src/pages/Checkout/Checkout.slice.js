import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  cart: [],
  message: ''
}

const CheckoutSlice = createSlice({
  name: 'Checkout',
  initialState,
  reducers: {
    setItemsToCart: ((state, action) => {
      state.cart = action.payload
    })
  }
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchProducts.pending, (state, action) => {
  //       state.loading = true
  //     })
  //     .addCase(fetchProducts.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.productList = action.payload
  //     })
  //     .addCase(fetchProducts.rejected, (state, action) => {
  //       state.loading = true
  //       state.message = action.payload
  //     })
  // }
})

export const { setItemsToCart } = CheckoutSlice.actions
export default CheckoutSlice.reducer