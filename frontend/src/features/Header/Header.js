import React from 'react'

import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        {/* <img className={styles.img} src={LogoSvg} /> */}
        <span className={styles.title}>DRY 'N' NUTS</span>
      </div>
      <div className={styles.linkes}>
        <Link className={styles.link}>Shop</Link>
        <Link className={styles.link}>About</Link>
        <Link className={styles.link}>Login/sign up</Link>
      </div>
    </div>
  )
}

export default Header