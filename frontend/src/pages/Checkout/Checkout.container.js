import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux'

import Checkout from "./Checkout";
import { getCartItems } from "./Checkout.selector";
import { setItemsToCart } from "./Checkout.slice";

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({
    setItemsToCart
  }, dispatch)
})

const mapStateToProps = () => createStructuredSelector({
  cartItem: getCartItems
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)