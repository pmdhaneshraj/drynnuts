import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import cx from 'classnames'

import styles from './NavLinks.module.scss'

const NavLinks = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    setActive(location.pathname)
  }, [location])

  return (
    <div className={styles.container}>
      <Link className={cx(styles.link, active === '/' && styles.active)}>Home</Link>
      <Link className={cx(styles.link, (active === '/shop' || active === '/product') && styles.active)} to='/shop'>Shop</Link>
      <Link className={cx(styles.link, active === '/about' && styles.active)} to='/about'>About Us</Link>
      <Link className={cx(styles.link, active === '/contact' && styles.active)} to='/contact'>Contact Us</Link>
    </div>
  )
}

export default NavLinks