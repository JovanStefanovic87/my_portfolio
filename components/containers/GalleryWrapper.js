import useOnScreen from '../../helpers/useOnScreen';
import React, { useState, useEffect, useRef } from "react";

import classes from '../animations/animation.module.scss'

const GalleryWrapper = ({children}) => {
    const [animate, setAnimate] = useState('')
    const isComponentLoad = useRef(true);
    const ref = useRef(null)
    const onScreen = useOnScreen(ref)
    
    useEffect(() =>{
        if (isComponentLoad.current) {
            isComponentLoad.current = false;
            return
        }
        setAnimate(onScreen ? classes.a : classes.b)
    }, [isComponentLoad.current, onScreen])
    
    return (
        <div className={classes.GalleryWrapper}>
            <div className={[classes.GalleryContainer, animate].join(' ')} ref={ref}>
                {children}
            </div>
        </div>
    )
}

export default GalleryWrapper