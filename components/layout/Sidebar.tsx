import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import authorImg from '../../assets/img/author.png'
import githubImg from '../../assets/img/github.png'
import linkedinImg from '../../assets/img/linkedin.png'
import NavButton from './NavButton'
import Typewriter from './Typewriter'

import classes from './layout.module.scss'

interface Props {
  display: string
  setParalaxLayer: Dispatch<SetStateAction<number>>
  sideBarScrollPosition: number
}

const Sidebar = (props: Props): JSX.Element => {
  const sideBarScrollPosition = props.sideBarScrollPosition
  const setParalaxLayer = props.setParalaxLayer
  const navButtonAnimationHandler = (
    x: number,
    y: number,
    className: string,
    animation: string = classes.NavAnimate,
  ) =>
    sideBarScrollPosition >= x && sideBarScrollPosition < y
      ? [className, animation].join(' ')
      : className

  return (
    <div className={classes.Sidebar} style={{ display: props.display }}>
      <div>
        <div className={classes.AuthorImageContainer}>
          <Image
            src={authorImg}
            alt='image'
            width={150}
            height={150}
            layout='fixed'
            className={classes.Img}
          />
        </div>
        <Typewriter />
      </div>
      <div className={classes.NavButtonContainer}>
        <NavButton
          value='Home'
          className={navButtonAnimationHandler(0, 4, classes.Home)}
          onClick={() => {
            setParalaxLayer(0)
          }}
        />
        <NavButton
          value='About'
          className={navButtonAnimationHandler(4, 5, classes.About)}
          onClick={() => {
            setParalaxLayer(4)
          }}
        />
        <NavButton
          value='My skills'
          className={navButtonAnimationHandler(5, 7, classes.MySkills)}
          onClick={() => {
            setParalaxLayer(5)
          }}
        />
        <NavButton
          value='Components'
          className={navButtonAnimationHandler(7, 9, classes.Components)}
          onClick={() => {
            setParalaxLayer(7)
          }}
        />
        <NavButton
          value='Charts'
          className={navButtonAnimationHandler(9, 10, classes.Charts)}
          onClick={() => {
            setParalaxLayer(9)
          }}
        />
        <NavButton
          value='Motions'
          className={navButtonAnimationHandler(10, 11, classes.Motions)}
          onClick={() => {
            setParalaxLayer(10)
          }}
        />
        <NavButton
          value='Contact'
          className={navButtonAnimationHandler(11, 12, classes.Contact)}
          onClick={() => {
            setParalaxLayer(11)
          }}
        />
      </div>
      <div className={classes.SocialImageContainer}>
        <Image src={githubImg} alt='image' width={70} height={70} layout='fixed' priority={true} />
        <Image
          src={linkedinImg}
          alt='image'
          width={70}
          height={70}
          layout='fixed'
          priority={true}
        />
      </div>
    </div>
  )
}

export default Sidebar
