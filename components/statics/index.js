import React from 'react'
import CountUp from 'react-countup'

import styles from './index.module.scss'

function Statics({ isVisible }) {
  return (
    <div className={styles.statics}>
      <div className={styles.stat}>
        {isVisible ? (
          <CountUp start={0} end={100} delay={0}>
            {({ countUpRef }) => <h3 ref={countUpRef} />}
          </CountUp>
        ) : null}
        <div>Aktif Öğrenci</div>
      </div>
      <div className={styles.stat}>
        {isVisible ? (
          <CountUp start={0} end={180} delay={0}>
            {({ countUpRef }) => <h3 ref={countUpRef} />}
          </CountUp>
        ) : null}
        <div>Verilmli Ders</div>
      </div>
      <div className={styles.stat}>
        {isVisible ? (
          <CountUp start={0} end={21} delay={0}>
            {({ countUpRef }) => <h3 ref={countUpRef} />}
          </CountUp>
        ) : null}
        <div>Öğretmen</div>
      </div>
    </div>
  )
}

export default Statics
