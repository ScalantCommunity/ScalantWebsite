import axios from 'axios';
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Carousel from 'react-grid-carousel'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Tilt from 'react-parallax-tilt';
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
      {loading===false && isDesktopOrLaptop && <Carousel cols={3}
  rows={1}
  gap={15} 
  arrowRight={<i class="fa-solid fa-circle-arrow-right"></i>}
  arrowLeft={<i class="fa-solid fa-circle-arrow-left"></i>}
  autoplay={3000}
  loop>
        {members.map(member=>{
        if(member.isTeamMember){
          return <Carousel.Item >
          <div key={member.contactNumber}><div
        
        className="parallax-effect-glare-scale">
        <center className="inner-element">
          <img
            src={member.photo}
            alt="image"
            style={{height:'8rem', width:'8rem', borderRadius:'4rem',  filter:'drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))'}}
          />
          <h2 style={{fontFamily:'Poppins', fontSize:'20px', marginTop:'0.5rem'}}>{member.name.toLocaleUpperCase()}</h2>
          <p style={{fontFamily:'Poppins', fontSize:'20px', marginBottom:'0.5rem'}}>{member.domain}</p>
          <div style={{display:'flex'}}>
          {member.linkedin!=='NA' && <a href={member.linkedin} target="_blank">
            <button className='linkButton' style={{ marginRight: 0, background: "#0073b1", color:'#fff', transition: 'all 0.2s' }}>
            <i className="fa-brands fa-linkedin-in"></i>
            </button>
          </a>}
          {member.github!=='NA' && <a href={member.github} target="_blank">
            <button className='linkButton' style={{ background: "#161b22", color:'#fff', transition: 'all 0.2s' }}>
            <i className="fa-brands fa-github"></i>
            </button>
          </a>}
          {member.twitter !== 'NA' && <a href={member.twitter} target="_blank">
            <button className='linkButton' style={{ background: "#52a7e8", color:'#fff', transition: 'all 0.2s' }}>
            <i className="fa-brands fa-twitter"></i>
            </button>
          </a>}
          {member.instagram!=='NA'&& <a href={member.instagram} target="_blank">
            <button className='linkButton' style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)", color: '#fff', transition: 'all 0.2s' }}>
            <i className="fa-brands fa-instagram"></i>
            </button>
          </a>}
          </div>
        </center>
      </div>
      </div>
      </Carousel.Item>
        }
      
      })}
        </Carousel>}

      {loading===false && isTabletOrMobile && <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        isPlaying={true}
        infinite={true}
        interval={3000}
        totalSlides={teamMember}
        style={{width:'400px', height:'400px'}}
      >
        <Slider>
        {members.map((member, i)=>{
        if(member.isTeamMember){
          return <Slide innerClassName='slideflex' index={i} key={member.contactNumber}>
          <div
        className="parallax-effect-glare-scale">
        <center className="inner-element">
          <img
            src={member.photo}
            alt="image"
            style={{height:'8rem', width:'8rem', borderRadius:'4rem',  filter:'drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))'}}
          />
          <h2 style={{fontFamily:'Poppins', fontSize:'20px', marginTop:'0.5rem'}}>{member.name.toLocaleUpperCase()}</h2>
          <p style={{fontFamily:'Poppins', fontSize:'20px', marginBottom:'0.5rem'}}>{member.domain}</p>
          <div style={{display:'flex'}}>
          {member.linkedin!=='NA' && <a href={member.linkedin} target="_blank">
            <button className='linkButton' style={{ marginRight: 0, background: "#0073b1", color:'#fff', transition: 'all 0.2s' }}>
            <i className="fa-brands fa-linkedin-in"></i>
            </button>
          </a>}
          {member.github!=='NA' && <a href={member.github} target="_blank">
            <button className='linkButton' style={{ background: "#161b22", color:'#fff', transition: 'all 0.2s' }}>
            <i className="fa-brands fa-github"></i>
            </button>
          </a>}
          {member.twitter !== 'NA' && <a href={member.twitter} target="_blank">
            <button className='linkButton' style={{ background: "#52a7e8", color:'#fff', transition: 'all 0.2s' }}>
            <i className="fa-brands fa-twitter"></i>
            </button>
          </a>}
          {member.instagram!=='NA'&& <a href={member.instagram} target="_blank">
            <button className='linkButton' style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)", color: '#fff', transition: 'all 0.2s' }}>
            <i className="fa-brands fa-instagram"></i>
            </button>
          </a>}
          </div>
        </center>
      </div>

      </Slide>
        }
      
      })}
        </Slider>
        </CarouselProvider></div>}
    </div>
    
  )
}

export default Members