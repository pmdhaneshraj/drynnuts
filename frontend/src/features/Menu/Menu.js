import React, { useState } from 'react'
import { MenuOutlined } from '@ant-design/icons'
import { Button, Drawer } from 'antd'

import styles from './Menu.module.scss'

const Menu = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.container}>
      <Button onClick={showDrawer}>
        <MenuOutlined />
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}

export default Menu