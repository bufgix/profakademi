import * as React from 'react'

function SvgDoc(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 40 40" fill="none" {...props}>
      <path
        d="M25 35H10a5 5 0 01-5-5v-1.667h16.667v3.334A3.333 3.333 0 0025 35zm0 0a3.333 3.333 0 003.333-3.333V8.333a3.333 3.333 0 113.334 3.334h-3.334L25 35zm6.667-30H13.333a5 5 0 00-5 5v18.333M15 11.667h6.667M15 18.333h6.667"
        stroke="#fff"
        strokeWidth={2.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgDoc
