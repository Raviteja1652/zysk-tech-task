import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import untitledLogo from '../../assets/logos/untitled-logo.jpg'
import profileIcon from '../../assets/logos/profile-icon.png'
import { FaAngleDown } from 'react-icons/fa'
import './Navigation.css';

const Navigation = () => {
  return (
    <div className='main-header-navs'>
      <Navbar expand='lg' data-bs-theme="light" className='py-2'>
        <Container>
          <Navbar.Brand className='d-flex align-items-center' href='#'>
            <img src={untitledLogo} alt='Logo' className='rounded-circle header-logo' />
            Untitled UI
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">
                Products 
                <FaAngleDown />
              </Nav.Link>
              <Nav.Link href="#">
                Resources 
                <FaAngleDown />
              </Nav.Link>
              <Nav.Link href="#">Pricing</Nav.Link>
            </Nav>
            <div className='profile-user-icon'><img src={profileIcon} alt='user icon' className='rounded-circle header-logo prf' /></div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation;