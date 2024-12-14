import React from 'react'
import './FreeTrailSection.css';

const FreeTrailSection = () => {
  return (
    <div className='free-trail-container text-center'>
        <h5>Start your free trail</h5>
        <p>Join over 4,000+ startups already growing with Untitled.</p>
        <div className="d-flex justify-content-center gap-3 mt-4 responsive-buttons">
          <button className="btn btn-outline-dark">Learn more</button>
          <button className="btn btn-primary">Get started</button>
        </div>
    </div>
  )
}

export default FreeTrailSection;