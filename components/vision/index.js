import React from 'react'
import styles from './index.module.scss'

import PencilIcon from '../icons/Pencil'

function Vision() {
  return (
    <div className={styles.vision}>
      <div className={styles.visionHeader}>
        <PencilIcon />
        <h1>VİZYON</h1>
      </div>
      <div className={styles.visionText}>
        Profesyonel Akademi, başarıyı hedefleyen akademik kadrosu, yenilikçi
        yöntemleri ihtiyaca yönelik çözümler üreten eğitim programı ile
        öğrencilerimizin yeteneklerini geliştirerek, kendilerine güvenen, lider,
        nitelikli ve başarılı bireyler olmalarını amaçlamaktadır. Profesyonel
        Akademi, standartları en üst düzeyde olan öğretmen profili ve eğitim
        programı ile örnek bir eğitim kurumu olmayı amaçlamaktadır.
      </div>
    </div>
  )
}

export default Vision
