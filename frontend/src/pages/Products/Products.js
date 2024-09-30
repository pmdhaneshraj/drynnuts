import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'

import styles from './Products.module.scss'
import ProductCard from '../../components/ProductCard'
import ImgSvg from '../../assets/svg/cashew.svg'

const Products = ({ products = [], activeKey }) => {
  const [selectedProducts, setSelectedProducts] = useState(products);

  useEffect(() => {
    if (activeKey !== 'all') {
      setSelectedProducts(products.filter(item => item.type === activeKey))
    } else {
      setSelectedProducts(products)
    }
  }, [activeKey, products])

  return (
    <Row className={styles.container} gutter={[30, 30]}>
      {selectedProducts?.map(item =>
        <Col className={styles.col} span={6} key={item.name}>
          <ProductCard {...item} imagePath={ImgSvg} />
        </Col>)}
    </Row>
  )
}

export default Products