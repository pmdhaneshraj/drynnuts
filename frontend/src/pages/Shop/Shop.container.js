import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux'

import Shop from './Shop'
import { getProducts } from "../Products/Products.selector";
import { fetchProducts } from "../Products/Products.action";

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({
    fetchProducts,
  }, dispatch)
})

const mapStateToProps = () => createStructuredSelector({
  products: getProducts
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop)