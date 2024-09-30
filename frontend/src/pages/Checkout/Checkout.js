import React, { act, useState } from 'react'
import styles from './Checkout.module.scss'
import { Breadcrumb, Steps } from 'antd'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faLocationDot, faRectangleList } from '@fortawesome/free-solid-svg-icons'

import Forms from './Forms'
import BillingAndShipping from './Forms'

const Checkout = ({ ...props }) => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0)

  return (
    <div className={styles.container}>
      <Breadcrumb items={[
        {
          title: 'Home',
          onClick: () => navigate('/'),
          className: styles.breadcrumbItems
        },
        {
          title: 'Shop',
          onClick: () => navigate('/shop'),
          className: styles.breadcrumbItems
        },
        {
          title: 'Checkout',
          onClick: () => navigate('/checkout'),
          className: styles.breadcrumbItems
        }
      ]} />
      <BillingAndShipping {...props} />
    </div>
  )
}

export default Checkout