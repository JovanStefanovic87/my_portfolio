import classes from './spinners.module.scss'

const GlowingSpinner = (): JSX.Element => {
  return (
    <div className={classes.GlowingSpinner}>
      Loading
      <span></span>
    </div>
  )
}

export default GlowingSpinner
