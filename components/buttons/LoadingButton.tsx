import React from 'react'
import classes from './buttons.module.scss'

const LoadingButton = (): JSX.Element => {
  return (
    <div className={classes.LoadingButton}>
      <a href='#'>
        <span>Hover Me!</span>
      </a>
    </div>
  )
}

export default LoadingButton
