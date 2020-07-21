import * as React from 'react'

function SvgMail(props) {
  return (
    <svg
      className="mail_svg__icon mail_svg__icon-tabler mail_svg__icon-tabler-mail"
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
      <rect x={3} y={5} width={18} height={14} rx={2} />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}

export default SvgMail
