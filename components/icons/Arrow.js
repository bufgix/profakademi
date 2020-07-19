import * as React from 'react'

function SvgArrow(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 40 40" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.707 7.626a1 1 0 10-1.414 1.414l9.96 9.96H8.332a1 1 0 100 2h20.92l-9.96 9.96a1 1 0 001.414 1.414l11.667-11.667a.995.995 0 00.209-1.11.998.998 0 00-.213-.308L20.707 7.626z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgArrow
