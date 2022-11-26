import React, { useState, useEffect, useRef } from "react";
import useOnScreen from '../../helpers/useOnScreen';
import {skills} from './skills'

import classes from './intro.module.scss'

const Intro = () => {
    const [animate, setAnimate] = useState('')
    const isComponentLoad = useRef(true);
    const ref = useRef(null)
    const onScreen = useOnScreen(ref, '-300px')

    useEffect(() =>{
        if (isComponentLoad.current) {
            isComponentLoad.current = false;
            return
        }
        setAnimate(onScreen ? classes.Cube : classes.Hidden)
    }, [isComponentLoad.current, onScreen])

    return(
        <div className={classes.Container} ref={ref}>
            <div className={classes.Scene}>
                <div className={animate}>
                    {
                        skills.map((el, i) => {
                            return(
                                <p className={classes[el]} key={i}>{el}</p>
                            )
                        })
                    }
                    <>
                        <div className={classes.CubeFaceFront}>top</div>
                        <div className={classes.CubeFaceBack}>back</div>
                        <div className={classes.CubeFaceRight}>right</div>
                        <div className={classes.CubeFaceLeft}>door</div>
                        <div className={classes.CubeFaceTop}>top</div>
                        <div className={classes.CubeFaceBottom}>left</div>
                    </>
                    
                </div>
            </div>
        </div>
    )
}

export default Intro