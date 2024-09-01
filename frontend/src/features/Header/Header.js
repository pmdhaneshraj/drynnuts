import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import styles from './Header.module.scss'
import LogoSvg from '../../assets/svg/logo.svg'
import { Button } from 'antd'
import NavLinks from '../NavLinks'

const Header = () => {
  const [activeLink, setActiveLink] = useState();
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