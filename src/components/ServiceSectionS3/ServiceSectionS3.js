import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';
import Services from "../../api/Services";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceSectionS3 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const settings = {
        dots: true,
        autoplay: true,
        arrows: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1499,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                }
            }

        ]
    };

    return (
        <div className={"" +props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <SectionTitle subtitle={'Trusted transport service'} title={'Transport & Logistics Services We are the best'} />
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="service-btn">
                            <Link onClick={ClickHandler} to="/services" className="theme-btn">All Services</Link>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-12 col-12">
                       <p> Small businesses, we’re here for you! Business deliveries can be a hassle when done in-house or offline. Boost your growth with Byhorse’s fast, affordable, on-demand delivery solutions.</p>
                    </div>
                </div>

            </div>
            <div className="service-slider-s2">
                <Slider {...settings}>
                    {Services.slice(4, 9).map((service, item) => (
                        <div className="service-card-s2" key={item}>
                            <div className="icon">
                                <img src={service.iconName} alt="" />
                            </div>
                            <div className="content">
                                <h2><Link to={`/service-single/${service.slug}`} onClick={ClickHandler}>{service.title}</Link></h2>
                                <p>Logistika is the world’s driving worldwide coordinations supplier — we uphold
                                    industry and exchange the worldwide trade of .</p>
                                <div className="services-btn">
                                    <Link to={`/service-single/${service.slug}`} onClick={ClickHandler}>See Details </Link>
                                </div>
                            </div>
                            {/* <div className="top-shape">
                                <img src={Shape} alt="" />
                            </div> */}
                            {/* <div className="bottom-shape">
                                <img src={Shape2} alt="" />
                            </div> */}
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ServiceSectionS3;