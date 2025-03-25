import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux'

import TrackOrder from "./TrackOrder";

import { fetchOrderDetails } from "./TrackOrder.action";
import { getOrderDetails } from "./TrackOrder.selector";

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({
    fetchOrderDetails
  }, dispatch)
})

const mapStateToProps = () => createStructuredSelector({
  orderDetails: getOrderDetails
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackOrder)