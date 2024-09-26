import React, { useCallback } from 'react'
import { Row, Col } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom';

import styles from './Footer.module.scss';
import logo from '../../assets/svg/logo.svg'
import { SIDEMENU_ITEMS } from 'components/SideMenu/SideMenu.constants';

const Footer = () => {
  const navigate = useNavigate();

  const onIconClick = useCallback((name) => {
    if (name === 'insta') {
      window.open('https://www.instagram.com/dry.n.nuts', '_blank')
    }
    if (name === 'wasap') {
      window.open('https://wa.me/7845858553', '_blank')
    }
  })

  return (
    <div className={styles.container}>
      <div className={styles.platforms}>
        <h1 className={styles.header}>Follow here!</h1>
        <div className={styles.platformContents}>
          <FontAwesomeIcon className={styles.icon} icon={faInstagram} onClick={() => onIconClick('insta')} />
          <FontAwesomeIcon className={styles.icon} icon={faWhatsapp} onClick={() => onIconClick('wasap')} />
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
                <Col span={12} key={item.key}><p><a className={styles.link} href='./shop'>{item.label}</a></p></Col>)
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