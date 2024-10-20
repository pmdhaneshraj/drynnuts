import React, { useCallback } from 'react'
import { Menu, Select } from 'antd'

import styles from './SideMenu.module.scss';
import { SIDEMENU_ITEMS, SIDEMENU_OPTIONS } from './SideMenu.constants';
import { scrollToTop } from 'utils/utils';

const SideMenu = ({ activeKey, setActiveKey }) => {

  const onSelect = useCallback((item) => {
    setActiveKey(item.key || item)
    scrollToTop()
  }, [setActiveKey])

  return (
    <div className={styles.container}>
      <h4>Select Category</h4>
      <Menu
        className={styles.menu}
        onSelect={onSelect}
        items={SIDEMENU_ITEMS}
        activeKey={activeKey.value}
        defaultSelectedKeys={['all']}
      />
      <Select
        className={styles.select}
        options={SIDEMENU_OPTIONS}
        value={activeKey.value}
        placeholder='Select Category'
        onSelect={onSelect}
      />
    </div>
  )
}

export default SideMenu