import React from 'react'
import group from '../../images/group.png'
import Tilt from 'react-parallax-tilt';
const WhoAreWe = () => {
  return (
    <div style={{display: 'flex',height:'85vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end'}}>
      <h1 data-aos="fade-left" className="hero-title mt-0" style={{textAlign: 'center'}}>Who are we?</h1>
      <p data-aos="zoom-in" style={{maxWidth:'60vw', color:'#fff'}}>We, a group of young enthusiasts, are building Scalant with the goal of guiding learners as they take their initial steps into the tech world and make their journey as hassle-free as possible.</p>

      <img src={group} style={{zIndex:'100'}}/>

    </div>
  )
}

export default WhoAreWe