import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import slider1 from '../../images/image.jpg';
import slider2 from '../../images/slider2.jpg';
import slider3 from '../../images/slider3.jpg';
import slider4 from '../../images/slider4.jpg';
import slider5 from '../../images/slider5.jpg';
import './Slider.css'

export const Slider = () => {
  return (
    <section className='slider-outer'>
      <div className='container-fluid'>
        <div className='row'>
            <div className='slider-left col-md-6'>
                <div className='img-box slider1'>
                    <img src={slider1}  />
                    <div className='slider-content'>
                        <span>ELcon</span>
                        <h2>Title</h2>
                    </div>
                </div>
                <div className='img-box slider2'>
                    <img src={slider2}  />
                    <div className='slider-content'>
                        <span>ELcon</span>
                        <h2>Title</h2>
                    </div>
                </div>
            </div>
            <div className='slider-right col-md-6'>
                <div className='row'>
                    <div className="col-md-6">
                        <div className='img-box slider3'>
                        <img src={slider3}  />
                        <div className='slider-content'>
                            <span>ELcon</span>
                            <h2>Title</h2>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                        <div className='img-box slider4'>
                            <img src={slider4}  />
                            <div className='slider-content'>
                                <span>ELcon</span>
                                <h2>Title</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className='img-box slider5'>
                            <img src={slider5}  />
                            <div className='slider-content'>
                                <span>ELcon</span>
                                <h2>Title</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
