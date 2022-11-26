import classes from '../animations/animation.module.scss'

const GalleryItemWrapper = ({ children }): JSX.Element => {
  return (
    <div className={classes.Frame}>
      <div className={classes.ButtonContainer}>{children as JSX.Element}</div>
    </div>
  )
}

export default GalleryItemWrapper
