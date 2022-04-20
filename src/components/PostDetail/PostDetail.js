import React from 'react';
import latestimg from '../../images/latestimg.png'
import ads from '../../images/image.jpg'
import './PostDetail.css';

export const PostDetail = () => {
    return (
        <section className='latest-section'>
            
                <div className='container'>
                    <div className='row'>

                        <div className="latest-news-title col-md-8">
                            <h2>Latest news</h2>

                            <img src={latestimg} alt="imageee" />
                            <div className='news-content'>
                                <h4>ELECTRIC VEHICLES</h4>
                                <h1>What comes first — The EV or the charger? The EU’s charging conundrum</h1>
                            </div>
                        </div>
                        <div className='extra col-md-4'>
                            <h5>Extra, extra!</h5>
                            <p>Subscribe to BIG SPAM, the snarkiest newsletter in tech. Once per week.</p>



                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="you@email.com" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button">OK</button>
                                </div>
                            </div>

                            
                            <div className='fix-menu'>
                            <h5>POPULAR ON TNW TODAY</h5>
                                <ol>
                                    <li>
                                        <h6> <a href='#'>Nope, Elon Musk isn’t joining Twitter’s board — 
                                        and we think we know why</a></h6>
                                    </li>
                                    <li>
                                        <h6> <a href='#'>Why is ‘Other’ in my iPhone storage taking up so much space and how do I clear it?</a></h6>
                                    </li>
                                    <li>
                                        <h6> <a href='#'>The team that built an AI to dominate poker is now picking stocks</a></h6>
                                    </li>
                                    <li>
                                        <h6> <a href='#'>6 big announcements Elon Musk made at Tesla’s Gigafactory opening in Texas</a></h6>
                                    </li>
                                    <li>
                                        <h6> <a href='#'>Your digital footprints could help hackers infiltrate computer networks</a></h6>
                                    </li>
                                    
                                </ol>
                            </div>
                            
                        </div>





                    </div>
                    <div className='row'>

                        <div className='left-btm-new col-md-4'>
                            <img src={ads} alt="imageee" />
                            <div className='left-btm-news-one'>
                                <h6>ELECTRIC VEHICLES</h6>
                                <h6>What comes first — The EV or the charger? The EU’s charging conundrum</h6>

                            </div>
                        </div>
                        <div className='right-btm-new col-md-4'>
                            <img src={ads} alt="imageee" />
                            <div className='left-btm-news-one'>
                                <h6>ELECTRIC VEHICLES</h6>
                                <h6>What comes first — The EV or the charger? The EU’s charging conundrum</h6>

                            </div>
                        </div>
                    </div>

                </div>

            
        </section >
    )
}