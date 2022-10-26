import classes from '../animations/animation.module.scss'

const AnimationWrapper = ({children}) => {
    return(
        <div className={classes.AnimationFrame}>
            <div className={classes.AnimationContainer}>
                {children}
            </div>
        </div>
    )
}

export default AnimationWrapper