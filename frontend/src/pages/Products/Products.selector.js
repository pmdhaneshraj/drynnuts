import { createSelector } from "reselect";

const productState = state => state.product;

export const getProducts = createSelector(productState, substate => substate.productList)
export const getProduct = createSelector(productState, substate => substate.product)