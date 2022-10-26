import classes from './buttons.module.scss'

const MechanicalButton = (): JSX.Element => {
    return(
        <div className={classes.MechanicalButton}>
            <a href="#">Click Me</a>
        </div>
    )
}

export default MechanicalButton