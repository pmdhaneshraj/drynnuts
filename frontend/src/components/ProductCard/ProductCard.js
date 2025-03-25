import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import cx from 'classnames';

import styles from './ProductCard.module.scss';
import { getCurrencyFormat } from 'utils/utils';
import sampleImage from 'assets/svg/cashew.svg'

const ProductCard = ({ name, id, imagePath, rating, priceList, className }) => {
  const navigate = useNavigate()

  const onClick = useCallback(() => {
    navigate(`/product`)
    Cookies.set('productId', id)
  }, [navigate, id])

  return (
    <div className={cx(styles.container, className)} onClick={onClick}>
      <div className={styles.imgContent}>
        <img className={styles.image} src={sampleImage} alt='productImg' />
      </div>
      <div className={styles.bodyContent}>
        <div className={styles.name} title={name}>{name}</div>
        <div className={styles.price}>From: <span className={styles.rate}>{getCurrencyFormat(priceList[0]?.price)} - {getCurrencyFormat(priceList[priceList.length - 1]?.price)}</span></div>
      </div>
    </div>
  )
}

export default ProductCard