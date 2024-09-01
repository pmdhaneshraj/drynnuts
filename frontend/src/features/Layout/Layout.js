import React from 'react'

import styles from './Layout.module.scss'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout