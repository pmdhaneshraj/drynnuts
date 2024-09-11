import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux'

import ProductPreview from "./ProductPreview";
import { fetchProducts, fetchProductsById } from "../Products/Products.action";
import { getProduct, getProducts } from "../Products/Products.selector";
import { setItemsToCart } from "../Checkout/Checkout.slice";
import { getCartItems } from "../Checkout/Checkout.selector";

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({
    fetchProducts,
    fetchProductsById,
    setItemsToCart
  }, dispatch)
})

const mapStateToProps = () => createStructuredSelector({
  product: getProduct,
  products: getProducts,
  cartItems: getCartItems
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPreview)