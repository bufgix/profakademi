import * as React from 'react'

function SvgFax(props) {
  return (
    <svg
      className="fax_svg__icon fax_svg__icon-tabler fax_svg__icon-tabler-printer"
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
      <path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2M17 9V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4" />
      <rect x={7} y={13} width={10} height={8} rx={2} />
    </svg>
  )
}

export default SvgFax
