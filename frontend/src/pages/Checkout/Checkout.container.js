import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux'

import Checkout from "./Checkout";
import { getCartItems, getCartTotal } from "./Checkout.selector";
import { setItemsToCart } from "./Checkout.slice";
import { placeOrder } from "./Checkout.action";

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({
    setItemsToCart,
    placeOrder
  }, dispatch)
})

const mapStateToProps = () => createStructuredSelector({
  cartItems: getCartItems,
  subtotal: getCartTotal
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)