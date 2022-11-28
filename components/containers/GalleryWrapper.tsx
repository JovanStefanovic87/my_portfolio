import useOnScreen from '../../helpers/useOnScreen'
import React, { useState, useEffect, useRef } from 'react'

import classes from '../animations/animation.module.scss'

const GalleryWrapper = ({ children }): JSX.Element => {
  const [animate, setAnimate] = useState<string>('')
  const isComponentLoad = useRef<boolean>(true)
  const ref = useRef<HTMLInputElement>(null)
  const onScreen = useOnScreen(ref)

  useEffect(() => {
    if (isComponentLoad.current) {
      isComponentLoad.current = false
      return
    }
    setAnimate(onScreen ? classes.a : classes.b)
  }, [isComponentLoad.current, onScreen])

  return (
    <div className={classes.GalleryWrapper}>
      <div className={[classes.GalleryContainer, animate].join(' ')} ref={ref}>
        {children as JSX.Element}
      </div>
    </div>
  )
}

export default GalleryWrapper
