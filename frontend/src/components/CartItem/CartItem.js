import React from 'react'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faMultiply, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import styles from './CartItem.module.scss'

import sampleImg from 'assets/svg/cashew.svg'
import { getCurrencyFormat } from 'utils/utils'
import { Button } from 'antd'

const CartItem = ({ className, id, name, price, weight, count, onClick, isCheckoutPage = false }) => {

  return (
    <div className={cx(styles.container, className)}>
      <img className={styles.image} src={sampleImg} alt='product image' />
      <div className={styles.productDetail}>
        {!isCheckoutPage && <FontAwesomeIcon className={cx(styles.close)} icon={faMultiply} title='Remove from cart' onClick={() => onClick(-count, { id, weight, count })} />}
        <h3 className={styles.name}>{name} - {weight}g</h3>
        <div className={cx(styles.countPrice, 'countPrice')}>
          {!isCheckoutPage ? <span>
            <FontAwesomeIcon className={cx(styles.icon, styles.minus)} icon={faMinus} title='Reduce' onClick={() => onClick(-1, { id, weight, count })} />
            <span className={styles.count}>{count}</span>
            <FontAwesomeIcon className={cx(styles.icon, styles.plus)} icon={faPlus} title='Add' onClick={() => onClick(1, { id, weight, count })} />
          </span> : <span className={styles.countSpan}>
            <span className={styles.count}>x{count}</span>
          </span>}
          <span className={styles.price}>
            {getCurrencyFormat(price * count)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CartItem;