import React, { useEffect, useState } from 'react'

import styles from './FlashCard.module.scss'
import { Button } from 'antd'
import classNames from 'classnames'

const images = [
  {
    type: 'Cashew',
    url: 'https://images.unsplash.com/photo-1615485925873-7ecbbe90a866?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    type: 'Almond',
    url: 'https://images.unsplash.com/photo-1617175093792-30a13225201f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    type: 'Rasins',
    url: 'https://images.unsplash.com/photo-1621597121291-fa650ac736e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    type: 'Pistachios',
    url: 'https://images.unsplash.com/photo-1615485925933-379c8b6ad03c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    type: 'Walnuts',
    url: 'https://images.unsplash.com/photo-1587334207639-d966843f9014?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
]

const FlashCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCurrentSlide(prev => {
        if (prev === images.length - 1) {
          return 0;
        }
        return prev + 1
      })
    }, 5000)

    return () => clearInterval()
  }, [images]);

  return (
    <div className={styles.container}>
      {images.map((image, index) => <div key={index} className={classNames(styles.slide, currentSlide === index ? styles.active : '')}>
        <img className={styles.image} src={image.url} alt='slideImage' />
      </div>)}
      <div className={styles.content}>
        <span className={styles.title}>Premium Dry Fruits & Nuts, Delivered Fresh to Your Door.</span>
        <span className={styles.description}>"Savor the best quality, handpicked from the finest sources."</span>
        <Button>Shop Now</Button>
      </div>
    </div>
  )
}

export default FlashCard