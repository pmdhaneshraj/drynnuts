import { createSlice } from "@reduxjs/toolkit";
import { fetchOrderDetails } from "./TrackOrder.action";

const initialState = {
  loading: false,
  orderDetails: {},
  error: ''
}

const OrderSlice = createSlice({
  name: 'TrackOrder',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderDetails.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchOrderDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.orderDetails = action.payload
      })
      .addCase(fetchOrderDetails.rejected, (state, action) => {
        state.loading = false;
        state.orderDetails = {}
        state.error = action.payload
      })
  }
})

export default OrderSlice.reducer