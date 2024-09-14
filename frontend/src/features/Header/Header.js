import React from 'react'
import { useNavigate } from 'react-router-dom';


import styles from './Header.module.scss'
import NavLinks from 'components/NavLinks';
import Menu from 'components/Menu/Menu';
import CartIcon from 'components/CartIcon';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <div className={styles.logo}>
          <span className={styles.logo} onClick={() => navigate('/')}>D.N.N</span>
        </div>
        <NavLinks />
      </div>
      <Menu />
      <CartIcon />
    </div>
  )
}

export default Header