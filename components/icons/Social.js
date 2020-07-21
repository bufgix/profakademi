import * as React from 'react'

function SvgSocial(props) {
  return (
    <svg
      className="social_svg__icon social_svg__icon-tabler social_svg__icon-tabler-social"
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
      <circle cx={12} cy={5} r={2} />
      <circle cx={5} cy={19} r={2} />
      <circle cx={19} cy={19} r={2} />
      <circle cx={12} cy={14} r={3} />
      <path d="M12 7v4M6.7 17.8l2.8-2M17.3 17.8l-2.8-2" />
    </svg>
  )
}

export default SvgSocial
