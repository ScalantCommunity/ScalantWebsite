import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

const Footer = () => {
  return (
    <footer className="site-footer">
    <div className="container">
      <div className="site-footer-inner">
        <div className="brand footer-brand">
          <a href="#">
            <img
              className="header-logo-image"
              src={logo}
              style={{width: '4rem'}}
              alt="Logo"
            />
          </a>
        </div>
        <ul className="footer-links list-reset">
          <li>
            <a href="mailto:Scalantofficial@gmail.com">Contact</a>
          </li>
          <li>
            <Link to='/aboutus'>About us</Link>
          </li>
        </ul>
        <ul className="footer-social-links list-reset">
          <li>
            <a href="https://www.linkedin.com/company/scalant-official/about/" target='_blank'>
              <span className="screen-reader-text">Linkedin</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" fill='#fff'/></svg>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Scalantofficial" target="_blank">
              <span className="screen-reader-text">Twitter</span>
              <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                  fill="#fff"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="mailto:Scalantofficial@gmail.com">
              <span className="screen-reader-text">Google</span>
              <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                  fill="#fff"
                />
              </svg>
            </a>
          </li>
        </ul>
        <div className="footer-copyright">
          © 2022 Scalant, all rights reserved
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer