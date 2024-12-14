import React from 'react'
import './AdditionalLinks.css'

const AdditionalLinks = () => {
  const links = [
    { title: 'Product', items: ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases'] },
    { title: 'Company', items: ['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact'] },
    { title: 'Resources', items: ['Blog', 'Newsletter', 'Events', 'Help centre', 'Tutorials', 'Support'] },
    { title: 'Use cases', items: ['Startups', 'Enterprise', 'Government', 'SaaS centre', 'Marketplaces', 'Ecommerce'] },
    { title: 'Social', items: ['Twitter', 'LinkedIn', 'Facebook', 'GitHub', 'AngelList', 'Dribble'] },
    { title: 'Legal', items: ['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact'] },
  ];

  return (
    <div className='container links-section'>

      <div className="row">
        {links.map((linkGroup, idx) => (
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4" key={idx}>
          <h5>{linkGroup.title}</h5>
          <ul className="list-unstyled">
            {linkGroup.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          </div>
        ))}
      </div>

    </div>
  )
}

export default AdditionalLinks;