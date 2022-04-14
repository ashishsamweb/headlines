import React from 'react'
import newsletterbg from '../../images/spacesbg.webp';
import './Newsletters.css'

export const Newsletters = () => {
  return (
    <section className='newsletter' style={{ backgroundImage: `url(${newsletterbg})` }}>
      <div className='newsletter-form'>
        <h1>Get the snarkiest newsletter in tech</h1>
        <input type='text' placeholder='you@gmail.com'/>
        <h5>Subscribe to our weekly Big Spam or check out our other newsletters.</h5>
      </div>
    </section>
  )
}
