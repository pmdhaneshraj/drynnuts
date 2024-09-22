import { Button, Form, Table } from 'antd'
import React, { useCallback, useMemo, useState } from 'react'
import { TABLE_COLUMNS } from '../Checkout.constants'

import styles from './Forms.module.scss';
import AddressStep from './AddressStep';
import Payment from './Payment';

const Forms = ({ action, cartItems, current, setCurrent }) => {
  const [form] = Form.useForm();
  const [totalPrice, setTotalPrice] = useState(0);

  const onQuanityClick = useCallback((offset, record) => {
    const count = record.count + offset;
    let updated = []
    if (count === 0) {
      updated = cartItems.filter(item => {
        if (item.id === record.id && item.weight === record.weight) {
          return false
        } return true
      })
    } else {
      updated = cartItems.map(item => {
        if (item.id === record.id && item.weight === record.weight) {
          return {
            ...item,
            count: item.count + offset
          }
        } return item
      })
    }
    action.setItemsToCart(updated)
  }, [action, cartItems])

  const withPriceTotalData = useMemo(() => {
    const totalPrice = cartItems.reduce((acc, item) => {
      acc += (item.price * item.count);
      return acc;
    }, 0)
    setTotalPrice(totalPrice);
    return [...cartItems, { key: 'total', count: 1, price: totalPrice }]
  }, [cartItems])

  const onStepClick = useCallback(async (offset) => {
    try {
      if (offset === 1) {
        await form.validateFields();
      }
      setCurrent(prev => prev + offset)
    } catch (error) {
    }
  }, [form, setCurrent])

  const onPlaceOrder = useCallback(() => {
    action.placeOrder()
  }, [action])

  return (
    <div className={styles.container}>
      {current === 0 && <>
        <Table
          className={styles.table}
          columns={TABLE_COLUMNS({ onClick: onQuanityClick })}
          dataSource={withPriceTotalData}
        />
        <div className={styles.footer}>
          <Button onClick={() => onStepClick(-1)}>Previous</Button>
          <Button type='primary' onClick={() => onStepClick(1)}>Next</Button>
        </div>
      </>
      }
      {current === 1 && <>
        <AddressStep form={form} totalPrice={totalPrice} />
        <div className={styles.footer}>
          <Button onClick={() => onStepClick(-1)}>Previous</Button>
          <Button type='primary' onClick={() => onStepClick(1)}>Next</Button>
        </div>
      </>}
      {current === 2 && <>
        <Payment />
        <div className={styles.footer}>
          <Button onClick={() => onStepClick(-1)}>Previous</Button>
          {/* <Button type='primary' onClick={() => onStepClick(1)}>Next</Button> */}
        </div>
      </>}
    </div>
  )
}

export default Forms