import React from 'react'

import styles from './Products.module.scss'
import { Col, Row } from 'antd'
import ProductCard from '../../components/ProductCard'
import ImgSvg from '../../assets/svg/5.svg'

const Products = ({ products = [] }) => {
  return (
    <Row className={styles.container} gutter={[30, 30]}>
      {products?.map(item =>
        <Col span={8} key={item.name}>
          <ProductCard {...item} imagePath={ImgSvg} />
        </Col>)}
    </Row>
  )
}

export default Products