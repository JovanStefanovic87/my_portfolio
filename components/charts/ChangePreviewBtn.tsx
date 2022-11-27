import classes from './charts.module.scss'

interface Props {
    array: number[]
    setIndex: React.Dispatch<React.SetStateAction<Number>>
}

const ChangePreviewBtn = (props: Props): JSX.Element => {
    return(
        <div className={classes.ChangePreviewButton}>
            {
                props.array.map((b, i) => <button key={i} onClick={() => props.setIndex(i)}>{b}</button>)
            }
        </div>
    )
}

export default ChangePreviewBtn