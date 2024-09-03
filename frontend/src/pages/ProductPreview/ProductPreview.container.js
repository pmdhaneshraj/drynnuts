import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux'

import ProductPreview from "./ProductPreview";
import { fetchProductsById } from "../Products/Products.action";
import { getProduct } from "../Products/Products.selector";


const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({
    fetchProductsById
  }, dispatch)
})

const mapStateToProps = () => createStructuredSelector({
  product: getProduct
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPreview)