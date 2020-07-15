import React from 'react'

import styles from './index.module.css'

import Nav from '../nav'

function Layout({ children }) {
  return (
    <React.Fragment>
      <Nav />
      <div className={styles.layout}>
        <main
          style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
          {children}
        </main>
      </div>
    </React.Fragment>
  )
}

export default Layout
