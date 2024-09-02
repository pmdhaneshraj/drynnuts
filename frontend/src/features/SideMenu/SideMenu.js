import React, { useCallback } from 'react'
import { Menu } from 'antd'

import styles from './SideMenu.module.scss';
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {
  const navigate = useNavigate();

  const onSelect = useCallback((key) => {
    navigate('/shop')
  }, [])

  return (
    <Menu
      className={styles.menu}
      onSelect={onSelect}
      items={[
        {
          key: 'nuts',
          label: 'Nuts',
          type: 'group',
          children: [
            {
              key: 'cashew',
              label: 'Cashew',
            },
            {
              key: 'almond',
              label: 'Almond'
            },
            {
              key: 'pistachios',
              label: 'Pistachios'
            },
            {
              key: 'walnut',
              label: 'Walnut'
            },
          ]
        },
        {
          key: 'dates',
          label: 'Dates',
          type: 'group',
          children: [
            {
              key: 'arabian',
              label: 'Arabian Dates',
            },
            {
              key: 'blackDates',
              label: 'Dates (Black)'
            }
          ]
        },
        {
          key: 'seeds',
          label: 'Seeds',
          type: 'group',
          children: [
            {
              key: 'pumpkin',
              label: 'Pumpkin Seeds'
            },
            {
              key: 'flax',
              label: 'Flax Seeds'
            },
            {
              key: 'sunflower',
              label: 'Sunflower Seeds'
            },
            {
              key: 'cia',
              label: 'Cia Seeds'
            },
          ]
        },
        {
          key: 'Dried Fruits',
          label: 'Dried Fruits',
          type: 'group',
          children: [
            {
              key: 'pineapple',
              label: 'Pineapple',
            },
            {
              key: 'amla',
              label: 'Amla',
            },
            {
              key: 'cherry',
              label: 'Cherry'
            },
            {
              key: 'kiwi',
              label: 'Kiwi'
            },
            {
              key: 'fig',
              label: 'Fig'
            }
          ]
        }
      ]}
    />
  )
}

export default SideMenu