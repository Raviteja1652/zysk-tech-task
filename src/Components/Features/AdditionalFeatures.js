import React from 'react'
import { FaInbox, FaBolt, FaChartLine, FaArrowRight } from 'react-icons/fa'
import picture2 from '../../assets/pictures/picture2.jpg'
import './AdditionalFeatures.css'
import { Nav, NavLink } from 'react-bootstrap'

const AdditionalFeatures = () => {
  const features = [
    {icon: <FaInbox />, title: 'Share team inboxes', content: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'},
    {icon: <FaBolt />, title: 'Deliver instant answers', content: 'An all-in-one customer service platform that helps you balance everything your customer need to be happy with.'},
    {icon: <FaChartLine />, title: 'Manage your team with reports', content: 'Measure what matters with Untitled\'s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.'},
  ]

  return (
      <div className="addt-ftr-container text-center mt-5">
        <span className='addt-features-text'>Features</span>
        <h1 className="mt-3 fw-bold">Cutting-edge features for advanced analytics</h1>
        <p className="text-muted text-center">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>

        <div className="container mt-5">
          <img src={picture2} alt='Dashboard Analytics' className='img-fluid' />
        </div>

        <div className='row class-row'>
          {features.map((feature, index) => (
            <div key={index} className='col-md-4 mb-4'>
              <div className='p-3'>
                <div className='mb-3'>{feature.icon}</div>
                <h5>{feature.title}</h5>
                <p>{feature.content}</p>
                <NavLink href='#' className='text-primary'>Learn more <FaArrowRight /></NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default AdditionalFeatures;