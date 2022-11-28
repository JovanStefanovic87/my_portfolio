import React, { useState } from 'react'
import { ShapeBenderTransition } from '../../interfaces/interfaces'
import { motion, MotionConfig } from 'framer-motion'

import classes from './animation.module.scss'

const ShapeBender = (): JSX.Element => {
  const [isHover, setIsHover] = useState<boolean>(false)

  const shapeBenderTransition = {
    duration: 2,
    ease: 'easeInOut',
    times: [0, 0.2, 0.5, 0.8, 1],
    repeat: Infinity,
    repeatDelay: 0,
    bounce: 0.2,
  }

  return (
    <MotionConfig transition={shapeBenderTransition as ShapeBenderTransition}>
      <motion.div
        className={classes.MotionSquare}
        animate={isHover ? 'hover' : 'rest'}
        variants={{
          rest: {
            scale: [1, 1, 1, 1, 1],
            rotate: [0, 0, 0, 0, 0],
            borderRadius: ['0%', '0%', '0%', '0%', '0%'],
          },
          hover: {
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ['0%', '0%', '50%', '50%', '0%'],
          },
        }}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
      />
    </MotionConfig>
  )
}

export default ShapeBender
