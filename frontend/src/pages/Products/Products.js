import React, { useEffect, useState } from 'react'

import styles from './Products.module.scss'
import { Col, Row } from 'antd'
import ProductCard from '../../components/ProductCard'
import ImgSvg from '../../assets/svg/5.svg'

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
        <Col className={styles.col} span={8} key={item.name}>
          <ProductCard {...item} imagePath={ImgSvg} />
        </Col>)}
    </Row>
  )
}

export default Products