import classes from './layout.module.scss'

const NavButton = props => {
    return(
        <div className={[classes.NavButton, props.className].join('')} onClick={props.onClick} style={props.style}>{props.value}</div>
    )
}

export default NavButton