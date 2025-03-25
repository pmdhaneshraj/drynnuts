import React, { useEffect, useState } from 'react'
import { Breadcrumb, Col, Row } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { isEmpty } from 'lodash'

import styles from './Shop.module.scss'

import SideMenu from '../../components/SideMenu/SideMenu'
import ProductCard from 'components/ProductCard'
import ImgSvg from '../../assets/svg/cashew.svg'

const Shop = ({ action, products }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeKey, setActiveKey] = useState('all');
  const [selectedProducts, setSelectedProducts] = useState(products);

  useEffect(() => {
    if (isEmpty(products)) {
      action.fetchProducts()
    }
  }, [action, products])

  useEffect(() => {
    if (activeKey !== 'all') {
      setSelectedProducts(products.filter(item => item.type === activeKey || item.category === activeKey))
    } else {
      setSelectedProducts(products)
    }
  }, [activeKey, products])


  useEffect(() => {
    if (location?.state) {
      const stateValue = location.state
      console.log({ stateValue })
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
      <Row className={styles.shopRow} gutter={[20]}>
        <Col className={styles.sideMenuColumn} span={5}>
          <SideMenu activeKey={activeKey} setActiveKey={setActiveKey} />
        </Col>
        <Col className={styles.productsColumn} span={19}>
          {selectedProducts?.map(item =>
            <ProductCard key={item.id} {...item} imagePath={ImgSvg} />
          )}
        </Col>
      </Row>
    </div >
  )
}

export default Shop