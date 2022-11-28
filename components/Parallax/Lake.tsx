import React from 'react'
import Image from 'next/image'
import forrestImg from '../../assets/img/forrest.png'

interface Props {
  wrapper: string
  layout: 'fixed' | 'fill' | 'intrinsic' | 'responsive'
}

const Lake = (props: Props): JSX.Element => {
  return (
    <div className={props.wrapper}>
      <Image
        src={forrestImg}
        alt='mountain'
        width={192}
        height={108}
        quality={100}
        layout={props.layout}
      />
    </div>
  )
}

export default Lake
