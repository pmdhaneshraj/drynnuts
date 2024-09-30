import { createSelector } from "reselect";

const CheckoutState = state => state.checkout;

export const getCartItems = createSelector(CheckoutState, substate => substate.cart)
export const getCartTotal = createSelector(CheckoutState, substate => {
  return substate.cart.reduce((acc, item) => {
    acc += (item.price * item.count);
    return acc;
  }, 0)
})