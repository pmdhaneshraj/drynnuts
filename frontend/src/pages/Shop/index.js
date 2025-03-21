import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux'

import Shop from './Shop'
import { getProducts } from "../Shop/Shop.selector";
import { fetchProducts } from "../Shop/Shop.action";

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({
    fetchProducts,
  }, dispatch)
})

const mapStateToProps = () => createStructuredSelector({
  products: getProducts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop)