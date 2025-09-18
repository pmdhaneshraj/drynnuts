import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import cx from 'classnames';

import styles from './ProductCard.module.scss';
import { getCurrencyFormat } from 'utils/utils';

const ProductCard = ({ name, productId, imagePath, rating, weights, className }) => {
  const navigate = useNavigate()

  const onClick = useCallback(() => {
    Cookies.remove('productId')
    Cookies.set('productId', productId)
    navigate(`/product`)
  }, [navigate, productId])

  return (
    <div className={cx(styles.container, className)} onClick={onClick}>
      <div className={styles.imgContent}>
        <img className={styles.image} src={imagePath} alt='productImg' />
      </div>
      <div className={styles.bodyContent}>
        <div className={styles.name} title={name}>{name}</div>
        <div className={styles.price}>From: <span className={styles.rate}>{getCurrencyFormat(weights[0]?.price)} - {getCurrencyFormat(weights[weights.length - 1]?.price)}</span></div>
      </div>
    </div>
  )
}

export default ProductCard