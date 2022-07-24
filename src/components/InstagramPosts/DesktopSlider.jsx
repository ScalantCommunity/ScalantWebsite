import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const DesktopSlider = ({members}) => {

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

  return (
    <div>
      <Slider {...settings}>
      {members.map(member=>{
        if(member.media_type!=='VIDEO'){
          return  <div className="instacard" onClick={()=> window.open(member.permalink, "_blank")}>
          <div className="username">
           <img src="https://links.scalant.in/assets/profile.06acbded.jpeg"></img>
           <p>scalantofficial</p>
         </div>
           <div className='postImageContainer'>
           <img className="postImage" src={member.media_url}></img> 
           </div>     
          <div className="status">  
           <div className="like">
           <img src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Heart-128.png"></img>
           <img src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Chat_bubble-128.png"></img>
           </div>
           
           <div className="comment"><b>Scalant</b>  Scale up Skills</div>
         </div>
         </div>
    
        }
      
      })}
      </Slider>
    </div>
  )
}

export default DesktopSlider