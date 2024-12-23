import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const aboutS2 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-about-section-s2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="about-left">
                            <h3>The early <span>Since 1998</span></h3>
                            <div className="people">
                                <h2><CountUp end={20} enableScrollSpy />k+</h2>
                                <p>Disabilty <br />
                                    People</p>
                            </div>
                            <div className="shape">
                                {/* <img src={Ab21} alt="" /> */}
                            </div>
                            <div className="image">
                                {/* <img src={Ab22} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="about-content">
                            <div className="wpo-section-title">
                                <h2>Trusted transport service</h2>
                                <h3>Transport & Logistics
                                    Services We are the best</h3>
                            </div>
                            <p>Logistika is the world's leading global logistics provider — we expertly facilitate
                                industry and commerce in the international exchange of goods through land transport.
                            </p>
                            <ul>
                                <li>
                                    <i className="flaticon-logistics"></i>
                                    <h3>Domestic and
                                        International Service</h3>
                                </li>
                                <li>
                                    <i className="flaticon-nanotechnology"></i>
                                    <h3>End to End Tracking
                                        Service system</h3>
                                </li>
                            </ul>
                            <ul className="logistics">
                                <li>Dedicated Transport wise</li>
                                <li>Domestics & Logistics</li>
                            </ul>

                            <div className="about-btn">
                                <div className="btn-1">
                                    <Link onClick={ClickHandler} to="/about" className="theme-btn">Explore more about <i
                                        className="ti-angle-right"></i></Link>
                                </div>
                                <div className="author">
                                    <div className="image">
                                        {/* <img src={Ab23} alt="" /> */}
                                    </div>
                                    <div className="text">
                                        {/* <img src={Ab24} alt="" /> */}
                                        <span>Ceo & Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-img">
                {/* <img src={Ab25} alt="" /> */}
            </div>
        </section>
    );
};

export default aboutS2;
