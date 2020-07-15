import React from 'react'

import styles from './index.module.scss'
import Logo from '../icons/Logo'

function Nav() {
  const navLinksRef = React.createRef(null)

  const animateMobileNav = () => {
    const links = document.querySelectorAll(`.${styles.navLink}`)
    navLinksRef.current.classList.toggle(styles.navOpen)
    links.forEach((link) => {
      link.classList.toggle(styles.navFade)
    })
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logoWrapper}>
        <Logo width="120" height="120" />
      </div>
      <ul className={styles.navLinks} ref={navLinksRef}>
        <li className={styles.navLink}>
          <Logo width="120" height="120" />
        </li>
        <li className={styles.navLink}>
          <a href="#">Programlar</a>
        </li>
        <li className={styles.navLink}>
          <a href="#">Hizmetler</a>
        </li>
        <li className={styles.navLink}>
          <a href="#">İletişim</a>
        </li>
      </ul>
      <div className={styles.hamburger} onClick={animateMobileNav}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </nav>
  )
}

export default Nav
