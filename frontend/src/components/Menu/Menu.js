import React, { useState } from 'react'
import { Button, Drawer } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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
        <FontAwesomeIcon icon={faBars} />
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