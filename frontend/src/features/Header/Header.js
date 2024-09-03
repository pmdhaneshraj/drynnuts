import React from 'react'

import styles from './Header.module.scss'
import LogoSvg from '../../assets/svg/logo.svg'
import NavLinks from '../NavLinks'
import Menu from '../Menu'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.img} src={LogoSvg} alt='logo' />
        {/* <span className={styles.title}>DRY 'N' NUTS</span> */}
      </div>
      <NavLinks />
      <Menu />
    </div>
  )
}

export default Header