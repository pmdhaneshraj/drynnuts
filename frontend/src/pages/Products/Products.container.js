import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux'

import Products from './Products'
import { getProducts } from "./Products.selector";
import { fetchProducts } from "./Products.action";

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({
    fetchProducts
  }, dispatch)
})

const mapStateToProps = () => createStructuredSelector({
  products: getProducts
});

export default connect(mapStateToProps, mapDispatchToProps)(Products)