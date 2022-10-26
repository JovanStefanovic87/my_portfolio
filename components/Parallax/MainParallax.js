import { useState, useEffect, useRef } from "react";
import {useDeviceDetect} from '../../helpers/universalFunctions'
import { motion } from "framer-motion"
/* import useOnScreen from '../../helpers/useOnScreen'; */
import { useSpring, animated } from 'react-spring'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Image from 'next/image'
import Moon from './../../assets/img/moon.png'
import icecave from '../../assets/img/icecave.png'
import Intro from '../intro/Intro'
import About from './About';
import MySkills from './MySkills';
import ButtonsGallery from '../animations/ButtonsGallery';
import Stars from './Stars';
import ShootingStars from './ShootingStars';
import Mountain from './Mountain';
import SpinnersGallery from '../animations/SpinnersGallery';
import ChartsGallery from '../charts/ChartsGallery';

import classes from './parallax.module.scss'
import CamuText from './CamuText';
import Water from './Water';
import WaterImg from '../../assets/img/Water.png'
import SpinnersMob from '../animations/SpinnersMob';
import NextSlide from '../buttons/NextSlide';
import ParticleAnimation from './ParticleAnimation';

/* const myParallax = dynamic(() => import('../components/Parallax/MainParallax'), {ssr:false}) */


