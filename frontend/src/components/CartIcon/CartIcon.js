import React, { useCallback, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCartShopping } from '@fortawesome/free-solid-svg-icons'

import styles from './CartIcon.module.scss';
import { Badge } from 'antd';
import { useSelector } from 'react-redux';
import { getCartItems } from '../../pages/Checkout/Checkout.selector';
import { set } from 'lodash';
import { useNavigate } from 'react-router-dom';


const CartIcon = () => {
  const cartState = useSelector(getCartItems);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const allCount = cartState.reduce((acc, item) => {
      acc += item.count;
      return acc;
    }, 0)
    setCount(allCount)
  }, [cartState])

  const onClick = useCallback(() => {
    navigate('/checkout')
  }, [navigate])

  return (
    <Badge count={count} className={styles.container} onClick={onClick}>
      <FontAwesomeIcon icon={faCartShopping} size='xl' />
    </Badge>
  )
}

export default CartIcon