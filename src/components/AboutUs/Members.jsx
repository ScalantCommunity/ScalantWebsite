import axios from 'axios';
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import 'pure-react-carousel/dist/react-carousel.es.css';
import DesktopSlider from './DesktopSlider';
import MobileSlider from './MobileSlider';
const Members = () => {
  const [members, setMembers] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [teamMember, setTeamMember] = React.useState(0)

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  React.useEffect(() => {
    const fetchMembers = async ()=>{
      setLoading(true)
      const {data} = await axios.get('https://cedar-chemist-350213.de.r.appspot.com/api/images')
      setMembers(data)
      let teammem = 0;
      data.map(el=>{
        if(el.isTeamMember){
          teammem++
          console.log(teammem)
        }
      })
      setTeamMember(teammem)
      setLoading(false)
    }
    fetchMembers()
  }, [])


  
  return (
    <div className='container' >
      {loading && <div style={{display: 'flex', flexWrap: 'wrap', gap:'2rem', alignItems: 'center', justifyContent: 'center', height:'50vh'}}><div className="loading"></div></div>}
      {!loading && isDesktopOrLaptop && <DesktopSlider members={members}/>}

      {!loading && isTabletOrMobile && <MobileSlider members={members}/>}
    </div>
    
  )
}

export default Members