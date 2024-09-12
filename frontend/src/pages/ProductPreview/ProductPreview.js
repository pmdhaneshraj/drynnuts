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
              defaultValue={product?.priceList?.length !== 4 ? 100 : 500}
              buttonStyle="solid"
              onChange={onSelectWeight}
              button
            >
              {product?.priceList?.map(item => <Radio.Button value={item.weight}>{item.weight}g</Radio.Button>)}
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
        <h1 className={styles.title}>Description</h1>
        <div className={styles.description}>
          <p>Unsalted pistachios are a popular snack known for their rich flavor and numerous health benefits. These small, oval-shaped nuts are encased in a hard, beige shell that splits open when roasted. The inner nut has a distinctive green color and a slightly sweet, nutty taste.</p>
          <h3>Characteristics:</h3>
          <ul>
            <li><strong>Appearance:</strong> Typically, unsalted pistachios are found in their shells, which are beige and slightly textured. The nut inside is greenish and has a smooth, somewhat creamy texture.</li>
            <li><strong>Flavor:</strong> They have a mild, nutty flavor with a subtle sweetness. The absence of salt emphasizes their natural taste, which can be slightly buttery.</li>
            <li><strong>Texture:</strong> The nut is firm yet tender, offering a satisfying crunch without being overly hard.</li>
          </ul>
          <h3>Health Benefits:</h3>
          <ul>
            <li><strong>Nutritional Value:</strong> They are a rich source of protein, fiber, and healthy fats, including monounsaturated and polyunsaturated fats.</li>
            <li><strong>Heart Health:</strong> Their healthy fat content helps lower LDL cholesterol levels, promoting better heart health.</li>
            <li><strong>Antioxidants:</strong> High in antioxidants such as lutein and zeaxanthin, which support eye health and protect cells from oxidative damage.</li>
            <li><strong>Digestive Health:</strong> The fiber in pistachios aids digestion and promotes regular bowel movements.</li>
            <li><strong>Blood Sugar Control:</strong> The balance of protein, fiber, and healthy fats helps stabilize blood sugar levels.</li>
          </ul>
          <h3>Usage:</h3>
          <p>Unsalted pistachios can be enjoyed on their own as a snack, added to salads, yogurt, or oatmeal, or used in cooking and baking to provide a nutty flavor and added crunch. They’re a versatile ingredient that complements both sweet and savory dishes.</p>
        </div>
        {product.description}
      </section>
      <section className={cx(styles.section, styles.otherProuducts)}>
        <h1 className={styles.title}>Similar Products</h1>
        <ProductSlider products={products} />
      </section>
    </div >
  )
}

export default ProductPreview