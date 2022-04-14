import React from "react";
import './Footer.css';


export const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="left-footer col-md-6" >
                        <h1>HEADLINES</h1>
                        <h5>The heart of tech</h5>
                    </div>
                    <div className="right-footer col-md-6" >
                        <div className="left-col-link">
                            <h4>MORE</h4>
                            <li>
                                <a href="#" alt="media">Media</a>
                                <a href="#" alt="media">Events</a>
                                <a href="#" alt="media">Programs</a>
                                <a href="#" alt="media">Spaces</a>
                                <a href="#" alt="media">Newsletters</a>
                                <a href="#" alt="media">Deals</a>
                            </li>
                        </div>
                        <div className="right-col-link ">
                            <h4>ABOUT </h4>
                            <li>
                                <a href="#" alt="media">Partner with us</a>
                                <a href="#" alt="media">Jobs</a>
                                <a href="#" alt="media">Terms & Conditions</a>
                                <a href="#" alt="media">Cookie Statement</a>
                                <a href="#" alt="media">Privacy Statement</a>
                                <a href="#" alt="media">Editorial Policy</a>

                            </li>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="Copyright">
                        <p>Copyright © 2021—2022, Headlines.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}