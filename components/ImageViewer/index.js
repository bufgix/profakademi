import React from 'react'
import cn from 'classnames'

import styles from './index.module.scss'
import CrossIcon from '../icons/Cross'

function ImageViewer({ photos, open, currentIndex, onClose }) {
  if (photos[currentIndex]) {
    return (
      <div
        className={cn({
          [`${styles.imageViewer}`]: true,
          [`${styles.imageViewerClose}`]: !open
        })}
      >
        <CrossIcon onClick={() => onClose()} />
        <div className={cn(styles.imageContent)}>
          <img src={photos[currentIndex].source} alt="photo" />
        </div>
      </div>
    )
  }
  return null
}

export default ImageViewer
