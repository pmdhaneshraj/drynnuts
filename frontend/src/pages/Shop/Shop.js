import React from 'react'

import styles from './Shop.module.scss'
import SideMenu from '../../features/SideMenu'
import { Breadcrumb, Col, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'

const Shop = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Breadcrumb items={[
        {
          title: 'Home',
          onClick: () => navigate('/')
        },
        {
          title: 'Shop'
        }
      ]} />
      <Row className={styles.row} gutter={[20]}>
        <Col span={5}>
          <SideMenu />
        </Col>
        <Col span={19} className={styles.productContainer}>
          <ProductCard />
        </Col>
      </Row>
    </div>
  )
}

export default Shop