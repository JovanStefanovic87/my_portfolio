import { useState } from 'react'

import classes from './buttons.module.scss'

const SumbitButton = (): JSX.Element => {
  const [style, setStyle] = useState<string>('')

  const onClick = () => {
    setStyle(classes.SubmitButtonOnClick)
    setTimeout(() => {
      validate()
    }, 250)
  }

  const validate = () => {
    setTimeout(() => {
      setStyle(classes.SubmitButtonValidate)
    }, 2250)
    setTimeout(() => {
      setStyle(null)
    }, 3250)
  }

  return (
    <button className={[classes.SubmitButton, style].join(' ')} onClick={() => onClick()}></button>
  )
}

export default SumbitButton
