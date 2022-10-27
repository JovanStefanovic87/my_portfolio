import classes from './spinners.module.scss'

const WaveSpinner = (): JSX.Element => {
    return(
        <div className={classes.WaveSpinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default WaveSpinner