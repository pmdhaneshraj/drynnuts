import React, { useCallback, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { shuffle } from 'lodash'

import styles from './ProductSlider.module.scss';
import ProductCard from '../ProductCard';
import { Col, Row } from 'antd';

const ProductSlider = ({ products }) => {
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className={styles.container}>
      <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} onClick={() => scroll(-1000)} />
      <Row ref={ref} className={styles.productContainer}>
        {shuffle(products).map(item => <Col span={6}><ProductCard {...item} /></Col>)}
      </Row>
      <FontAwesomeIcon className={styles.icon} icon={faChevronRight} onClick={() => scroll(1000)} />
    </div>

  )
}

export default ProductSlider