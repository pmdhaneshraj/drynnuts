import React, { useEffect, useState } from 'react'
import { Button, Drawer } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import styles from './Menu.module.scss'
import NavLinks from 'components/NavLinks'
import { useLocation } from 'react-router-dom'

const Menu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    onClose();
  }, [location])

  return (
    <div className={styles.container}>
      <Button onClick={showDrawer}>
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <Drawer className={styles.drawer} onClose={onClose} open={open} width={200}>
        <NavLinks className={styles.navLinks} onClose={onClose} />
      </Drawer>
    </div>
  );
}

export default Menu