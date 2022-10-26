import classes from '../animations/animation.module.scss'

const ChartWrapper = ({children}) => {
    return(
        <div className={classes.ChartFrame}>
            {children}
        </div>
    )
}

export default ChartWrapper