import React from 'react'

const Details = () => {
  return (
    <section className="pricing section">
    <div className="container-sm">
      <div className="pricing-inner section-inner">
        <div data-aos="fade-left" className="pricing-header text-center">
          <h2 className="section-title mt-0">Join the Community that supports you!</h2>
          <p className="section-paragraph mb-0">
          A tight-knit community is here to assist you in your journey of putting knowledge into 
          action by providing the right guidance and resources. Shhh! There’s more to the story. Join 
          our discord server to get to know us better
          </p>
        </div>
        <div data-aos="zoom-in" className="pricing-tables-wrap">
          <div className="pricing-table">
            <div className="pricing-table-inner is-revealing">
              <div className="pricing-table-main">
                <div className="pricing-table-features-title text-xs pt-24 pb-24">
                  What will you get?
                </div>
                <ul className="pricing-table-features list-reset text-xs">
                  <li>
                    <span>Support from our Mentors</span>
                  </li>
                  <li>
                    <span>Exciting Events</span>
                  </li>
                  <li>
                    <span>Quality Content</span>
                  </li>
                  <li>
                    <span>Grow your network while learning</span>
                  </li>
                </ul>
              </div>
              <div data-aos="flip-left" className="pricing-table-cta mb-8">
                <a
                  className="button button-primary button-shadow button-block"
                  href="https://discord.gg/WSePvFt37D" target="_blank"
                >
                  Join the Community Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Details