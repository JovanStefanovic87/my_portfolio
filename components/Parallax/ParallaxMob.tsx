import { useState, useRef } from "react";
import { motion } from "framer-motion"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import About from './About';
import MySkills from './MySkills';
import {SliderNavParams} from '../../interfaces/interfaces'
import classes from './parallax.module.scss'
import Water from './Water';
import NextSlide from '../buttons/NextSlide';
import ParticleAnimation from './ParticleAnimation';
import { variants } from './variants';


const ParallaxMob = (): JSX.Element => {
    const [animated, setAnimated] = useState<SliderNavParams>({
        wellcome: {
            zIndex: 100,
            animate: {}
        },
        about: {
            zIndex: 0,
            animate: {}
        },
        water: {
            zIndex: 0,
            animate: {}
        },
        skills: {
            zIndex: 0,
            animate: {}
        },
        particles: {
            zIndex: 0,
            animate: {}
        },
    })

    const element = useRef()

        return(
            <Parallax pages={1}>
            <div className={classes.ParallaxContainer} ref={element}>
                <ParallaxLayer style={{zIndex: animated.wellcome.zIndex}} >
                    <motion.div className={classes.flexBox} 
                    initial={variants.unHide}
                    animate={animated.wellcome.animate}
                    variants={variants}
                    transition={{ duration: 0.5 }}>
                        <motion.h1 className={[classes.GradientText, classes.h1].join(' ')}  
                        initial={variants.hide}
                        animate={variants.unHide}
                        variants={variants}
                        transition={{ duration: 1 }}>Welcome</motion.h1>
                        <NextSlide onClick={() => setAnimated({...animated, wellcome: {zIndex: -1, animate: variants.hide}, about: {animate: variants.unHide, zIndex: 100}})}/>
                    </motion.div>
                </ParallaxLayer>
                <ParallaxLayer style={{zIndex: animated.about.zIndex}}>
                    <motion.div className={classes.flexBox} 
                        initial={variants.hide}
                        animate={animated.about.animate}
                        variants={variants}
                        transition={{ duration: 0.5 }}>
                        <About />
                        <NextSlide onClick={() => setAnimated({...animated, about: {zIndex: -1, animate: variants.hide}, water: {animate: variants.centerY, zIndex: 100}})}/>
                    </motion.div>
                </ParallaxLayer>
                <ParallaxLayer style={{zIndex: animated.water.zIndex}}>
                    <motion.div className={classes.flexBox} 
                        initial={variants.bottom}
                        animate={animated.water.animate}
                        variants={variants}
                        transition={{ duration: 0.5 }}>
                        <Water />
                        <NextSlide onClick={() => setAnimated({...animated, water: {zIndex: -1, animate: variants.bottom}, skills: {animate: variants.centerY, zIndex: 100}})}/>
                    </motion.div>
                </ParallaxLayer>
                <ParallaxLayer style={{zIndex: animated.skills.zIndex}}>
                    <motion.div className={classes.flexBox} 
                        initial={variants.top}
                        animate={animated.skills.animate}
                        variants={variants}
                        transition={{ duration: 0.5 }}>
                        <ParticleAnimation />
                        <MySkills />
                    </motion.div>
                </ParallaxLayer>
                </div>
            </Parallax>
            )
}


export default ParallaxMob