import React, { useEffect, useState } from 'react'
import { Breadcrumb, Col, Row } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'

import styles from './Shop.module.scss'

import SideMenu from '../../components/SideMenu/SideMenu'
import Products from '../Products'
import { isEmpty } from 'lodash'

const Shop = ({ action, products }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeKey, setActiveKey] = useState('all');

  useEffect(() => {
    if (isEmpty(products)) {
      action.fetchProducts()
    }
  }, [action, products])

  useEffect(() => {
    if (location?.state) {
      const stateValue = location.state
      setActiveKey(stateValue.value)
    }
  }, [location])

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
        }
      ]} />
      <Row className={styles.row} gutter={[20]}>
        <Col className={styles.col1} span={5}>
          <SideMenu activeKey={activeKey} setActiveKey={setActiveKey} />
        </Col>
        <Col className={styles.col2} span={19}>
          <Products activeKey={activeKey} />
        </Col>
      </Row>
    </div>
  )
}

export default Shop