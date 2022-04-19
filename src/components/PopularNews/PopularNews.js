import React from 'react';
import './PopularNews.css'
import popularimg from '../../images/image5.jpg'


export const PopularNews = () => {
  return (
    <section className='popular'>
      <div className='container'>
        <div className='row'>

          <div className=' popular-list-img col-md-3 '>
            <img src={popularimg} alt="popularimg" />
          </div>
          <div className=' popular-list-title col-md-5 '>
            Fitbit’s new heart monitoring algorithm reveals Google’s plan to dethrone the Apple Watch
          </div>

        </div>
        <div className='row'>

          <div className=' popular-list-img col-md-3 '>
            <img src={popularimg} alt="popularimg" />
          </div>
          <div className=' popular-list-title col-md-5 '>
            Fitbit’s new heart monitoring algorithm reveals Google’s plan to dethrone the Apple Watch
          </div>

        </div>
        <div className='row'>

          <div className=' popular-list-img col-md-3 '>
            <img src={popularimg} alt="popularimg" />
          </div>
          <div className=' popular-list-title col-md-5 '>
            Fitbit’s new heart monitoring algorithm reveals Google’s plan to dethrone the Apple Watch
          </div>

        </div>
        <div className='row'>

          <div className=' popular-list-img col-md-3 '>
            <img src={popularimg} alt="popularimg" />
          </div>
          <div className=' popular-list-title col-md-5 '>
            Fitbit’s new heart monitoring algorithm reveals Google’s plan to dethrone the Apple Watch
          </div>

        </div>
        <div className='row'>
          <div className='load-btn col-md-8'>
            <button type="button" class="btn btn-secondary btn-lg btn-block">Load More</button>
          </div>
  </div>

      </div>


    </section>
  )
}
