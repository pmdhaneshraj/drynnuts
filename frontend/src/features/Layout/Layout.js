import React from 'react'

import styles from './Layout.module.scss'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
      {/* <div className={styles.footer}>
        <Footer />
      </div> */}
    </div>
  )
}

export default Layout