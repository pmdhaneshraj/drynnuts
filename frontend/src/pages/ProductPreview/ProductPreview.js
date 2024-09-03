import React, { useEffect } from 'react'
import { Col, Row, Select } from 'antd'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

import styles from './ProductPreview.module.scss'
import ImgSvg from '../../assets/svg/5.svg'

const ProductPreview = ({ action, product }) => {
  const id = Cookies.get('productId');
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      action.fetchProductsById({ id })
    } else {
      navigate('/shop')
    }
  }, [action, id, navigate])

  return (
    <Row className={styles.container}>
      <Col span={12} className={styles.imageContainer}>
        <img className={styles.image} src={ImgSvg} alt='ProductImg' />
      </Col>
      <Col span={12} className={styles.productContainer}>
        <h1>{product?.name}</h1>
        <Select
          className={styles.select}
          options={product?.priceList?.map(item => ({
            label: item.weight,
            value: item.weight,
          }))}
        />
      </Col>
    </Row>
  )
}

export default ProductPreview