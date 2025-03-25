import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import { fetchOrderDetailsApi } from "./TrackOrder.api";

export const fetchOrderDetails = createAsyncThunk('fetchOrderDetails', async (params, thunkAPI) => {
  try {
    const response = await fetchOrderDetailsApi(params);
    if (response.data.error) {
      throw new Error(response.data.data)
    }
    return response.data.data
  } catch (error) {
    const message = error.message;
    toast.error(message)
    return thunkAPI.rejectWithValue(message);
  }
});