const MainParallax = () => {
    const [animated, setAnimated] = useState({
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
    const { isMobile } = useDeviceDetect();
    const isComponentLoad = useRef(true);
    const [isRendered, setIsRendered] = useState(false)
    const myRef = useRef();
    const stars = useRef();
    const [animation, useAnimation] = useState(true)
    const boxRef = useRef(); 
    const buttonRef = useRef(); 
    /* const isBoxVisible = useOnScreen(boxRef, "0px"); */
    const element = useRef()
    const [flip, set] = useState(false)

    const variants = {
        unHide: { opacity: 1, scale: 1, y: 0 },
        hide: { opacity: 0, scale: 0, y: '-100vh'},
        left: { x: '100vw'},
        centerX: { x: 0},
        bottom: {y: '100vh'},
        top: {y: '-100vh'},
        centerY: {y: 0}
      }
    /* const isvisible = useOnScreen(element) */
    /* console.log('isVisible', isvisible)
    useEffect(() =>{
        if (isComponentLoad.current) {
            isComponentLoad.current = false;
            return
        }
        setIsRendered(myRef)
    }, [isComponentLoad.current])

    useEffect(() =>{
        if (!isRendered) {
            return
        }
    }, [isRendered]) */

 /*  function useOnScreen(ref, rootMargin = "0px") {
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        if (isComponentLoad.current) {
            isComponentLoad.current = false;
            return
        }
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin,
        }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        observer.unobserve(ref.current);
      };
    }, []);
    return isIntersecting;
} */

    if (isMobile) {
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
                        <NextSlide onClick={() => setAnimated({...animated, skills: {zIndex: -1, animate: variants.bottom}, chart: {animate: variants.centerY, zIndex: 100}})}/>
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
            
        
    }else{
        return(
            <div className={classes.ParallaxContainer} ref={element}>
                <Parallax pages={20} className={[classes.Parallax, classes.ParallaxDesktop].join(' ')} >
                    <ParallaxLayer offset={0} factor={0}  sticky={{ start: 0, end: 3 }} style={{zIndex: -1}} className={classes.StarAnimation}>
                        <Stars />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} factor={0}  sticky={{ start: 0, end: 4 }} style={{zIndex: -1}} className={classes.StarAnimation2}>
                        <Stars />
                    </ParallaxLayer>
    
                    <ParallaxLayer offset={0.10} factor={2} speed={-0.2} className={classes.flexBoxBottom}>
                        <Mountain 
                            wrapper={classes.MountainBack}
                            layout='responsive'
                        />   
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.15} factor={2} className={classes.flexBoxBottom}>
                        <Mountain 
                            wrapper={classes.MountainMid}
                            layout='responsive'
                        /> 
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.3} factor={2} speed={0.2} className={classes.flexBoxBottom}>
                        <Mountain 
                            wrapper={classes.MountainFront}
                            layout='responsive'
                        />
                    </ParallaxLayer>
    
                    <ParallaxLayer offset={0} factor={0} className={classes.flexBox} style={{zIndex: 1}}>
                        <ShootingStars />
                    </ParallaxLayer>
    
                    <ParallaxLayer offset={0} factor={1}  className={classes.Moon}>
                        <Image 
                            src={Moon}
                            alt='moon'
                            width={100}
                            height={100}
                            layout='intrinsic'
                        />
                    </ParallaxLayer>
    
                    <ParallaxLayer offset={1} factor={1} sticky={{ start: 1, end: 2 }} className={[classes.flexBox, classes.LightIceLayer].join(' ')} style={{ zIndex: 1}}>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} factor={1} sticky={{ start: 1, end: 2 }} className={classes.flexBox} style={{ zIndex: 100}}>
                        <Mountain 
                            wrapper={classes.MountainBottom}
                            layout='fill'
                        />
                        <About />
                        <CamuText />
                    </ParallaxLayer>
    
                    <ParallaxLayer offset={3} factor={1} sticky={{ start: 3, end: 6}} className={[classes.flexBox, classes.Cave].join(' ')}>       
                    <div className={classes.Waves}></div>           
                        <Water />
                    </ParallaxLayer> 
                    <ParallaxLayer offset={5} factor={2} sticky={{ start: 6, end: 8 }} className={classes.ParallaxBg} style={{zIndex:10}}>
                    </ParallaxLayer>
    
                    <ParallaxLayer offset={6} factor={1} className={classes.flexBoxTop} sticky={{ start: 6, end: 8 }} style={{zIndex:12}}>
                        <h2>My Skills</h2>
                    </ParallaxLayer>
                    <ParallaxLayer offset={6} factor={1} sticky={{ start: 6, end: 8 }} className={classes.flexBox} style={{zIndex:11}}>
                        <div ref={myRef}>
                            <MySkills />
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={6} factor={1} sticky={{ start: 6, end: 8 }} className={[classes.flexBox, classes.DarkerIceLayer].join(' ')} style={{zIndex:10}}>
                        <ParticleAnimation />
                    </ParallaxLayer>
    
                    <ParallaxLayer offset={9} factor={1} className={classes.flexBoxTop} sticky={{ start: 9, end: 13 }} style={{zIndex:20}}>
                        <h2>UI/UX</h2>
                    </ParallaxLayer>
                    <ParallaxLayer offset={10}  className={classes.flexBox} sticky={{ start: 10, end: 11 }} style={{zIndex:8}}>
                        <ButtonsGallery />
                    </ParallaxLayer>
                    <ParallaxLayer offset={12}  className={classes.flexBox} sticky={{ start: 12, end: 13 }} style={{zIndex:8}}>
                        <SpinnersGallery />
                    </ParallaxLayer>
                    <ParallaxLayer offset={14} factor={1} className={classes.flexBoxTop} sticky={{ start: 14, end: 16 }}>
                        <h2>Charts</h2>
                    </ParallaxLayer>
                    <ParallaxLayer offset={15} factor={2} className={classes.flexBox} sticky={{ start: 15, end: 17 }}>
                        <ChartsGallery /* label={data[0].label} *//>
                        {/* <select style={{width: '200px', position: 'absolute', bottom: '5vh'}}></select> */}
                    </ParallaxLayer>
    
                    
    
                    {/* <ParallaxLayer offset={2} factor={2} sticky={{ start: 3, end: 6 }} className={classes.flexBox}>
                    </ParallaxLayer> */}
    
    
                    {/* 
                    <ParallaxLayer offset={4} factor={1} sticky={{ start: 4, end: 6 }} className={[classes.flexBox, classes.Trees].join(' ')} style={{zIndex: -1}}>
                    </ParallaxLayer> */}
    
                    
    
                     
                    {/* <ParallaxLayer offset={5} factor={2} speed={0.1} sticky={{ start: 5, end: 7 }} className={classes.Backgorund1} style={{backgroundColor: 'white'}}>
                    </ParallaxLayer>
                    <ParallaxLayer offset={6}  speed={0.5} className={classes.flexBox} sticky={{ start: 6, end: 6 }}>
                        <div ref={myRef}>
                            <BlockChart />
                        </div>
                    </ParallaxLayer> */}
    
                    {/* <ParallaxLayer offset={7} factor={2} speed={1} sticky={{ start: 7, end: 9 }} className={classes.Backgorund1} style={{backgroundColor: 'gray'}}>
                    </ParallaxLayer>
                    <ParallaxLayer offset={8}  speed={0.5} className={classes.flexBox} sticky={{ start: 8, end: 9 }}>
                        <DoughnutChart />
                    </ParallaxLayer>
    
                    <ParallaxLayer  offset={10} factor={2} speed={1} sticky={{ start: 10, end: 12 }} className={classes.Backgorund1} style={{backgroundColor: 'white'}}>
                    </ParallaxLayer>
                    <ParallaxLayer   offset={11} factor={2} speed={1} sticky={{ start: 11, end: 12 }} className={classes.flexBox}>
                        <div ref={boxRef} className={classes.flexBox}>
                            <Intro display={isBoxVisible ? 'flex' : 'none'}/>         
                        </div>       
                    </ParallaxLayer> */}
                    
                </Parallax>
            </div>
            
        )
    }
    
    
}


export default MainParallax