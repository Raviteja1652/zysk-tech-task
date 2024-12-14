import React from 'react'
import './SocialLinks.css';
import company1 from '../../assets/company-logos/company1.jpg';
import company2 from '../../assets/company-logos/company2.jpg';
import company3 from '../../assets/company-logos/company3.jpg';
import company4 from '../../assets/company-logos/company4.jpg';
import company5 from '../../assets/company-logos/company5.jpg';
import company6 from '../../assets/company-logos/company6.jpg';

const SocialLinks = () => {
  return (
    <div className='social-container text-center'>
        <p className='mb-4'>Join 4,000+ companies already growing</p>
        <div className='d-flex justify-content-center align-items-center flex-wrap'>
            <img src={company1} alt='company1' className='social-icon' />
            <img src={company2} alt='company2' className='social-icon' />
            <img src={company3} alt='company3' className='social-icon' />
            <img src={company4} alt='company4' className='social-icon' />
            <img src={company5} alt='company5' className='social-icon' />
            <img src={company6} alt='company6' className='social-icon' />
        </div>
    </div>
  )
}

export default SocialLinks;