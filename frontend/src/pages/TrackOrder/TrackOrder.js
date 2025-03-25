import React, { useCallback, useEffect, useState } from 'react'
import { Button, Form, Input, Steps } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { isEmpty } from 'lodash';

import styles from './TrackOrder.module.scss';
import { ORDER_STATUS } from './TrackOrder.constant';

const TrackOrder = ({ action, orderDetails, loading }) => {
  console.log(orderDetails)
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    if (!isEmpty(orderDetails)) {
      setCurrentStep(ORDER_STATUS[orderDetails?.status])
    }
  }, [orderDetails, setCurrentStep])

  const onFinish = useCallback((formValue) => {
    action.fetchOrderDetails(formValue)
  }, [action])

  return (
    <div className={styles.container}>
      {isEmpty(orderDetails)
        ? <Form form={form} className={styles.form} layout='vertical' onFinish={onFinish}>
          <h1>Track your order <FontAwesomeIcon className={styles.icon} icon={faTruck} /></h1>
          <Form.Item
            name='orderId'
            label='Order Id'
            rules={[
              { required: true, message: 'Please enter order id' },
            ]}
            validateTrigger='onBlur'
          >
            <Input placeholder='Enter order id' />
          </Form.Item>
          <Button htmlType='submit' className={styles.button}>Get details</Button>
        </Form>
        : <div className={styles.orderDetails}>
          <div>
            <h1>Order Status</h1>
            <Steps
              direction="vertical"
              progressDot
              current={currentStep}
              items={[
                {
                  title: 'Order placed',
                },
                {
                  title: 'Order processing',
                },
                {
                  title: 'Order shipped',
                },
                {
                  title: 'Order Delivered',
                },
              ]}
            />
          </div>
          <div>

          </div>
        </div>
      }
    </div>
  )
}

export default TrackOrder