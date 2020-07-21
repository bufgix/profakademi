import React from 'react'
import fetch from 'isomorphic-unfetch'
import Markdown from 'markdown-to-jsx'

import Layout from '../../components/layout'
import ImageViewer from '../../components/ImageViewer'

function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ) // fragment locator
  return !!pattern.test(str)
}

function Image({ children, ...props }) {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <React.Fragment>
      <img
        src={
          validURL(props.src) ? props.src : `${process.env.API_URL}${props.src}`
        }
        onClick={() => setIsOpen(true)}
      />
      <ImageViewer
        photos={[{ source: `${process.env.API_URL}${props.src}` }]}
        open={isOpen}
        currentIndex={0}
        onClose={() => setIsOpen(false)}
      />
    </React.Fragment>
  )
}

function Detail({ pageData }) {
  return (
    <Layout isDetail>
      <div className="detailWrapper">
        <div className="detail">
          <h1 className="detail-title">{pageData.baslik}</h1>
          <div className="detail-content">
            <Markdown
              options={{
                forceBlock: true,
                overrides: { img: { component: Image } }
              }}
            >
              {pageData.icerik}
            </Markdown>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Detail.getInitialProps = async ({ query }) => {
  const detailReq = await fetch(`${process.env.API_URL}/duyurulars/${query.id}`)
  const detail = await detailReq.json()
  return { pageData: detail }
}
export default Detail
