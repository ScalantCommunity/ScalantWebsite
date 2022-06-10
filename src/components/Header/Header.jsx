import React from 'react'
import logo from '../../images/logo.png'
const Header = () => {
  return (
    <header className="site-header">
    <div className="container">
      <div className="site-header-inner">
        <div className="brand header-brand" style={{width:'100%',display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
          <h1 className="m-0">
            <a href="#">
              <img
                className="header-logo-image"
                src={logo}
                alt="Logo"
                style={{width: '6rem'}}
              />
            </a>
            
          </h1>
          <div style={{display: 'flex', gap:'1rem'}}>
          <a href="#" style={{textDecoration: 'none'}}>
              Login
            </a>
          <a href="#" style={{textDecoration: 'none'}}>
              SignUp
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header