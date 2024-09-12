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
})

export const { setItemsToCart } = CheckoutSlice.actions
export default CheckoutSlice.reducer