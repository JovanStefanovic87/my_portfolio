import React from 'react'
import { SetStateVoid } from '../../interfaces/interfaces'

import classes from './buttons.module.scss'

const NextSlide = (props: SetStateVoid): JSX.Element => {
  return (
    <button className={classes.NextSlide} onClick={() => props.onClick()} role='button'>
      Next
    </button>
  )
}

export default NextSlide
