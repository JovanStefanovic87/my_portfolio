import Image, { StaticImageData } from 'next/image'

interface Props {
  wrapper: string
  layout: 'fixed' | 'fill' | 'intrinsic' | 'responsive'
  src: StaticImageData
  priority: boolean
}

const Mountain = (props: Props): JSX.Element => {
  return (
    <div className={props.wrapper}>
      <Image
        src={props.src}
        alt='mountain'
        width={300}
        height={100}
        quality={100}
        layout={props.layout}
        priority={props.priority}
      />
    </div>
  )
}

export default Mountain
