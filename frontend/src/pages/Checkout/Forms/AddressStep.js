import { Col, Form, Input, Row } from 'antd'
import React from 'react'

import styles from './AddressStep.module.scss'

const AddressStep = ({ form, totalPrice }) => {
  return (
    <Row className={styles.container} justify={'center'}>
      <Col span={10}>
        <Form form={form} layout='vertical'>
          <Form.Item label='Name' name='name' rules={[{ required: true, message: 'Name is required' }]}>
            <Input />
          </Form.Item>
          <Form.Item label='Mobile Number' name='mobileNumber' rules={[{ required: true, message: 'Mobile number is required' }]}>
            <Input />
          </Form.Item>
          <Form.Item label='Address' name='address' rules={[{ required: true, message: 'Address is required' }]}>
            <Input />
          </Form.Item>
          <Form.Item label='Pincode' name='pincode' rules={[{ required: true, message: 'Pincode is required' }]}>
            <Input />
          </Form.Item>
          <Form.Item label='Landmark (if any)' name='landmark' rules={[{ required: false }]}>
            <Input />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default AddressStep