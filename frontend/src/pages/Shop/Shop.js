import React, { useEffect, useState } from 'react'
import { Breadcrumb, Col, Row } from 'antd'
import { useNavigate } from 'react-router-dom'

import styles from './Shop.module.scss'

import SideMenu from '../../components/SideMenu/SideMenu'
import Products from '../Products'

const Shop = ({ action }) => {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState('all');

  useEffect(() => {
    if (activeKey !== 'all') {
      action.fetchProducts({ type: activeKey })
    } else {
      action.fetchProducts()
    }
  }, [action, activeKey])

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
        <Col span={5}>
          <SideMenu activeKey={activeKey} setActiveKey={setActiveKey} />
        </Col>
        <Col span={19}>
          <Products />
        </Col>
      </Row>
    </div>
  )
}

export default Shop