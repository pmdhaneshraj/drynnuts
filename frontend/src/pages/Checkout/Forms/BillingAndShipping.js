import { Col, Form, Input, Row } from 'antd'
import React, { useCallback, useState } from 'react'

import styles from './BillingAndShipping.module.scss'

const BillingAndShipping = ({ action, cartItems, setItemsToCart }) => {
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

  return (
    <Row className={styles.container} justify={'center'}>
      <Col span={12}>
        <Form form={form} layout='vertical'>
          <Form.Item label='Name' name='name' rules={[{ required: true, message: 'Name is required' }]}>
            <Input placeholder='Enter Name' />
          </Form.Item>
          <Form.Item label='Mobile Number' name='mobileNumber' rules={[{ required: true, message: 'Mobile number is required' }]}>
            <Input placeholder='Enter Mobile Number' />
          </Form.Item>
          <Form.Item label='Address' name='address' rules={[{ required: true, message: 'Address is required' }]}>
            <Input placeholder='Enter Address' />
          </Form.Item>
          <Form.Item label='Pincode' name='pincode' rules={[{ required: true, message: 'Pincode is required' }]}>
            <Input placeholder='Enter Pincode' />
          </Form.Item>
          <Form.Item label='Landmark (if any)' name='landmark' rules={[{ required: false }]}>
            <Input placeholder='Enter Landmark' />
          </Form.Item>
        </Form>
      </Col>
      <Col span={12}></Col>
    </Row>
  )
}

export default BillingAndShipping