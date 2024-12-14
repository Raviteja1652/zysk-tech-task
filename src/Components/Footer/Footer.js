import React from 'react'
import { Navbar } from 'react-bootstrap'
import untitledLogo from '../../assets/logos/untitled-logo.jpg'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="p-4 mt-4">
      <Navbar.Brand className='navbar-brand' href='#'>
        <img src={untitledLogo} alt='Logo' className='rounded-circle header-logo' />
        Untitled UI
      </Navbar.Brand>
      <p>&copy; 2077 Untitled UI. All rights reserved.</p>
    </footer>
  )
}

export default Footer;