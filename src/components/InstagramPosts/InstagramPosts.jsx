import axios from 'axios';
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import 'pure-react-carousel/dist/react-carousel.es.css';
import DesktopSlider from './DesktopSlider';
import MobileSlider from './MobileSlider';


const InstagramPosts = () => {
  const [members, setMembers] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


  React.useEffect(() => {
    const fetchMembers = async ()=>{
      setLoading(true)
      const {data} = await axios.get('https://apiscalant.live/api/insta')
      setMembers(data)
     
      setLoading(false)
    }
    fetchMembers()
  }, [])


  
  return (
    <div className='container' data-aos="fade-right" >
      <h2 className="section-title mt-0" style={{textAlign:'center', marginTop:'2rem', marginBottom:'2rem'}}>Follow us on Instagram!</h2>
      {loading && <div style={{display: 'flex', flexWrap: 'wrap', gap:'2rem', alignItems: 'center', justifyContent: 'center', height:'50vh'}}><div className="loading"></div></div>}
      {!loading && isDesktopOrLaptop && <DesktopSlider members={members}/>}

      {!loading && isTabletOrMobile && <MobileSlider members={members}/>}
    </div>
    
  )
}

export default InstagramPosts