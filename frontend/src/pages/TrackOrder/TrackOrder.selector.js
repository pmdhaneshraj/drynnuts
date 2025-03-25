import { createSelector } from "reselect";

const orderState = state => state.order;

export const getLoading = createSelector(orderState, substate => substate.loading)
export const getOrderDetails = createSelector(orderState, substate => substate.orderDetails)