import React from 'react'
import { Button } from 'antd'

import styles from './HeroSection.module.scss'
import HeroImage from '../../assets/AssortedDryFruits.svg'


const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <img className={styles.image} src={HeroImage} alt='Hero Image' />
      <div className={styles.heroContent}>
        <span className={styles.title}>Premium Dry Fruits & Nuts, Delivered Fresh to Your Door.</span>
        <h1 className={styles.description}>Savor the best quality, handpicked from the finest sources.</h1>
        <Button className={styles.btn}>Shop Now</Button>
      </div>
    </section>
  )
}

export default HeroSection