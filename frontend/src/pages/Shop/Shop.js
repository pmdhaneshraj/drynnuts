import React, { useEffect, useMemo, useState } from 'react'
import { Breadcrumb, Col, Row } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'

import styles from './Shop.module.scss'

import SideMenu from '../../features/SideMenu'
import Products from '../Products'

const Shop = ({ action }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeKey, setActiveKey] = useState('all');

  useEffect(() => {
    if (activeKey !== 'all') {
      action.fetchProducts({ type: activeKey })
    } else {
      action.fetchProducts()
    }
  }, [action, activeKey])

  const breadcrumbItems = useMemo(() => {
    return location.pathname.split('/')
      .filter(n => n)
      .map((item, index, arr) => {
        if (arr.length - 1 === index) {
          return {
            title: item,
          }
        } return {
          title: item,
          onClick: () => navigate(`/${item}`),
          className: styles.breadcrumbItems
        }
      })
  }, [location, navigate])

  return (
    <div className={styles.container}>
      <Breadcrumb items={[
        {
          title: 'Home',
          onClick: () => navigate('/'),
          className: styles.breadcrumbItems
        },
        ...breadcrumbItems
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