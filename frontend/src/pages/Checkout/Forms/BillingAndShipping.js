import { Button, Col, Form, Input, Row, Select } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'

import styles from './BillingAndShipping.module.scss'
import { STATES } from './Forms.constants';
import CartItem from 'components/CartItem';
import { getCurrencyFormat, scrollToTop } from 'utils/utils';
import { debounce } from 'lodash';

const BillingAndShipping = ({ action, cartItems = [], subtotal }) => {
  const [form] = Form.useForm();
  const [shipping, setShipping] = useState(30);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(subtotal + shipping)
  }, [subtotal, shipping])

  const onPlaceOrder = useCallback(async () => {
    try {
      await form.validateFields().catch(({ errorFields }) => {
        scrollToTop()
      });
    } catch (error) {
    }
  }, [form])

  const getShippingPrice = debounce((e) => {
    const { value } = e.target;
    if (value >= 500000 && value <= 599999) {
      setShipping(80)
    } if (value >= 600000 && value <= 624999) {
      setShipping(40)
    } if (value >= 625000 && value <= 630000) {
      setShipping(30)
    }
  }, 3000)

  return (
    <Row className={styles.container} gutter={[250]}>
      <Col span={12} className={styles.col}>
        <Form form={form} scrollToFirstError layout='vertical'>
          <h2 className={styles.header}>Billing & Shipping</h2>
          <Form.Item name='firstName' rules={[{ required: true, message: 'First name is required' }]}>
            <Input placeholder='First Name *' />
          </Form.Item>
          <Form.Item name='lastName' rules={[{ required: true, message: 'Last name is required' }]}>
            <Input placeholder='Last Name *' />
          </Form.Item>
          <h4>India</h4>
          <Form.Item name='street' rules={[{ required: true, message: 'Address is required' }]}>
            <Input placeholder='Door/Flat No. and Street address *' />
          </Form.Item>
          <Form.Item name='city' rules={[{ required: true, message: 'City / Village is required' }]}>
            <Input placeholder='City / Village *' />
          </Form.Item>
          <Form.Item name='state' rules={[{ required: true, message: 'State is required' }]}>
            <Select placeholder='State *' showSearch options={STATES.map(item => ({ label: item, value: item }))} />
          </Form.Item>
          <Form.Item name='pincode' rules={[{ required: true, message: 'Pincode is required' }]}>
            <Input placeholder='Pincode *' onChange={getShippingPrice} />
          </Form.Item>
          <Form.Item name='landmark' rules={[{ required: false }]}>
            <Input placeholder='Landmark (optional)' />
          </Form.Item>
          <Form.Item name='mobileNumber' rules={[{ required: true, message: 'Mobile Number is required' }]}>
            <Input placeholder='Mobile Number *' />
          </Form.Item>
          <Form.Item name='whatappNumber' rules={[{ required: false }]}>
            <Input placeholder='WhatsApp Number (optional)' />
          </Form.Item>
          <h4>Additional Information</h4>
          <Form.Item name='addInfo' rules={[{ required: false }]}>
            <Input.TextArea placeholder='Order notes (optional)' maxLength={300} />
          </Form.Item>
        </Form>
      </Col>
      <Col span={12} className={styles.col}>
        <h2>Your Order</h2>
        {cartItems.map(item => <CartItem className={styles.cartItem} key={item.id + item.weight} {...item} isCheckoutPage={true} />)}
        <hr />
        <div className={styles.orderContainer}>
          <span className={styles.label}>SUBTOTAL</span>
          <span className={styles.value}>{getCurrencyFormat(subtotal)}</span>
        </div>
        <hr />
        <h4>SHIPPING</h4>
        <div className={styles.orderContainer}>
          <span className={styles.label}>Shipping :</span>
          <span className={styles.value}>{getCurrencyFormat(shipping)}</span>
        </div>
        <hr />
        <div className={styles.orderContainer}>
          <span className={styles.label}>TOTAL :</span>
          <span className={styles.value}>{getCurrencyFormat(totalPrice)}</span>
        </div>
        <Button className={styles.btn} onClick={onPlaceOrder}>Place Order</Button>
      </Col>
    </Row>
  )
}

export default BillingAndShipping