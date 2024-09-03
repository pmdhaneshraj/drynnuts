import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux'

import Home from "./Home";
import { fetchProducts } from "../Products/Products.action";
import { getProducts } from "../Products/Products.selector";


const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({
    fetchProducts
  }, dispatch)
})

const mapStateToProps = () => createStructuredSelector({
  products: getProducts
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)