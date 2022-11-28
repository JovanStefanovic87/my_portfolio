import React from 'react'
import { motion } from 'framer-motion'
import GalleryWrapper from '../containers/GalleryWrapper'
import AnimationWrapper from '../containers/AnimationWrapper'
import ShapeBender from './ShapeBender'

import classes from './animation.module.scss'

const AnimationsGallery = (): JSX.Element => {
  return (
    <GalleryWrapper>
      <AnimationWrapper>
        <motion.div
          className={classes.MotionCircle}
          whileTap={{ scale: [1, 2] }}
          transition={{ type: 'spring', stiffness: 220, damping: 3 }}
        ></motion.div>
      </AnimationWrapper>
      <AnimationWrapper>
        <div className={classes.AnimationContainer}>
          <motion.div
            className={classes.MotionCircle}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={1.2}
            transition={{ type: 'spring', stiffness: 120, damping: 2 }}
          ></motion.div>
        </div>
      </AnimationWrapper>
      <AnimationWrapper>
        <ShapeBender />
      </AnimationWrapper>
      <AnimationWrapper>
        <motion.div
          className={classes.MotionSquare}
          whileTap={{ scale: [1, 2], opacity: [1, 0.81] }}
          transition={{ type: 'spring', damping: 100 }}
        ></motion.div>
      </AnimationWrapper>
      <AnimationWrapper>
        <motion.div
          className={classes.MotionSquare}
          whileTap={{
            scaleX: [1, 2, 2, 2, 1, 1],
            scaleY: [1, 1, 2, 2, 2, 1],
            opacity: [1, 1, 0.5, 0.5, 0.5, 1],
          }}
          transition={{ duration: 2 }}
        ></motion.div>
      </AnimationWrapper>
      <AnimationWrapper>
        <motion.div
          className={classes.MotionSquare}
          whileTap={{ scaleX: [1, 1.5], scaleY: [1, 0.5] }}
          transition={{ type: 'spring', damping: 2 }}
        ></motion.div>
      </AnimationWrapper>
      <AnimationWrapper>
        <motion.div
          className={classes.MotionCircle}
          whileTap={{ skew: [1, 30] }}
          transition={{ type: 'spring', damping: 2 }}
        ></motion.div>
      </AnimationWrapper>
      <AnimationWrapper>
        <motion.div
          className={classes.MotionCircle}
          whileTap={{ scaleX: [1, 1.5], scaleY: [1, 0.5] }}
          transition={{ type: 'spring', damping: 2 }}
        ></motion.div>
        <motion.div
          className={classes.MotionCircle}
          whileTap={{ scaleX: [1, 1.5], scaleY: [1, 0.5] }}
          transition={{ type: 'spring', damping: 2 }}
        ></motion.div>
      </AnimationWrapper>
    </GalleryWrapper>
  )
}

export default AnimationsGallery
