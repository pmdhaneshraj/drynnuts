import React from 'react'
import { useNavigate } from 'react-router-dom';


import styles from './Header.module.scss'
import NavLinks from 'components/NavLinks';
import Menu from 'components/Menu/Menu';
import CartIcon from 'features/CartIcon';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Menu />
      <div className={styles.leftContent}>
        <div className={styles.logo}>
          <span id='logo' className={styles.logo} onClick={() => navigate('/')}>DRY N NUTS</span>
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