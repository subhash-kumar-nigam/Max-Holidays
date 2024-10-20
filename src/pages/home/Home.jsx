import React , {useEffect} from 'react';
import Slider from '../../components/Slider'
import Focussector from '../../components/Focussector'
import Marquee from '../../components/Marquee'
import JoinNow from '../../components/JoinNow'
import Why_choose_us from '../about/Why_choose_us'
// import FullScreenVideo from '../../components/FullScreenVideo'
import NewsUpdate from '../../components/NewsUpdate'
import OtherSector from '../about/Donatenow'
import OurPArtners from '../about/OurPArtners'
import GalleryHome from '../media/GalleryHome'
import ContactHome from '../contact/ContactHome'
import OurStackholder from '../about/OurStackholder'
import Vission from '../about/Vission'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Slider />
      <Marquee />
      <Focussector />
      <Why_choose_us />
      <JoinNow />
      
      <OurStackholder />
      <OtherSector />
      
      {/* <FullScreenVideo /> */}
      <NewsUpdate />   
      <Vission />
      <OurPArtners />
      <GalleryHome />
      <ContactHome />
    </div>
  )
}

export default Home
