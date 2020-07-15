import React from 'react'

import styles from './index.module.scss'
import Card from './card'
import Cap from '../icons/Cap'
import Smile from '../icons/Smile'
import Book from '../icons/Book'

function Cards() {
  return (
    <div className={styles.CartWrapper}>
      <div className={styles.Cards}>
        <Card
          title="Başarı Odaklı"
          icon={<Cap width="60" height="60" />}
          text="Verdiğimiz tüm eğitimlerin ortak amacı başarıdır. Başarıya ulaşan bu
        eğitim sürecinde öğrenci ve velilerimizin her daim yanındayız."
          color="#ef5861"
        />
        <Card
          title="Samimi Yaklaşım"
          icon={
            <Smile
              width="60"
              height="60"
              style={{ marginTop: '-10', marginBottom: 10 }}
            />
          }
          text="Öğrencilerimize ve velilerimize samimiyet zaten eğitim sürecimizin olmazsa olmaz yapı taşı. Verdiğimiz eğitimlerde ve çalışmalarımızda da samimiyiz."
          color="#E79800"
        />
        <Card
          title="Farkındayız"
          icon={<Book width="50" height="50" style={{marginBottom: 10 }}/>}
          text="Bu ülkenin geleceği, çocuklarımızın elinde. Onlar için ne kadar iyi eğitim verilirse, geleceğin de bir o kadar parlak olacağının farkındayız."
          color="#43B14B"
        />
      </div>
    </div>
  )
}

export default Cards
