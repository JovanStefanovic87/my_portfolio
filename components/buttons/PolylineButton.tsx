import classes from './buttons.module.scss'

const PolylineButton = () : JSX.Element => {
    return(
        <div className={classes.PolylineButton}>
            <div>
                <button>
                    <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                        <polyline points="179,1 179,59 1,59 1,1 179,1"/>
                        <polyline points="179,1 179,59 1,59 1,1 179,1"/>
                    </svg>
                    <span>HOVER ME</span>
                </button>
            </div>
        </div>
    )
}

export default PolylineButton