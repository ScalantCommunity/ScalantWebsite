import React from 'react'
import {members} from '../../Data/memberData'
import Tilt from 'react-parallax-tilt';
const Members = () => {
  return (
    <div data-aos="zoom-in" className='container' style={{display: 'flex', flexWrap: 'wrap', gap:'2rem', alignItems: 'center', justifyContent: 'center'}}>
      {members.map(member=>{
        return <Tilt
        key={member.contactNumber}
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        glarePosition="all"
        scale={1.02}
        className="parallax-effect-glare-scale">
        <center className="inner-element">
          <img
            src={member.photo}
            alt="image"
            style={{height:'8rem', width:'8rem', borderRadius:'4rem',  filter:'drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))'}}
          />
          <h2 style={{fontFamily:'Poppins', fontSize:'20px'}}>{member.Name.toLocaleUpperCase()}</h2>
          <div style={{display:'flex'}}>
          <a href={member.githubURL} target="_blank">
            <button style={{ background: "#4267B2" }}>
              <i className="fa fa-github" />
            </button>
          </a>
          <a href={member.twitterURL} target="_blank">
            <button style={{ background: "#1DA1F2" }}>
              <i className="fa fa-twitter" />
            </button>
          </a>
          <a href={member.instagramURL} target="_blank">
            <button style={{ background: "#e4405f" }}>
              <i className="fa fa-instagram" />
            </button>
          </a>
          <a href={member.linkedinURL} target="_blank">
            <button style={{ marginRight: 0, background: "#0e76a8" }}>
              <i className="fa fa-linkedin" />
            </button>
          </a>
          </div>
        </center>
      </Tilt>
      
      })}
  
    </div>
    
  )
}

export default Members