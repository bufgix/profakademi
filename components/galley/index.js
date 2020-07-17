import React from 'react'

import styles from './index.module.scss'
import PhotoIcon from '../icons/Photo'

function Gallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.galleryHeader}>
        <PhotoIcon />
        <h1>GALERİ</h1>
      </div>
      <div className={styles.photos}>
        <div className={styles.photo}></div>
        <div className={styles.photo}></div>
        <div className={styles.photo}></div>
        <div className={styles.photo}></div>
        <div className={styles.photo}></div>
        <div className={styles.photo}></div>
      </div>
    </div>
  )
}

export default Gallery
