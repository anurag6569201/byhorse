import React from 'react';
import { Link } from 'react-router-dom';

const FeaturesSectionS2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={"" + props.hclass}>
            <div className="top-wraper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="wpo-section-title">
                                <h2>Trusted transport service</h2>
                                <h3>Logistics Features We Offer</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="f-btn">
                                <Link onClick={ClickHandler} to="/services" className="theme-btn">All Services</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-wraper">
                <div className="container">
                    <div className="bottom-content">
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <div className="item">
                                    <div className="icon">
                                        <i className="flaticon-distribution-center"></i>
                                    </div>
                                    <div className="content">
                                        <h5>Efficient Storage</h5>
                                        <p> Safe, organized storage with easy inventory management for flexible business solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="item">
                                    <div className="icon">
                                        <i className="flaticon-customer-support-1"></i>
                                    </div>
                                    <div className="content">
                                        <h5>Always Available</h5>
                                        <p>Our 24/7 support team offers quick solutions to keep your deliveries on track, day or night.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="item">
                                    <div className="icon">
                                        <i className="flaticon-delivery-box"></i>
                                    </div>
                                    <div className="content">
                                        <h5>Completely Secure</h5>
                                        <p>We prioritize your goods' safety with advanced security and careful handling from start to finish.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSectionS2;