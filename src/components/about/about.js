import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

// image
import Ab from '../../images/about/5.png'
import Abd1 from '../../images/about/ct.png'
import Abd2 from '../../images/about/2.png'
import Abd3 from '../../images/about/3.png'
import Abd4 from '../../images/about/4.png'
import Abd5 from '../../images/about/shape.png'

const about = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={"" + props.hclass}>
            <div className="shape">
                <img src={Ab} alt="" />
            </div>
            <div className="side-img">
                <img src={Abd1} alt="" />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="about-left">
                            <div className="image-1">
                                <img src={Abd2} alt="" />
                            </div>
                            <div className="image-2">
                                <img src={Abd3} alt="" />
                            </div>
                            <div className="image-3">
                                <img src={Abd4} alt="" />
                            </div>
                            <div className="image-4">
                                <img src={Abd5} alt="" />
                            </div>

                            {/* <div className="since">
                                <div>
                                    <h2> <CountUp end={1999} enableScrollSpy>00</CountUp></h2>
                                    <p>Since</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="about-content">
                            <div className="title" >
                                <h2>Trusted transport service </h2>
                                <h3>Looking for a trusted transport partner?</h3>
                            </div>
                            <div className="sub-content">
                                <span>At ByHorse, we’re more than a delivery service—we’re a trusted partner dedicated to elevating your logistics operations. Explore our benefits and discover why leading companies across Goa and beyond rely on ByHorse.
                                Why Choose ByHorse?
                                  </span>
                            </div>
                            {/* <h4>Reliable transport service
                                Top-quality transport & logistics services</h4> */}
                            <ul>
                                <li> <strong> Innovative & Eco-Friendly Fleet </strong>
                                Our fleet includes EV bikes, tempos, and cutting-edge drones, reducing carbon footprints and ensuring sustainability in every delivery.</li>
                               
                                <li> <strong> Comprehensive Delivery Models</strong>
                                From instant EV bike deliveries to flexible tempo rentals, and nationwide movers and packers, we cover all logistics needs—B2B, B2C, and D2C.</li>
                                
                                <li> <strong>Warehousing & 3PL Logistics</strong>
                                ByHorse provides reliable warehousing and 3PL services to manage inventory, streamline distribution, and offer end-to-end logistics solutions for businesses of all sizes.
                                </li>

                                <li> <strong>Seamless Technology Integration</strong>
                                Our platform offers real-time tracking, easy booking, and billing integration, simplifying your delivery experience and enabling full control over logistics management.
                                </li>

                                <li> <strong>Scalable Solutions for All Business Sizes</strong>
                                Whether you need monthly tempo contracts, adhoc rental services, or all-India parcel delivery, our solutions adapt to your volume and frequency requirements.
                                </li>

                                <li> <strong>Expertise in Last-Mile Delivery</strong>
                                Trusted by industry leaders, our proven logistics team ensures smooth and timely deliveries for food, groceries, parcels, and urgent items.
                                </li>

                                <li> <strong>On-Demand Flexibility</strong>
                                No long-term commitments needed; access pick-and-drop services on demand or partner with us for continuous, reliable support across Goa.
                                </li>

                                <li> <strong>Dedicated to Your Success</strong>
                                ByHorse is built on customer satisfaction, offering secure handling, competitive pricing, and seamless integration into your supply chain.

                                </li>

                            </ul>

                            <div className="author-btn">

                                <div style={{marginTop:'100px'}}>

                                </div>
                                {/* <div className="author">
                                    <div className="image">
                                        <img src={Abd6} alt="" />
                                    </div>
                                    <div className="text">
                                        <img src={Abd7} alt="" />
                                        <span>Ceo & Founder</span>
                                    </div>
                                </div> */}
                                {/* <div className="about-btn">
                                    <Link onClick={ClickHandler} to="/about" className="theme-btn">
                                        more about us
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default about;

