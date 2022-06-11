import React from 'react'

const CTA = () => {
  return (
    <section  className="cta section">
      <div data-aos="zoom-in-down" className="container">
        <div className="cta-inner section-inner">
          <h3 data-aos="fade-left" className="section-title mt-0">Want to know more about us?</h3>
          <div data-aos="flip-up" className="cta-cta">
            <a className="button button-primary button-wide-mobile" href="#">
              Join the Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA