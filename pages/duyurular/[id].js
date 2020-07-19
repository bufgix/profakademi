import React from 'react'
import fetch from 'isomorphic-unfetch'

import Layout from '../../components/layout'

function Detail({ pageData }) {
  return (
    <Layout>
      <div>{JSON.stringify(pageData)}</div>
    </Layout>
  )
}

Detail.getInitialProps = async ({ query }) => {
  const detailReq = await fetch(`${process.env.API_URL}/duyurulars/${query.id}`)
  const detail = await detailReq.json()
  return { pageData: detail }
}
export default Detail
