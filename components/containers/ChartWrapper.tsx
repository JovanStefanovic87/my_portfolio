import classes from '../animations/animation.module.scss'

const ChartWrapper = ({ children }): JSX.Element => {
  return <div className={classes.ChartFrame}>{children as JSX.Element}</div>
}

export default ChartWrapper
