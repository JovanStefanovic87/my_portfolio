import classes from './spinners.module.scss'

const BackLightSpinner = (): JSX.Element => {
  return (
    <div className={classes.BackLightSpinner}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default BackLightSpinner
