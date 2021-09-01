import React from 'react'

import styles from './index.module.scss'
import PhotoIcon from '../icons/Photo'
import ImageViewer from '../ImageViewer'

function Gallery() {
  const [images, setImages] = React.useState(
    Array(7)
      .fill(0)
      .map((_, i) => ({ source: `/photos/${i + 1}.jpeg`, open: false }))
  )
  const [currIndex, setCurrIndex] = React.useState(-1)
  const [isOpen, setIsOpen] = React.useState(false)

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
            onClick={() => {
              setIsOpen(true)
              setCurrIndex(index);
            }}
          ></img>
        ))}
        <ImageViewer
          photos={images}
          open={isOpen}
          currentIndex={currIndex}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </div>
  )
}

export default Gallery
