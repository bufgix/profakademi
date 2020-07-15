import React from 'react'
import styles from './index.module.scss'



function Card({ icon, title, text, color }) {
  return (
    <div className={styles.Card} style={{ backgroundColor: color }}>
      {icon}
      <h3>{title}</h3>
      <div className={styles.CardText}>{text}</div>
    </div>
  )
}

export default Card
