import React from 'react'
import { Breadcrumb, Col, Form, Row, Select } from 'antd'
import { useNavigate } from 'react-router-dom'

import styles from './ProductPreview.module.scss'
import ProductList from '../../constants/Products.json'
import ImgSvg from '../../assets/svg/5.svg'

const ProductPreview = ({ imagePath }) => {
  const { name, description, image, priceList, rating, reviews } = ProductList.products[0];
  const navigate = useNavigate();

  return (
    <Row className={styles.container}>
      <Col span={12} className={styles.imageContainer}>
        <img className={styles.image} src={ImgSvg} alt='ProductImg' />
      </Col>
      <Col span={12} className={styles.productContainer}>
        <h1>{name}</h1>
        <Select
          className={styles.select}
          options={Object.keys(priceList).map(item => ({
            label: item,
            value: item,
          }))}
        />
      </Col>
    </Row>
  )
}

export default ProductPreview