import React from "react";
import { Link } from 'react-router-dom'
import SectionTitle from "../SectionTitle/SectionTitle";
import Services from "../../api/Services";
import Slider from "react-slick";



const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { SectionTitleShow = true, ServiceAllBtn = true } = props

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
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
        <div className={"" + props.hclass}>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-7 col-12">
                        {SectionTitleShow && (
                            <SectionTitle subtitle={'Trusted transport service'} title={'Transport & Logistics Services'} />
                        )}
                    </div>
                    <div className="col-lg-5 col-12">
                        {ServiceAllBtn && (
                            <div className="service-all-btn">
                                <Link onClick={ClickHandler} to="/services" className="theme-btn">All Services</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0">
                <Slider {...settings} className="service-slider">
                    {Services.slice(0, 5).map((service, item) => (
                        <div className="service-card" key={item}>
                            <img className="image" src={service.image} alt="" />
                            <div className="content">
                                <i className={service.iconName}></i>
                                <div className="text">
                                    <span>{service.id}</span>
                                    <h2><Link to={`/services-single/${service.slug}`} onClick={ClickHandler}>{service.title}</Link></h2>
                                    <p>{service.description}</p>
                                    {/* <Link to={`/services-single/${service.slug}`} onClick={ClickHandler} className="service-single-link">
                                        <i className="flaticon-right-arrow"></i>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </div>

    );
}

export default ServiceSection;



