import React from 'react'


import styles from './Header.module.scss'
import LogoSvg from '../../assets/svg/logo.svg'
import NavLinks from '../../components/NavLinks';
import Menu from '../../components/Menu/Menu';
import CartIcon from '../../components/CartIcon';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <div className={styles.logo}>
          <img className={styles.img} src={LogoSvg} alt='logo' />
          {/* <span className={styles.title}>DRY 'N' NUTS</span> */}
        </div>
        <NavLinks />
      </div>
      <Menu />
      <CartIcon />
    </div>
  )
}

export default Header