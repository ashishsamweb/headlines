import React from 'react'
import slider1 from '../../images/image.jpg';
import ads from '../../images/ads.webp';
import plugg from '../../images/plugg.png';
import './Category.css'

export const Category = () => {
  return (
    <section className='category-outer'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-9'>
                        <div className='category-header'>
                        
                            <div className='category-left'>
                                <img src={plugg} />
                            </div>
                            <div className='category-right'>
                            <h3>EVs & Mobility </h3>
                            </div>
                        </div>
                        <div className='category-grid-outer'>
                            <div className='row'>
                                <div className='cat-big-img col-md-6'>
                                    <img src={slider1} />
                                    <h6>Elcon</h6>
                                    <h3>The EU wants to make all salaries transparent — here are 3 pros and cons</h3>
                                </div>
                                <div className='col-md-6'>
                                    <div className='category-grid'>
                                        <div className='category-grid-image cat-small-img'>
                                        <img src={slider1} />
                                        </div>
                                        <div className='category-grid-content'>
                                        <h6>Elcon</h6>
                                        <h3>The EU wants to make all salaries transparent — here are 3 pros and cons</h3>
                                        </div>
                                    </div>
                                    <div className='category-grid'>
                                        <div className='category-grid-image cat-small-img'>
                                        <img src={slider1} />
                                        </div>
                                        <div className='category-grid-content'>
                                        <h6>Elcon</h6>
                                        <h3>The EU wants to make all salaries transparent — here are 3 pros and cons</h3>
                                        </div>
                                    </div>
                                    <div className='category-grid'>
                                        <div className='category-grid-image cat-small-img'>
                                        <img src={slider1} />
                                        </div>
                                        <div className='category-grid-content'>
                                        <h6>Elcon</h6>
                                        <h3>The EU wants to make all salaries transparent — here are 3 pros and cons</h3>
                                        </div>
                                    </div>
                                    <div className='category-grid'>
                                        <div className='category-grid-image cat-small-img'>
                                        <img src={slider1} />
                                        </div>
                                        <div className='category-grid-content'>
                                        <h6>Elcon</h6>
                                        <h3>The EU wants to make all salaries transparent — here are 3 pros and cons</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className='col-md-3 cat-img'>
                    <img src={ads} />
                </div>
            </div>
        </div>
    </section>
  )
}
