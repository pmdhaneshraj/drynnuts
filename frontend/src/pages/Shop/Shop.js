import React, { useEffect, useMemo } from 'react'

import styles from './Shop.module.scss'
import SideMenu from '../../features/SideMenu'
import { Breadcrumb, Col, Row } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'

const Shop = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
  }, [location])

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
          <SideMenu />
        </Col>
        <Col span={19}>
          <Outlet />
        </Col>
      </Row>
    </div>
  )
}

export default Shop