import React from 'react'
import './Blogs.css';
import { FaUser } from 'react-icons/fa6'
import blog1 from '../../assets/pictures/blog1.jpg'
import blog2 from '../../assets/pictures/blog2.jpg'
import blog3 from '../../assets/pictures/blog3.jpg'

const Blogs = () => {
  const posts = [
    {
      category: 'Design',
      title: 'UX review presentations',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      author: 'Olivia Rhye',
      date: '20 Jan 2024',
      image: blog1,
    },
    {
      category: 'Product',
      title: 'Migrating to Linear 101',
      description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here\'s how to get started.',
      author: 'Phoenix Baker',
      date: '19 Jan 2024',
      image: blog2,
    },
    {
      category: 'Software Engineering',
      title: 'Building your API stack',
      description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
      author: 'Lana Steiner',
      date: '18 Jan 2024',
      image: blog3,
    },
  ];

  return (
    <section className='container blog-posts'>
      <p className='text-primary'>Our blog</p>
      <h2 className='text-start'>Latest blog posts</h2>
      <p className='text-start'>Tools and strategies modern teams need to help their companies grow.</p>
      <button className='btn btn-primary mt-4 view-posts-btn'>View all posts</button>
      
      <div className='row'>
        {posts.map((post, idx) => (
          <div className='col-lg-4 col-md-6 mb-4' key={idx}>
            <div className='card'>
              <img src={post.image} alt={post.title} className='card-img-top'></img>
              <div className='card-body'>
                <h5 className='card-title text-primary'>{post.category}</h5>
                <h6 className='card-title'>{post.title}</h6>
                <p className='card-text'>{post.description}</p>
                <div className='d-flex align-items-center'>
                  <FaUser className='me-2' size={36} />
                  <div>
                    <small>{post.author}</small><br />
                    <small>{post.date}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  )
}

export default Blogs;