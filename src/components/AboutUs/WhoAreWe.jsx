import React from 'react'
import group from '../../images/group.png'
import { useMediaQuery } from 'react-responsive'

const WhoAreWe = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (
    <div>
    {isDesktopOrLaptop && <div  data-aos="zoom-in" style={{display: 'flex',height:'85vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end'}}>
      <h1  className="hero-title mt-0" style={{textAlign: 'center'}}>Who are we?</h1>
      <p style={{maxWidth:'60vw', color:'#fff'}}>We, a group of young enthusiasts, are building Scalant with the goal of guiding learners as they take their initial steps into the tech world and make their journey as hassle-free as possible.</p>
      <img src={group} style={{zIndex:'100'}}/>
    </div>}
    {isTabletOrMobile && <div style={{display: 'flex',height:'85vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
      <div>
      <h1 data-aos="fade-left" className="hero-title mt-0" style={{textAlign: 'center'}}>Who are we?</h1>
      <p data-aos="zoom-in" style={{maxWidth:'80vw', color:'#fff'}}>We, a group of young enthusiasts, are building Scalant with the goal of guiding learners as they take their initial steps into the tech world and make their journey as hassle-free as possible.</p>
      </div>
      <div style={{width:'50rem'}}>
      <img src={group} style={{zIndex:'100'}}/>
      </div>
    </div>}
    </div>
  )
}

export default WhoAreWe