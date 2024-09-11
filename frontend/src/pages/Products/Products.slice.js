import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchProductsById } from "./Products.action";

const initialState = {
  loading: false,
  productList: [],
  filteredProducts: [],
  product: {},
  message: ''
}

const ProductSlice = createSlice({
  name: 'Products',
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
      .addCase(fetchProductsById.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchProductsById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload
      })
      .addCase(fetchProductsById.rejected, (state, action) => {
        state.loading = true
        state.message = action.payload
      })
  }
})

export default ProductSlice.reducer