import React, { useCallback, useEffect, useState } from 'react'
import { Breadcrumb, Button, Carousel, Col, Radio, Rate, Row, Select } from 'antd'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import cx from 'classnames'

import styles from './ProductPreview.module.scss'
import ImgSvg from '../../assets/svg/5.svg'
import ProductSlider from '../../components/ProductSlider'

const ProductPreview = ({ action, product, products, cartItems }) => {
  const id = Cookies.get('productId');
  const navigate = useNavigate();
  const [price, setPrice] = useState(product?.priceList?.[0]?.price);
  const [formValue, setFormValue] = useState({ weight: 100, quantity: 1 });

  useEffect(() => {
    id ? action.fetchProductsById({ id }) : navigate('/shop');
    action.fetchProducts();
    window.scrollTo(0, 0)
  }, [action, id, navigate])

  useEffect(() => {
    setPrice(product?.priceList?.[0]?.price)
  }, [product])

  const onSelectWeight = useCallback((e) => {
    const { name, value } = e.target;
    const productPrice = product?.priceList?.find(item => item.weight === value)?.price;
    setPrice(productPrice)
    setFormValue(prev => ({ ...prev, [name]: value }))
  }, [setPrice, product, setFormValue])

  const onSelectQuantity = useCallback((value) => {
    setFormValue(prev => ({ ...prev, ['quantity']: value }))
  }, [setFormValue])

  const onClickAddToCart = useCallback(() => {
    const { id, name, priceList } = product
    const price = priceList?.find(item => item.weight === formValue.weight)?.price;
    const { weight, quantity: count } = formValue;
    const isExist = cartItems.find(item => item.weight === weight && item.id === id)
    if (isExist) {
      const updatedCartItem = cartItems.map(item => {
        if (item.id === id && item.weight === weight) {
          return { ...item, count: item.count + count }
        } return item
      })
      action.setItemsToCart(updatedCartItem)
    } else {
      action.setItemsToCart([...cartItems, { id, name, weight, price, count: count }])
    }
  }, [action, formValue, cartItems, product])

  return (
    <div className={styles.container} id='productPreview'>
      <Breadcrumb
        items={[
          {
            title: 'Home',
            onClick: () => navigate('/'),
            className: styles.breadcrumbItems
          },
          {
            title: 'Shop',
            onClick: () => navigate('/shop'),
            className: styles.breadcrumbItems
          },
          {
            title: 'Product',
          }
        ]}
      />
      <Row className={cx(styles.section, styles.row)}>
        <Col span={12} className={styles.imageContainer}>
          <Carousel autoplay>
            <img className={styles.image} src={ImgSvg} alt='ProductImg' />
            <img className={styles.image} src={ImgSvg} alt='ProductImg' />
            <img className={styles.image} src={ImgSvg} alt='ProductImg' />
            <img className={styles.image} src={ImgSvg} alt='ProductImg' />
          </Carousel>
        </Col>
        <Col span={12} className={styles.productContainer}>
          <h1 className={styles.title}>{product?.name}</h1>
          <div className={cx(styles.grid, styles.rating)}>
            <span className={styles.label}>Ratings:</span>
            <Rate className={styles.value} value={product?.rating} disabled />
          </div>
          <div className={cx(styles.grid, styles.price)}>
            <span className={styles.label}>Price:</span>
            <span className={styles.value}>{Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price)}</span>
          </div>
          <div className={cx(styles.grid, styles.weight)}>
            <span className={styles.label}>Weight:</span>
            <Radio.Group
              name='weight'
              className={styles.value}
              defaultValue={100}
              buttonStyle="solid"
              onChange={onSelectWeight}
              button
            >
              <Radio.Button value={100}>100g</Radio.Button>
              <Radio.Button value={250}>250g</Radio.Button>
              <Radio.Button value={500}>500g</Radio.Button>
              <Radio.Button value={1000}>1000g</Radio.Button>
            </Radio.Group>
          </div>
          <div className={cx(styles.grid, styles.quantity)}>
            <span className={styles.label}>Quantity: </span>
            <Select
              name='quantity'
              className={styles.value}
              defaultValue={1}
              onSelect={onSelectQuantity}
              options={Array(10).fill({}).map((item, index) => ({
                label: index + 1,
                value: index + 1,
              }))}
            />
          </div>
          <div className={styles.buttons}>
            <Button className={styles.button} onClick={onClickAddToCart}>Add to Cart</Button>
            <Button className={cx(styles.button, styles.checkoutBtn)}>Checkout</Button>
          </div>
        </Col>
      </Row>
      <section className={styles.section}>
        <h1>Description</h1>
        {product.description}
      </section>
      <section className={cx(styles.section, styles.otherProuducts)}>
        <h1>Similar Products</h1>
        <ProductSlider products={products} />
      </section>
    </div >
  )
}

export default ProductPreview