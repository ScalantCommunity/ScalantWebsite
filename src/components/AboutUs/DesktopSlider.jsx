import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Carousel} from '3d-react-carousal';

const DesktopSlider = ({members}) => {
  const [slides, setSlides] = React.useState([])

   React.useEffect(() => {
    const tempslides =[];

    members.forEach(member=>{
      if(member.isTeamMember){
         tempslides.push(<div key={member.contactNumber}><div
      
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
        </div>)
  
      }
    
    })

    setSlides(tempslides)
   }, [members])

   React.useEffect(()=>{
    console.log(slides)
   },[slides])

  const settings = {

    infinite: true,
    speed: 500,
    
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    // variableWidth: true
  }

  const callback = function(index){
    console.log("callback",index);
}

  return (
    <div>
      <div style={{marginTop:'2rem'}}>
      <Carousel slides={slides} autoplay={true} interval={3000} onSlideChange={callback}/>
      </div>
    </div>
  )
}

export default DesktopSlider