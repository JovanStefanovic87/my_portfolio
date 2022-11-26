import classes from './parallax.module.scss'

const CamuText = (): JSX.Element => {
  const initText = `Thank you`
  const arry = initText.split('')
  const animText = []
  const createAnimText = (n: number): void => {
    animText[n] = arry[n]
    n--
    n >= 0 ? createAnimText(n) : null
  }
  createAnimText(arry.length - 1)

  return (
    <div className={classes.CamuText}>
      <div>
        {animText.map((el, i) => {
          let char = el === ' ' ? '\u00A0' : el
          return <span key={i}>{char}</span>
        })}
      </div>
    </div>
  )
}

export default CamuText
