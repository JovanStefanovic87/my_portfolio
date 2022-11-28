import React from 'react'
import { createInners } from '../../helpers/universalFunctions'

import classes from './stars.module.scss'

const Stars = (): JSX.Element => {
  const divArray = []
  createInners(6, divArray)
  return (
    <>
      {divArray.map((el) => {
        return <div key={el} className={classes[`StarsGroup${el}`]}></div>
      })}
    </>
  )
}

export default Stars
