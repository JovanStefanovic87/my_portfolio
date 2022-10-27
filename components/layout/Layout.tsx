import classes from './layout.module.scss'

const Layout = ({children}) => {
    return(
        <div className={classes.Layout}>
            {children as JSX.Element}
        </div>
    )
}

export default Layout