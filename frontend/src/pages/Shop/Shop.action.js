import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductsApi } from './Shop.api';

export const fetchProducts = createAsyncThunk('fetchProducts', async (params, thunkAPI) => {
  try {
    const response = await fetchProductsApi(params);
    return response.data
  } catch (error) {
    const message = error.message;
    return thunkAPI.rejectWithValue(message)
  }
})

export const fetchProductsById = createAsyncThunk('fetchProductById', async (params, thunkAPI) => {
  try {
    const response = await fetchProductsApi(params);
    return response.data
  } catch (error) {
    const message = error.message;
    return thunkAPI.rejectWithValue(message)
  }
})