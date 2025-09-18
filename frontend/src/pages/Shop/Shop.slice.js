import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./Shop.action";

const initialState = {
  loading: false,
  productList: [],
  filteredProducts: [],
  product: {},
  message: ''
}

const ShopSlice = createSlice({
  name: 'Shop',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productList = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = true
        state.message = action.payload
      })
  }
})

export default ShopSlice.reducer