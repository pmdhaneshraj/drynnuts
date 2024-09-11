import React from 'react'
import { Row, Col } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import styles from './Footer.module.scss';
import logo from '../../assets/svg/logo.svg'

const Footer = () => {
  return (
    <div className={styles.container}>
      <Row className={styles.row1}>
        <Col span={8} className={styles.left}>
          <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
          <FontAwesomeIcon className={styles.icon} icon={faWhatsapp} />
        </Col>
        <Col span={16} className={styles.right}>
          <Row>
            <Col span={8}>
              <h3><a className={styles.link} href='./shop'>Products</a></h3>
              {['Cashew', 'Almond', 'Pistachios', 'Rasins',
              ].map(item => <p key={item}>
                <a className={styles.link} href='./shop'>{item}</a>
              </p>)}
            </Col>
            <Col span={8}>
              <h3><a className={styles.link} href='./about'>About Us</a></h3>
            </Col>
            <Col span={8}>
              <h3><a className={styles.link} href='./contact'>Contact Us</a></h3>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className={styles.row2}>
        <Col span={12} className={styles.left}>
          © 2024 Dry 'N' Nuts.
        </Col>
        <Col span={12} className={styles.right}>
          <img className={styles.logo} src={logo} alt='logo' />
        </Col>
      </Row>
    </div>)
}

export default Footer