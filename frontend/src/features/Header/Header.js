import React from 'react'

import styles from './Header.module.scss'
import LogoSvg from '../../assets/svg/logo.svg'
import NavLinks from '../NavLinks'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.img} src={LogoSvg} />
        {/* <span className={styles.title}>DRY 'N' NUTS</span> */}
      </div>
      <NavLinks />
    </div>
  )
}

export default Header