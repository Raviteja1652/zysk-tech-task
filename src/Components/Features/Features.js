import React from 'react';
import { FaInbox, FaBolt, FaChartLine, FaUsers, FaTools, FaHeart } from 'react-icons/fa'
import './Features.css';

const Features = () => {
  const features = [
    {icon: <FaInbox />, title: 'Share team inboxes', content: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'},
    {icon: <FaBolt />, title: 'Deliver instant answers', content: 'An all-in-one customer service platform that helps you balance everything your customer need to be happy with.'},
    {icon: <FaChartLine />, title: 'Manage your team with reports', content: 'Measure what matters with Untitled\'s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.'},
    {icon: <FaUsers />, title: 'Connect with customers', content: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.'},
    {icon: <FaTools />, title: 'Connect the tools you already use', content: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus our extensive developer tools.'},
    {icon: <FaHeart />, title: 'Our people make the difference', content: 'We\'re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 whenever you need help.'},
  ]

  return (
    <div className='features-container text-center'>
      <h6 className='mb-4 features-text'>Features</h6>
      <h2 className='mb-5 mb-5-text'>Analytics that feels like it's from the future</h2>
      <span>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4000 startups.</span>
      
      <div className='row class-row'>
        {features.map((feature, index) => (
          <div key={index} className='col-md-4 mb-4'>
            <div className='p-3'>
              <div className='mb-3'>{feature.icon}</div>
              <h5>{feature.title}</h5>
              <p>{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features;