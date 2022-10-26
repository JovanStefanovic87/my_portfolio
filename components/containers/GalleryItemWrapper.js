import classes from '../animations/animation.module.scss'

const GalleryItemWrapper = ({children}) => {
    return(
        <div className={classes.Frame}>
            <div className={classes.ButtonContainer}>
                {children}
            </div>
        </div>
    )
}

export default GalleryItemWrapper