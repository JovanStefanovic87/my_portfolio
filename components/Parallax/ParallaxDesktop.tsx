import React, { useRef, useEffect } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Image from 'next/image'
import Moon from './../../assets/img/moon.png'
import About from './About'
import MySkills from './MySkills'
import ButtonsGallery from '../animations/ButtonsGallery'
import Stars from './Stars'
import ShootingStars from './ShootingStars'
import Mountain from './Mountain'
import SpinnersGallery from '../animations/SpinnersGallery'
import ChartsGallery from '../charts/ChartsGallery'
import MountainImg from '../../assets/img/hill1-01.png'
import MountainImgMid from '../../assets/img/hill4.png'
import MountainDistImg from '../../assets/img/hillDistant.png'
import anifish1 from './../../assets/img/anifish1.gif'
import classes from './parallax.module.scss'
import CamuText from './CamuText'
import Water from './Water'
import ParticleAnimation from './ParticleAnimation'
import AnimationsGallery from '../animations/AnimationsGallery'
import Lake from './Lake'
import WaterDeeper from './WaterDeeper'
import ParallaxButton from '../buttons/ParallaxButton'
import Contact from '../contact/Contact'
import {ParallaxDesktop} from '../../interfaces/interfaces'


const ParallaxDesktop = (props: ParallaxDesktop): JSX.Element => {
  const parallax = useRef<any>(null)
  const buttonStartOffset = (n: number) => n - 0.05
  const buttonStartOffsetTop = (n: number) => n - 0.95
  const rotateButton = {
    rotate: '180deg',
  }

  useEffect(() => {
    parallax.current.scrollTo(props.sideBarScrollPosition)
  }, [props.sideBarScrollPosition])
  return (
    <div className={classes.ParallaxContainer}>
      <Parallax
        pages={12}
        className={[classes.Parallax, classes.ParallaxDesktop].join(' ')}
        ref={parallax}
      >
        {/* 0 */}
        <ParallaxLayer style={{ zIndex: -1 }} className={classes.StarAnimation}>
          <Stars />
        </ParallaxLayer>
        <ParallaxLayer style={{ zIndex: -1 }} className={classes.StarAnimation2}>
          <Stars />
        </ParallaxLayer>
        <ParallaxLayer offset={0} factor={0} className={classes.flexBox} style={{ zIndex: 1 }}>
          <ShootingStars />
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} factor={2} speed={-0.4} className={classes.flexBoxBottom}>
          <Mountain
            wrapper={classes.MountainBack}
            layout='responsive'
            src={MountainDistImg}
            priority={true}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          factor={2.2}
          className={[classes.flexBox, classes.Sky, classes.StarAnimation2].join(' ')}
          style={{ zIndex: 0 }}
        ></ParallaxLayer>
        <ParallaxLayer offset={0.15} speed={-0.3} factor={2} className={classes.flexBoxBottom}>
          <Mountain
            wrapper={classes.MountainMid}
            layout='responsive'
            src={MountainImgMid}
            priority={true}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.3} factor={2} speed={-0.2} className={classes.flexBoxBottom}>
          <Mountain
            wrapper={classes.MountainFront}
            layout='responsive'
            src={MountainImg}
            priority={true}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} factor={1} className={classes.Moon}>
          <Image
            src={Moon}
            alt='moon'
            width={100}
            height={100}
            layout='intrinsic'
            priority={true}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.95} className={classes.flexBoxButton}>
          <ParallaxButton onClick={() => props.setParalaxLayer(1)} />
        </ParallaxLayer>

        {/* 1 */}
        <ParallaxLayer
          offset={1}
          factor={1}
          className={[classes.flexBox, classes.Trees].join(' ')}
          style={{ zIndex: 1 }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={1}
          factor={1}
          sticky={{ start: 1, end: 2 }}
          className={classes.flexBox}
        >
          <Lake wrapper={classes.MountainBottom} layout='responsive' />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          sticky={{ start: buttonStartOffsetTop(2), end: 1 }}
          className={classes.flexBoxButton}
          style={rotateButton}
        >
          <ParallaxButton onClick={() => props.setParalaxLayer(0)} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          sticky={{ start: buttonStartOffset(2), end: 1 }}
          className={classes.flexBoxButton}
        >
          <ParallaxButton onClick={() => props.setParalaxLayer(2)} />
        </ParallaxLayer>

        {/* 2 */}
        <ParallaxLayer
          offset={2}
          factor={1}
          sticky={{ start: 2, end: 2 }}
          className={[classes.flexBoxTop, classes.FishLayer].join(' ')}
          style={{ zIndex: 1 }}
        >
          <div className={classes.AnimateFish}>
            <Image src={anifish1} alt='fish' width='464px' height='170px' layout='intrinsic' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          factor={1}
          sticky={{ start: 2, end: 2 }}
          className={[classes.flexBox, classes.Cave].join(' ')}
        >
          <Water />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          sticky={{ start: buttonStartOffsetTop(3), end: 2 }}
          className={classes.flexBoxButton}
          style={rotateButton}
        >
          <ParallaxButton onClick={() => props.setParalaxLayer(1)} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          sticky={{ start: buttonStartOffset(3), end: 2 }}
          className={classes.flexBoxButton}
        >
          <ParallaxButton onClick={() => props.setParalaxLayer(3)} />
        </ParallaxLayer>

        {/* 3 */}
        <ParallaxLayer
          offset={3}
          factor={1}
          sticky={{ start: 3, end: 4 }}
          className={[classes.flexBox, classes.Cave].join(' ')}
        >
          <WaterDeeper />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          factor={2}
          sticky={{ start: 3, end: 4 }}
          className={[classes.flexBox, classes.Bottom].join(' ')}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={4}
          sticky={{ start: buttonStartOffsetTop(4), end: 3 }}
          className={classes.flexBoxButton}
          style={rotateButton}
        >
          <ParallaxButton onClick={() => props.setParalaxLayer(2)} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          sticky={{ start: buttonStartOffset(4), end: 3 }}
          className={classes.flexBoxButton}
        >
          <ParallaxButton onClick={() => props.setParalaxLayer(4)} />
        </ParallaxLayer>

        {/* 4*/}
        <ParallaxLayer
          offset={4}
          factor={1}
          sticky={{ start: 4, end: 4 }}
          className={classes.flexBox}
        >
          <About isMobile={props.isMobile} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={5}
          sticky={{ start: buttonStartOffsetTop(5), end: 4 }}
          className={classes.flexBoxButton}
          style={rotateButton}
        >
          <ParallaxButton onClick={() => props.setParalaxLayer(3)} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={5}
          sticky={{ start: buttonStartOffset(5), end: 4 }}
          className={classes.flexBoxButton}
        >
          <ParallaxButton onClick={() => props.setParalaxLayer(5)} />
        </ParallaxLayer>

        {/* 5 */}
        <ParallaxLayer
          offset={5}
          factor={1}
          sticky={{ start: 5, end: 5 }}
          className={classes.flexBoxTop}
          style={{ zIndex: 3 }}
        >
          <h2>My Skills</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={5}
          factor={2}
          sticky={{ start: 5, end: 6 }}
          className={classes.flexBox}
          style={{ zIndex: 1 }}
        >
          <ParticleAnimation />
        </ParallaxLayer>
        <ParallaxLayer
          offset={5}
          factor={1}
          sticky={{ start: 5, end: 5 }}
          className={classes.flexBox}
          style={{ zIndex: 2 }}
        >
          <MySkills classes={classes.MySkills}/>
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
          sticky={{ start: buttonStartOffsetTop(6), end: 5 }}
          className={classes.flexBoxButton}
          style={{ zIndex: 4, rotate: '180deg' }}
        >
          <ParallaxButton onClick={() => props.setParalaxLayer(4)} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
          sticky={{ start: buttonStartOffset(6), end: 5 }}
          className={classes.flexBoxButton}
          style={{ zIndex: 4 }}
        >
          <ParallaxButton onClick={() => props.setParalaxLayer(7)} />
        </ParallaxLayer>

        {/* 6/7 */}
        <ParallaxLayer
          offset={6}
          factor={1}
          className={classes.flexBoxTop}
          sticky={{ start: 6, end: 8 }}
          style={{ zIndex: 4 }}
        >
          <h2>Components</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={7}
          className={classes.flexBox}
          sticky={{ start: 7, end: 7 }}
          style={{ zIndex: 3 }}
        >
          <ButtonsGallery />
        </ParallaxLayer>
        <ParallaxLayer
          offset={8}
          sticky={{ start: buttonStartOffsetTop(8), end: 7 }}
          className={classes.flexBoxButton}
          style={{ zIndex: 5, rotate: '180deg' }}
        >
          <ParallaxButton onClick={() => props.setParalaxLayer(5)} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={8}
          sticky={{ start: buttonStartOffset(8), end: 7 }}
          className={classes.flexBoxButton}
          style={{ zIndex: 5 }}
        >
          <ParallaxButton onClick={() => props.setParalaxLayer(8)} />
        </ParallaxLayer>

        {/* 8 */}
        <ParallaxLayer
          offset={8}
          className={classes.flexBox}
          sticky={{ start: 8, end: 8 }}
          style={{ zIndex: 1 }}
        >
          <SpinnersGallery />
        </ParallaxLayer>
        <ParallaxLayer
          offset={9}
          sticky={{ start: buttonStartOffsetTop(9), end: 8 }}
          className={classes.flexBoxButton}
          style={{ zIndex: 5, rotate: '180deg' }}
        >
          <ParallaxButton onClick={() => props.setParalaxLayer(7)} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={9}
          sticky={{ start: buttonStartOffset(9), end: 8 }}
          className={classes.flexBoxButton}
          style={{ zIndex: 2 }}
        >
          <ParallaxButton onClick={() => props.setParalaxLayer(9)} />
        </ParallaxLayer>

        {/* 9 */}
        <ParallaxLayer
          offset={9}
          factor={1}
          className={classes.flexBoxTop}
          sticky={{ start: 9, end: 9 }}
        >
          <h2>Charts</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={9}
          factor={2}
          className={classes.flexBox}
          sticky={{ start: 9, end: 9 }}
        >
          <ChartsGallery />
        </ParallaxLayer>
        <ParallaxLayer
          offset={10}
          sticky={{ start: buttonStartOffsetTop(10), end: 9 }}
          className={classes.flexBoxButton}
          style={rotateButton}
        >
          <ParallaxButton onClick={() => props.setParalaxLayer(8)} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={10}
          sticky={{ start: buttonStartOffset(10), end: 9 }}
          className={classes.flexBoxButton}
        >
          <ParallaxButton onClick={() => props.setParalaxLayer(10)} />
        </ParallaxLayer>

        {/* 10 */}
        <ParallaxLayer
          offset={10}
          factor={1}
          className={classes.flexBoxTop}
          sticky={{ start: 10, end: 10 }}
          style={{ zIndex: 4 }}
        >
          <h2>Motions</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={10} className={classes.flexBox} sticky={{ start: 10, end: 10 }}>
          <AnimationsGallery />
        </ParallaxLayer>
        <ParallaxLayer
          offset={11}
          sticky={{ start: buttonStartOffsetTop(11), end: 10 }}
          className={classes.flexBoxButton}
          style={{ zIndex: 5, rotate: '180deg' }}
        >
          <ParallaxButton onClick={() => props.setParalaxLayer(9)} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={11}
          sticky={{ start: buttonStartOffset(11), end: 10 }}
          className={classes.flexBoxButton}
        >
          <ParallaxButton onClick={() => props.setParalaxLayer(11)} />
        </ParallaxLayer>

        {/* 11 */}
        <ParallaxLayer
          offset={11}
          factor={1}
          className={classes.flexBoxTop}
          sticky={{ start: 11, end: 11 }}
          style={{ zIndex: 5 }}
        >
          <Contact />
        </ParallaxLayer>
        <ParallaxLayer
          offset={11}
          factor={1}
          className={classes.flexBox}
          sticky={{ start: 11, end: 11 }}
          style={{ zIndex: 4 }}
        >
          <CamuText />
        </ParallaxLayer>
        <ParallaxLayer
          offset={12}
          sticky={{ start: buttonStartOffsetTop(12), end: 11 }}
          className={classes.flexBoxButton}
          style={{ zIndex: 5, rotate: '180deg' }}
        >
          <ParallaxButton onClick={() => props.setParalaxLayer(10)} />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default ParallaxDesktop
