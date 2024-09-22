import React from 'react'
import { Row, Col } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import styles from './Footer.module.scss';
import logo from '../../assets/svg/logo.svg'
import { SIDEMENU_ITEMS } from 'components/SideMenu/SideMenu.constants';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.platforms}>
        <h1 className={styles.header}>Find us here!</h1>
        <div className={styles.platformContents}>
          <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
          <FontAwesomeIcon className={styles.icon} icon={faWhatsapp} />
        </div>
      </div>
      <Row className={styles.footerTop}>
        <Col span={16}>
          <Row>
            <Col span={12}><h3><a className={styles.link} href='./shop'>Products</a></h3></Col>
            {(SIDEMENU_ITEMS
              .reduce((acc, item) => {
                if (item.hasOwnProperty('children')) {
                  acc.push(...item?.children);
                }
                return acc;
              }, [])
              .map(item =>
                <Col span={12}><p key={item.key}><a className={styles.link} href='./shop'>{item.label}</a></p></Col>)
            )}
          </Row>
        </Col>
        <Col span={8}>
          <h3><a className={styles.link} href='./about'>About Us</a></h3>
          <h3><a className={styles.link} href='./contact'>Contact Us</a></h3>
        </Col>
      </Row>
      <Row className={styles.footerBottom}>
        <Col span={12} className={styles.left}>
          © 2024 Dry 'N' Nuts.
        </Col>
        <Col span={12} className={styles.right}>
          <img className={styles.logo} src={logo} alt='logo' />
        </Col>
      </Row>
    </div >)
}

export default Footer