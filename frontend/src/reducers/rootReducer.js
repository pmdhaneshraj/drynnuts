import { combineReducers } from "redux";

import ShopSlice from "pages/Shop/Shop.slice";
import CheckoutSlice from "../pages/Checkout/Checkout.slice";
import TrackOrderSlice from "pages/TrackOrder/TrackOrder.slice";

export const rootReducer = combineReducers({
  shop: ShopSlice,
  checkout: CheckoutSlice,
  order: TrackOrderSlice
})