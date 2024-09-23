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
    action.fetchProducts()
  }, [action])

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