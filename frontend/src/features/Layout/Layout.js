import React, { useEffect } from 'react'

import styles from './Layout.module.scss'
import Header from '../Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer'
import { scrollToTop } from 'utils/utils'

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [location])

  return (
    <div className={styles.container}>
      <div id='scroll'></div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout