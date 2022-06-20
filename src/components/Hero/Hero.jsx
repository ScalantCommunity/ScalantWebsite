import React from 'react'
import art from '../../images/rocket-dynamic-color.png'
import Tilt from 'react-parallax-tilt';

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
        
            <Tilt
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            glarePosition="all"
            scale={1.02}>
          <div style={{display:'flex', alignItems:'center', justifyContent: 'center'}} data-aos="fade-left" className=" anime-element">
          <img src={art}/>
          </div>
            </Tilt>
  
      </div>
    </div>
  </section>
  )
}

export default Hero