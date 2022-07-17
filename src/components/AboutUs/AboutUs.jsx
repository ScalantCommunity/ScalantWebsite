import React from 'react'
import Members from './Members'
import WhoAreWe from './WhoAreWe'

const AboutUs = () => {
  return (
    <div> 
      <WhoAreWe/>
      <div>
        <h1 className="hero-title mt-10" style={{textAlign: 'center'}}>OUR TEAM</h1>
        <Members/>
      </div>
    </div>
  )
}

export default AboutUs