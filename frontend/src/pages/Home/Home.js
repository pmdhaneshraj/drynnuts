import React, { useMemo } from 'react'
import { Button, Col, Rate, Row } from 'antd'
import cx from 'classnames'
import LocalShippingIcon from '@mui/icons-material/LocalShippingOutlined';

import styles from './Home.module.scss'
import ProductCard from '../../components/ProductCard'
import ProductList from '../../constants/Products.json'
import HeroSection from '../../features/HeroSection'

import ImgSvg from '../../assets/svg/5.svg'

const Home = () => {

  const products = useMemo(() => {
    return ProductList.data[0].products
  })

  return (
    <div className={styles.container}>
      <HeroSection />
      <section className={cx(styles.section, styles.valueProtion)}>
        <div className={styles.value}>Special Care</div>
        <div className={styles.value}>100% Quality</div>
        <div className={styles.value}>24/7 Support</div>
      </section>
      <section className={styles.section}>
        <h1 className={styles.header}>Top Products</h1>
        <Row className={styles.productContainer} gutter={[50, 50]}>
          {products.map(item => 
            <Col span={8} key={item.name}>
              <ProductCard name={item.name} imagePath={ImgSvg} rating={item.rating} />
            </Col>)}
        </Row>
      </section>
      <section className={styles.section}>
        <div className={styles.header} style={{ textAlign: 'center'}}>
          <LocalShippingIcon className={styles.localShippingIcon} fontSize='30' />
        </div>
        <div className={styles.valueProtion}>
          <div className={styles.transport}>
            <h3>Delivery Info</h3>
            <span>Fast delivery within 3-5 working days</span>
          </div>
          <div className={styles.transport}>
            <h3>Contact Us</h3>
            <span>Reach us at +91 78458 58553 or email drynnuts@gmail.com.</span>
          </div>
          <div className={styles.transport}>
            <h3>Payment Options</h3>
            <span>We accept UPI, Visa, Master card and Paypal.</span>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h1 className={styles.header}>Here our awesome users!</h1>
        <div className={styles.reviewContainer} gutter={[50, 50]}>
          <div span={8} className={styles.review}>
            <h1>Krishnachand N K</h1>
            <Rate disabled value={5} />
            <div className={styles.reviewContent}>Today I had a mixture of soaked dry nuts. the taste was ultimate and especially dates taste was yummy.<br /><br />Honest feedback from the heart.</div>
          </div>
          <div span={8} className={styles.review}>
            <h1>Krishnachand N K</h1>
            <Rate disabled value={5} />
            <div className={styles.reviewContent}>Today I had a mixture of soaked dry nuts. the taste was ultimate and especially dates taste was yummy. Honest feedback from the heart.</div>
          </div>
          <div span={8} className={styles.review}>
            <h1>Krishnachand N K</h1>
            <Rate disabled value={5} />
            <div className={styles.reviewContent}>Today I had a mixture of soaked dry nuts. the taste was ultimate and especially dates taste was yummy. Honest feedback from the heart.</div>
          </div>
        </div>
      </section>
      <section className={cx(styles.section)}>
        <div className={styles.couponContainer}>
          <h1 className={styles.header}>To keep healthy, eat tasty</h1>
          <span className={styles.textCenter}>Enjoy delicious, guilt-free treats with our exclusive offers. Grab your coupon now for a flavorful journey with Trufru products!</span>
          <Button className={styles.btn}>Get Coupon</Button>
        </div>
      </section>
    </div>
  )
}

export default Home