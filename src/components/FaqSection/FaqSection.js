import React from 'react';
import Accordion from './Accordion';

const FaqSection = (props) => {
    return (
        <section className={"" +props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="faq-left-content">
                            <div className="wpo-section-title">
                                <h2>Trusted transport service</h2>
                                <h3>Transport & Logistics Projects
                                    We are the best</h3>
                                <p>Logistika is the world’s driving worldwide coordinations
                                    supplier — we uphold industry and exchange the</p>
                            </div>
                            <ul className="item">
                                <li>We provide customer support around the clock</li>
                                <li>Coverage protecting goods during transport</li>
                            </ul>
                            <ul className="item-service">
                                <li>
                                    <i className="flaticon-circuit"></i>
                                    <span>Domestic & Service</span>
                                </li>
                                <li>
                                    <i className="flaticon-circuit"></i>
                                    <span>Intermodal Shipping</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <Accordion/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;