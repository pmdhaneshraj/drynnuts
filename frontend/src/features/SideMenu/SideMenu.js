import React, { useCallback } from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom';

import styles from './SideMenu.module.scss';
import { SIDEMENU_ITEMS } from './SideMenu.constants';

const SideMenu = () => {
  const navigate = useNavigate();

  const onSelect = useCallback((key) => {
    navigate('/shop')
  }, [])

  return (
    <Menu
      className={styles.menu}
      onSelect={onSelect}
      items={SIDEMENU_ITEMS}
    />
  )
}

export default SideMenu