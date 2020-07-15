import React from 'react'

import styles from './index.module.scss'
import Card from './card'

function Cards() {
  return (
    <div className={styles.CartWrapper}>
      <div className={styles.Cards}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Cards
