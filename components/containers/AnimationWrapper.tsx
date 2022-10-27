import classes from '../animations/animation.module.scss'

const AnimationWrapper = ({children}): JSX.Element => {
    return(
        <div className={classes.AnimationFrame}>
            <div className={classes.AnimationContainer}>
                {children as JSX.Element}
            </div>
        </div>
    )
}

export default AnimationWrapper