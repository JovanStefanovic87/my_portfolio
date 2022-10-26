import classes from './buttons.module.scss'

const ParallaxButton = props => {
    return(
        <span className={classes.ParallaxButton} onClick={props.onClick} style={{opacity: props.opacity}}></span>
    )
}

export default ParallaxButton