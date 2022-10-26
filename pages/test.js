import classes from '../components/Parallax/parallax.module.scss'
import Image from 'next/image'
import fish from '../assets/img/anifish.gif'

const Test = () => {
    const style={
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        perspective: 600
    }
    return(
        <div style={style}>
            <div style={style} className={classes.FishContainer}>
                <Image  src={fish} alt='fish' width='464px' height='170px' layout='intrinsic'/>
            </div>
            
        </div>
    )
}

export default Test