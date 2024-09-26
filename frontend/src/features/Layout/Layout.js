import React from 'react'

import styles from './Layout.module.scss'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const Layout = () => {
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