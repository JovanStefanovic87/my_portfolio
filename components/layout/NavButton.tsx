import React from 'react'
import classes from './layout.module.scss'

interface Props {
  value: string
  className: string
  onClick: any
}

const NavButton = (props: Props): JSX.Element => {
  return (
    <div className={[classes.NavButton, props.className].join('')} onClick={props.onClick}>
      {props.value}
    </div>
  )
}

export default NavButton
