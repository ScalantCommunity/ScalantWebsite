import React from 'react'



const Features = () => {
  return (
    <section className="features section">
    <div className="container">
      <div style={{paddingTop:'0rem'}} className="features-inner section-inner has-bottom-divider">
        <div className="features-wrap">
          <div data-aos="fade-up" className="feature text-center is-revealing">
            <div className="feature-inner">
              <h4 className="feature-title mt-24">Exclusive Events</h4>
              <p className="text-sm mb-0">
              Attend LIVE events and get to meet and interact with our featured mentors and industry 
              professionals, explore your interests and receive tips and information on emerging 
              technologies. 
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="feature text-center is-revealing">
            <div className="feature-inner">
              <h4 className="feature-title mt-24">Be Productive</h4>
              <p className="text-sm mb-0">
              Stay up-to-date with the evolving tech world through our weekly blogs. Our team regularly 
              brainstorms the best resources and strategies to help you stay productive and focused on 
              your goal.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="feature text-center is-revealing">
            <div className="feature-inner">
              <h4 className="feature-title mt-24">Grow Together</h4>
              <p className="text-sm mb-0">
              Scalant is a fun and relaxed environment for you to explore your viewpoints and strategies 
              with your peers and mentors while also honing your technical and interpersonal abilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Features