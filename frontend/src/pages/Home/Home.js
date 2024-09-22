import React, { useEffect } from 'react'
import { Button, Col, Rate, Row } from 'antd'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons'

import styles from './Home.module.scss'
import ProductCard from '../../components/ProductCard'
import HeroSection from '../../features/HeroSection'
import ImgSvg from '../../assets/svg/5.svg'

const Home = ({ action, products }) => {

  useEffect(() => {
    action.fetchProducts()
  }, [action])

  return (
    <div className={styles.container}>
      <HeroSection />
      <section className={cx(styles.section, styles.valueProtion)}>
        <div className={styles.value}>Special Care</div>
        <div className={styles.value}>100% Quality</div>
        <div className={styles.value}>24/7 Support</div>
      </section>
      <section className={styles.section}>
        <h1 className={cx(styles.header, styles.topProductHeader)}>Top Products</h1>
        <Row className={styles.productContainer} gutter={[50, 50]}>
          {products?.slice(0, 6).map(item =>
            <Col className={styles.products} span={8} key={item.name}>
              <ProductCard {...item} imagePath={ImgSvg} />
            </Col>)}
        </Row>
      </section>
      <section className={styles.section}>
        <div className={styles.header} style={{ textAlign: 'center' }}>
          <h1 className={styles.transportHeader}><FontAwesomeIcon className={styles.icon} icon={faTruck} /></h1>
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
            <h1>Monisha</h1>
            <Rate disabled value={5} />
            <div className={styles.reviewContent}>Packing was really good. And loved the taste of dry pineapple and amla <br /><br />Also the crispness of cashews is so good. All the dry fruits tasted better. <br /><br />Will bug again for sure.</div>
          </div>
          <div span={8} className={styles.review}>
            <h1>Shree</h1>
            <Rate disabled value={5} />
            <div className={styles.reviewContent}>Product seems superb quality and good packaging... Keep it up.</div>
          </div>
        </div>
      </section>
      <section className={cx(styles.section, styles.grayBg)}>
        <div className={styles.couponContainer}>
          <h1 className={styles.couponHeader}>To keep healthy, eat tasty</h1>
          <span className={styles.couponDescription}>Enjoy delicious, guilt-free treats with our exclusive offers. Grab your coupon now for a flavorful journey with our products!</span>
          <Button className={styles.btn}>Get Coupon</Button>
        </div>
      </section>
    </div>
  )
}

export default Home