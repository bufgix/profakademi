import React, { useContext } from 'react'
import Head from 'next/head'

import Layout from '../components/layout'
import Wave from '../components/Wave'
import Cards from '../components/cards'

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
    </Layout>
  )
}

export default HomePage
