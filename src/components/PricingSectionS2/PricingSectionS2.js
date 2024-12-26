import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

import Shape from '../../images/pric-shape-3.png';
import pricingPlans from '../../api/pricingPlans';

const PricingSectionS2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <SectionTitle 
                            subtitle={'Looking for a trusted transport partner?'} 
                            title={'Discover ByHorse Pricing Plans'} 
                        />
                        <p style={{ textAlign: 'center', margin: '20px 0' }}>
                            At ByHorse, we’re more than a delivery service—we’re your logistics partner, dedicated to 
                            elevating your operations with eco-friendly, scalable, and innovative solutions.
                        </p>
                    </div>
                </div>
                <div className="row">
                    {pricingPlans.slice(0, 3).map((plan, index) => (
                        <div className="col col-lg-4 col-md-6 col-12" key={index}>
                            <div className="pric-card-s2">
                                <div className="title">
                                    <h3>{plan.title}</h3>
                                    <span>Save {plan.parsent}%</span>
                                </div>
                                <div className="mid-title">
                                    <h3>{plan.deliveryMode}</h3>
                                    <h4>{plan.description}</h4>
                                </div>
                                <ul>
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex}>{feature}</li>
                                    ))}
                                </ul>
                                
                                <Link onClick={ClickHandler} to="/contact" className="theme-btn">Get Started</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="shape-rigth">
                <img src={Shape} alt="decorative shape" />
            </div>
        </section>
    );
};

export default PricingSectionS2;
