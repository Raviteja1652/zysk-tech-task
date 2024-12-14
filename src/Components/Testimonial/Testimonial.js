import React from 'react'
import sisyphus from '../../assets/logos/sisyphus.jpg'
import sisyphusManager from '../../assets/logos/sisyphus-manager.jpg'
import './Testimonial.css';

const Testimonial = () => {
  return (
    <div className='testimonial-container text-center'>
        <img src={sisyphus} alt='sisyphus' className='social-link' />
        <h2>We've been using Untitled to kick start every new project and can't imagine working without it.</h2>
        <img src={sisyphusManager} alt='sisyphus-manager' className='manager-icon' />
        <h6>Candice Wu</h6>
        <p>Product Manager, Sisyphus</p>
    </div>
  )
}

export default Testimonial;