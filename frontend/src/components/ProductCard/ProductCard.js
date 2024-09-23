import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { Rate } from 'antd';
import Cookies from 'js-cookie'

import styles from './ProductCard.module.scss';
import { getCurrencyFormat } from 'utils/utils';

const ProductCard = ({ name, id, imagePath, rating, priceList }) => {
  const navigate = useNavigate()

  const onClick = useCallback(() => {
    navigate(`/product`)
    Cookies.set('productId', id)
  }, [navigate, id])

  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.imgContent}>
        <img className={styles.img} src={imagePath} alt='productImg' />
      </div>
      <div className={styles.content}>
        <div className={styles.name} title={name}>{name}</div>
        {/* <div className={styles.price} title={rating}>Rating: {<Rate disabled value={rating} />}</div> */}
        <div className={styles.price}>From: <span className={styles.rate}>{getCurrencyFormat(priceList[0]?.price)} - {getCurrencyFormat(priceList[3]?.price)}</span></div>
      </div>
    </div>
  )
}

export default ProductCard