import { createAsyncThunk } from "@reduxjs/toolkit";
import { placeOrderApi } from "./Checkout.api";

export const placeOrder = createAsyncThunk('placeOrder', async (payload, thunkAPI) => {
  try {
    const response = await placeOrderApi(payload);
  } catch (error) {
    const message = error.message;
    return thunkAPI.rejectWithValue(message)
  }
})