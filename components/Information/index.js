import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import useFetch from 'react-fetch-hook'

import styles from './index.module.scss'
import ArrowIcon from '../icons/Arrow'
import DocIcon from '../icons/Doc'

function Information() {
  const announcements = useFetch(`${process.env.API_URL}/duyurulars/`)
  const results = useFetch(`${process.env.API_URL}/sonuclars/`)
  return (
    <div className={cn(styles.informationWrapper)}>
      <div className={cn(styles.information)}>
        <div className={cn(styles.announcements)}>
          <h2>DUYURULAR</h2>

        </div>
        <div className={cn(styles.results)}>
          <h2>SONUÇLAR</h2>

        </div>
      </div>
    </div>
  )
}

export default Information
