import React, { useState } from 'react'
import styles from './Checkout.module.scss'
import { Breadcrumb, Steps } from 'antd'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faLocationDot, faRectangleList } from '@fortawesome/free-solid-svg-icons'

import Forms from './Forms'

const Checkout = ({ action, cartItems }) => {
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
      <Steps
        className={styles.steps}
        current={current}
        items={[
          {
            title: 'Order preview',
            icon: <FontAwesomeIcon icon={faRectangleList} />
          },
          {
            title: 'Address details',
            icon: <FontAwesomeIcon icon={faLocationDot} />
          },
          {
            title: 'Payment',
            icon: <FontAwesomeIcon icon={faCreditCard} />
          }
        ]}
      />
      <div className={styles.stepsContent}>
        <Forms current={current} setCurrent={setCurrent} />
      </div>
    </div>
  )
}

export default Checkout