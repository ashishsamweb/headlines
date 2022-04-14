import React from 'react'
import { useEffect } from 'react';
import image6 from '../../images/image6.jpg';
import image7 from '../../images/image7.jpg';
import image8 from '../../images/image8.jpg';
import image9 from '../../images/image9.jpg';
import image10 from '../../images/image10.jpg';
import image11 from '../../images/image11.jpg';
import image12 from '../../images/image12.jpg';
import image13 from '../../images/image13.jpg';
import './LatestNews.css'
import axios from 'axios';



export const LatestNews = () => {

    

  return (
      
    <section className='latest-news-outer'>
        <div className='container'>
            <div className='row'>
                <div className="latest-news-title col-md-12">
                    <h2>Latest news</h2>
                    
                </div>
                <div className="latest-news-title col-md-12">
                    <div className='row'>
                        <div className="latest-news-img col-md-3">
                        <img src={image6} />
                        <h6>Elcon</h6>
                        <h5>The EU wants to make all salaries transparent — here are 3 pros and cons</h5>
                        </div>
                        <div className="latest-news-img col-md-3">
                        <img src={image7} />
                        <h6>Elcon</h6>
                        <h5>The EU wants to make all salaries transparent — here are 3 pros and cons</h5>
                        </div>
                        <div className="latest-news-img col-md-3">
                        <img src={image8} />
                        <h6>Elcon</h6>
                        <h5>The EU wants to make all salaries transparent — here are 3 pros and cons</h5>
                        </div>
                        <div className="latest-news-img col-md-3">
                        <img src={image9} />
                        <h6>Elcon</h6>
                        <h5>The EU wants to make all salaries transparent — here are 3 pros and cons</h5>
                        </div>
                        <div className="latest-news-img col-md-3">
                        <img src={image10} />
                        <h6>Elcon</h6>
                        <h5>The EU wants to make all salaries transparent — here are 3 pros and cons</h5>
                        </div>
                        <div className="latest-news-img col-md-3">
                        <img src={image11} />
                        <h6>Elcon</h6>
                        <h5>The EU wants to make all salaries transparent — here are 3 pros and cons</h5>
                        </div>
                        <div className="latest-news-img col-md-3">
                        <img src={image12} />
                        <h6>Elcon</h6>
                        <h5>The EU wants to make all salaries transparent — here are 3 pros and cons</h5>
                        </div>
                        <div className="latest-news-img col-md-3">
                        <img src={image13} />
                        <h6>Elcon</h6>
                        <h5>The EU wants to make all salaries transparent — here are 3 pros and cons</h5>
                        </div>
                        <div className="latest-news-img col-md-3">
                        <img src={image7} />
                        <h6>Elcon</h6>
                        <h5>The EU wants to make all salaries transparent — here are 3 pros and cons</h5>
                        </div>
                        <div className="latest-news-img col-md-3">
                        <img src={image10} />
                        <h6>Elcon</h6>
                        <h5>The EU wants to make all salaries transparent — here are 3 pros and cons</h5>
                        </div>
                    </div>
                </div>
                <div className="latest-news-button">
                    <a href="#">See all Latest news</a>
                </div>
            </div>
        </div>
    </section>
  )
}
