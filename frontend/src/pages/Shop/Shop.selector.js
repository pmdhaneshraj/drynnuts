import { createSelector } from "reselect";

const productState = state => state.shop;

export const getProducts = createSelector(productState, substate => substate.productList)
export const getProduct = (productId, sku) => createSelector(getProducts, productList => {
  const { name, imagePath, weights } = productList.find(item => item.productId === productId)
  const { weight, price } = weights.find(item => item.sku === sku);
  return { name, imagePath, weight, price }
})