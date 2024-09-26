import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


import styles from './Header.module.scss'
import NavLinks from 'components/NavLinks';
import Menu from 'components/Menu/Menu';
import CartIcon from 'features/CartIcon';
import Cookies from 'js-cookie';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container} id='header'>
      <Menu />
      <div className={styles.leftContent}>
        <div className={styles.logo}>
          <span className={styles.logo} onClick={() => navigate('/')}>DRY N NUTS</span>
        </div>
        <NavLinks className={styles.navLinks} />
      </div>
      <div className={styles.rightContent}>
        <CartIcon />
      </div>
    </div>
  )
}

export default Header