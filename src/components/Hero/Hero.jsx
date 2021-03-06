import React from 'react'
import LogoModel from '../../images/Logoo';
import { useMediaQuery } from 'react-responsive'
 const Hero = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (
    <section className="hero">
    <div className="container">
      <div className="hero-inner">
        <div data-aos="fade-right" className="hero-copy">
          <h1 className="hero-title mt-0">Community that you need!</h1>
          <p className="hero-paragraph">
            Student Community for learning and growing together, be the part of the amazing communtiy that will help you in your journey.
          </p>  
          {isDesktopOrLaptop && <div className="hero-cta" style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'1rem'}}>
              <a className="button button-primary" style={{width:'50%', display: 'flex', justifyContent: 'center', gap:'0.5rem'}} target="_blank" href="https://discord.gg/WSePvFt37D">
              <i className="fa-brands fa-discord"></i>
                 Join the Discord
                </a>
              <a className="button button-secondary" style={{width:'50%',backgroundColor:'#1a5b96', display: 'flex', justifyContent: 'center', gap:'0.5rem'}} target="_blank" href="https://links.scalant.in">
              <i class="fa-solid fa-circle-info"></i>
                 Know More
                </a>
          </div>}
          {isTabletOrMobile && <div className="hero-cta" >
              <a className="button button-primary" style={{width:'100%', display: 'flex', justifyContent: 'center', gap:'0.5rem'}} target="_blank" href="https://discord.gg/WSePvFt37D">
              <i className="fa-brands fa-discord"></i>
                 Join the discord
                </a>
              <a className="button button-secondary" style={{width:'100%',backgroundColor:'#1a5b96', display: 'flex', justifyContent: 'center', gap:'0.5rem', marginTop:'1rem'}} target="_blank" href="https://links.scalant.in">
              <i class="fa-solid fa-circle-info"></i>
                 Know More
                </a>
          </div>}
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