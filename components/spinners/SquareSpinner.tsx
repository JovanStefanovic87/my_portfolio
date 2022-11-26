import classes from './spinners.module.scss'

const SquareSpinner = (): JSX.Element => {
  return (
    <div className={classes.SquareSpinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default SquareSpinner
