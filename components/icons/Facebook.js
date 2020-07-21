import * as React from 'react'

function SvgFacebook(props) {
  return (
    <svg
      className="facebook_svg__icon facebook_svg__icon-tabler facebook_svg__icon-tabler-brand-facebook"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#2c3e50"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 011-1h3V3h-3a5 5 0 00-5 5v2H7" />
    </svg>
  )
}

export default SvgFacebook
