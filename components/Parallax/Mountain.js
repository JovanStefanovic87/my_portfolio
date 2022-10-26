import Image from 'next/image'

const Mountain = (props) => {
    return(
        <div className={props.wrapper} onClick={props.onClick}>
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