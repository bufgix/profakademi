import React from 'react'
import cn from 'classnames'

import styles from './index.module.scss'

import MapPin from '../icons/MapPin'
import CommIcon from '../icons/Communication'
import PhoneIcon from '../icons/Phone'
import MailIcon from '../icons/Mail'
import SocialIcon from '../icons/Social'
import FBIcon from '../icons/Facebook'
import InstagramIcon from '../icons/Instagram'
import FaxIcon from "../icons/Fax";
import Logo from '../icons/Logo'

function Footer() {
  return (
    <footer className={cn(styles.footerWrapper)}>
      <div className={cn(styles.footer)}>
        <div>
          <div className={cn(styles.title)}>
            <MapPin />
            <h2>Konumumuz</h2>
          </div>
          <div className={cn(styles.googlemap)}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3185.676004959109!2d37.34550671572184!3d37.017525079904416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e19f06692e2f%3A0xa15e6f0c4a392ca6!2sProfesyonel%20Ekip%20%C3%96zel%20Et%C3%BCt%20Merkezi!5e0!3m2!1str!2str!4v1595354578305!5m2!1str!2str"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
        <div className={cn(styles.social)}>
          <div className={cn(styles.logoWrapper)}>
            <Logo id="logo" width="120" height="120" />
          </div>
          <div>
            <div className={cn(styles.title)}>
              <CommIcon />
              <h2>İletişim</h2>
            </div>

            <ul>
              <li>
                <PhoneIcon /> <strong>Telefon</strong>: 507 321 63 89
              </li>
              <li>
                <MailIcon /> <strong>Email</strong>: ooruc471@yandex.com
              </li>
              <li>
                <FaxIcon /> <strong>Fax</strong>: +90 123 54 12
              </li>
            </ul>
          </div>
          <div className={cn(styles.socialSub)}>
            <div className={cn(styles.title)}>
              <SocialIcon />
              <h2>Sosyal Medya</h2>
            </div>

            <ul>
              <li>
                <FBIcon /> <strong>Facebook</strong>: @profakademi
              </li>
              <li>
                <InstagramIcon /> <strong>Instagram</strong>: @profakademi
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
