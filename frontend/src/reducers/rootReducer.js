import { combineReducers } from "redux";
import ProductsSlice from "../pages/Products/Products.slice";

export const rootReducer = combineReducers({
  product: ProductsSlice
})