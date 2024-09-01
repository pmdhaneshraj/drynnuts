import React from 'react'
import { Breadcrumb, Col, Row, Select } from 'antd'
import { useNavigate } from 'react-router-dom'

import styles from './ProductPreview.module.scss'
import sampleProduct from '../../constants/Products.json'

const ProductPreview = () => {
  // "title": "Whole Cashew",
  // "description": "White premium whole cashew",
  // "image": "https://images.unsplash.com/photo-1615485925873-7ecbbe90a866?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // "priceList": [
  //   {
  //     "100": 70,
  //     "250": 150,
  //     "500": 350,
  //     "1000": 700
  //   }
  // ],s
  // "rating": 5,
  // "reviews": []
  const { title, description, image, priceList, rating, reviews } = sampleProduct.data[0].products[0];
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Breadcrumb
        className={styles.breadcrumb}
        items={[
          {
            title: 'Home',
            onClick: () => navigate('/')
          },
          {
            title: 'Shop',
            onClick: () => navigate('/shop')
          },
          {
            title: 'ProductName',
          }
        ]}
      />
      <Row className={styles.productContent}>
        <Col span={12} className={styles.imageContainer}>
          <img className={styles.image} src={image} alt='ProductImg' />
        </Col>
        <Col span={12} className={styles.productContainer}>
          <h1>{title}</h1>
          <Select
            className={styles.select}
            options={Object.keys(priceList).map(item => ({
              label: item,
              value: item,
            }))}
          />
        </Col>
      </Row>
    </div>
  )
}

export default ProductPreview