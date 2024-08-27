import React from 'react'

import styles from './Home.module.scss'
import FlashCard from '../../features/FlashCard'
import { faHandPointer } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <FlashCard />
      </section>
      <section className={styles.proposition}>
        <div className={styles.benefitContent}>
          <FontAwesomeIcon icon={faHandPointer} />
          Handpicked Quality
        </div>
        <div className={styles.benefitContent}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
              fill="currentColor"
            />
          </svg>
          100% Natural & Organic
        </div>
        <div className={styles.benefitContent}>
          Sustainably Sourced
        </div>
      </section>
    </div>
  )
}

export default Home