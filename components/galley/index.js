import React from 'react'

import styles from './index.module.scss'
import PhotoIcon from '../icons/Photo'
import ImageViewer from '../ImageViewer'
import Flickity from 'react-flickity-component'

const IMGS = Array.from({ length: 9 }).map(
  (_, i) => `/photos/slider/img${i + 1}.jpeg`
)

function Gallery() {
  return (
    <div className={styles.gallery}>
      <Flickity
        options={{
          initialIndex: 2,
          wrapAround: true,
          autoPlay: true,
          lazyLoad: false,
          pageDots: false
        }}
      >
        {IMGS.map((i) => (
          <img src={i} />
        ))}
      </Flickity>
    </div>
  )
}

export default Gallery
