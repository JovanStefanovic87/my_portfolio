import classes from './buttons.module.scss'

const GlowingButton = (): JSX.Element => {
  return (
    <button className={classes.GlowOnHover} type='button'>
      HOVER ME, THEN CLICK ME!
    </button>
  )
}

export default GlowingButton
