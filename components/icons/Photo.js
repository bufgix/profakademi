import * as React from 'react'

function SvgPhoto(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 70 70" fill="none" {...props}>
      <path
        d="M35 64.167c16.108 0 29.167-13.059 29.167-29.167C64.167 18.892 51.108 5.833 35 5.833 18.892 5.833 5.833 18.892 5.833 35c0 16.108 13.059 29.167 29.167 29.167zM41.738 23.333l16.741 28.992M28.262 23.333h33.484M21.525 35L38.267 6.008M28.262 46.667L11.521 17.675M41.737 46.667H8.254M48.475 35L31.733 63.992"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgPhoto
