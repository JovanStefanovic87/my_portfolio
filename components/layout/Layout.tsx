import classes from './layout.module.scss'

const Layout = ({ children }) => <div className={classes.Layout}>{children as JSX.Element}</div>

export default Layout
