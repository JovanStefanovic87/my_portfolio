import {useState} from 'react'
import Head from 'next/head'
import {useDeviceDetect} from '../helpers/universalFunctions'
import Layout from '../components/layout/Layout'
import Sidebar from '../components/layout/Sidebar'
import ParallaxMob from '../components/Parallax/ParallaxMob'
import ParallaxDesktop from '../components/Parallax/ParallaxDesktop'
import {parallaxData} from '../interfaces/interfaces'


 const Home = () : JSX.Element => {
  const { isMobile } = useDeviceDetect();
  const [parallaxLayer, setParalaxLayer] = useState<parallaxData>(0)

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Sidebar display={!isMobile ? 'flex' : 'none'} setParalaxLayer={setParalaxLayer} sideBarScrollPosition={parallaxLayer}/>
        {isMobile ? <ParallaxMob /> : <ParallaxDesktop sideBarScrollPosition={parallaxLayer} setParalaxLayer={setParalaxLayer}/>}
      </Layout>
    </>
  )
}

export default Home