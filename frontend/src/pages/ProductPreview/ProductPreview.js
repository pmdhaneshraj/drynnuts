import React, { useCallback, useEffect, useState } from 'react'
import { Breadcrumb, Button, Carousel, Col, Radio, Rate, Row, Select } from 'antd'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import cx from 'classnames'
import { isEmpty } from 'lodash'

import styles from './ProductPreview.module.scss'
import ProductSlider from '../../components/ProductSlider'
import { scrollToTop } from 'utils/utils'

const ProductPreview = ({ action, products, cartItems }) => {
  const productId = Cookies.get('productId');
  const navigate = useNavigate();
  const [product, setProduct] = useState({})
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(100);
  const [formValue, setFormValue] = useState({ weight: 100, quantity: 1 });

  useEffect(() => {
    scrollToTop()
  }, [productId])

  useEffect(() => {
    if (isEmpty(products)) {
      action.fetchProducts();
    }
  }, [action, products])

  useEffect(() => {
    if (typeof productId === 'string' && !isEmpty(products)) {
      const selectedProduct = products.find(item => item.productId === productId);
      setPrice(selectedProduct?.weights?.[0]?.price)
      setWeight(selectedProduct?.weights?.[0]?.weight)
      setProduct(selectedProduct)
    } else {
      navigate('/shop');
    }
  }, [productId, navigate, products])

  const onSelectWeight = useCallback((e) => {
    const { name, value } = e.target;
    const productPrice = product?.weights?.find(item => item.weight === value)?.price;
    setPrice(productPrice)
    setWeight(value)
    setFormValue(prev => ({ ...prev, [name]: value }))
  }, [setPrice, product, setFormValue])

  const onSelectQuantity = useCallback((value) => {
    setFormValue(prev => ({ ...prev, quantity: value }))
  }, [setFormValue])

  const onClickAddToCart = useCallback(() => {
    const { productId, weights } = product
    const { sku, price } = weights?.find(item => item.weight === formValue.weight);
    const { weight, quantity: count } = formValue;
    const isExist = cartItems.find(item => item.sku === sku && item.productId === productId)
    const productObj = { productId, sku, price, count: count }
    if (isExist) {
      const updatedCartItem = cartItems.map(item => {
        if (item.productId === productId && item.sku === sku) {
          return { ...item, count: item.count + count }
        } return item
      })
      action.setItemsToCart(updatedCartItem)
    } else {
      action.setItemsToCart([...cartItems, { ...productObj }])
    }
  }, [action, formValue, cartItems, product])

  return (
    <div className={styles.container} id='productPreview'>
      <Breadcrumb
        id='breadcrumb'
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
            {product?.images?.map((productImage, i) =>
              <img className={styles.image} key={productImage + i} src={productImage} alt='ProductImg' />
            )}
          </Carousel>
        </Col>
        <Col span={12} className={styles.productContainer}>
          <h1 className={styles.title}>{product?.name}</h1>
          {/* <div className={cx(styles.grid, styles.rating)}>
            <span className={styles.label}>Ratings:</span>
            <Rate className={styles.value} value={product?.rating} disabled />
          </div> */}
          <div className={cx(styles.grid, styles.price)}>
            <span className={styles.label}>Price:</span>
            <span className={styles.value}>{Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price)}</span>
          </div>
          <div className={cx(styles.grid, styles.weight)}>
            <span className={styles.label}>Weight:</span>
            <Radio.Group
              name='weight'
              className={cx(styles.value, styles.radio)}
              value={weight}
              buttonStyle="solid"
              onChange={onSelectWeight}
            >
              {product?.weights?.map(item => <Radio.Button key={item.weight} value={item.weight}>{item.weight}g</Radio.Button>)}
            </Radio.Group>
          </div>
          <div className={cx(styles.grid, styles.quantity)}>
            <span className={styles.label}>Quantity: </span>
            <Select
              name='quantity'
              className={cx(styles.value, styles.quantity)}
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
            <Button className={cx(styles.button, styles.checkoutBtn)} onClick={() => navigate('/checkout')}>Checkout</Button>
          </div>
        </Col>
      </Row>
      <section className={styles.section}>
        <h1 className={styles.title}>Description</h1>
        <div className={styles.description}>
          {product?.description}
        </div>
      </section>
      <section className={cx(styles.section, styles.otherProuducts)}>
        <h1 className={styles.title}>Similar Products</h1>
        <ProductSlider products={products} />
      </section>
    </div >
  )
}

export default ProductPreview