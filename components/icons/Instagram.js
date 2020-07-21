import * as React from 'react'

function Svgİnstagram(props) {
  return (
    <svg
      className="instagram_svg__icon instagram_svg__icon-tabler instagram_svg__icon-tabler-brand-instagram"
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
      <rect x={4} y={4} width={16} height={16} rx={4} />
      <circle cx={12} cy={12} r={3} />
      <path d="M16.5 7.5v.001" />
    </svg>
  )
}

export default Svgİnstagram
