import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.scss'
import LogoSvg from '../../assets/svg/logo.svg'
import NavLinks from '../../components/NavLinks';
import Menu from '../../components/Menu/Menu';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.img} src={LogoSvg} alt='logo' />
        {/* <span className={styles.title}>DRY 'N' NUTS</span> */}
      </div>
      <NavLinks />
      <FontAwesomeIcon className={styles.cartIcon} icon={faCartShopping} size='xl' />
      <Menu />
    </div>
  )
}

export default Header