import React, { useCallback, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { isEmpty } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { Badge, Button, Drawer, Empty } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import styles from './CartIcon.module.scss';
import { getCartItems, getCartTotal } from 'pages/Checkout/Checkout.selector';
import { setItemsToCart } from 'pages/Checkout/Checkout.slice';
import CartItem from 'components/CartItem';
import emptyCart from 'assets/svg/emptyCart.svg'
import { getCurrencyFormat } from 'utils/utils';

const CartIcon = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getCartTotal)

  const [count, setCount] = useState(0);
  const [showDrawer, setShowdrawer] = useState(false)

  useEffect(() => {
    const count = cartItems.reduce((acc, item) => {
      acc += item.count;
      return acc;
    }, 0)
    setCount(count)
  }, [cartItems])

  const onClick = useCallback(() => {
    setShowdrawer(true)
  }, [setShowdrawer])

  const onQuanityClick = useCallback((offset, record) => {
    const count = record.count + offset;
    let updated = []
    if (count === 0) {
      updated = cartItems.filter(item => {
        if (item.id === record.productId && item.sku === record.sku) {
          return false
        } return true
      })
    } else {
      updated = cartItems.map(item => {
        if (item.id === record.productId && item.sku === record.sku) {
          return {
            ...item,
            count: item.count + offset
          }
        } return item
      })
    }
    dispatch(setItemsToCart(updated))
  }, [dispatch, cartItems])

  return (
    <div className={styles.container}>
      <Badge count={count} onClick={onClick}>
        <FontAwesomeIcon icon={faCartShopping} size='xl' />
      </Badge>
      <Drawer
        className={styles.drawer}
        open={showDrawer}
        onClose={() => setShowdrawer(false)}
        title='Cart'
      >
        {isEmpty(cartItems)
          ? <div className={styles.emptyCart}>
            <Empty description='Your cart is empty' image={Empty.PRESENTED_IMAGE_SIMPLE} />
            <Button className={styles.btn} onClick={() => {
              navigate('/shop')
              setShowdrawer(false)
            }}>Continue Shopping</Button>
          </div>
          : <>
            <div className={styles.cartItemsContainer}>
              {cartItems.map(item =>
                <CartItem
                  key={item.sku}
                  {...item}
                  onClick={onQuanityClick}
                />)}
            </div>
            <h3 className={styles.total}>Total: {getCurrencyFormat(totalPrice)}</h3>
            <div className={styles.footer}>
              <Button className={styles.btn} onClick={() => {
                navigate('/checkout')
                setShowdrawer(false)
              }}>Checkout</Button>
            </div>
          </>}
      </Drawer>
    </div>
  )
}

export default CartIcon