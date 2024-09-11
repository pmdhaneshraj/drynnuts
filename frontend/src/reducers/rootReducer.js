import { combineReducers } from "redux";
import ProductsSlice from "../pages/Products/Products.slice";
import CheckoutSlice from "../pages/Checkout/Checkout.slice";

export const rootReducer = combineReducers({
  product: ProductsSlice,
  checkout: CheckoutSlice
})