import GalleryWrapper from '../containers/GalleryWrapper'
import GalleryItemWrapper from '../containers/GalleryItemWrapper'
import WaveSpinner from '../spinners/WaveSpinner'
import GlowingSpinner from '../spinners/GlowingSpinner'
import GradientSpinner from '../spinners/GradientSpinner'
import SquareSpinner from '../spinners/SquareSpinner'
import BackLightSpinner from '../spinners/BackLightSpinner'
import SpiralSpinner from '../spinners/SpiralSpinner'


const SpinnersGallery = () :JSX.Element => {
    return (
        <GalleryWrapper>
            <GalleryItemWrapper>
                <WaveSpinner />
            </GalleryItemWrapper>
            <GalleryItemWrapper>
                <GlowingSpinner />
            </GalleryItemWrapper>
            <GalleryItemWrapper>
                <GradientSpinner />
            </GalleryItemWrapper>
            <GalleryItemWrapper>
                <SquareSpinner />
            </GalleryItemWrapper>
            <GalleryItemWrapper>
                <BackLightSpinner />
            </GalleryItemWrapper>
            <GalleryItemWrapper>
                <SpiralSpinner />
            </GalleryItemWrapper>
        </GalleryWrapper>
    )
}

export default SpinnersGallery