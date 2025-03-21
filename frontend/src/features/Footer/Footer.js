import React, { useCallback } from 'react'
import { Row, Col } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import logo from '../../assets/svg/logo.svg'
import { PRODUCTS_LIST } from 'pages/Shop/Shop.constants';

const Footer = () => {
  const onIconClick = useCallback((name) => {
    if (name === 'insta') {
      window.open('https://www.instagram.com/dry.n.nuts', '_blank')
    }
    if (name === 'wasap') {
      window.open('https://wa.me/7845858553', '_blank')
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.platforms}>
        <h1 className={styles.header}>Follow here!</h1>
        <div className={styles.platformContents}>
          <FontAwesomeIcon className={styles.icon} icon={faInstagram} onClick={() => onIconClick('insta')} />
          <FontAwesomeIcon className={styles.icon} icon={faWhatsapp} onClick={() => onIconClick('wasap')} />
        </div>
      </div>
      <Row className={styles.footerTop} gutter={[50]}>
        {PRODUCTS_LIST
          .reduce((acc, item) => {
            if (item.hasOwnProperty('children')) {
              acc.push(item);
            }
            return acc;
          }, [])
          .map((item) =>
            <Col span={6} key={item.label}>
              <h3><Link to='/shop' state={{ isCategory: true, value: item.key }} className={styles.link} >{item.label}</Link></h3>
              {item?.children.map(childItem =>
                <p key={childItem.label}>
                  <Link to='/shop' state={{ isCategory: false, value: childItem.key }} className={styles.link} >{childItem.label}</Link>
                </p>)}
            </Col>)
        }
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