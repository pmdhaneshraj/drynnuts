import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { Rate } from 'antd';

import styles from './ProductCard.module.scss';

const ProductCard = ({ name, imagePath, rating }) => {
  const navigate = useNavigate()

  const onClick = useCallback(() => {
    navigate('/shop/product')
  })

  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.imgContent}>
        <img className={styles.img} src={imagePath} alt='productImg' />
      </div>
      <div className={styles.content}>
        <div className={styles.name} title={name}>{name}</div>
        <div className={styles.price} title={rating}>Rating: {<Rate disabled value={rating} />}</div>
      </div>
    </div>
  )
}

export default ProductCard