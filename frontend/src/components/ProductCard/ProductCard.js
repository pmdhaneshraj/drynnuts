import React, { useCallback } from 'react'

import styles from './ProductCard.module.scss';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ imgPath, name, price}) => {
  const navigate = useNavigate()

  const onClick = useCallback(() => {
    navigate('/product')
  })

  return (
    <div className={styles.container}>
      <div className={styles.imgContent}>
        <img className={styles.img} src={'https://images.unsplash.com/photo-1587334207639-d966843f9014?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt='productImg' />
      </div>
      <hr />
      <div className={styles.content}>
        <div className={styles.name} title={name}>Product Name</div>
        <div className={styles.price} title={price}>Product Price</div>
        <Button className={styles.btn} onClick={onClick}>Show Product</Button>
      </div>
    </div>
  )
}

export default ProductCard