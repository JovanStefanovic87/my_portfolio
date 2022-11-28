import React from 'react'
import classes from './spinners.module.scss'
import { createInners } from '../../helpers/universalFunctions'

const SpiralSpinner = (): JSX.Element => {
  const divArray = []
  createInners(70, divArray)

  return (
    <div className={classes.SpiralSpinner}>
      {divArray.map((el) => (
        <div key={el}></div>
      ))}
    </div>
  )
}

export default SpiralSpinner
