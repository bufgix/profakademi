import React from 'react'

import styles from './index.module.scss'
import PhotoIcon from '../icons/Photo'

function Gallery() {
  const [images, setImages] = React.useState(
    Array(8)
      .fill(0)
      .map((_, i) => ({ source: `/photos/${i + 1}.jpeg`, visible: false }))
  )

  return (
    <div className={styles.gallery}>
      <div className={styles.galleryHeader}>
        <PhotoIcon />
        <h1>GALERİ</h1>
      </div>
      <div className={styles.photos}>
        {images.map(({ source }, index) => (
          <img
            src={source}
            onClick={() => {}}
            key={index}
            alt="photo"
            className={styles.photo}
          ></img>
        ))}
      </div>
    </div>
  )
}

export default Gallery
