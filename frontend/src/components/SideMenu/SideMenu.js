import React, { useCallback } from 'react'
import { Menu, Select } from 'antd'

import styles from './SideMenu.module.scss';
import { SIDEMENU_ITEMS, SIDEMENU_OPTIONS } from './SideMenu.constants';

const SideMenu = ({ activeKey, setActiveKey }) => {
  const onSelect = useCallback((item) => {
    setActiveKey(item.key || item)
  }, [setActiveKey])

  return (
    <div className={styles.container}>
      <Menu
        className={styles.menu}
        onSelect={onSelect}
        items={SIDEMENU_ITEMS}
        activeKey={activeKey}
        defaultSelectedKeys={['all']}
      />
      <Select
        className={styles.select}
        options={SIDEMENU_OPTIONS}
        placeholder='Select Category'
        onSelect={onSelect}
      />
    </div>
  )
}

export default SideMenu