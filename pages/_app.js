import React from 'react'
import { StoreProvider } from '../store'

import '../styles/app.css'
import '../styles/detail.css'
import 'flickity/css/flickity.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}
