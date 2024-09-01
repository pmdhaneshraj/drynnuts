import React from 'react'
import { Row, Col } from 'antd'
import { Instagram, WhatsApp } from '@mui/icons-material';

import styles from './Footer.module.scss';
import logo from '../../assets/svg/logo.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col span={8} className={styles.left}>
          <img className={styles.logo} src={logo} alt='logo' />
        </Col>
        <Col span={8} className={styles.middle}>
          <Link className={styles.link} to={'/products'}>Products</Link>
          <Link className={styles.link} to={'/about'}>About</Link>
          <Link className={styles.link} to={'/contact'}>Contact Us</Link>
        </Col>
        <Col span={8} className={styles.right}>
          Follow Us:
          <Instagram className={styles.icon} />
          <WhatsApp className={styles.icon} />
        </Col>
      </Row>
      <div className={styles.rights}>
        © 2024 Dry N Nuts. All Rights Reserved.
      </div>
    </div>)
}

export default Footer