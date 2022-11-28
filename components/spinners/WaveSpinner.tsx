import React from 'react'
import { createInners } from '../../helpers/universalFunctions'

import classes from './spinners.module.scss'

const WaveSpinner = (): JSX.Element => {
  const divArray = []
  createInners(10, divArray)
  return (
    <div className={classes.WaveSpinner}>
      {divArray.map((el) => (
        <div key={el}></div>
      ))}
    </div>
  )
}

export default WaveSpinner
