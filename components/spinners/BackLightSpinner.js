import classes from './spinners.module.scss'

const BackLightSpinner = () => {
    return(
        <div className={classes.BackLightSpinner}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default BackLightSpinner