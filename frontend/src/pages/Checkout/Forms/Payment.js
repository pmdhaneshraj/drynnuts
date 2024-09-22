import React from 'react'

import styles from './Payment.module.scss'
import { Button } from 'antd'

const Payment = () => {
  return (
    <div className={styles.container}>
      <Button>Place order</Button>
    </div>
  )
}

export default Payment