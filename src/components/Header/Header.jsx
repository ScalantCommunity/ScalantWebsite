import React from 'react'
import { NavLink, useLocation  } from 'react-router-dom'
import logo from '../../images/logo.png'

const Header = () => {
  const location = useLocation();

  return (
    <header className="site-header">
    <div className="container">
      <div className="site-header-inner">
        <div className="brand header-brand" style={{width:'100%',display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
          <h1 className="m-0">
            <NavLink to='/'>
              <img
                className="header-logo-image"
                src={logo}
                alt="Logo"
                style={{width: '6rem'}}
              />
            </NavLink>
            
          </h1>
          <div style={{display: 'flex', gap:'1rem'}}>
            <NavLink to={location.pathname=== '/' ? "/aboutus": '/'} style={{textDecoration: 'none'}}>
              {location.pathname=== '/' ? "About Us": 'Home'}
            </NavLink>
            <a href="https://www.regform.scalant.in/" target="_blank" style={{textDecoration: 'none'}}>
              Registration
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header