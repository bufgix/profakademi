import React, { useContext } from 'react'
import Head from 'next/head'

import Layout from '../components/layout'
import Wave from '../components/Wave'
import Cards from '../components/cards'
import Vision from '../components/vision'
import Gallery from '../components/galley'

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className="banner">
        <h1>neden biz?</h1>
        <div className="banner-meta">
          ÇÜNKÜ BİZ, BAŞARILI BİREY SORUMLU TOPLUM İÇİN VARIZ ÖĞRENCİLERİMİZİN
          İSTEKLERİNE KULAK VERİYORUZ.
        </div>
      </div>
      <Wave />
      <Cards />
      <div className="content">
        <Vision />
        <Gallery />
      </div>
    </Layout>
  )
}

export default HomePage
