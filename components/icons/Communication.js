import * as React from 'react'

function SvgCommunication(props) {
  return (
    <svg
      className="communication_svg__icon communication_svg__icon-tabler communication_svg__icon-tabler-messages"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#000"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M21 14l-3-3h-7a1 1 0 01-1-1V4a1 1 0 011-1h9a1 1 0 011 1v10M14 15v2a1 1 0 01-1 1H6l-3 3V11a1 1 0 011-1h2" />
    </svg>
  )
}

export default SvgCommunication
