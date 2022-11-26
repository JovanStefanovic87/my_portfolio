import classes from './buttons.module.scss'

interface Props {
  onClick: any
  opacity?: string
}

const ParallaxButton = (props: Props): JSX.Element => {
  return (
    <span
      className={classes.ParallaxButton}
      onClick={props.onClick}
      style={{ opacity: props.opacity }}
    ></span>
  )
}

export default ParallaxButton
