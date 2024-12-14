import React from 'react'
import { Accordion } from 'react-bootstrap';
import './FAQ.css'

const FAQ = () => {
  const faq = [
    {question: 'Is there a free trail available?', answer: 'Yes, you can try us for free for 30 days. If you want we will provide you wih a few personalized 30-min onboarding call to get you up and running as soon as possible'},
    {question: 'Can I change my plan later?', answer: ''},
    {question: 'What is your cancellation policy?', answer: ''},
    {question: 'Can other info be added to an invoice?', answer: ''},
    {question: 'How does billing work?', answer: ''},
    {question: 'How do I change my account email?', answer: ''}  
  ]
  return (
    <div className='faq-container text-center'>
      <h2 className='mb-4'>Frequently asked questions</h2>
      <p>Everything you need to know about the product and billing.</p>
      <Accordion className='ques-section'>
        {faq.map((item, index) => (
          <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header>{item.question}</Accordion.Header>
            <Accordion.Body>{item.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

export default FAQ;