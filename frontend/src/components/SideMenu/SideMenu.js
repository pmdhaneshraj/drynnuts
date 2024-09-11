import React, { useCallback } from 'react'
import { Menu } from 'antd'

import styles from './SideMenu.module.scss';
import { SIDEMENU_ITEMS } from './SideMenu.constants';

const SideMenu = ({ activeKey, setActiveKey }) => {
  const onSelect = useCallback((item) => {
    setActiveKey(item.key)
  }, [setActiveKey])

  return (
    <Menu
      className={styles.menu}
      onSelect={onSelect}
      items={SIDEMENU_ITEMS}
      activeKey={activeKey}
      defaultSelectedKeys={['all']}
    />
  )
}

export default SideMenu