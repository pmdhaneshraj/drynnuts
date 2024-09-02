import React, { useMemo } from 'react'

import styles from './Products.module.scss'
import { Col, Row } from 'antd'
import ProductCard from '../../components/ProductCard'
import ProductList from '../../constants/Products.json'
import ImgSvg from '../../assets/svg/5.svg'

const Products = () => {
  const products = useMemo(() => {
    return ProductList.products
  })

  return (
    <Row className={styles.container} gutter={[30, 30]}>
      {products.map(item =>
        <Col span={8} key={item.name}>
          <ProductCard name={item.name} imagePath={ImgSvg} rating={item.rating} />
        </Col>)}
    </Row>
  )
}

export default Products