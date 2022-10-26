import classes from './charts.module.scss'

const ChangePreviewBtn = (props) => {
    return(
        <div className={classes.ChangePreviewButton}>
            {
                props.array.map((b, i) => <button key={i} onClick={() => props.setIndex(i)}>{b}</button>)
            }
        </div>
    )
}

export default ChangePreviewBtn