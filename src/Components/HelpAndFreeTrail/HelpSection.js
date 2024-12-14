import React from 'react'
import { PiUsersThreeFill } from "react-icons/pi";
import './HelpSection.css'

const HelpSection = () => {
  return (
    <div className='help-container text-center'>
        <PiUsersThreeFill className='h1' />
        <h5 className='text-dark'>Still have questions?</h5>
        <p>Can't find the question you are looking for? Please chat to our friendly team.</p>
        <button className="btn btn-primary">Get in touch</button>
    </div>
  )
}

export default HelpSection;