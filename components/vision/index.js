import React from 'react'
import styles from './index.module.scss'

import PencilIcon from '../icons/Pencil'

function Vision() {
  return (
    <div className={styles.vision}>
      <div className={styles.visionHeader}>
        <PencilIcon />
        <h1>VİZYON</h1>
      </div>
      <div className={styles.visionText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        imperdiet, eros non suscipit lacinia, ante turpis euismod quam, vitae
        placerat lacus ligula nec arcu. Sed tempus ornare dui et accumsan.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Nulla eu maximus purus. Ut vehicula lobortis tincidunt.
        Donec euismod dui ligula. Vestibulum tincidunt bibendum est, eget semper
        nisl fermentum sed. Aenean ultricies mauris at tincidunt fringilla. S
      </div>
    </div>
  )
}

export default Vision
