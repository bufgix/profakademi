import React from 'react'

import cn from 'classnames'
import useFetch from 'react-fetch-hook'

import styles from './index.module.scss'

function Information() {
  const announcements = useFetch(`${process.env.API_URL}/duyurulars/`)
  const results = useFetch(`${process.env.API_URL}/sonuclars/`)
  return (
    <div className={cn(styles.informationWrapper)}>
      <div className={cn(styles.information)}>
        <div className={cn(styles.results)}>
          <h2>SONUÇLAR</h2>
        </div>
      </div>
    </div>
  )
}

export default Information
