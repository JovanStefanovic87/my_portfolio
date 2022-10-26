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


const ParallaxMob = () => {
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
                        transition={{ duration: 1 }}>Wellcome</motion.h1>
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
                        <MySkills />
                        <NextSlide onClick={() => setAnimated({...animated, skills: {zIndex: -1, animate: variants.bottom}, particles: {animate: variants.centerY, zIndex: 100}})}/>
                    </motion.div>
                </ParallaxLayer>
                <ParallaxLayer style={{zIndex: animated.particles.zIndex}}>
                    <motion.div className={classes.flexBox} 
                        initial={variants.top}
                        animate={animated.particles.animate}
                        variants={variants}
                        transition={{ duration: 0.5 }}>
                        <ParticleAnimation />
                        {/* <NextSlide onClick={() => setAnimated({...animated, skills: {zIndex: -1, animate: variants.bottom}, chart: {animate: variants.centerY, zIndex: 100}})}/> */}
                    </motion.div>
                </ParallaxLayer>
                </div>
            </Parallax>
            )
                {/* <Parallax pages={20} className={classes.ParallaxMob} >
                    <ParallaxLayer sticky={{ start: 0, end: 3 }} ref={stars} style={{zIndex: -1}} className={classes.StarAnimation}>
                        <Stars />
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 0, end: 4 }} ref={stars} style={{zIndex: -1}} className={classes.StarAnimation2}>
                        <Stars />
                    </ParallaxLayer>
                    <ParallaxLayer className={classes.flexBox}>
                        <h1 className={[classes.GradientText, classes.h1].join(' ')}>Wellcome</h1>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} className={[classes.flexBox, classes.LightIceLayer].join(' ')} style={{ marginTop: '-20px'}}>
                    </ParallaxLayer>
                    <ParallaxLayer offset={2} className={[classes.flexBox, classes.Cave].join(' ')} style={{ marginTop: '-20px'}}>       
                    <div className={classes.Waves}></div>           
                        <Water />
                    </ParallaxLayer> 
                    <ParallaxLayer offset={3} className={classes.ParallaxBg} sticky={{ start: 3, end: 4 }} style={{zIndex:10}}>
                    </ParallaxLayer>
                    <ParallaxLayer offset={3}className={classes.flexBoxTop} sticky={{ start: 3, end: 4 }} style={{zIndex:10}}>
                        <h2>My Skills</h2>
                    </ParallaxLayer>
                    
                    <ParallaxLayer offset={5}  className={classes.flexBox} sticky={{ start: 5, end: 6 }} style={{zIndex:8}}>
                        <SpinnersMob />
                    </ParallaxLayer>
                    <ParallaxLayer offset={12}  className={classes.flexBox} sticky={{ start: 12, end: 13 }} style={{zIndex:8}}>
                        <SpinnersGallery />
                    </ParallaxLayer>
                    <ParallaxLayer offset={14} factor={1} className={classes.flexBoxTop} sticky={{ start: 14, end: 16 }}>
                        <h2>Charts</h2>
                    </ParallaxLayer>                   
                </Parallax> */}
}


export default ParallaxMob