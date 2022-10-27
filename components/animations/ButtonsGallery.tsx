import GalleryWrapper from '../containers/GalleryWrapper'
import GalleryItemWrapper from '../containers/GalleryItemWrapper'
import GlowingButton from '../buttons/GlowingButton'
import MechanicalButton from '../buttons/MechanicalButton'
import FlipingButton from '../buttons/FlipingButton'
import LoadingButton from '../buttons/LoadingButton'
import SumbitButton from '../buttons/SumbitButton'
import PolylineButton from '../buttons/PolylineButton'


const ButtonsGallery = (): JSX.Element => {
    return (
        <GalleryWrapper>
            <GalleryItemWrapper>
                <PolylineButton />
            </GalleryItemWrapper>
            <GalleryItemWrapper>
                <LoadingButton />
            </GalleryItemWrapper>
            <GalleryItemWrapper>
                <SumbitButton/>
            </GalleryItemWrapper>
            <GalleryItemWrapper>
                <GlowingButton />
            </GalleryItemWrapper>
            <GalleryItemWrapper>
                <MechanicalButton />
            </GalleryItemWrapper>
            <GalleryItemWrapper>
                <FlipingButton />
            </GalleryItemWrapper>
        </GalleryWrapper>
    )
}

export default ButtonsGallery