import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import About from './About'
import MySkills from './MySkills'
import { SliderNavParams } from '../../interfaces/interfaces'
import classes from './parallax.module.scss'
import Water from './Water'
import NextSlide from '../buttons/NextSlide'
import ParticleAnimation from './ParticleAnimation'
import { variants } from './variants'
import Image from 'next/image'
import anifish1 from '../../assets/img/anifish1.gif'
import Contact from '../contact/Contact'

interface Props {
  isMobile: boolean
}

const ParallaxMob: React.FC<Props> = ({ isMobile }): JSX.Element => {
  const [animated, setAnimated] = useState<SliderNavParams>({
    wellcome: {
      zIndex: 100,
      animate: {},
    },
    about: {
      zIndex: 0,
      animate: {},
    },
    water: {
      zIndex: 0,
      animate: {},
    },
    skills: {
      zIndex: 0,
      animate: {},
    },
    particles: {
      zIndex: 0,
      animate: {},
    },
    contact: {
      zIndex: 0,
      animate: {},
    },
  })

  const element = useRef()

  return (
    <Parallax pages={1} style={{height: '100vh'}}>
      <div ref={element}>
        <ParallaxLayer style={{ zIndex: animated.wellcome.zIndex }}>
          <motion.div
            className={classes.flexBox}
            initial={variants.unHide}
            animate={animated.wellcome.animate}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className={[classes.GradientText, classes.h1].join(' ')}
              initial={variants.hide}
              animate={variants.unHide}
              variants={variants}
              transition={{ duration: 1 }}
            >
              Welcome
            </motion.h1>
            <NextSlide
              onClick={() =>
                setAnimated({
                  ...animated,
                  wellcome: { zIndex: -1, animate: variants.hide },
                  about: { animate: variants.unHide, zIndex: 100 },
                })
              }
            />
          </motion.div>
        </ParallaxLayer>
        <ParallaxLayer style={{ zIndex: animated.about.zIndex}}>
          <motion.div
            className={classes.flexBox}
            initial={variants.hide}
            animate={animated.about.animate}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <About isMobile={isMobile} />
            <NextSlide
              onClick={() =>
                setAnimated({
                  ...animated,
                  about: { zIndex: -1, animate: variants.hide },
                  water: { animate: variants.centerY, zIndex: 100 },
                })
              }
            />
          </motion.div>
        </ParallaxLayer>
        <ParallaxLayer style={{ zIndex: animated.water.zIndex}}>
          <motion.div 
            className={classes.AnimateFishMob}
            initial={variants.bottom}
            animate={animated.water.animate}
            variants={variants}
            transition={{ duration: 0.5 }}>
            <Image src={anifish1} alt='fish' width='464px' height='170px' layout='intrinsic' />
          </motion.div>
          <motion.div
            className={classes.flexBox}
            initial={variants.bottom}
            animate={animated.water.animate}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <Water />
            <NextSlide
              onClick={() =>
                setAnimated({
                  ...animated,
                  water: { zIndex: -1, animate: variants.bottom },
                  skills: { animate: variants.centerY, zIndex: 100 },
                })
              }
            />
          </motion.div>
          
        </ParallaxLayer>
        <ParallaxLayer style={{ zIndex: animated.skills.zIndex }}>
          <motion.div
            className={classes.flexBox}
            initial={variants.top}
            animate={animated.skills.animate}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <ParticleAnimation />
            <MySkills classes={classes.MySkills}/>
            <NextSlide
              onClick={() =>
                setAnimated({
                  ...animated,
                  skills: { zIndex: -1, animate: variants.hide },
                  contact: { animate: variants.centerY, zIndex: 100 },
                })
              }
            />
          </motion.div>
        </ParallaxLayer>
        <ParallaxLayer style={{ zIndex: animated.contact.zIndex }}>
          <motion.div
            className={classes.flexBox}
            initial={variants.top}
            animate={animated.contact.animate}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <Contact />
            <NextSlide
              onClick={() =>
                setAnimated({
                  ...animated,
                  contact: { zIndex: -1, animate: variants.hide },
                  wellcome: { animate: variants.centerY, zIndex: 100 },
                })
              }
            />
          </motion.div>
        </ParallaxLayer>
      </div>
    </Parallax>
  )
}

export default ParallaxMob
