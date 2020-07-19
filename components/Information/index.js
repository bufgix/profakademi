import React from 'react'
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
          <ul>
            {/*  add loading */}
            {!announcements.isLoading
              ? announcements.data.map((announcement, index) => (
                  <li key={index}>
                    <ArrowIcon />{' '}
                    <a href={`/duyurular/${announcement.id}`} target="_blank">
                      {announcement.baslik}
                    </a>
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div className={cn(styles.results)}>
          <h2>SONUÇLAR</h2>
          {/*  add loading */}
          <ul>
            {!results.isLoading
              ? results.data.map((result, index) => (
                  <li key={index}>
                    <DocIcon />{' '}
                    <a href={result.pdflink} target="_blank">
                      {result.isim}
                    </a>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Information
