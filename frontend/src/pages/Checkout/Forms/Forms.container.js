import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux'

import Forms from "./Forms";
import { setItemsToCart } from "../Checkout.slice";
import { getCartItems } from "../Checkout.selector";
import { placeOrderApi } from "../Checkout.api";

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({
    setItemsToCart,
    placeOrderApi
  }, dispatch)
})

const mapStateToProps = () => createStructuredSelector({
  cartItems: getCartItems
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms)