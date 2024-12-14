import React from 'react'
import picture1 from '../../assets/pictures/picture1.png'
import { FaArrowRight } from 'react-icons/fa'
import './Navigation.css';

const HeaderContent = () => {
  return (
    <div>
      <div className="container text-center mt-5">
        <div className='feature-container'>
          <div className="new-feature">
            <a className="me-3 new-feature-text inner-text">
              New feature
            </a>
            <a href="#" className="text-decoration-none inner-text">
              Check out the team dashboard <FaArrowRight />
            </a>
          </div>
        </div>
        <h1 className="mt-3 fw-bold">Beautiful analytics to grow smarter</h1>
        <p className="text-muted text-center">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="d-flex justify-content-center gap-3 mt-4 responsive-buttons">
          <button className="btn btn-outline-dark demo-btn">Demo</button>
          <button className="btn btn-primary signup-btn">Sign up</button>
        </div>
      </div>

      <div className="container mt-5">
        <img
          src={picture1}
          alt="Dashboard"
          className="img-fluid"
        />
      </div>

    </div>
  )
}

export default HeaderContent;