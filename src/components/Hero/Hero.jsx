import React from 'react'
import art from '../../images/rocket-dynamic-color.png'



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
              <a className="button button-primary" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Join Whatsapp</a>
              <a className="button" target="_blank" href="https://discord.gg/WSePvFt37D">Join the Discord</a>
          </div>
        </div>
        <div data-aos="fade-left" className=" anime-element">
          <img src={art}/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero