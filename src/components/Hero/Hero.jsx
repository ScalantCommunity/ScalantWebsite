import React from 'react'
import art from '../../images/rocket-dynamic-color.png'
import Tilt from 'react-parallax-tilt';
import LogoModel from '../../images/Logoo';

 const Hero = () => {

  return (
    <section className="hero">
    <div className="container">
      <div className="hero-inner">
        <div data-aos="fade-right" className="hero-copy">
          <h1 className="hero-title mt-0">Community that you need!</h1>
          <p className="hero-paragraph">
            Student Community for learning and growing together, be the part of the amazing communtiy that will help you in your journey.
          </p>  
          <div className="hero-cta">
              <a className="button button-primary" style={{width:'100%', display: 'flex', justifyContent: 'center', gap:'0.5rem'}} target="_blank" href="https://discord.gg/WSePvFt37D">
              <i class="fa-brands fa-discord"></i>
                Join the Discord
                </a>
          </div>
        </div>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <LogoModel/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero