import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux'

import ProductPreview from "./ProductPreview";
import { fetchProducts } from "../Shop/Shop.action";
import { getProducts } from "../Shop/Shop.selector";
import { setItemsToCart } from "../Checkout/Checkout.slice";
import { getCartItems } from "../Checkout/Checkout.selector";

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({
    fetchProducts,
    setItemsToCart
  }, dispatch)
})

const mapStateToProps = () => createStructuredSelector({
  products: getProducts,
  cartItems: getCartItems
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPreview)