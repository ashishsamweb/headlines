import React from 'react'
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';

import './MostPopular.css'

export const MostPopular = () => {
  return (
    <section className='most-popular-outer'>
        <div className='container-fluid'>
            <div className='row'>
                <div className="most-popular-title col-md-12">
                    <h2>Most popular stories today</h2>
                </div>
                <div className='most-popular-grid col-md-12'>
                    <div className='row'>
                        <div className='most-popular-img col-md-3'>
                        <img src={image1} />
                        <h5>The EU wants to make all salaries transparent — here are 3 pros and cons</h5>
                        </div>
                        <div className='most-popular-img col-md-3'>
                        <img src={image2} />
                        <h5>The EU wants to make all salaries transparent — here are 3 pros and cons</h5>
                        </div>
                        <div className='most-popular-img col-md-3'>
                        <img src={image3} />
                        <h5>The EU wants to make all salaries transparent — here are 3 pros and cons</h5>
                        </div>
                        <div className='most-popular-img col-md-3'>
                        <img src={image4} />
                        <h5>The EU wants to make all salaries transparent — here are 3 pros and cons</h5>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
