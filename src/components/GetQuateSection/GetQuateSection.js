import React from 'react';
import { Link } from 'react-router-dom';
import QuoteForm from '../QuoteForm/QuoteForm';
import get3 from '../../images/get3.svg'
import get5 from '../../images/home/Drone.svg'
import get6 from '../../images/home/Van.png'
import get7 from '../../images/home/mjk.png'


const GetQuateSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="left-content">
                            <div className="wpo-section-title">
                                <h2>Trusted transport service</h2>
                                <h3>Explore Our Delivery Models: Find Your Perfect Fit!</h3>
                            </div>
                            <div className="quat">
                                <p>Discover our range of delivery options, each designed to meet your unique needs. Click on the "Request a Quote" button for each model to learn more about its benefits and how it can work for you!</p>
                            </div>
                            <ul className="get-item">
                                <li>
                                    <i className="flaticon-logistics"></i>
                                    <h3>All over india service </h3>
                                </li>
                                <li>
                                    <i className="flaticon-nanotechnology"></i>
                                    <h3>Real-Time Tracking</h3>
                                </li>
                            </ul>
                            <ul className="quate-item">
                                <li>
                                    <i className="flaticon-check"></i>
                                    <h3>Fast Delivery</h3>
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    <h3>Experienced Team</h3>
                                </li>
                            </ul>
                            <Link onClick={ClickHandler} to="/about" className="theme-btn">more about us</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="quote-form">
                            <div className="title">
                                <h3>Request a quote form</h3>
                            </div>
                            <QuoteForm />
                        </div>
                    </div>
                </div>
            </div>
            <div className="left-bg">
                <div className="img1">
                    <img src={get6} alt="" />
                </div>
                <div className="img2">
                    <img src={get5} alt="description" style={{ opacity: 0.2 }} />
                </div>
                <div className="img3">
                    <img src={get3} alt="" />
                </div>
            </div>
            <div className="rigth-bg">
                <img src={get7} alt="" />
            </div>
        </section>
    );
};

export default GetQuateSection;