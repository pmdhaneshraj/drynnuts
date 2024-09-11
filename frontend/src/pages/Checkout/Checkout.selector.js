import { createSelector } from "reselect";

const CheckoutState = state => state.checkout;

export const getCartItems = createSelector(CheckoutState, substate => substate.cart)